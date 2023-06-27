$(function () {//JS開頭

	var WINDOW = $(window).width();//視窗寬度
	var WINDOWH = $(window).height();//視窗高度

	//----------------捲動控制-----------------
	$(window).scroll(function () {
		if ($(this).scrollTop() > 50) { //若目前的位置距離網頁頂端>...
			$(".gotop").addClass("show");
			$(".js-nav").addClass("up");
			$(".js-navbar-collapse").removeClass("show");
			$(".js-nav-toggler").addClass("collapsed");
		} else {
			$(".gotop").removeClass("show");
			$(".js-nav").removeClass("up");
		}
	});
//----------------側邊選單控制-----------------
	$(".js-side-menu-toggler").click(function () {
		$('.js-side-menu').toggleClass("close");
		$(".js-side-content").toggleClass("close");
	})

	$(".js-draggable").draggable();

	
	$(".js-side-menu button").not(".js-side-menu-toggler").click(function () {
		if ($(this).hasClass("js-map-opener")){
			$(".js-side-content").addClass("p-0");
			$(".js-iframe").addClass("iframe-map-height");
			$("body").addClass("scrolly-none");
		}
	})
	$(".js-side-menu a").click(function () {
			$(".js-side-content").removeClass("p-0");
			$(".js-iframe").removeClass("iframe-map-height");
			$("body").removeClass("scrolly-none");
	})
	RESIZE();

	function RESIZE() {
		var WINDOW = $(window).width();
		var WINDOWH = $(window).height();
		if (WINDOW < 992) {
			$('.js-side-menu').addClass("close");
			$(".js-side-content").addClass("close");
		}
	}
	$(window).resize(function () {
		RESIZE();
	})
})//JS尾端	

