/// <reference path="flexSlider.d.ts"/>

// Can also be used with $(document).ready()
$(window).load(function() {
	$('.flexslider').flexslider({
		animation: "slide"
	});
});

// Can also be used with $(document).ready()
$(window).load(function() {
	$('.flexslider').flexslider({
		animation: "slide",
		controlNav: "thumbnails"
	});
});

$(window).load(function() {
  // The slider being synced must be initialized first
  $('#carousel').flexslider({
    animation: "slide",
    controlNav: false,
    animationLoop: false,
    slideshow: false,
    itemWidth: 210,
    itemMargin: 5,
    asNavFor: '#slider'
  });
   
  $('#slider').flexslider({
    animation: "slide",
    controlNav: false,
    animationLoop: false,
    slideshow: false,
    sync: "#carousel"
  });
});

$(window).load(function() {
  $('.flexslider').flexslider({
    animation: "slide",
    animationLoop: false,
    itemWidth: 210,
    itemMargin: 5
  });
});

// Can also be used with $(document).ready()
$(window).load(function() {
 $('.flexslider').flexslider({
		animation: "slide",
		animationLoop: false,
		itemWidth: 210,
		itemMargin: 5,
		minItems: 2,
		maxItems: 4
	});
});

// Can also be used with $(document).ready()
$(window).load(function() {

	// Vimeo API nonsense
	var player = document.getElementById('player_1');
	$(player).on('ready', ready);

	function addEvent(element, eventName, callback) {
		if (element.addEventListener) {
			element.addEventListener(eventName, callback, false)
		} else {
			element.attachEvent(eventName, callback, false);
		}
	}

	function ready(player_id) {
		var froogaloop = $(player_id);
		froogaloop.on('play', function(data) {
			$('.flexslider').flexslider("pause");
		});
		froogaloop.on('pause', function(data) {
			$('.flexslider').flexslider("play");
		});
	}
});