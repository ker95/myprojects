var express = require('express');
var url = require('url');

var app = express();

app.set('views','./view');
app.set('view engine','jade');
app.use(express.static(__dirname + '/view'));

app.get('/',function (req,res) {
	res.render('main',{
		title:'主页'
	})
})
app.get('/index',function (req,res) {
	res.render('main',{
		title:'主页'
	})
})
app.get('/shop',function(req,res){
	res.render('store',{
		title:'商店'
	})
})
app.get('/park',function(req,res){
	res.render('park',{
		title:'乐园'
	})
})
app.get('/movie',function(req,res){
	res.render('movie',{
		title:'影视'
	})
})
app.get('/vip',function(req,res){
	res.render('vip',{
		title:'会员'
	})
})
// 主页跳转66666

app.get('/mic',function(req,res){
	res.render('mic',{
		title:'米奇和他的朋友们'
	})
})
app.get('/dr',function(req,res){
	res.render('dr',{
		title:'迪士尼公主'
	})
})
app.get('/car',function(req,res){
	res.render('car',{
		title:'赛车总动员'
	})
})
app.get('/sf',function(req,res){
	res.render('sf',{
		title:'小公主苏菲亚'
	})
})
app.get('/ice',function(req,res){
	res.render('ice',{
		title:'冰雪奇缘'
	})
})
app.get('/war',function(req,res){
	res.render('war',{
		title:'星球大战'
	})
})

// reg
app.get('/reg',function(req,res){
	res.render('reg',{
		title:'注册'
	})
})
app.get('/resetPass',function(req,res){
	res.render('resetPass',{
		title:'找回密码'
	})
})




app.listen(3000);
console.log("配置成功");