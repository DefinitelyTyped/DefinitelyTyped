// examples from http://bxslider.com/examples

$(document).ready(function() {
	$('.bxslider1').bxSlider({
		mode: 'fade',
		captions: true
	});

	$('.bxslider2').bxSlider({
		auto: true,
		autoControls: true
	});

	$('.bxslider3').bxSlider({
		infiniteLoop: false,
		hideControlOnEnd: true
	});

	$('.bxslider4').bxSlider({
		adaptiveHeight: true,
		mode: 'fade'
	});

	$('.slider1').bxSlider({
		slideWidth: 200,
		minSlides: 2,
		maxSlides: 3,
		slideMargin: 10
	});

	$('.slider2').bxSlider({
		slideWidth: 300,
		minSlides: 2,
		maxSlides: 2,
		slideMargin: 10
	});

	   $('.slider3').bxSlider({
		slideWidth: 5000,
		minSlides: 2,
		maxSlides: 4,
		slideMargin: 10
	});

	$('.slider4').bxSlider({
		slideWidth: 300,
		minSlides: 2,
		maxSlides: 3,
		moveSlides: 1,
		slideMargin: 10
	});

	$('.slider5').bxSlider({
		slideWidth: 300,
		minSlides: 3,
		maxSlides: 3,
		moveSlides: 3,
		slideMargin: 10
	});

	$('.slider6').bxSlider({
		slideWidth: 300,
		minSlides: 2,
		maxSlides: 3,
		startSlide: 2,
		slideMargin: 10
	});

	$('.slider7').bxSlider({
		slideWidth: 200,
		minSlides: 4,
		maxSlides: 5,
		slideMargin: 10
	});

	$('.slider8').bxSlider({
		mode: 'vertical',
		slideWidth: 300,
		minSlides: 2,
		slideMargin: 10
	});

	$('.bxslider6').bxSlider({
		minSlides: 2,
		maxSlides: 2,
		slideWidth: 360,
		slideMargin: 10
	});

	$('.bxslider7').bxSlider({
		minSlides: 3,
		maxSlides: 4,
		slideWidth: 170,
		slideMargin: 10
	});

	$('.bxslider8').bxSlider({
		pagerCustom: '#bx-pager'
	});
	$('.bxslider9').bxSlider({
		buildPager: function(slideIndex) {
			switch (slideIndex) {
				case 0:
					return '<img src="/images/thumbs/tree_root.jpg">';
				case 1:
					return '<img src="/images/thumbs/houses.jpg">';
				case 2:
					return '<img src="/images/thumbs/hill_fence.jpg">';
			}
		}
	});

	$('.bxslider10').bxSlider({
		mode: 'vertical',
		slideMargin: 5
	});

	$('.bxslider11').bxSlider({
		nextSelector: '#slider-next',
		prevSelector: '#slider-prev',
		nextText: 'Onward →',
		prevText: '← Go back'
	});

	$('.bxslider12a').bxSlider({
		mode: 'fade',
		auto: true,
		autoControls: true,
		pause: 2000
	});

	$('.bxslider12b').bxSlider({
		auto: true,
		autoControls: true,
		pause: 3000,
		slideMargin: 20
	});

	$('.bxslider13').bxSlider({
		onSliderLoad: function() {
			// do funky JS stuff here
			alert('Slider has finished loading. Click OK to continue!');
		},
		onSlideAfter: function() {
			// do mind-blowing JS stuff here
			alert('A slide has finished transitioning. Bravo. Click OK to continue!');
		}
	});

	var slider = $('.bxslider14').bxSlider({
		mode: 'fade'
	});

	$('#slider-next').click(function() {
		slider.goToNextSlide();
		return false;
	});

	$('#slider-count').click(function() {
		var count = slider.getSlideCount();
		alert('Slide count: ' + count);
		return false;
	});

	$('.bxslider15').bxSlider({
		video: true,
		useCSS: false
	});

	$('.bxslider16').bxSlider({
		minSlides: 4,
		maxSlides: 4,
		slideWidth: 170,
		slideMargin: 10,
		ticker: true,
		speed: 6000
	});

	$('.bxslider17').bxSlider({
		mode: 'horizontal',
		useCSS: false,
		infiniteLoop: false,
		hideControlOnEnd: true,
		easing: 'easeOutElastic',
		speed: 2000
	});

	var slider = $('.bxslider18').bxSlider({
		mode: 'horizontal'
	});

	$('#reload-slider').click(function(e) {
		e.preventDefault();
		$('.bxslider').append('<li><img src="/images/730_200/trees.jpg"></li>');
		slider.reloadSlider();
	});

	var slider = $('.bxslider19').bxSlider({
		mode: 'horizontal'
	});

	$('#reload-slider').click(function(e) {
		e.preventDefault();
		slider.reloadSlider({
			mode: 'fade',
			auto: true,
			pause: 1000,
			speed: 500
		});
	});
});