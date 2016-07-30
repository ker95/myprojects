
//定义主角
function Hero(x,y,w,h,imageURL,completeCallback){
	this.x = x;
	this.y = y;
	this.w = w;
	this.h = h;

	var image = new Image();

	var _this = this;
	image.onload = function(){
		_this.image = image;
		if(completeCallback){//如果设置了回调函数，执行回调函数
			completeCallback(_this.image);
		}
	}
	image.src = imageURL;

	this.bool = true;//用来切换飞机飞行的2张图片
}

//绘制主角的方法，交替换图片
Hero.prototype.draw = function(canvas){

	var context = canvas.getContext("2d");
	var x = this.bool * this.w;
	var y = this.y;
	var w = this.w;
	var h = this.h;

	context.drawImage(this.image, x, 0, w, h, this.x, y, w, h);
	this.bool = !this.bool;
}

/*
	创建主角的函数，返回创建好的主角。
	w：主角的宽度
	h：主角的高度
	canvas：主角所在的canvas
	imageURL：主角使用的图片
	completeCallback：图片加载完之后的回调方法
*/
function createHero(w,h,canvas,imageURL,completeCallback){
	var context = canvas.getContext("2d");

	var canvasWith = canvas.width;
	var canvasHeight = canvas.height;

	//让飞机靠下居中
	var x = canvasWith / 2 - w / 2;
	var y = canvasHeight - h - 20;//底部靠上20

	var hero = new Hero(x, y, w, h, imageURL,completeCallback);

	//给主角所在的canvas添加鼠标事件，实现主角移动
	canvas.onmousedown = function(e){
		var ev = e || window.event;

		var clientX = ev.clientX - canvas.offsetLeft;
		var clientY = ev.clientY - canvas.offsetTop;
		if(isPointInObject({"x":clientX,"y":clientY}, hero)){
			console.log("点中了");
			var dx = clientX - hero.x;
			var dy = clientY - hero.y;

			canvas.onmousemove = function(e2){
				var ev2 = e2 || window.event;

				var clientX2 = ev2.clientX - canvas.offsetLeft;
				var clientY2 = ev2.clientY - canvas.offsetTop;
				hero.x = clientX2 - dx;
				hero.y = clientY2 - dy;
			}
			canvas.onmouseup = function(){
				canvas.onmousemove = null;
			}
		}
	}

	return hero;
}

/*
	判断一个点在不在一个对象里面。
	point：需要包含x和y属性
	obj：需要包含x,y,w,h属性
	返回值是 true和false
*/
function isPointInObject(point,obj){
	var minX = obj.x;
	var maxX = obj.x + obj.w;
	var minY = obj.y;
	var maxY = obj.y + obj.h;

	if(point.x > minX && point.x < maxX && point.y > minY && point.y < maxY){
		return true;
	}else{
		return false;
	}
}


//定义子弹
function Bullet(x,y,w,h,imageURL,v){
	this.x = x;
	this.y = y;
	this.w = w;
	this.h = h;
	var image = new Image();
	image.src = imageURL;
	this.v = v;
	this.image = image;
}

Bullet.prototype.draw = function(canvas){
	var context = canvas.getContext("2d");
	context.drawImage(this.image,this.x,this.y,this.w,this.h);
}

Bullet.prototype.move = function(){
	this.y -= this.v;
}

Bullet.prototype.isOutScreen = function(){
	if(this.y <= -this.h){
		return true;
	}else{
		return false;
	}
}

function createBullet(hero,w,h,imageURL,v){

	var x = hero.w/2 - w/2 + hero.x;
	var y = hero.y  - h;
	var bullet = new Bullet(x,y,w,h,imageURL,v);
	var bSound = new Audio("audio/bullet.mp3");
	bSound.play();
	return bullet;
}

