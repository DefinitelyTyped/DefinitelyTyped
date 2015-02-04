/// <reference path="swiper.d.ts" />
/// <reference path="../jquery/jquery.d.ts" />

//
// Main demos
//

// 01-default.html
function defaultDemo() {
    var mySwiper = new Swiper('.swiper-container', {
        pagination: '.pagination',
        loop: true,
        grabCursor: true,
        paginationClickable: true
    });

    $('.arrow-left').on('click', function (e) {
        e.preventDefault();
        mySwiper.swipePrev();
    });

    $('.arrow-right').on('click', function (e) {
        e.preventDefault();
        mySwiper.swipeNext();
    });
}

// 02-vertical-mode.html
function verticalMode() {
    var mySwiper = new Swiper('.swiper-container', {
        pagination: '.pagination',
        paginationClickable: true,
        mode: 'vertical'
    });
}

// 03-dynamic-slides.html
function dynamicSlides() {
    var mySwiper = new Swiper('.swiper-container', {
        pagination: '.pagination',
        paginationClickable: true
    });
    
    function randomColor() {
        var colors = ('blue red green orange pink').split(' ');
        return colors[Math.floor(Math.random() * colors.length)];
    }

    var count = 4;

    $('.sdl-append').click(function (e) {
        e.preventDefault();
        mySwiper.appendSlide('<div class="title">Slide ' + (++count) + '</div>', 'swiper-slide ' + randomColor() + '-slide')
    });

    $('.sdl-prepend').click(function (e) {
        e.preventDefault();
        mySwiper.prependSlide('<div class="title">Slide  ' + (++count) + '</div>', 'swiper-slide ' + randomColor() + '-slide')
    });

    $('.sdl-swap').click(function (e) {
        e.preventDefault();
        mySwiper
            .getFirstSlide()
            .insertAfter(1);
    });

    $('.sdl-insert').click(function (e) {
        e.preventDefault();
        mySwiper
            .createSlide('<div class="title">Slide  ' + (++count) + '</div>', 'swiper-slide ' + randomColor() + '-slide')
            .insertAfter(0);
    });

    $('.sdl-remove1').click(function (e) {
        e.preventDefault();
        mySwiper.removeSlide(0);
    });

    $('.sdl-removel').click(function (e) {
        e.preventDefault();
        mySwiper.removeLastSlide();
    });

    $('.sdl-remove2').click(function (e) {
        e.preventDefault();
        mySwiper.removeSlide(1);
    });
}

// 04-scroll-container.html
function scrollContainer() {
    var mySwiper = new Swiper('.swiper-container', {
        scrollContainer: true,
        scrollbar: {
            container: '.swiper-scrollbar'
        }
    });
}

// 05-free-mode.html
function freeMode() {
    var mySwiper = new Swiper('.swiper-container', {
        pagination: '.pagination',
        paginationClickable: true,
        freeMode: true,
        freeModeFluid: true
    });
}

// 06-carousel-mode.html 
function carouselMode() {
    var mySwiper = new Swiper('.swiper-container', {
        pagination: '.pagination',
        paginationClickable: true,
        slidesPerView: 3
    });
}

// 07-carousel-loop.html
function carouselLoop() {
    var mySwiper = new Swiper('.swiper-container', {
        pagination: '.pagination',
        paginationClickable: true,
        slidesPerView: 3,
        loop: true
    });
}

// 08-nested.html
function nested() {
    var swiperParent = new Swiper('.swiper-parent', {
        pagination: '.pagination-parent',
        paginationClickable: true,
        slidesPerView: 3
    });

    var swiperNested1 = new Swiper('.swiper-nested-1', {
        mode: 'vertical',
        pagination: '.pagination-nested-1',
        paginationClickable: true,
        slidesPerView: 2
    });

    var swiperNested2 = new Swiper('.swiper-nested-2', {
        mode: 'vertical',
        pagination: '.pagination-nested-2',
        paginationClickable: true,
        slidesPerView: 2
    });
}

// 09-nested-loop.html
function nestedLoop() {
    var swiperParent = new Swiper('.swiper-parent', {
        pagination: '.pagination-parent',
        paginationClickable: true,
        loop: true,
        slidesPerView: 3
    });

    var swiperNested1 = new Swiper('.swiper-nested', {
        mode: 'vertical',
        pagination: '.pagination-nested',
        paginationClickable: true,
        slidesPerView: 2
    });
}

// 10-tabs.html
function tabs() {
    var tabsSwiper = new Swiper('.swiper-container', {
        onlyExternal: true,
        speed: 500
    });

    $(".tabs a").on('touchstart mousedown', function (e) {
        e.preventDefault();
        $(".tabs .active").removeClass('active');
        $(this).addClass('active');
        tabsSwiper.swipeTo($(this).index());
    });

    $(".tabs a").click(function (e) {
        e.preventDefault();
    });
}

// 11-tabs-feedback.html
function tabsFeedback() {
    var tabsSwiper = new Swiper('.swiper-container', {
        speed: 500,
        onSlideChangeStart: function () {
            $(".tabs .active").removeClass('active');
            $(".tabs a").eq(tabsSwiper.activeIndex).addClass('active');
        }
    });

    $(".tabs a").on('touchstart mousedown', function (e) {
        e.preventDefault();
        $(".tabs .active").removeClass('active');
        $(this).addClass('active');
        tabsSwiper.swipeTo($(this).index());
    });

    $(".tabs a").click(function (e) {
        e.preventDefault();
    });
}

// 12-partial-display.html
function partialDisplay() {
    var mySwiper = new Swiper('.swiper-container', {
        pagination: '.pagination',
        paginationClickable: true,
        slidesPerView: 'auto'
    });
}

// 13-threshold.html
function threshold() {
    var mySwiper = new Swiper('.swiper-container', {
        pagination: '.pagination',
        paginationClickable: true,
        moveStartThreshold: 100
    });
}

// 14-different-widths.html
function differentWidths() {
    var mySwiper = new Swiper('.swiper-container', {
        pagination: '.pagination',
        paginationClickable: true,
        slidesPerView: 'auto'
    });
}

// 15-centered-slides.html
function centeredSlides() {
    var mySwiper = new Swiper('.swiper-container', {
        pagination: '.pagination',
        paginationClickable: true,
        centeredSlides: true,
        slidesPerView: 'auto'
    });
}

// 16-visibility-api.html
function visibilityApi() {
    var mySwiper = new Swiper('.swiper-container', {
        pagination: '.pagination',
        paginationClickable: true,
        centeredSlides: true,
        slidesPerView: 3,
        watchActiveIndex: true
    });
}

// 17 - responsive.html 
function responsive() {
    var mySwiper = new Swiper('.swiper-container', {
        pagination: '.pagination',
        paginationClickable: true
    });
}


//
// Scrollbar
//

// demo-1.html
function demo1() {
    var mySwiper = new Swiper('.swiper-container', {
        scrollbar: {
            container: '.swiper-scrollbar',
            hide: false,
            draggable: false
        }
    });
}

// demo-2.html
function demo2() {
    var mySwiper = new Swiper('.swiper-container', {
        scrollbar: {
            container: '.swiper-scrollbar',
            hide: false,
            draggable: true
        }
    });
}

// demo-3.html
function demo3() {
    var mySwiper = new Swiper('.swiper-container', {
        scrollbar: {
            container: '.swiper-scrollbar',
            hide: true,
            draggable: true
        }
    });
}

// demo-4.html
function demo4() {
    var mySwiper = new Swiper('.swiper-container', {
        slidesPerView: 3,
        scrollbar: {
            container: '.swiper-scrollbar',
            hide: false,
            draggable: true,
            snapOnRelease: true
        }
    });
}

// demo-5.html
function demo5() {
    var mySwiper = new Swiper('.swiper-container', {
        scrollContainer: true,
        mousewheelControl: true,
        mode: 'vertical',
        scrollbar: {
            container: '.swiper-scrollbar',
            hide: true,
            draggable: false
        }
    });
}