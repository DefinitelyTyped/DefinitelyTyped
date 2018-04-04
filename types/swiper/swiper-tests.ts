/// <reference types="jquery" />

//
// Main demos
//

// 01-default.html
function defaultDemo() {
    const swiper = new Swiper('.swiper-container');
}
// 02-responsive.html
function responsive() {
    const swiper = new Swiper('.swiper-container', {
        pagination: '.swiper-pagination',
        paginationClickable: true
    });
}
// 03-vertical.html
function vertical() {
    const swiper = new Swiper('.swiper-container', {
        pagination: '.swiper-pagination',
        paginationClickable: true,
        direction: 'vertical'
    });
}
// 04-space-between.html
function spaceBetween() {
    const swiper = new Swiper('.swiper-container', {
        pagination: '.swiper-pagination',
        paginationClickable: true,
        spaceBetween: 30,
    });
}
// 05-slides-per-view.html
function slidesPerView() {
    const swiper = new Swiper('.swiper-container', {
        pagination: '.swiper-pagination',
        slidesPerView: 3,
        paginationClickable: true,
        spaceBetween: 30
    });
}
// 06-slides-per-view-auto.html
function slidesPerViewAuto() {
    const swiper = new Swiper('.swiper-container', {
        pagination: '.swiper-pagination',
        slidesPerView: 'auto',
        paginationClickable: true,
        spaceBetween: 30
    });
}
// 07-centered.html
function centered() {
    const swiper = new Swiper('.swiper-container', {
        pagination: '.swiper-pagination',
        slidesPerView: 4,
        centeredSlides: true,
        paginationClickable: true,
        spaceBetween: 30
    });
}
// 08-centered-auto.html
function centeredAuto() {
    const swiper = new Swiper('.swiper-container', {
        pagination: '.swiper-pagination',
        slidesPerView: 'auto',
        centeredSlides: true,
        paginationClickable: true,
        spaceBetween: 30
    });
}
// 09-freemode.html
function freemode() {
    const swiper = new Swiper('.swiper-container', {
        pagination: '.swiper-pagination',
        slidesPerView: 3,
        paginationClickable: true,
        spaceBetween: 30,
        freeMode: true
    });
}
// 10-slides-per-column.html
function slidesPerColumn() {
    const swiper = new Swiper('.swiper-container', {
        pagination: '.swiper-pagination',
        slidesPerView: 3,
        slidesPerColumn: 2,
        paginationClickable: true,
        spaceBetween: 30
    });
}
// 11-nested.html
function nested() {
    const swiperH = new Swiper('.swiper-container-h', {
        pagination: '.swiper-pagination-h',
        paginationClickable: true,
        spaceBetween: 50
    });
    const swiperV = new Swiper('.swiper-container-v', {
        pagination: '.swiper-pagination-v',
        paginationClickable: true,
        direction: 'vertical',
        spaceBetween: 50
    });
}
// 12-grab-cursor.html
function grabCursor() {
    const swiper = new Swiper('.swiper-container', {
        pagination: '.swiper-pagination',
        slidesPerView: 4,
        centeredSlides: true,
        paginationClickable: true,
        spaceBetween: 30,
        grabCursor: true
    });
}
// 13-scrollbar.html
function scrollbar() {
    const swiper = new Swiper('.swiper-container', {
        scrollbar: '.swiper-scrollbar',
        scrollbarHide: true,
        slidesPerView: 'auto',
        centeredSlides: true,
        spaceBetween: 30,
        grabCursor: true
    });
}
// 14-nav-arrows.html
function navArrows() {
    const swiper = new Swiper('.swiper-container', {
        pagination: '.swiper-pagination',
        paginationClickable: true,
        nextButton: '.swiper-button-next',
        prevButton: '.swiper-button-prev',
        spaceBetween: 30
    });
}
// 15-infinite-loop.html
function infiniteLoop() {
    const swiper = new Swiper('.swiper-container', {
        pagination: '.swiper-pagination',
        nextButton: '.swiper-button-next',
        prevButton: '.swiper-button-prev',
        slidesPerView: 1,
        paginationClickable: true,
        spaceBetween: 30,
        loop: true
    });
}
// 16-effect-fade.html
function effectFade() {
    const swiper = new Swiper('.swiper-container', {
        pagination: '.swiper-pagination',
        paginationClickable: true,
        nextButton: '.swiper-button-next',
        prevButton: '.swiper-button-prev',
        spaceBetween: 30,
        effect: 'fade'
    });
}
// 17-effect-cube.html
function effectCube() {
    const swiper = new Swiper('.swiper-container', {
        pagination: '.swiper-pagination',
        effect: 'cube',
        grabCursor: true,
        cube: {
            shadow: true,
            slideShadows: true,
            shadowOffset: 20,
            shadowScale: 0.94
        }
    });
}
// 18-effect-coverflow.html
function effectCoverflow() {
    const swiper = new Swiper('.swiper-container', {
        pagination: '.swiper-pagination',
        effect: 'coverflow',
        grabCursor: true,
        centeredSlides: true,
        slidesPerView: 'auto',
        coverflow: {
            rotate: 50,
            stretch: 0,
            depth: 100,
            modifier: 1,
            slideShadows: true
        }
    });
}
// 19-keyboard-control.html
function keyboardControl() {
    const swiper = new Swiper('.swiper-container', {
        pagination: '.swiper-pagination',
        slidesPerView: 1,
        paginationClickable: true,
        spaceBetween: 30,
        keyboardControl: true,
        nextButton: '.swiper-button-next',
        prevButton: '.swiper-button-prev',
    });
}
// 20-mousewheel-control.html
function mousewheelControl() {
    const swiper = new Swiper('.swiper-container', {
        pagination: '.swiper-pagination',
        direction: 'vertical',
        slidesPerView: 1,
        paginationClickable: true,
        spaceBetween: 30,
        mousewheelControl: true
    });
}
// 21-autoplay.html
function autoplay() {
    const swiper = new Swiper('.swiper-container', {
        pagination: '.swiper-pagination',
        nextButton: '.swiper-button-next',
        prevButton: '.swiper-button-prev',
        paginationClickable: true,
        spaceBetween: 30,
        centeredSlides: true,
        autoplay: 2500,
        autoplayDisableOnInteraction: false
    });
}
// 22-dynamic-slides.html
function dynamicSlides() {
    let appendNumber = 4;
    let prependNumber = 1;
    const swiper = new Swiper('.swiper-container', {
        pagination: '.swiper-pagination',
        nextButton: '.swiper-button-next',
        prevButton: '.swiper-button-prev',
        slidesPerView: 3,
        centeredSlides: true,
        paginationClickable: true,
        spaceBetween: 30,
    });
    document.querySelector('.prepend-2-slides').addEventListener('click', e => {
        e.preventDefault();
        swiper.prependSlide([
            `<div class="swiper-slide">Slide ${--prependNumber}</div>`,
            `<div class="swiper-slide">Slide ${--prependNumber}</div>`
        ]);
    });
    document.querySelector('.prepend-slide').addEventListener('click', e => {
        e.preventDefault();
        swiper.prependSlide(`<div class="swiper-slide">Slide ${--prependNumber}</div>`);
    });
    document.querySelector('.append-slide').addEventListener('click', e => {
        e.preventDefault();
        swiper.appendSlide(`<div class="swiper-slide">Slide ${++appendNumber}</div>`);
    });
    document.querySelector('.append-2-slides').addEventListener('click', e => {
        e.preventDefault();
        swiper.appendSlide([
            `<div class="swiper-slide">Slide ${++appendNumber}</div>`,
            `<div class="swiper-slide">Slide ${++appendNumber}</div>`
        ]);
    });
}
// 23-thumbs-gallery-loop.html
function thumbsGalleryLoop() {
    const galleryTop = new Swiper('.gallery-top', {
        nextButton: '.swiper-button-next',
        prevButton: '.swiper-button-prev',
        spaceBetween: 10,
        loop: true,
        loopedSlides: 5, // looped slides should be the same
    });
    const galleryThumbs = new Swiper('.gallery-thumbs', {
        spaceBetween: 10,
        slidesPerView: 4,
        touchRatio: 0.2,
        loop: true,
        loopedSlides: 5, // looped slides should be the same
        slideToClickedSlide: true
    });
    galleryTop.params.control = galleryThumbs;
    galleryThumbs.params.control = galleryTop;
}
// 23-thumbs-gallery.html
function thumbsGallery() {
    const galleryTop = new Swiper('.gallery-top', {
        nextButton: '.swiper-button-next',
        prevButton: '.swiper-button-prev',
        spaceBetween: 10,
    });
    const galleryThumbs = new Swiper('.gallery-thumbs', {
        spaceBetween: 10,
        centeredSlides: true,
        slidesPerView: 'auto',
        touchRatio: 0.2,
        slideToClickedSlide: true
    });
    galleryTop.params.control = galleryThumbs;
    galleryThumbs.params.control = galleryTop;
}
// 24-multiple-swipers.html
function multipleSwipers() {
    const swiper1 = new Swiper('.swiper1', {
        pagination: '.swiper-pagination1',
        paginationClickable: true,
        spaceBetween: 30,
    });
    const swiper2 = new Swiper('.swiper2', {
        pagination: '.swiper-pagination2',
        paginationClickable: true,
        spaceBetween: 30,
    });
    const swiper3 = new Swiper('.swiper3', {
        pagination: '.swiper-pagination3',
        paginationClickable: true,
        spaceBetween: 30,
    });
}
// 25-hash-navigation.html
function hashNavigation() {
    const swiper = new Swiper('.swiper-container', {
        pagination: '.swiper-pagination',
        paginationClickable: true,
        nextButton: '.swiper-button-next',
        prevButton: '.swiper-button-prev',
        spaceBetween: 30,
        hashnav: true,
        hashnavWatchState: true
    });
}
// 26-rtl.html
function rtl() {
    const swiper = new Swiper('.swiper-container', {
        pagination: '.swiper-pagination',
        paginationClickable: true,
        nextButton: '.swiper-button-next',
        prevButton: '.swiper-button-prev'
    });
}
// 27-jquery.html
function jquery() {
    const swiper = new Swiper('.swiper-container', {
        pagination: '.swiper-pagination',
        paginationClickable: true,
        nextButton: '.swiper-button-next',
        prevButton: '.swiper-button-prev'
    });
}
// 28-parallax.html
function parallax() {
    const swiper = new Swiper('.swiper-container', {
        pagination: '.swiper-pagination',
        paginationClickable: true,
        nextButton: '.swiper-button-next',
        prevButton: '.swiper-button-prev',
        parallax: true,
        speed: 600,
    });
}
// 29-custom-pagination.html
function customPagination() {
    const swiper = new Swiper('.swiper-container', {
        pagination: '.swiper-pagination',
        paginationClickable: true,
        paginationBulletRender(swiper, index, className) {
            return `<span class="${className}">${index + 1}</span>`;
        }
    });
}
// 30-lazy-load-images.html
function lazyLoadImages() {
    const swiper = new Swiper('.swiper-container', {
        nextButton: '.swiper-button-next',
        prevButton: '.swiper-button-prev',
        pagination: '.swiper-pagination',
        paginationClickable: true,
        // Disable preloading of all images
        preloadImages: false,
        // Enable lazy loading
        lazyLoading: true
    });
}
// 31-custom-plugin.html
function customPlugin() {
    /* ========
    Debugger plugin, simple demo plugin to console.log some of callbacks
    ======== */
    Swiper.prototype.plugins.debugger = (swiper: any, params: any) => {
        if (!params) return;
        // Need to return object with properties that names are the same as callbacks
        return {
            onInit(swiper: any) {
                console.log('onInit');
            },
            onClick(swiper: any, e: any) {
                console.log('onClick');
            },
            onTap(swiper: any, e: any) {
                console.log('onTap');
            },
            onDoubleTap(swiper: any, e: any) {
                console.log('onDoubleTap');
            },
            onSliderMove(swiper: any, e: any) {
                console.log('onSliderMove');
            },
            onSlideChangeStart(swiper: any) {
                console.log('onSlideChangeStart');
            },
            onSlideChangeEnd(swiper: any) {
                console.log('onSlideChangeEnd');
            },
            onTransitionStart(swiper: any) {
                console.log('onTransitionStart');
            },
            onTransitionEnd(swiper: any) {
                console.log('onTransitionEnd');
            },
            onReachBeginning(swiper: any) {
                console.log('onReachBeginning');
            },
            onReachEnd(swiper: any) {
                console.log('onReachEnd');
            }
        };
    };
}
// 32-scroll-container.html
function scrollContainer() {
    const swiper = new Swiper('.swiper-container', {
        scrollbar: '.swiper-scrollbar',
        direction: 'vertical',
        slidesPerView: 'auto',
        mousewheelControl: true,
        freeMode: true
    });
}
// 32-slideable-menu.html
function slideableMenu() {
    const toggleMenu = () => {
        if (swiper.previousIndex === 0)
            swiper.slidePrev();
    };
    const menuButton = document.getElementsByClassName('menu-button')[0];
    const swiper = new Swiper('.swiper-container', {
        slidesPerView: 'auto',
        initialSlide: 1,
        resistanceRatio: .00000000000001,
        onSlideChangeStart: (slider) => {
            if (slider.activeIndex === 0) {
                menuButton.classList.add('cross');
                menuButton.removeEventListener('click', toggleMenu, false);
            } else
                menuButton.classList.remove('cross');
        },
        onSlideChangeEnd: (slider) => {
            if (slider.activeIndex === 0)
                menuButton.removeEventListener('click', toggleMenu, false);
            else
                menuButton.addEventListener('click', toggleMenu, false);
        },
        slideToClickedSlide: true
    });
}
// 33-responsive-breakpoints.html
function responsiveBreakpoints() {
    const swiper = new Swiper('.swiper-container', {
        pagination: '.swiper-pagination',
        paginationClickable: true,
        slidesPerView: 5,
        spaceBetween: 50,
        breakpoints: {
            1024: {
                slidesPerView: 4,
                spaceBetween: 40
            },
            768: {
                slidesPerView: 3,
                spaceBetween: 30
            },
            640: {
                slidesPerView: 2,
                spaceBetween: 20
            },
            320: {
                slidesPerView: 1,
                spaceBetween: 10
            }
        }
    });
}
// 34-autoheight.html
function autoheight() {
    const swiper = new Swiper('.swiper-container', {
        pagination: '.swiper-pagination',
        paginationClickable: true,
        nextButton: '.swiper-button-next',
        prevButton: '.swiper-button-prev',
        autoHeight: true, // enable auto height
    });
}
// 35-effect-flip.html
function effectFlip() {
    const swiper = new Swiper('.swiper-container', {
        pagination: '.swiper-pagination',
        effect: 'flip',
        grabCursor: true,
        nextButton: '.swiper-button-next',
        prevButton: '.swiper-button-prev'
    });
}
// 36-pagination-fraction.html
function paginationFraction() {
    const swiper = new Swiper('.swiper-container', {
        nextButton: '.swiper-button-next',
        prevButton: '.swiper-button-prev',
        pagination: '.swiper-pagination',
        paginationType: 'fraction'
    });
}
// 37-pagination-progress.html
function paginationProgress() {
    const swiper = new Swiper('.swiper-container', {
        nextButton: '.swiper-button-next',
        prevButton: '.swiper-button-prev',
        pagination: '.swiper-pagination',
        paginationType: 'progress'
    });
}
// 38-history.html
function historyDemo() {
    const swiper = new Swiper('.swiper-container', {
        spaceBetween: 50,
        slidesPerView: 2,
        centeredSlides: true,
        slideToClickedSlide: true,
        grabCursor: true,
        nextButton: '.swiper-button-next',
        prevButton: '.swiper-button-prev',
        scrollbar: '.swiper-scrollbar',
        pagination: '.swiper-pagination',
        history: 'slide',
    });
}
// 38-jquery-ie9-loop.html
function jqueryIe9Loop() {
    const swiper = new Swiper('.swiper-container', {
        loop: true,
        pagination: '.swiper-pagination',
        paginationClickable: true,
        nextButton: '.swiper-button-next',
        prevButton: '.swiper-button-prev'
    });
}
// 39-zoom.html
function zoom() {
    const swiper = new Swiper('.swiper-container', {
        zoom: true,
        pagination: '.swiper-pagination',
        nextButton: '.swiper-button-next',
        prevButton: '.swiper-button-prev'
    });
}
