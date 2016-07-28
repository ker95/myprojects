$(function(){
	function scroll(){
		var theul = $(".left>div>ul");
		var ulli = theul.find("li:first");
		var liwid = ulli.width();
		ulli.animate({
			"margin-left": -liwid + "px"
		},300,function(){
			ulli.css("margin-left",0).appendTo(theul);
		});
	}
	setInterval(function(){
		scroll();
	},10000);
	
	$(window).on("load",function(){
		waterfall();
	});
	
	function waterfall(){
		var box = $(".pic-con>span");
		var spwid = box.outerWidth();
		var cols = Math.floor($(".pic-con").width()/spwid);
		var harr = [];
		box.each(function(index,value){
			var hei = box.eq(index).outerHeight();
			if (index < cols) {
				harr[index] = hei;
			} else{
				var minh = Math.min.apply(null, harr);
				var minhindex = $.inArray(minh, harr);
				$(value).css({
					"position": "absolute",
					"top": minh + "px",
					"left": minhindex*spwid + "px"
				})
				harr[minhindex] += box.eq(index).outerHeight();
			}
		});
		var max = box.last().outerHeight() + parseInt(box.last().css("top"));
		$(".pic-con").height(max);
	}
	
	
});
