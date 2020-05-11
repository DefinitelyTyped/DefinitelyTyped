$('.fancybox').fancybox();
$('.fancybox').fancybox({
    gutter: 0,
    transitionEffect: 'slide'
});
$.fancybox.open([
    { src: 'img1.jpg', type: 'image' },
    { src: 'img2.jpg', type: 'image', opts: { caption: (instance, elem) => "Test" } }
]);
$.fancybox.open({ src: 'image.jpg', opts: { caption: "Test" } });
$.fancybox.open('image.jpg');
$.fancybox.open('<h1>Lorem lipsum</h1>');

$.fancybox.close(true);

$(".fancybox-button").fancybox({
    afterClose: () => { },
    afterLoad: () => { },
    afterShow: () => { },
    beforeClose: () => { },
    beforeLoad: () => { },
    beforeShow: () => { },
    clickContent: "next",
    clickOutside: () => "close",
    clickSlide: "zoom",
    dblclickContent: "nextOrClose",
    dblclickOutside: "toggleControls",
    dblclickSlide: () => "nextOrClose",
    onInit: () => { },
    onActivate: () => { },
    onDeactivate: () => { }
});
$(".fancybox-thumb").fancybox({
    animationDuration: 300,
    animationEffect: "fade",
    arrows: true,
    autoFocus: true,
    backFocus: false,
    baseClass: "some-class",
    baseTpl: "<div></div>",
    btnTpl: {
        download: "<div></div>"
    },
    buttons: ["close", "download"],
    caption: "Test",
    defaultType: "image",
    errorTpl: "",
    fullScreen: { autostart: false },
    gutter: 50,
    hash: false,
    hideScrollbar: false,
    i18n: { en: { CLOSE: "Close this" } },
    idleTime: 500,
    iframe: { preload: false },
    parentEl: "body",
    preventCaptionOverlap: true,
    protect: false,
    slideClass: "some-slide-class",
    slideShow: { autoStart: false, speed: 1000 },
    smallBtn: false,
    spinnerTpl: "<div></div>",
    thumbs: { axis: "x" },
    image: { preload: false },
    toolbar: true,
    touch: { vertical: false },
    transitionDuration: 300,
    transitionEffect: "rotate",
    trapFocus: false,
    video: { autoStart: false },
    wheel: false,
    zoomOpacity: "auto",
    modal: true,
    loop: false,
    lang: "en",
    keyboard: false,
    infobar: false,
    ajax: { settings: { data: { fancybox: true } } }
});
