var gulp = require("gulp");
// var concat = require("gulp-concat");
// var jsmin = require("gulp-jsmin");
// var cssmin = require("gulp-cssmin");
var less = require("gulp-less");
var jade = require("gulp-jade");
// gulp.task("default",function () {
// 	return gulp.src("newJS/*.js")
// 	.pipe(concat("new.js"))
// 	.pipe(jsmin())
// 	.pipe(gulp.dest("js/"));
// });
// gulp.task("cssmin",function(){
// 	return gulp.src("css/index.css")
// 	.pipe(cssmin())
// 	.pipe(gulp.dest("css/"));
// })
gulp.task("default",["jade","less"],function(){
	
})
gulp.task("less",function(){
	return gulp.src("view/iner.less")
	.pipe(less("iner.css"))
	.pipe(gulp.dest("public/"));
})
gulp.task("jade",function(){
	return gulp.src("view/index.jade")
	.pipe(jade())
	.pipe(gulp.dest("public/"));
})