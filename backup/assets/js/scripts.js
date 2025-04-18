(function(){

	// Init global DOM elements, functions and arrays
    window.app 			 				= {el : {}, fn : {}};
	app.el['window']     				= $(window);
	app.el['document']   				= $(document);
	app.el['back-to-top'] 				= $('.back-to-top');
	app.el['html-body'] 				= $('html,body');
	app.el['animated']   				= $('.animated');
	app.el['loader']        			= $('#loader');
	app.el['mask']          			= $('#mask');
	app.el['header']        			= $('header');
	app.el['navbar-nav'] 				= $('.navbar-nav li.dropdown');


	app.fn.screenSize = function() {
		var size, width = app.el['window'].innerWidth() + 15;
		if(width < 320) size = "Not supported";
		else if(width < 480) size = "Mobile portrait";
		else if(width < 768) size = "Mobile landscape";
		else if(width < 960) size = "Tablet";
		else size = "Desktop";
	};

	$(function() {	
	    // Preloader
	    app.el['loader'].delay(700).fadeOut();
	    app.el['mask'].delay(1200).fadeOut("slow"); 

		// fade in .back-to-top
		$(window).scroll(function () {
			if ($(this).scrollTop() > 300) {
				app.el['back-to-top'].fadeIn();
			} else {
				app.el['back-to-top'].fadeOut();
			}
		});

		// scroll body to 0px on click
		app.el['back-to-top'].click(function () {
			app.el['html-body'].animate({
				scrollTop: 0
			}, 1500);
			return false;
		});

		// Elements animation
		app.el['animated'].appear(function() {
			var element = $(this);
			var animation = element.data('animation');
			var animationDelay = element.data('delay');
			if(animationDelay) {
				setTimeout(function(){
					element.addClass( animation + " visible" );
					element.removeClass('hiding');
				}, animationDelay);
			} else {
				element.addClass( animation + " visible" );
				element.removeClass('hiding');
			}    			
		}, {accY: -150});

		$('.carousel').carousel({
			interval: 4000 
		});
		
		$(window).resize(function(){
			$('#menu').removeClass('collapse').removeAttr('style');
		});
		

		$('.box').on('click',function(){
			$('.box').removeClass('open');
			$(this).toggleClass('open');
		}).on('mouseleave',function(){
			$('.box').removeClass('open');
		});
	
		$('.box-close').click(function(){
			$(this).parents('.box').removeClass('open');
			
			
			return false;			
		});		

		$('.accolades-list .item-inner').matchHeight();
		

		function fullscreen() {		

			aspectHeight = ($('.carousel-inner').innerWidth() * 9)/ 16;
			maxHeight = $(window).innerHeight() - $('.footer').innerHeight() - $('.header').innerHeight();

			if(aspectHeight > maxHeight)
				aspectHeight = maxHeight;

			$('#hero,.carousel-inner,.carousel-inner .item').height(aspectHeight);

			$('#hero.fullscreen-hero,.fullscreen-hero .carousel-inner,.fullscreen-hero .carousel-inner .item').height( $(window).innerHeight() - $('.footer').innerHeight() - $('.header').innerHeight() );

			$('.carousel-inner .item img').each(function(key, value){
				//console.log($('.carousel-inner').innerWidth());
				$(this).width($('.carousel-inner').innerWidth());
				$(this).height($('.carousel-inner').innerHeight());
			});
		}
		$(document).ready(fullscreen);
		$(window).resize(fullscreen);
		
		$('.arrow').click(function(){
			$('html, body').animate({ scrollTop: $('#main').offset().top }, 'slow');
		});

	});
	

})();