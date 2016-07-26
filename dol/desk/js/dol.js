window.onload=function () {
	var slide=document.querySelector('.slide_box');
	var slide_box=slide.getElementsByTagName('ul')[0];
	slide_box.innerHTML+=slide_box.innerHTML;
	var slide_img=slide.getElementsByClassName('top_pic');
	var slide_point=document.querySelectorAll('.slide_point span');
	slide_box.style.width=slide_img.length*slide_img[0].offsetWidth+'px';
	var count=-1;
	function slide_move () {
		for (var i = 0; i < slide_point.length; i++) {
			slide_point[i].className="";
		}
		slide_point[count].className="active";
		var t=0;
		var b=slide_box.offsetLeft;
		var c=-(count+1)*slide_img[0].offsetWidth-b;
		var d=100;
		function run () {
			slide_box.style.left=Tween.Quad.easeOut(t,b,c,d)+"px";
			if (t<d) {
				t++;
				setTimeout(run,10);
			}
		}
		run();
	}
	function auto_play () {
		count++;
		if (count>=slide_img.length/2) {
			count=0;
			slide_box.style.left=0;
		}
		slide_move();
	}
	auto_play();
	setInterval(auto_play,3000);


}