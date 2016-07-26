var gulp = require('gulp');
var jade = require('gulp-jade');
var less = require('gulp-less');
var concat = require('gulp-concat');

gulp.task('default',['jade','userinfo_css'],function () {
	console.log('任务完成！！！');
})
gulp.task('concat_css',function () {
	 return gulp.src('desk/css/*.css')
	 			.pipe(concat('style.css'))
	 			.pipe(gulp.dest('desk/css/'))
})
gulp.task('jade',function () {
	 return gulp.src('view/index.jade')
	 			.pipe(jade())
	 			.pipe(gulp.dest('desk/'))
})
gulp.task('header_css',function () {
	 return gulp.src('view/less/header.less')
	 			.pipe(less())
	 			.pipe(gulp.dest('desk/css/'))
})

gulp.task('footer_css',function () {
	 return gulp.src('view/less/footer.less')
	 			.pipe(less())
	 			.pipe(gulp.dest('desk/css/'))
})

gulp.task('userinfo_css',function () {
	 return gulp.src('view/less/userinfo.less')
	 			.pipe(less())
	 			.pipe(gulp.dest('desk/css/'))
})

gulp.task('store',function () {
	 return gulp.src('view/less/store.less')
	 			.pipe(less())
	 			.pipe(gulp.dest('desk/css/'))
})

gulp.task('park',function () {
	 return gulp.src('view/less/park.less')
	 			.pipe(less())
	 			.pipe(gulp.dest('desk/css/'))
})