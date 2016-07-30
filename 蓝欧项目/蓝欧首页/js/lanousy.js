//切换城市
var divs=document.querySelector("#logo_menu");
var als=document.querySelector("#logo_menu .logo_none-a");
var alimg=als.getElementsByTagName("img");
var uls=document.querySelector("#logo_none-ul");
var timer=null;
	als.onmouseenter=uls.onmouseenter=function () {
		clearInterval(timer);
		uls.style.display="block";
		alimg[0].style.display="none";
		alimg[1].style.display="block";
	}
	als.onmouseleave=uls.onmouseleave=function () {
		clearInterval(timer);
		timer = setTimeout(function() {
		uls.style.display="none";
		alimg[1].style.display="none";
		alimg[0].style.display="block";
	}, 200)
	}
//轮播
var mySwiper = new Swiper('.swiper-container',{
	pagination: '.swiper-pagination',
	autoplay : 5000,
	loop : true,
	speed:600,
	initialSlide :0,
	direction : 'horizontal',
	effect : 'fade',
})
//contenr 内容选项卡
var divXXK=document.getElementById("content_lunbo_ul1_none1");
var ulXXK=divXXK.getElementsByTagName("ul");
var divX1=document.getElementById("content_logo");
var liX1=divX1.getElementsByTagName("li");
	liX1[2].onmouseenter=ulXXK[0].onmouseenter=function () {
		clearInterval(timer);
		divXXK.style.display="block";
		ulXXK[0].style.display="block";
		ulXXK[1].style.display="none";ulXXK[2].style.display="none";ulXXK[3].style.display="none";
	}	
	liX1[2].onmouseleave=ulXXK[0].onmouseleave=function () {
		clearInterval(timer);
		timer = setTimeout(function() {
		divXXK.style.display="none";
		ulXXK[0].style.display="none";ulXXK[1].style.display="none";ulXXK[2].style.display="none";ulXXK[3].style.display="none";
	}, 100)
	}
	liX1[3].onmouseenter=ulXXK[1].onmouseenter=function () {
		clearInterval(timer);
		divXXK.style.display="block";
		ulXXK[1].style.display="block";
		ulXXK[0].style.display="none";ulXXK[2].style.display="none";ulXXK[3].style.display="none";
	}	
	liX1[3].onmouseleave=ulXXK[1].onmouseleave=function () {
		clearInterval(timer);
		timer = setTimeout(function() {
		divXXK.style.display="none";
		ulXXK[0].style.display="none";ulXXK[1].style.display="none";ulXXK[2].style.display="none";ulXXK[3].style.display="none";
	}, 100)
	}
	liX1[5].onmouseenter=ulXXK[2].onmouseenter=function () {
		clearInterval(timer);
		divXXK.style.display="block";
		ulXXK[2].style.display="block";
		ulXXK[0].style.display="none";ulXXK[1].style.display="none";ulXXK[3].style.display="none";
	}	
	liX1[5].onmouseleave=ulXXK[2].onmouseleave=function () {
		clearInterval(timer);
		timer = setTimeout(function() {
		divXXK.style.display="none";
		ulXXK[0].style.display="none";ulXXK[1].style.display="none";ulXXK[2].style.display="none";ulXXK[3].style.display="none";
	}, 100)
	}
	liX1[6].onmouseenter=ulXXK[3].onmouseenter=function () {
		clearInterval(timer);
		divXXK.style.display="block";
		ulXXK[3].style.display="block";
		ulXXK[0].style.display="none";ulXXK[1].style.display="none";ulXXK[2].style.display="none";
	}	
	liX1[6].onmouseleave=ulXXK[3].onmouseleave=function () {
		clearInterval(timer);
		timer = setTimeout(function() {
		divXXK.style.display="none";
		ulXXK[0].style.display="none";ulXXK[1].style.display="none";ulXXK[2].style.display="none";ulXXK[3].style.display="none";
	}, 100)
	}
//师资阵容 轮播图
var szDiv=document.querySelector("#content_kbxx_conter");
var wrpa=document.querySelector("#content_kbxx_conter .content_kbxx_conter_box")
var szimg=document.querySelectorAll("#content_kbxx_conter .content_kbxx_conter_img");
var szBox=document.querySelector("#content_kbxx_conter .input_box");
var szLan=document.querySelectorAll("#content_kbxx_conter .input_box li");
var szInput=document.querySelectorAll("#content_kbxx_conter .input_box span");
wrpa.style.width= szimg.length*szDiv.offsetWidth +"px";
var szindex=0;
var sztimer=null;
		szInput[1].onclick=function(){
			clearTimeout();
			nextFn();	
		}
		function nextFn(){
			szindex++;
			if (szindex>szimg.length-1) {
				szindex=0;
			}
			wrpa.style.left=-szindex*szDiv.offsetWidth+"px";
			for (var i = 0; i < szLan.length; i++) {
				szLan[i].style.border="6px solid transparent";
			}
			szLan[szindex].style.border="6px solid #007AFF";
		}			
		function calearTimer(){
			clearInterval(sztimer);
			sztimer=setInterval(function(){
				nextFn();
			},3000);
		}
		calearTimer();
		szInput[0].onclick=function(){
			prevFn();
		}		
		function prevFn(){
		szindex--;
		if (szindex<0) {
			szindex=szimg.length-1;
		}
		wrpa.style.left= -szindex*szDiv.offsetWidth +"px";
		for (var i = 0; i < szLan.length; i++) {
			szLan[i].style.border="6px solid transparent";
		}
			szLan[szindex].style.border="6px solid #007AFF";
	}
	for (var i = 0; i < szLan.length; i++) {
		szLan[i].szindex=i;
		szLan[i].onclick=function(){
			szindex=this.szindex;
			wrpa.style.left= -this.szindex*szDiv.offsetWidth +"px";
			calearTimer();
			for (var i = 0; i < szLan.length; i++) {
				szLan[i].style.border="6px solid transparent";
			}
			szLan[szindex].style.border="6px solid #007AFF";
		}		
	}
	szDiv.onmouseenter=function(){
		clearInterval(sztimer);
	}
	szDiv.onmouseleave=function(){
		calearTimer();
	}
//学生作品
var xyDiv=document.querySelector("#content_xyzp_lbt");
var xywrpa=document.querySelector("#content_xyzp_lbt .content_xyzp_wrap")
var xyimg=document.querySelectorAll("#content_xyzp_lbt .content_xyzp_wrap img");
var xyLan=document.querySelectorAll("#content_xyzp_lbt ul li");
var xyInput=document.querySelectorAll("#content_xyzp_lbt span");
xywrpa.style.width= xyimg.length*xyDiv.offsetWidth +"px";
var xyindex=0;
var xytimer=null;
		xyInput[1].onclick=function(){
			clearTimeout();
			xynextFn();	
		}
		function xynextFn(){
			xyindex++;
			if (xyindex>xyimg.length-1) {
				xyindex=0;
			}
			xywrpa.style.left=-xyindex*xyDiv.offsetWidth+"px";
			for (var i = 0; i < xyLan.length; i++) {
				xyLan[i].className="";
			}
			xyLan[xyindex].className="xyzp_anniu";
		}			
		function xycalearTimer(){
			clearInterval(xytimer);
			xytimer=setInterval(function(){
				xynextFn();
			},4000);
		}
		xycalearTimer();
		xyInput[0].onclick=function(){
			xyprevFn();
		}		
		function xyprevFn(){
		xyindex--;
		if (xyindex<0) {
			xyindex=xyimg.length-1;
		}
		xywrpa.style.left= -xyindex*xyDiv.offsetWidth +"px";
		for (var i = 0; i < xyLan.length; i++) {
			xyLan[i].className="";
		}
			xyLan[xyindex].className="xyzp_anniu";
	}
	for (var i = 0; i < xyLan.length; i++) {
		xyLan[i].szindex=i;
		xyLan[i].onclick=function(){
			xyindex=this.xyindex;
			xywrpa.style.left= -this.xyindex*xyDiv.offsetWidth +"px";
			xycalearTimer();
			for (var i = 0; i < xyLan.length; i++) {
				xyLan[i].className="";
			}
			xyLan[xyindex].className="xyzp_anniu";
		}		
	}
	xyDiv.onmouseenter=function(){
		clearInterval(xytimer);
	}
	xyDiv.onmouseleave=function(){
		xycalearTimer();
	}
//就业信息——无缝滚动
var jywrap=document.querySelector("#c_left_jyxx_wfgd_box .c_left_jyxx_wfgd");
var jydivs=jywrap.getElementsByTagName("div");
var speed=-0.8;
jywrap.innerHTML+=jywrap.innerHTML;
jywrap.style.height=jydivs.length*jydivs[0].offsetHeight+"px";
	function jymove(){
		if (jywrap.offsetTop<=-jywrap.offsetHeight/2) {
			jywrap.style.top=0;
		} else if (jywrap.offsetTop>=0){
			jywrap.style=-jywrap.offsetHeight/2+"px";
		}
		jywrap.style.top=jywrap.offsetTop+speed+"px";
	}
	var jytimer=setInterval(function  () {
		jymove();
	}, 30)
	jywrap.onmouseenter=function(){
		clearInterval(jytimer)
	}

	jywrap.onmouseleave=function(){
		jytimer=setInterval(function(){
			 jymove();
		}, 30)
	}
//就业感言——轮播
var gybox=document.querySelector("#c_right_jyxx_lb_box");
var gywrap=document.querySelector("#c_right_jyxx_lb_box .c_right_jyxx_lb_wrap");
var gydivs=document.querySelectorAll("#c_right_jyxx_lb_box .c_right_jyxx_lb_wrap .c_right_jyxx_lb_imgs1");
var gyanniu=document.querySelector("#c_right_jyxx_lb_anniu");
var gyLR=document.querySelectorAll("#c_right_jyxx_lb_anniu span");
var gyLi=document.querySelectorAll("#c_right_jyxx_lb_anniu li");
gywrap.style.width=gydivs.length*gybox.offsetWidth+"px";
var gyindex=0;
var gytimer=null;
	gyLR[1].onclick=function () {
		clearTimeout();
		gynextFn();
	}
	function gynextFn() {
		gyindex++;
		if (gyindex>gydivs.length-1) {
			gyindex=0;
		}
		gywrap.style.left=-gyindex*gybox.offsetWidth+"px";
		for (var i = 0; i < gyLi.length; i++) {
			gyLi[i].style.backgroundPosition="-36px 0";
		}
			gyLi[gyindex].style.backgroundPosition="-18px 0";
		}			
		function gycalearTimer(){
			clearInterval(gytimer);
			gytimer=setInterval(function(){
				gynextFn();
			},4000);
		}
		gycalearTimer();
		gyLR[0].onclick=function(){
			gyprevFn();
		}	
		function gyprevFn(){
		gyindex--;
		if (gyindex<0) {
			gyindex=gydivs.length-1;
		}
		gywrap.style.left= -gyindex*gybox.offsetWidth +"px";
		for (var i = 0; i < gyLi.length; i++) {
			gyLi[i].style.backgroundPosition="-36px 0";
		}
			gyLi[gyindex].style.backgroundPosition="-18px 0";
	}
	for (var i = 0; i < gyLi.length; i++) {
		gyLi[i].gyindex=i;
		gyLi[i].onclick=function(){
			gyindex=this.gyindex;
			gywrap.style.left= -this.gyindex*gybox.offsetWidth +"px";
			gycalearTimer();
			for (var i = 0; i < gyLi.length; i++) {
				gyLi[i].style.backgroundPosition="-36px 0";
			}
			gyLi[gyindex].style.backgroundPosition="-18px 0";
		}		
	}
	gywrap.onmouseenter=function(){
		clearInterval(gytimer);
	}
	gywrap.onmouseleave=function(){
		gycalearTimer();
	}
//课程直播选项卡
var kcbox=document.querySelector("#content_kczb_conten");
var kcdivsA=document.querySelectorAll("#content_kczb_conten ul");
var kcLi=document.querySelectorAll("#content_kczb_conten_xxk li");
	for (var i = 0; i < kcLi.length; i++) {
					kcLi[i].inin=i;
					kcLi[i].onclick=function(){
						for (var i = 0; i < kcLi.length; i++) {
							kcLi[i].className="";
							kcdivsA[i].className="";
						}
						this.className="content_kczb_lis";
						kcdivsA[this.inin].className="content_kczb_divs";
					}
				}
//校园环境——无缝轮播

var hjwrap=document.querySelector("#content_xyhj_wflb_box .content_xyhj_wflb_wrap")
hjwrap.innerHTML+=hjwrap.innerHTML;
var hjimgs=document.querySelectorAll("#content_xyhj_wflb_box .content_xyhj_wflb_wrap div");
var hjleft=document.getElementById("xyhj_left");
var hjright=document.getElementById("xyhj_right");
var speeds=-0.8;
hjwrap.style.width=hjimgs.length*hjimgs[0].offsetWidth+"px";
	function hjmove() {
		if (hjwrap.offsetLeft<=-hjwrap.offsetWidth/2) {

			hjwrap.style.left=0;

		}else if (hjwrap.offsetLeft>=0) {
			hjwrap.style.left=-hjwrap.offsetWidth/2+"px";
		}

		hjwrap.style.left=hjwrap.offsetLeft +speeds+"px";

	}

	var hjtimer=setInterval(function(){
		 hjmove();
	}, 30)
	hjleft.onclick=function () {
		speeds=-0.8;
	}
	hjright.onclick=function () {
		speeds=0.8;
	}
	hjwrap.onmouseenter=function(){
		clearInterval(hjtimer)
	}

	hjwrap.onmouseleave=function(){
		hjtimer=setInterval(function(){
			 hjmove();
		}, 30)
	}











