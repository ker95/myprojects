// 导航
$(document).ready(function(){
	var obj=true;
	$("#logo_btn").on("click",function(){
		// $("#logo_none").slideToggle();
		if (obj) {
			$("#logo_none").show(500);
			obj=false;
		}else{
			$("#logo_none").hide(500);
			obj=true;
		}
		
	})
})
// 轮播setInterval
var inputs=document.querySelectorAll("#lbt_btn li");
var box=document.querySelector("#lbt_box");
var wrap=document.querySelector("#lbt_wrpa");
var imgs=wrap.getElementsByTagName('li');
var spesa=0;
img_lb();//循环一次;
function img_lb(){
	for (var i = 0; i < imgs.length; i++) {
		imgs[i].style.opacity=0;
		inputs[i].className="";
	}
	imgs[spesa].style.opacity=1;
	inputs[spesa].className="dianbj";
}
function oimg(){
	spesa++;
	if (spesa>=imgs.length) {
		spesa=0;
	}
	img_lb();
}
var timer=setInterval(oimg,3000);
box.onmouseenter=function () {
		clearInterval(timer);
	}
box.onmouseleave=function () {
	timer=setInterval(oimg,3000);	
}
for (var i = 0; i < inputs.length; i++) {
	inputs[i].index=i;
	inputs[i].onclick=function(){
		spesa=this.index;
		img_lb();
	}
}








