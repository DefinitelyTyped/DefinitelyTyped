/**
 * Main demos
 * for more details, please see http://idangero.us/swiper/demos/
 * @author Eugene Matseruk
 */
import Swiper from 'swiper';
import { Swiper as SwiperESM, Navigation, History } from 'swiper/js/swiper.esm';

const containerSelector = '.swiper-container';

/**
 *  010-default
 */
function defaultDemo() {
    const swiper = new Swiper(containerSelector);
    const swiper2 = new SwiperESM(containerSelector);
}
/**
 * 020-navigation
 */
function navigation() {
    const swiper = new Swiper(containerSelector, {
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },
    });

    swiper.navigation.update();
}

/**
 * 030-pagination
 */
function pagination() {
    const swiper = new Swiper(containerSelector, {
        pagination: {
            el: '.swiper-pagination',
        },
    });

    swiper.pagination.update();
}

/**
 * 040-pagination-dynamic
 */
function paginationDynamic() {
    const swiper = new Swiper(containerSelector, {
        pagination: {
            el: '.swiper-pagination',
            dynamicBullets: true,
        },
    });

    swiper.pagination.update();
}

/**
 * 050-progress-pagination
 */
function paginationProgress() {
    const swiper = new Swiper(containerSelector, {
        pagination: {
            el: '.swiper-pagination',
            type: 'progressbar',
        },
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },
    });

    swiper.pagination.update();
    swiper.navigation.update();
}

/**
 * 060-pagination-fraction
 */
function paginationFraction() {
    const swiper = new Swiper(containerSelector, {
        pagination: {
            el: '.swiper-pagination',
            type: 'fraction',
        },
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },
    });

    swiper.pagination.update();
    swiper.navigation.update();
}

/**
 * 070-pagination-custom
 */
function paginationCustom() {
    const swiper = new Swiper(containerSelector, {
        pagination: {
            el: '.swiper-pagination',
            clickable: true,
            renderBullet: (index, className) => {
                return `<span class="${className}">${index + 1}</span>`;
            },
        },
    });

    swiper.pagination.render();
}

/**
 * 080-scrollbar
 */
function scrollbar() {
    const swiper = new Swiper(containerSelector, {
        scrollbar: {
            el: '.swiper-scrollbar',
            hide: true,
        },
    });

    swiper.scrollbar.updateSize();
}

/**
 * Vertical Slider
 */
function verticalSlider() {
    const swiper = new Swiper(containerSelector, {
        direction: 'vertical',
        pagination: {
            el: '.swiper-pagination',
            clickable: true,
        },
    });
}

/**
 * Space Between Slides
 */
function spaceBetween() {
    const swiper = new Swiper(containerSelector, {
        spaceBetween: 30,
        pagination: {
            el: '.swiper-pagination',
            clickable: true,
        },
    });
}

/**
 * Multiple Slides Per View
 */
function multipleSlidesPerView() {
    const swiper = new Swiper(containerSelector, {
        slidesPerView: 3,
        spaceBetween: 30,
        pagination: {
            el: '.swiper-pagination',
            clickable: true,
        },
    });
}

/**
 * Auto Slides Per View / Carousel Mode
 */
function autoSlidesPerViewAndCarouserMode() {
    const swiper = new Swiper(containerSelector, {
        slidesPerView: 'auto',
        spaceBetween: 30,
        pagination: {
            el: '.swiper-pagination',
            clickable: true,
        },
    });
}

/**
 * Centered Slides
 */
function centeredSlides() {
    const swiper = new Swiper(containerSelector, {
        slidesPerView: 4,
        spaceBetween: 30,
        centeredSlides: true,
        pagination: {
            el: '.swiper-pagination',
            clickable: true,
        },
    });
}

/**
 * Centered Slides + Auto Slides Per View
 */
function centeredSlidesAndAutoSlidesPerView() {
    const swiper = new Swiper(containerSelector, {
        slidesPerView: 'auto',
        centeredSlides: true,
        spaceBetween: 30,
        pagination: {
            el: '.swiper-pagination',
            clickable: true,
        },
    });
}

/**
 * Free Mode / No Fixed Positions
 */
function freeModeAndNoFixedPositions() {
    const swiper = new Swiper(containerSelector, {
        slidesPerView: 3,
        spaceBetween: 30,
        freeMode: true,
        pagination: {
            el: '.swiper-pagination',
            clickable: true,
        },
    });
}

/**
 * Scroll Container
 */
function scrollContainer() {
    const swiper = new Swiper(containerSelector, {
        direction: 'vertical',
        slidesPerView: 'auto',
        freeMode: true,
        scrollbar: {
            el: '.swiper-scrollbar',
        },
        mousewheel: true,
    });
}

/**
 * Multi Row Slides Layout
 */
function multiRowSlides() {
    const swiper = new Swiper(containerSelector, {
        slidesPerView: 3,
        slidesPerColumn: 2,
        spaceBetween: 30,
        pagination: {
            el: '.swiper-pagination',
            clickable: true,
        },
    });
}

/**
 * Nested Swipers
 */
function nestedSwipers() {
    const swiperH = new Swiper('.swiper-container-h', {
        spaceBetween: 50,
        pagination: {
            el: '.swiper-pagination-h',
            clickable: true,
        },
    });
    const swiperV = new Swiper('.swiper-container-v', {
        direction: 'vertical',
        spaceBetween: 50,
        pagination: {
            el: '.swiper-pagination-v',
            clickable: true,
        },
    });
}
/**
 * Grab Cursor
 */
function grabCursor() {
    const swiper = new Swiper(containerSelector, {
        slidesPerView: 4,
        centeredSlides: true,
        spaceBetween: 30,
        grabCursor: true,
        pagination: {
            el: '.swiper-pagination',
            clickable: true,
        },
    });
}

/**
 * Loop Mode / Infinite Loop
 */
function loopMode() {
    const swiper = new Swiper(containerSelector, {
        slidesPerView: 1,
        spaceBetween: 30,
        loop: true,
        pagination: {
            el: '.swiper-pagination',
            clickable: true,
        },
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },
    });
}

/**
 * Loop Mode with Multiple Slides Per Group
 */
function loopModeWithMultipleSlides() {
    const swiper = new Swiper(containerSelector, {
        slidesPerView: 3,
        spaceBetween: 30,
        slidesPerGroup: 3,
        loop: true,
        loopFillGroupWithBlank: true,
        pagination: {
            el: '.swiper-pagination',
            clickable: true,
        },
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },
    });
}

/**
 * Fade Effect
 */
function fadeEffect() {
    const swiper = new Swiper(containerSelector, {
        spaceBetween: 30,
        effect: 'fade',
        pagination: {
            el: '.swiper-pagination',
            clickable: true,
        },
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },
    });
}

/**
 * 3D Cube Effect
 */
function cube3dEffect() {
    const swiper = new Swiper(containerSelector, {
        effect: 'cube',
        grabCursor: true,
        cubeEffect: {
            shadow: true,
            slideShadows: true,
            shadowOffset: 20,
            shadowScale: 0.94,
        },
        pagination: {
            el: '.swiper-pagination',
        },
    });
}

/**
 * 3D Coverflow Effect
 */
function coverflow3dEffect() {
    const swiper = new Swiper(containerSelector, {
        effect: 'coverflow',
        grabCursor: true,
        centeredSlides: true,
        slidesPerView: 'auto',
        coverflowEffect: {
            rotate: 50,
            stretch: 0,
            depth: 100,
            modifier: 1,
            slideShadows: true,
        },
        pagination: {
            el: '.swiper-pagination',
        },
    });
}

/**
 * 3D Flip Effect
 */
function flip3dEffect() {
    const swiper = new Swiper(containerSelector, {
        effect: 'flip',
        grabCursor: true,
        pagination: {
            el: '.swiper-pagination',
        },
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },
    });
}

/**
 * Keyboard Control (Open in new window)
 */
function keyboardControl() {
    const swiper = new Swiper(containerSelector, {
        slidesPerView: 1,
        spaceBetween: 30,
        keyboard: {
            enabled: true,
        },
        pagination: {
            el: '.swiper-pagination',
            clickable: true,
        },
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },
    });
}

/**
 * Mousewheel Control
 */
function mouseWheelControl() {
    const swiper = new Swiper(containerSelector, {
        direction: 'vertical',
        slidesPerView: 1,
        spaceBetween: 30,
        mousewheel: true,
        pagination: {
            el: '.swiper-pagination',
            clickable: true,
        },
    });
}

/**
 * Autoplay
 */
function autoplay() {
    const swiper = new Swiper(containerSelector, {
        spaceBetween: 30,
        centeredSlides: true,
        autoplay: {
            delay: 2500,
            disableOnInteraction: false,
        },
        pagination: {
            el: '.swiper-pagination',
            clickable: true,
        },
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },
    });
}

/**
 * Dynamic Slides
 */
function dynamicSlides() {
    let appendNumber = 4;
    let prependNumber = 1;
    const swiper = new Swiper(containerSelector, {
        slidesPerView: 3,
        centeredSlides: true,
        spaceBetween: 30,
        pagination: {
            el: '.swiper-pagination',
            clickable: true,
        },
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },
    });
    document.querySelector('.prepend-2-slides').addEventListener('click', e => {
        e.preventDefault();
        swiper.prependSlide([
            `<div class="swiper-slide">Slide ${--prependNumber}</div>`,
            `<div class="swiper-slide">Slide ${--prependNumber}</div>`,
        ]);
    });
    document.querySelector('.prepend-slide').addEventListener('click', e => {
        e.preventDefault();
        swiper.prependSlide(`<div class="swiper-slide">Slide ${--prependNumber}</div>`);
    });
    document.querySelector('.append-slide').addEventListener('click', e => {
        e.preventDefault();
        swiper.appendSlide(`<div class="swiper-slide">Slide ${--appendNumber}</div>`);
    });
    document.querySelector('.append-2-slides').addEventListener('click', e => {
        e.preventDefault();
        swiper.appendSlide([
            `<div class="swiper-slide">Slide ${--appendNumber}</div>`,
            `<div class="swiper-slide">Slide ${--appendNumber}</div>`
        ]);
    });
}

/**
 * Thumbs Gallery With Two-way Control
 */
function thumbsGalleryWithTwoWayControl() {
    const galleryTop = new Swiper('.gallery-top', {
        spaceBetween: 10,
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },
    });
    const galleryThumbs = new Swiper('.gallery-thumbs', {
        spaceBetween: 10,
        centeredSlides: true,
        slidesPerView: 'auto',
        touchRatio: 0.2,
        slideToClickedSlide: true,
    });
    galleryTop.controller.control = galleryThumbs;
    galleryThumbs.controller.control = galleryTop;
}

/**
 * Hash Navigation (Open in new window)
 */
function hashNavigation() {
    const swiper = new Swiper(containerSelector, {
        spaceBetween: 30,
        hashNavigation: {
            watchState: true,
        },
        pagination: {
            el: '.swiper-pagination',
            clickable: true,
        },
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },
    });
}

/**
 * History API (Open in new window)
 */
function historyApi() {
    const swiper = new Swiper(containerSelector, {
        spaceBetween: 50,
        slidesPerView: 1,
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },
        pagination: {
            el: '.swiper-pagination',
        },
        history: {
            key: 'slide',
        },
    });
}

/**
 * RTL Layout
 */
function rtlLayout() {
    const swiper = new Swiper(containerSelector, {
        pagination: {
            el: '.swiper-pagination',
            clickable: true,
        },
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },
    });
}

/**
 * Parallax
 */
function parallax() {
    const swiper = new Swiper(containerSelector, {
        speed: 600,
        parallax: true,
        pagination: {
            el: '.swiper-pagination',
            clickable: true,
        },
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },
    });
}

/**
 * Lazy Loading Images
 */
function lazyLoadingImages() {
    const swiper = new Swiper(containerSelector, {
        // Enable lazy loading
        lazy: true,
        pagination: {
            el: '.swiper-pagination',
            clickable: true,
        },
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },
    });
}

/**
 * Responsive Breakpoints
 */
function responsiveBreakpoints() {
    const swiper = new Swiper(containerSelector, {
        slidesPerView: 5,
        spaceBetween: 50,
        // init: false,
        pagination: {
            el: '.swiper-pagination',
            clickable: true,
        },
        breakpoints: {
            1024: {
                slidesPerView: 4,
                spaceBetween: 40,
            },
            768: {
                slidesPerView: 3,
                spaceBetween: 30,
            },
            640: {
                slidesPerView: 2,
                spaceBetween: 20,
            },
            320: {
                slidesPerView: 1,
                spaceBetween: 10,
            }
        }
    });
}

/**
 * Auto Height
 */
function autoHeight() {
    const swiper = new Swiper(containerSelector, {
        autoHeight: true, // enable auto height
        spaceBetween: 20,
        pagination: {
            el: '.swiper-pagination',
            clickable: true,
        },
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },
    });
}

/**
 * Zoom
 */
function zoom() {
    const swiper = new Swiper(containerSelector, {
        zoom: true,
        pagination: {
            el: '.swiper-pagination',
        },
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },
    });

    swiper.zoom.out();
    swiper.zoom.disable();

    if (swiper.zoom.enabled) throw new Error('Zoom should be disabled!');

    swiper.zoom.enable();
    swiper.zoom.in();
}

/**
 * Virtual Slides
 */
function virtualSlides() {
    const slides = [];
    for (let i = 0; i < 600; i += 1) {
        slides.push('Slide ' + (i + 1));
    }

    const swiper = new Swiper(containerSelector, {
        slidesPerView: 3,
        centeredSlides: true,
        spaceBetween: 30,
        pagination: {
            el: '.swiper-pagination',
            type: 'fraction',
        },
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },
        virtual: {
            slides
        },
    });
    document.querySelector('.slide-1').addEventListener('click', e => {
        e.preventDefault();
        swiper.slideTo(0, 0);
    });
    document.querySelector('.slide-250').addEventListener('click', e => {
        e.preventDefault();
        swiper.slideTo(249, 0);
    });
    document.querySelector('.slide-500').addEventListener('click', e => {
        e.preventDefault();
        swiper.slideTo(499, 0);
    });
}

/**
 * Slideable Navigation Drawer
 */
function slideableNavigation() {
    const menuButton = document.querySelector('.menu-button');
    const swiper = new Swiper(containerSelector, {
        slidesPerView: 'auto',
        initialSlide: 1,
        resistanceRatio: 0,
        slideToClickedSlide: true,
        on: {
            init: () => {
                const slider = this;
                menuButton.addEventListener('click', () => {
                    if (slider.activeIndex === 0) {
                        slider.slideNext();
                    } else {
                        slider.slidePrev();
                    }
                }, true);
            },
            slideChange: () => {
                const slider = this;
                if (slider.activeIndex === 0) {
                    menuButton.classList.add('cross');
                } else {
                    menuButton.classList.remove('cross');
                }
            },
        }
    });
}

/**
 * Swiper module instalation.
 */
function staticUseModules() {
    SwiperESM.use([Navigation, History]);

    const swiper = new Swiper(containerSelector);
}
