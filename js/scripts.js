$(function() {

	$('.wp-block-column').has('.wp-block-image').addClass( 'order' );

	$('select').niceSelect();

	const burger = $('.header__burger');
	const menu = $('.header__nav');
	
	burger.on('click', function(e) {
	    e.preventDefault();
	    burger.toggleClass('header__burger--close');
	    menu.toggleClass('open');
	});
	
	$(document).keyup(function(e) {
	    if (e.key === "Escape" || e.keyCode === 27) {
	        menu.removeClass('open');
	        burger.removeClass('header__burger--close');
	    }
	});
	const modelsSlider = new Swiper('.models-slider', {
		// Optional parameters
		loop: true,
		slidesPerView: 1,
		// cssMode: true,
		// mousewheel: true,
		// keyboard: true,
		// noSwiping: false,
		// allowTouchMove: false,
		// autoplay: {
		// 	delay: 2500,
		// 	disableOnInteraction: false,
		// },
		breakpoints: {
			992: {
				slidesPerView: 3,
				// spaceBetween: 40,
				// allowTouchMove: true,
			},
			1200: {
				slidesPerView: 4,
				// allowTouchMove: true,
				// spaceBetween: 20,
			},
		},
	});
	
	$('.models-button-prev').on('click', function(){
		modelsSlider.slidePrev();
	});
	
	$('.models-button-next').on('click', function(){
		modelsSlider.slideNext();
	});
	
	const feedbackSlider = new Swiper('.feedback-slider', {
		// loop: true,
		slidesPerView: 1,
		spaceBetween: 30,
		autoplay: {
			delay: 2500,
			disableOnInteraction: false,
		},
		breakpoints: {
			678: {
				slidesPerView: 2,
			},
			1010: {
				slidesPerView: 3,
			},
			1350: {
				slidesPerView: 4,
			},
		},
	});
	
	$('.feedback-button-prev').on('click', function(){
		feedbackSlider.slidePrev();
	});
	
	$('.feedback-button-next').on('click', function(){
		feedbackSlider.slideNext();
	});
	
	var swiper = new Swiper(".mySwiper", {
		spaceBetween: 10,
		slidesPerView: 3,
		freeMode: true,
		watchSlidesProgress: true,
	});
	var swiper2 = new Swiper(".mySwiper2", {
		spaceBetween: 10,
		navigation: {
			nextEl: ".swiper-button-next",
			prevEl: ".swiper-button-prev",
		},
		thumbs: {
			swiper: swiper,
		},
	});
	Fancybox.bind("[data-fancybox]", {
	  // Your options go here
	});
});