$(function() {
	$('.flexslider').flexslider({
		animation: "slide"
	});
});

$(function() {
	$('.flexslider').flexslider({
		animation: "slide",
		controlNav: "thumbnails"
	});
});

$(function() {
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

$(function() {
  $('.flexslider').flexslider({
    animation: "slide",
    animationLoop: false,
    itemWidth: 210,
    itemMargin: 5
  });
});

$(function() {
 $('.flexslider').flexslider({
		animation: "slide",
		animationLoop: false,
		itemWidth: 210,
		itemMargin: 5,
		minItems: 2,
		maxItems: 4
	});
});

$(function() {

	// Vimeo API nonsense
	$(ready);

	function addEvent(element:any, eventName:any, callback:any) {
		if (element.addEventListener) {
			element.addEventListener(eventName, callback, false)
		} else {
			element.attachEvent(eventName, callback, false);
		}
	}

	function ready() {
		var froogaloop = $('#player_1');
		froogaloop.on('play', function(data) {
			$('.flexslider').flexslider({ pauseText: "pause" });
		});
		froogaloop.on('pause', function(data) {
			$('.flexslider').flexslider({ playText: "play" });
		});
	}
});
