$(function(){
	$("#up").click(function() {
		$("html,body").animate({
			scrollTop: $(".logo").offset().top
		}, 600);
	});
	var top = $(".logo").height();
	$(window).scroll(function() {
		if ($(window).scrollTop() > top) {
			$("#up").css("opacity", "1");
			$(".nav").addClass("scroll1");
			$(".logo").addClass("scroll2");
		} else {
			$("#up").css("opacity", "0");
			$(".nav").removeClass("scroll1");
			$(".logo").removeClass("scroll2");
		}
	});
	$("#container .left>ul>li:first").addClass("on");
	$("#container .left>ul>li").on("click",function(){
		$(this).addClass("on").siblings().removeClass("on");
	});

	var today = new Date();
	var b = today.getDay();
	$(".gengxin .date li").eq(b).addClass("day").siblings().removeClass("day");
	$(".gengxin .donghua li").eq(b).addClass("show").siblings().removeClass("show");
	
	$(".gengxin .date li").hover(function(){
		var a = $(this).index();
		$(this).addClass("day").siblings().removeClass("day");
		$(".gengxin .donghua li").eq(a).addClass("show").siblings().removeClass("show");
	});
	$(".paihang .type li").hover(function(){
		var i = $(this).index();
		$(this).addClass("type-s").siblings().removeClass("type-s");
		$(".paihang .donghua li").eq(i).addClass("show").siblings().removeClass("show");
	});
});