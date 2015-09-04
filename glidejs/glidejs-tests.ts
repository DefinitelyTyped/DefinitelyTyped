///<reference path="glidejs.d.ts" />
///<reference path="../jquery/jquery.d.ts" />

// Copied from documentation
$('.slider').glide();

$('.slider').glide({
    autoplay: 5000,
    arrows: 'body',
    navigation: 'body'
});

var glide: JQueryGlide.IGlideApi = $('.slider').glide().data('api_glide');
// Original line modified: glide.jump(3, console.log('Wooo!'));
glide.jump(3, function () { console.log('Wooo!'); });

// The rest of tests
glide.current();
glide.reinit();
glide.destroy();
glide.play();
glide.pause();
glide.next(function () { });
glide.prev(function () { });
glide.nav("div");
glide.arrows("div");

$(".slider").glide({ autoplay: 4000 });
$(".slider").glide({ hoverpause: true });
$(".slider").glide({ circular: true });
$(".slider").glide({ animationDuration: 500 });
$(".slider").glide({ animationTimingFunc: "cubic - bezier(0.165, 0.840, 0.440, 1.000)" });
$(".slider").glide({ arrows: true });
$(".slider").glide({ arrowsWrapperClass: "slider__arrows" });
$(".slider").glide({ arrowMainClass: "slider__arrows-item" });
$(".slider").glide({ arrowRightClass: "slider__arrows-item--right" });
$(".slider").glide({ arrowLeftClass: "slider__arrows-item--left" });
$(".slider").glide({ arrowRightText: "next" });
$(".slider").glide({ arrowLeftText: "prev" });
$(".slider").glide({ navigation: true });
$(".slider").glide({ navigationCenter: true });
$(".slider").glide({ navigationClass: "slider__nav" });
$(".slider").glide({ navigationItemClass: "slider__nav-item" });
$(".slider").glide({ navigationCurrentItemClass: "slider__nav-item--current" });
$(".slider").glide({ keyboard: true });
$(".slider").glide({ touchDistance: 60 });
$(".slider").glide({ beforeInit: function () { } });
$(".slider").glide({ afterInit: function () { } });
$(".slider").glide({ beforeTransition: function () { } });
$(".slider").glide({ afterTransition: function () { } });
