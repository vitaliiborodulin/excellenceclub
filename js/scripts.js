$(function() {
    
    const swiper = new Swiper('.swiper', {
    	// Optional parameters
    	loop: true,
    	slidesPerView: 1,
    	// cssMode: true,
    	// mousewheel: true,
    	// keyboard: true,
    	// noSwiping: false,
    	// allowTouchMove: false,
    	autoplay: {
    		delay: 2500,
    		disableOnInteraction: false,
    	},
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
    
    $('.slider-button-prev').on('click', function(){
    	swiper.slidePrev();
    });
    
    $('.slider-button-next').on('click', function(){
    	swiper.slideNext();
    });
});