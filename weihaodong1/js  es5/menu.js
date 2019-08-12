'use strict';

// 选项卡
var daUL = document.getElementById('daUL');
var small = daUL.getElementsByTagName('li');
console.log(small);
var divCont = document.getElementById('nod');
var divSmall = divCont.getElementsByClassName('grain-r-b');

var _loop = function _loop(i) {
	small[i].index = i;
	small[i].onmouseenter = function () {
		for (var j = 0; j < small.length; j++) {
			small[j].className = '';
			divSmall[j].style.display = 'none';
		}
		divSmall[i].style.display = 'block';
	};
};

for (var i = 0; i < small.length; i++) {
	_loop(i);
}

var smallUrl = document.getElementById('smallUrl');
var roou = smallUrl.getElementsByTagName('li');
console.log(roou);
var divRoou = document.getElementById('node');
var divS = divRoou.getElementsByClassName('frozen-r-b');

var _loop2 = function _loop2(i) {
	roou[i].index = i;
	roou[i].onmouseenter = function () {
		for (var j = 0; j < roou.length; j++) {
			roou[j].className = '';
			divS[j].style.display = 'none';
		}
		divS[i].style.display = 'block';
	};
};

for (var i = 0; i < roou.length; i++) {
	_loop2(i);
}

// 登录注册
var msg = localStorage.getItem("loginUser");
if (msg) {
	$(".p1").hide();
	$(".p2").show();
	$(".p2").find("span").html(JSON.parse(msg).user);
} else {
	$(".p1").show();
	$(".p2").hide();
}

// 点击退出时,修改登录状态
$(".p2").find("a").click(function () {
	localStorage.removeItem("loginUser");
	$(".p1").show();
	$(".p2").hide();
});

// 楼梯
// $(function(){
// 	$('.nav li').click(function(){
//      $(document).scrollTop($('.lou').eq($(this).index()).offset().top)
// 	 // $("body").stop().animate({
// 		//  scrollTop:$('.lou').offsetTop()
// 	 // })	
// 	})
// 
// 
// 	})
// 楼梯
$(function () {

	$('.nav li').click(function () {
		// $(document).scrollTop($('.lou').eq($(this).index()).offset().top)
		var t = $('.lou').eq($(this).index());
		$("html").stop().animate({
			scrollTop: t.offset().top
		});
	});
});