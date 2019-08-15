/// <reference types="jquery" />

//
// Main demos
//

// 01-default.html
function defaultDemo() {
    const mySwiper = new Swiper('.swiper-container', {
        pagination: '.pagination',
        loop: true,
        grabCursor: true,
        paginationClickable: true
    });

    $('.arrow-left').on('click', e => {
        e.preventDefault();
        mySwiper.swipePrev();
    });

    $('.arrow-right').on('click', e => {
        e.preventDefault();
        mySwiper.swipeNext();
    });
}

// 02-vertical-mode.html
function verticalMode() {
    const mySwiper = new Swiper('.swiper-container', {
        pagination: '.pagination',
        paginationClickable: true,
        mode: 'vertical'
    });
}

// 03-dynamic-slides.html
function dynamicSlides() {
    const mySwiper = new Swiper('.swiper-container', {
        pagination: '.pagination',
        paginationClickable: true
    });

    function randomColor() {
        const colors = ('blue red green orange pink').split(' ');
        return colors[Math.floor(Math.random() * colors.length)];
    }

    let count = 4;

    $('.sdl-append').click(e => {
        e.preventDefault();
        mySwiper.appendSlide('<div class="title">Slide ' + (++count) + '</div>', 'swiper-slide ' + randomColor() + '-slide');
    });

    $('.sdl-prepend').click(e => {
        e.preventDefault();
        mySwiper.prependSlide('<div class="title">Slide  ' + (++count) + '</div>', 'swiper-slide ' + randomColor() + '-slide');
    });

    $('.sdl-swap').click(e => {
        e.preventDefault();
        mySwiper
            .getFirstSlide()
            .insertAfter(1);
    });

    $('.sdl-insert').click(e => {
        e.preventDefault();
        mySwiper
            .createSlide('<div class="title">Slide  ' + (++count) + '</div>', 'swiper-slide ' + randomColor() + '-slide')
            .insertAfter(0);
    });

    $('.sdl-remove1').click(e => {
        e.preventDefault();
        mySwiper.removeSlide(0);
    });

    $('.sdl-removel').click(e => {
        e.preventDefault();
        mySwiper.removeLastSlide();
    });

    $('.sdl-remove2').click(e => {
        e.preventDefault();
        mySwiper.removeSlide(1);
    });
}

// 04-scroll-container.html
function scrollContainer() {
    const mySwiper = new Swiper('.swiper-container', {
        scrollContainer: true,
        scrollbar: {
            container: '.swiper-scrollbar'
        }
    });
}

// 05-free-mode.html
function freeMode() {
    const mySwiper = new Swiper('.swiper-container', {
        pagination: '.pagination',
        paginationClickable: true,
        freeMode: true,
        freeModeFluid: true
    });
}

// 06-carousel-mode.html
function carouselMode() {
    const mySwiper = new Swiper('.swiper-container', {
        pagination: '.pagination',
        paginationClickable: true,
        slidesPerView: 3
    });
}

// 07-carousel-loop.html
function carouselLoop() {
    const mySwiper = new Swiper('.swiper-container', {
        pagination: '.pagination',
        paginationClickable: true,
        slidesPerView: 3,
        loop: true
    });
}

// 08-nested.html
function nested() {
    const swiperParent = new Swiper('.swiper-parent', {
        pagination: '.pagination-parent',
        paginationClickable: true,
        slidesPerView: 3
    });

    const swiperNested1 = new Swiper('.swiper-nested-1', {
        mode: 'vertical',
        pagination: '.pagination-nested-1',
        paginationClickable: true,
        slidesPerView: 2
    });

    const swiperNested2 = new Swiper('.swiper-nested-2', {
        mode: 'vertical',
        pagination: '.pagination-nested-2',
        paginationClickable: true,
        slidesPerView: 2
    });
}

// 09-nested-loop.html
function nestedLoop() {
    const swiperParent = new Swiper('.swiper-parent', {
        pagination: '.pagination-parent',
        paginationClickable: true,
        loop: true,
        slidesPerView: 3
    });

    const swiperNested1 = new Swiper('.swiper-nested', {
        mode: 'vertical',
        pagination: '.pagination-nested',
        paginationClickable: true,
        slidesPerView: 2
    });
}

// 10-tabs.html
function tabs() {
    const tabsSwiper = new Swiper('.swiper-container', {
        onlyExternal: true,
        speed: 500
    });

    $(".tabs a").on('touchstart mousedown', e => {
        e.preventDefault();
        $(".tabs .active").removeClass('active');
        $(this).addClass('active');
        tabsSwiper.swipeTo($(this).index());
    });

    $(".tabs a").click(e => {
        e.preventDefault();
    });
}

// 11-tabs-feedback.html
function tabsFeedback() {
    const tabsSwiper = new Swiper('.swiper-container', {
        speed: 500,
        onSlideChangeStart: () => {
            $(".tabs .active").removeClass('active');
            $(".tabs a").eq(tabsSwiper.activeIndex).addClass('active');
        }
    });

    $(".tabs a").on('touchstart mousedown', e => {
        e.preventDefault();
        $(".tabs .active").removeClass('active');
        $(this).addClass('active');
        tabsSwiper.swipeTo($(this).index());
    });

    $(".tabs a").click(e => {
        e.preventDefault();
    });
}

// 12-partial-display.html
function partialDisplay() {
    const mySwiper = new Swiper('.swiper-container', {
        pagination: '.pagination',
        paginationClickable: true,
        slidesPerView: 'auto'
    });
}

// 13-threshold.html
function threshold() {
    const mySwiper = new Swiper('.swiper-container', {
        pagination: '.pagination',
        paginationClickable: true,
        moveStartThreshold: 100
    });
}

// 14-different-widths.html
function differentWidths() {
    const mySwiper = new Swiper('.swiper-container', {
        pagination: '.pagination',
        paginationClickable: true,
        slidesPerView: 'auto'
    });
}

// 15-centered-slides.html
function centeredSlides() {
    const mySwiper = new Swiper('.swiper-container', {
        pagination: '.pagination',
        paginationClickable: true,
        centeredSlides: true,
        slidesPerView: 'auto'
    });
}

// 16-visibility-api.html
function visibilityApi() {
    const mySwiper = new Swiper('.swiper-container', {
        pagination: '.pagination',
        paginationClickable: true,
        centeredSlides: true,
        slidesPerView: 3,
        watchActiveIndex: true
    });
}

// 17 - responsive.html
function responsive() {
    const mySwiper = new Swiper('.swiper-container', {
        pagination: '.pagination',
        paginationClickable: true
    });
}

//
// Scrollbar
//

// demo-1.html
function demo1() {
    const mySwiper = new Swiper('.swiper-container', {
        scrollbar: {
            container: '.swiper-scrollbar',
            hide: false,
            draggable: false
        }
    });
}

// demo-2.html
function demo2() {
    const mySwiper = new Swiper('.swiper-container', {
        scrollbar: {
            container: '.swiper-scrollbar',
            hide: false,
            draggable: true
        }
    });
}

// demo-3.html
function demo3() {
    const mySwiper = new Swiper('.swiper-container', {
        scrollbar: {
            container: '.swiper-scrollbar',
            hide: true,
            draggable: true
        }
    });
}

// demo-4.html
function demo4() {
    const mySwiper = new Swiper('.swiper-container', {
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
    const mySwiper = new Swiper('.swiper-container', {
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
