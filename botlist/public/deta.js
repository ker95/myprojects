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