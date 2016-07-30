// 未获取宝箱动画;
var jdiv=document.querySelector("#c_center_ol");
var jimgs=jdiv.getElementsByTagName('img');
for (var i = 0; i < jimgs.length; i++) {	
	jimgs[i].boj=1;
	touch.on(jimgs[i], 'touchstart', function(ev){	
		if (this.boj) {
			this.src=this.src.replace("png","gif");
	    	 this.boj=0;
		}else{
			this.src=this.src.replace("gif","png");
	    	this.boj=1;
		}    	    	 
	});
}

