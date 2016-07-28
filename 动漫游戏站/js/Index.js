$(function() {
	$("#label li").each(function(index) {
		var timeout;
		var lable = $(this);
		lable.mouseover(function() {
			timeout = setTimeout(function(){
				$(".banner").removeClass("banner-show").eq(index).addClass("banner-show");
				$(".bg-img").removeClass("bg-show").eq(index).addClass("bg-show");
				$("#label .show").removeClass("show");
				lable.addClass("show");
			},200);
		}).mouseout(function(){
			clearTimeout(timeout);
		});
	});
	$("#tools-con a").hover(function(){
		$(this).addClass("focus");
	},function(){
		$(this).removeClass("focus");
	});
	$("#download-con a").hover(function(){
		$(this).addClass("focus");
	},function(){
		$(this).removeClass("focus");
	});
});
