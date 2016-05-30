(function ($) {


  

    $(document).ready(function(){

    	$("#feature-crousel").owlCarousel({
    		nav:true,
    		dots:false,
    		items:4,
    		loop:true,
    		navText:['<i class="fa fa-chevron-left" ></i>','<i class="fa fa-chevron-right" ></i>'],
    		responsive:{
    			0:{
    				items:1,
    				nav:true
    			},

    			300:{
    				items:2,
    				nav:true
    			},

    			700:{
    				items:2,
    				nav:true
    			},

    			1000:{
    				items:4,
    				nav:true
    			},

    		}

    	});

    	$(".owl-carousel").owlCarousel({
    		items:1,
    		nav:true,
    		dots:true,
    		loop:true,
    		navText: ['<i class="fa fa-chevron-left" ></i>','<i class="fa fa-chevron-right" ></i>']
    	});

    });
	

    $(".toggle-mnu").click(function() {
    	$(this).toggleClass("on");
    	$(".sf-menu").slideToggle();
    	$(".arrow").slideToggle();
    	return false;
    });


    $("a[href*='#']").mPageScroll2id();

    $(".arrow").click(function(){
    	$("html,body").animate({
    		scrollTop : $(".work").offset().top
    	}, 1000);
    });

    $(".about-us").click(function(){
    	$("html,body").animate({
    		scrollTop : $(".about").offset().top
    	}, 1000);
    });

    $(".what-we-do").click(function(){
    	$("html,body").animate({
    		scrollTop : $(".work").offset().top
    	}, 1000);
    });

    $(".our-team").click(function(){
    	$("html,body").animate({
    		scrollTop : $(".team").offset().top
    	}, 1000);
    });

    $(".our-works").click(function(){
    	$("html,body").animate({
    		scrollTop : $(".project").offset().top
    	}, 1000);
    });

    $(".up").click(function(){
    	$("html,body").animate({
    		scrollTop : $("header").offset().top
    	}, 1000);
    });

    $(".in-touch").click(function(){
    	$("html,body").animate({
    		scrollTop : $(".touch").offset().top
    	}, 1000);
    });

    $(window).load(function(){
    	$('.service-item__p').equalHeights();
    	$('.posts-item__p').equalHeights();
    });




	//SVG Fallback
	if(!Modernizr.svg) {
		$("img[src*='svg']").attr("src", function() {
			return $(this).attr("src").replace(".svg", ".png");
		});
	};

	//E-mail Ajax Send
	//Documentation & Example: https://github.com/agragregra/uniMail
	$("form").submit(function() { //Change
		var th = $(this);
		$.ajax({
			type: "POST",
			url: "mail.php", //Change
			data: th.serialize()
		}).done(function() {
			alert("Thank you!");
			setTimeout(function() {
				// Done Functions
				th.trigger("reset");
			}, 1000);
		});
		return false;
	});


	$("img, a").on("dragstart", function(event) { event.preventDefault(); });

	$("#slider_1,#slider_2,#slider_3,#slider_4,#slider_5").roundSlider({
		sliderType: "min-range",
		handleShape: "round",
		radius: 90,
		editableTooltip: false,
		readOnly: true,
		value: 0,
		startAngle: 90,
		width: 7,
		handleSize: "+3"
	});


	var controller = new ScrollMagic.Controller();

	var scene = new ScrollMagic.Scene({ triggerElement: ".skills", offset: "50%" })
	.on('start', function () {
		$("#slider_1").roundSlider("setValue", 85, 1);
		$("#slider_2").roundSlider("setValue", 65, 1);
		$("#slider_3").roundSlider("setValue", 80, 1);
		$("#slider_4").roundSlider("setValue", 85, 1);
		$("#slider_5").roundSlider("setValue", 70, 1);
	})
	.addTo(controller);

	var imgscene = new ScrollMagic.Scene({
		triggerElement: ".work"
	}).setClassToggle(".up", "active") 
	.addTo(controller);

	$(".team-item,.work__item,.service-item").each( function(index){
		$(this).css('animation-delay', index/10 +'s');
	});


	$(".team-item").animated("fadeInUp");
	$(".work__item").animated("zoomIn");
	$(".service-item").animated("fadeInLeft");

	$('.popup-link').magnificPopup({type:'image'});

  $(".preloader").hide();
	$(window).load(function() {

		$(".preloader").fadeOut();
		$(".preloaderr").delay(400).fadeOut("slow");

	});


})(jQuery);

