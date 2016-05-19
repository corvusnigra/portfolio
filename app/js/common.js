$(function() {
	$(".toggle-mnu").click(function() {
		$(this).toggleClass("on");
		$(".main-mnu").slideToggle();
		return false;
	});

	$('.owl-carousel').owlCarousel({
		items:1,
		nav: true,
		dots: true,
		loop: true,
		navText: ['<i class="fa fa-chevron-left" ></i>','<i class="fa fa-chevron-right" ></i>']
	})

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

	//Chrome Smooth Scroll
	try {
		$.browserSelector();
		if($("html").hasClass("chrome")) {
			$.smoothScroll();
		}
	} catch(err) {

	};

	$("img, a").on("dragstart", function(event) { event.preventDefault(); });

});
