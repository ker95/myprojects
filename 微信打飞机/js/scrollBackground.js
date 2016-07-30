/*
	通过canvasID获得对应的canvas
	返回值是一个canvas对象
*/
function getCanvasByID(canvasID){
	return document.getElementById(canvasID);
}

/*
	通过canvasID返回这个canvas对应的context
*/
function getContextByCanvasID(canvasID){
	var canvas = getCanvasByID(canvasID);
	return canvas.getContext("2d");
}


/*
	加载背景的函数：
	bgURL:是背景图片的url
	canvasID: 背景图片对应的canvas对象的ID
	scrollDirection:
		37表示背景向左滚动，
		38表示背景向上滚动，
		39表示背景向右滚动，
		40表示背景向下滚动
	completeCallBack 背景加载完毕之后的回调函数
*/
function loadBackground(bgURL,canvas,scrollDirection,completeCallback){
	var context = canvas.getContext("2d");
	var width = canvas.width;
	var height = canvas.height;

	//创建一个image对象
	var image = new Image();
	image.onload = function(){
		//先绘制第一张背景图
		context.drawImage(image, 0, 0, width, height);
		//根据滚动方向，绘制第二张背景图
		switch(scrollDirection){
			case 37:{//向左滚动，第二张绘制在右边
				context.drawImage(image, width, 0, width, height);
				break;
			}
			case 38:{//向上滚动，第二张绘制在下边
				context.drawImage(image, 0, height, width, height);
				break;
			}
			case 39:{//向右滚动，第二张绘制在左边
				context.drawImage(image, -width, 0, width, height);
				break;
			}
			case 40:{//向下滚动，第二张绘制在上边
				context.drawImage(image, 0, -height, width, height);
				break;
			}
		}
		if(completeCallback){//如果提供了回调函数
				completeCallback(image);
		}
	}
	image.src = bgURL;
}

var backGroundOffset = 0;//用于表示背景滚动的偏移量
/*
	背景函数
	canvas: 背景图片对应的canvas对象
	image:背景图片对象
	scrollDirection:
		37表示背景向左滚动，
		38表示背景向上滚动，
		39表示背景向右滚动，
		40表示背景向下滚动
	v 移动的速度

*/


function drawBackground(canvas,image,scrollDirection,v){
	var context = canvas.getContext("2d");
	var width = canvas.width;
	var height = canvas.height;

	context.save();
	switch(scrollDirection){
			case 37:{//向左滚动
				backGroundOffset -= v;
				if(backGroundOffset <= -width){
					backGroundOffset = 0;
				}
				context.translate(backGroundOffset,0);
				context.drawImage(image, 0, 0, width, height);
				context.drawImage(image, width, 0, width, height);
				break;
			}
			case 38:{//向上滚动
				backGroundOffset -= v;
				if(backGroundOffset <= -height){
					backGroundOffset = 0;
				}
				context.translate(0,backGroundOffset);
				context.drawImage(image, 0, 0, width, height);
				context.drawImage(image, 0, height, width, height);
				break;
			}
			case 39:{//向右滚动
				backGroundOffset += v;
				if(backGroundOffset >= width){
					backGroundOffset = 0;
				}
				context.translate(backGroundOffset,0);
				context.drawImage(image, 0, 0, width, height);
				context.drawImage(image, -width, 0, width, height);
				break;
			}
			case 40:{//向下滚动
				backGroundOffset += v;
				if(backGroundOffset >= height){
					backGroundOffset = 0;
				}
				context.translate(0,backGroundOffset);
				context.drawImage(image, 0, 0, width, height);
				context.drawImage(image, 0, -height, width, height);
				break;
			}
		}
		context.restore();
}











