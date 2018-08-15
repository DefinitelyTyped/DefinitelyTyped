$(".royalSlider").royalSlider();

$(".royalSlider").royalSlider({
    // options go here
    // as an example, enable keyboard arrows nav
    keyboardNavEnabled: true
});

jQuery(document).ready(function () {
    $(".royalSlider").royalSlider({
        // general options go here
        autoScaleSlider: true,
        thumbs: {
            // thumbnails options go here
            spacing: 10,
            arrowsAutoHide: true
        }
    });
});

jQuery(document).ready(function () {
    $(".royalSlider").royalSlider({
        // general options go here
        autoScaleSlider: true,
        fullscreen: {
            // fullscreen options go here
            enabled: true,
            nativeFS: true
        }
    });
});

jQuery(document).ready(function () {
    $(".royalSlider").royalSlider({
        // general options go here
        autoScaleSlider: true,
        deeplinking: {
            // deep linking options go here
            enabled: true,
            prefix: 'slider-'
        }
    });
});


jQuery(document).ready(function () {
    $(".royalSlider").royalSlider({
        // general options go here
        autoScaleSlider: true,
        autoplay: {
            // autoplay options go here
            enabled: true,
            pauseOnHover: true
        }
    });
});

jQuery(document).ready(function () {
    $(".royalSlider").royalSlider({
        // general options go here
        autoScaleSlider: true,
        video: {
            // video options go here
            autoHideBlocks: true,
            autoHideArrows: false
        }
    });
});

jQuery(document).ready(function () {
    $(".royalSlider").royalSlider({
        // general options go here
        autoScaleSlider: true,
        block: {
            // animated blocks options go here
            fadeEffect: false,
            moveEffect: 'left'
        }
    });
});

jQuery(document).ready(function () {
    $(".royalSlider").royalSlider({
        // general options go here
        keyboardNavEnabled: true,
        visibleNearby: {
            enabled: true,
            centerArea: 0.5,
            center: true,
            breakpoint: 650,
            breakpointCenterArea: 0.64,
            navigateByCenterClick: true
        }
    });
});

// All public methods can be called jQuery-way - $(".royalSlider").royalSlider('startAutoPlay');
// Another example: $(".royalSlider").royalSlider('goTo', 3);
// But it's recommended to get instance once if you have many calls:

var slider: RoyalSlider.RoyalSlider = $(".royalSlider").royalSlider().data('royalSlider');

slider.goTo(3); // go to slide with id
slider.next();  // next slide
slider.prev();  // prev slide

slider.destroy(); // removes all events and clears all slider data
// use on ajax sites to avoid memory leaks

// Dynamic slides adding/removing
// More info in Javascript API section of support desk - http://dimsemenov.com/private/forum.php
slider.appendSlide($('div'));
slider.appendSlide($('div'), 4);

slider.removeSlide();
slider.removeSlide(4);

slider.updateSliderSize(); // updates size of slider. Use after you resize slider with js. 
slider.updateSliderSize(true); // Function has "forceResize" Boolean paramater.

// Thumbnails public methods
slider.setThumbsOrientation('vertical'); // changes orientation of thumbnails
slider.updateThumbsSize(); // updates size of thumbnails

// Fullscreen public methods
slider.enterFullscreen();
slider.exitFullscreen();

// Autoplay public methods
slider.startAutoPlay();
slider.stopAutoPlay();
slider.toggleAutoPlay();

// Video public methods
slider.toggleVideo();
slider.playVideo();
slider.stopVideo();




slider.currSlideId // current slide index
slider.currSlide // current slide object

slider.numSlides // total number of slides

slider.isFullscreen // indicates if slider is in fullscreen mode
slider.nativeFS		// indicates if browser supports native fullscreen

slider.width // width of slider
slider.height // height of slider

slider.dragSuccess // Boolean, changes on mouseup, indicates if slide was dragged. Used to check if event is drag or click.

slider.slides // array, contains all data about each slide
slider.slidesJQ // array, contains list of HTML slides that are added to slider

slider.st // object with slider settings
slider.ev // jQuery object with slider events




// In each listener event.target is slider instance

slider.ev.on('rsAfterSlideChange', function (event) {
    // triggers after slide change
});
slider.ev.on('rsBeforeAnimStart', function (event) {
    // before animation between slides start
});
slider.ev.on('rsBeforeMove', function (event, type?: string, userAction?: boolean) {
    // before any transition start (including after drag release)
    // "type" - can be "next", "prev", or ID of slide to move
    // userAction (Boolean) - defines if action is trighered by user (e.g. will be false if movement is trighered by autoPlay)
});
slider.ev.on('rsBeforeSizeSet', function (event) {
    // before size of slider is changed
});
slider.ev.on('rsDragStart', function (event) {
    // mouse/touch drag start
});
slider.ev.on('rsDragRelease', function () {
    // mouse/touch drag end
});
slider.ev.on('rsBeforeDestroy', function () {
    // triggers before slider in destroyed
});
slider.ev.on('rsOnCreateVideoElement', function (e, url?: string) {
    // triggers before video element is created, after click on play button. 
    // Read more in Tips&Tricks section
});
slider.ev.on('rsSlideClick', function () {
    // triggers when user clicks on slide
    // doesn't trigger after click and drag
});
slider.ev.on('rsEnterFullscreen', function () {
    // enter fullscreen mode 
});
slider.ev.on('rsExitFullscreen', function () {
    // exit fullscreen mode 
});

slider.ev.on('rsVideoPlay', function () {
    // video start
});
slider.ev.on('rsVideoStop', function () {
    // video stop
});

slider.slides[2].holder.on('rsAfterContentSet', function () {
    // fires when third slide content is loaded and added to DOM
});
// or globally
slider.ev.on('rsAfterContentSet', function (e, slideObject?: RoyalSlider.RoyalSlider) {
    // fires when every time when slide content is loaded and added to DOM
});

// Next events TRIGGER DIRECTLY ON SLIDER INITIALIZATION
// if you bind them after slider init they'll not fire
// used for module development
slider.ev.on('rsAfterInit', function () {
    // after slider is initialized, 
});
slider.ev.on('rsBeforeParseNode', function (e, content?: any, obj?: any) {
    // before slide node is parsed
    // content - HTML object of slide that is parsed
    // obj - RoyalSlider data object (stores image URLs)
});
