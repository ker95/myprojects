var url = (window.location.pathname == "/") ? "index" : window.location.pathname;
console.log(url);
var a = document.querySelectorAll(".header .nav a");
var span = document.querySelectorAll(".header .nav a span");

for (var i = 0; i < a.length; i++) {
	if (a[i].href.indexOf(url) != -1) {
		a[i].className = "header_font_active";
		span[i].className = "nav_"+(i+1);
	}
}