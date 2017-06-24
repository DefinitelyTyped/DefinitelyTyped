$(window).ready(function() {
	$('.flexslider').flexslider({
		animation: "slide"
	});
});

$(window).ready(function() {
	$('.flexslider').flexslider({
		animation: "slide",
		controlNav: "thumbnails"
	});
});

$(window).ready(function() {
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

$(window).ready(function() {
  $('.flexslider').flexslider({
    animation: "slide",
    animationLoop: false,
    itemWidth: 210,
    itemMargin: 5
  });
});

$(window).ready(function() {
 $('.flexslider').flexslider({
		animation: "slide",
		animationLoop: false,
		itemWidth: 210,
		itemMargin: 5,
		minItems: 2,
		maxItems: 4
	});
});

$(window).ready(function() {

	// Vimeo API nonsense
	var player = document.getElementById('player_1');
	$(player).on('ready', ready);

	function addEvent(element:any, eventName:any, callback:any) {
		if (element.addEventListener) {
			element.addEventListener(eventName, callback, false)
		} else {
			element.attachEvent(eventName, callback, false);
		}
	}

	function ready(player_id: any) {
		var froogaloop = $(player_id);
		froogaloop.on('play', function(data) {
			$('.flexslider').flexslider({ pauseText: "pause" });
		});
		froogaloop.on('pause', function(data) {
			$('.flexslider').flexslider({ playText: "play" });
		});
	}
});
