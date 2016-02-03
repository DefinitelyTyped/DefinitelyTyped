/// <reference path="swiper.d.ts" />
/// <reference path="../jquery/jquery.d.ts" />

// 01-default.html
function testDefault() {
	var swiper = new Swiper('.swiper-container');
}

// 02-responsive.html
function testResponsive() {
	var swiper = new Swiper('.swiper-container', {
		pagination: '.swiper-pagination',
		paginationClickable: true
	});
}

// 03-vertical.html
function testVertical() {
	var swiper = new Swiper('.swiper-container', {
		pagination: '.swiper-pagination',
		paginationClickable: true,
		direction: 'vertical'
	});
}

// 04-space-between.html
function testSpaceBetween() {
	var swiper = new Swiper('.swiper-container', {
		pagination: '.swiper-pagination',
		paginationClickable: true,
		spaceBetween: 30,
	});
}

// 05-slides-per-view.html
function testSlidesPerView() {
	var swiper = new Swiper('.swiper-container', {
		pagination: '.swiper-pagination',
		slidesPerView: 3,
		paginationClickable: true,
		spaceBetween: 30
	});
}

// 06-slides-per-view-auto.html
function testSlidesPerViewAuto() {
	var swiper = new Swiper('.swiper-container', {
		pagination: '.swiper-pagination',
		slidesPerView: 'auto',
		paginationClickable: true,
		spaceBetween: 30
	});
}

// 07-centered.html
function testCentered() {
	var swiper = new Swiper('.swiper-container', {
		pagination: '.swiper-pagination',
		slidesPerView: 4,
		centeredSlides: true,
		paginationClickable: true,
		spaceBetween: 30
	});
}

// 08-centered-auto.html
function testCenteredAuto() {
	var swiper = new Swiper('.swiper-container', {
		pagination: '.swiper-pagination',
		slidesPerView: 'auto',
		centeredSlides: true,
		paginationClickable: true,
		spaceBetween: 30
	});
}

// 09-freemode.html
function testFreemode() {
	var swiper = new Swiper('.swiper-container', {
		pagination: '.swiper-pagination',
		slidesPerView: 3,
		paginationClickable: true,
		spaceBetween: 30,
		freeMode: true
	});
}

// 10-slides-per-column.html
function testSlidesPerColumn() {
	var swiper = new Swiper('.swiper-container', {
		pagination: '.swiper-pagination',
		slidesPerView: 3,
		slidesPerColumn: 2,
		paginationClickable: true,
		spaceBetween: 30
	});
}

// 11-nested.html
function testNested() {
	var swiperH = new Swiper('.swiper-container-h', {
		pagination: '.swiper-pagination-h',
		paginationClickable: true,
		spaceBetween: 50
	});
	var swiperV = new Swiper('.swiper-container-v', {
		pagination: '.swiper-pagination-v',
		paginationClickable: true,
		direction: 'vertical',
		spaceBetween: 50
	});
}

// 12-grab-cursor.html
function testGrabCursor() {
	var swiper = new Swiper('.swiper-container', {
		pagination: '.swiper-pagination',
		slidesPerView: 4,
		centeredSlides: true,
		paginationClickable: true,
		spaceBetween: 30,
		grabCursor: true
	});
}

// 13-scrollbar.html
function testScrollbar() {
	var swiper = new Swiper('.swiper-container', {
		scrollbar: '.swiper-scrollbar',
		scrollbarHide: true,
		slidesPerView: 'auto',
		centeredSlides: true,
		spaceBetween: 30,
		grabCursor: true
	});
}

// 14-nav-arrows.html
function testNavArrows() {
	var swiper = new Swiper('.swiper-container', {
		pagination: '.swiper-pagination',
		paginationClickable: true,
		nextButton: '.swiper-button-next',
		prevButton: '.swiper-button-prev',
		spaceBetween: 30
	});
}

// 15-infinite-loop.html
function testInfiniteLoop() {
	var swiper = new Swiper('.swiper-container', {
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
function testEffectFade() {
	var swiper = new Swiper('.swiper-container', {
		pagination: '.swiper-pagination',
		paginationClickable: true,
		nextButton: '.swiper-button-next',
		prevButton: '.swiper-button-prev',
		spaceBetween: 30,
		effect: 'fade'
	});
}

// 17-effect-cube.html
function testEffectCube() {
	var swiper = new Swiper('.swiper-container', {
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
function testEffectCoverflow() {
	var swiper = new Swiper('.swiper-container', {
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
function testKeyboardControl() {
	var swiper = new Swiper('.swiper-container', {
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
function testMousewheelControl() {
	var swiper = new Swiper('.swiper-container', {
		pagination: '.swiper-pagination',
		direction: 'vertical',
		slidesPerView: 1,
		paginationClickable: true,
		spaceBetween: 30,
		mousewheelControl: true
	});
}

// 21-autoplay.html
function testAutoplay() {
	var swiper = new Swiper('.swiper-container', {
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
function testDynamicSlides() {
	var appendNumber = 4;
	var prependNumber = 1;
	var swiper = new Swiper('.swiper-container', {
		pagination: '.swiper-pagination',
		nextButton: '.swiper-button-next',
		prevButton: '.swiper-button-prev',
		slidesPerView: 3,
		centeredSlides: true,
		paginationClickable: true,
		spaceBetween: 30,
	});
	document.querySelector('.prepend-2-slides').addEventListener('click', function (e) {
		e.preventDefault();
		swiper.prependSlide([
			'<div class="swiper-slide">Slide ' + (--prependNumber) + '</div>',
			'<div class="swiper-slide">Slide ' + (--prependNumber) + '</div>'
		]);
	});
	document.querySelector('.prepend-slide').addEventListener('click', function (e) {
		e.preventDefault();
		swiper.prependSlide('<div class="swiper-slide">Slide ' + (--prependNumber) + '</div>');
	});
	document.querySelector('.append-slide').addEventListener('click', function (e) {
		e.preventDefault();
		swiper.appendSlide('<div class="swiper-slide">Slide ' + (++appendNumber) + '</div>');
	});
	document.querySelector('.append-2-slides').addEventListener('click', function (e) {
		e.preventDefault();
		swiper.appendSlide([
			'<div class="swiper-slide">Slide ' + (++appendNumber) + '</div>',
			'<div class="swiper-slide">Slide ' + (++appendNumber) + '</div>'
		]);
	});
}

// 23-thumbs-gallery.html
function testThumbsGallery() {
	var galleryTop = new Swiper('.gallery-top', {
		nextButton: '.swiper-button-next',
		prevButton: '.swiper-button-prev',
		spaceBetween: 10,
	});
	var galleryThumbs = new Swiper('.gallery-thumbs', {
		spaceBetween: 10,
		centeredSlides: true,
		slidesPerView: 'auto',
		touchRatio: 0.2,
		slideToClickedSlide: true
	});
	galleryTop.params.control = galleryThumbs;
	galleryThumbs.params.control = galleryTop;
}

// 23-thumbs-gallery-loop.html
function testThumbsGalleryLoop() {
	var galleryTop = new Swiper('.gallery-top', {
		nextButton: '.swiper-button-next',
		prevButton: '.swiper-button-prev',
		spaceBetween: 10,
		loop: true,
		loopedSlides: 5,
	});
	var galleryThumbs = new Swiper('.gallery-thumbs', {
		spaceBetween: 10,
		slidesPerView: 4,
		touchRatio: 0.2,
		loop: true,
		loopedSlides: 5,
		slideToClickedSlide: true
	});
	galleryTop.params.control = galleryThumbs;
	galleryThumbs.params.control = galleryTop;
}

// 24-multiple-swipers.html
function testMultipleSwipers() {
	var swiper1 = new Swiper('.swiper1', {
		pagination: '.swiper-pagination1',
		paginationClickable: true,
		spaceBetween: 30,
	});
	var swiper2 = new Swiper('.swiper2', {
		pagination: '.swiper-pagination2',
		paginationClickable: true,
		spaceBetween: 30,
	});
	var swiper3 = new Swiper('.swiper3', {
		pagination: '.swiper-pagination3',
		paginationClickable: true,
		spaceBetween: 30,
	});
}

// 25-hash-navigation.html
function testHashNavigation() {
	var swiper = new Swiper('.swiper-container', {
		pagination: '.swiper-pagination',
		paginationClickable: true,
		nextButton: '.swiper-button-next',
		prevButton: '.swiper-button-prev',
		spaceBetween: 30,
		hashnav: true
	});
}

// 26-rtl.html
function testRtl() {
	var swiper = new Swiper('.swiper-container', {
        pagination: '.swiper-pagination',
        paginationClickable: true,
        nextButton: '.swiper-button-next',
        prevButton: '.swiper-button-prev'
    });
}

// 27-jquery.html
function testJquery() {
	var swiper = new Swiper('.swiper-container', {
        pagination: '.swiper-pagination',
        paginationClickable: true,
        nextButton: '.swiper-button-next',
        prevButton: '.swiper-button-prev'
    });
}

// 28-parallax.html
function testParallax() {
	var swiper = new Swiper('.swiper-container', {
        pagination: '.swiper-pagination',
        paginationClickable: true,
        nextButton: '.swiper-button-next',
        prevButton: '.swiper-button-prev',
        parallax: true,
        speed: 600,
    });
}

// 29-custom-pagination.html
function testCustomPagination() {
	var swiper = new Swiper('.swiper-container', {
        pagination: '.swiper-pagination',
        paginationClickable: true,
        paginationBulletRender: function (index, className) {
            return '<span class="' + className + '">' + (index + 1) + '</span>';
        }
    });
}

// 30-lazy-load-images.html
function testLazyLoadImages() {
	var swiper = new Swiper('.swiper-container', {
        nextButton: '.swiper-button-next',
        prevButton: '.swiper-button-prev',
        pagination: '.swiper-pagination',
        paginationClickable: true,
        preloadImages: false,
        lazyLoading: true
    });
}

// 31-custom-plugin.html
function testCustomPlugin() {
    Swiper.prototype.plugins.debugger = function (swiper) {
        return {
            onInit: function (swiper) {
                console.log('onInit');
            },
            onClick: function (swiper, e) {
                console.log('onClick');
            },
            onTap: function (swiper, e) {
                console.log('onTap');
            },
            onDoubleTap: function (swiper, e) {
                console.log('onDoubleTap');
            },
            onSliderMove: function (swiper, e) {
                console.log('onSliderMove');
            },
            onSlideChangeStart: function (swiper) {
                console.log('onSlideChangeStart');
            },
            onSlideChangeEnd: function (swiper) {
                console.log('onSlideChangeEnd');
            },
            onTransitionStart: function (swiper) {
                console.log('onTransitionStart');
            },
            onTransitionEnd: function (swiper) {
                console.log('onTransitionEnd');
            },
            onReachBeginning: function (swiper) {
                console.log('onReachBeginning');
            },
            onReachEnd: function (swiper) {
                console.log('onReachEnd');
            }
        };
    };

    var swiper = new Swiper('.swiper-container', {
        pagination: '.swiper-pagination',
        paginationClickable: true,
        nextButton: '.swiper-button-next',
        prevButton: '.swiper-button-prev'
    });
}

// 32-scroll-container.html
function testScrollContainer() {
	var swiper = new Swiper('.swiper-container', {
        scrollbar: '.swiper-scrollbar',
        direction: 'vertical',
        slidesPerView: 'auto',
        mousewheelControl: true,
        freeMode: true
    });
}

// 33-responsive-breakpoints.html
function testResponsiveBreakpoints() {
	var swiper = new Swiper('.swiper-container', {
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
function testAutoheight() {
	var swiper = new Swiper('.swiper-container', {
        pagination: '.swiper-pagination',
        paginationClickable: true,
        nextButton: '.swiper-button-next',
        prevButton: '.swiper-button-prev',
        autoHeight: true,
    });
}

// 35-effect-flip.html
function testEffectFlip() {
	var swiper = new Swiper('.swiper-container', {
        pagination: '.swiper-pagination',
        effect: 'flip',
        grabCursor: true,
        nextButton: '.swiper-button-next',
        prevButton: '.swiper-button-prev'
    });
}

// 36-pagination-fraction.html
function testPaginationFraction() {
	var swiper = new Swiper('.swiper-container', {
        nextButton: '.swiper-button-next',
        prevButton: '.swiper-button-prev',
        pagination: '.swiper-pagination',
        paginationType: 'fraction'
    });
}

// 37-pagination-progress.html
function testPaginationProgress() {
	var swiper = new Swiper('.swiper-container', {
        nextButton: '.swiper-button-next',
        prevButton: '.swiper-button-prev',
        pagination: '.swiper-pagination',
        paginationType: 'fraction'
    });
}