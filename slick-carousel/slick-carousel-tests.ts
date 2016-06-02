///<reference path="../jquery/jquery.d.ts" />
///<reference path="../slick-carousel/slick-carousel.d.ts" />


// --------------------------------------------------------
// ------------------- WEBSITE EXAMPLE --------------------
// ---------- http://kenwheeler.github.io/slick/ ----------
// --------------------------------------------------------

$('.single-item').slick();

$('.multiple-items').slick({
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 3
});

$('.responsive').slick({
    dots: true,
    infinite: false,
    speed: 300,
    slidesToShow: 4,
    slidesToScroll: 4,
    responsive: [
        {
            breakpoint: 1024,
            settings: {
                slidesToShow: 3,
                slidesToScroll: 3,
                infinite: true,
                dots: true
            }
        },
        {
            breakpoint: 600,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 2
            }
        },
        {
            breakpoint: 480,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1
            }
        }
        // You can unslick at a given breakpoint now by adding:
        // settings: "unslick"
        // instead of a settings object
    ]
});

$('.variable-width').slick({
    dots: true,
    infinite: true,
    speed: 300,
    slidesToShow: 1,
    centerMode: true,
    variableWidth: true
});

$('.one-time').slick({
    dots: true,
    infinite: true,
    speed: 300,
    slidesToShow: 1,
    adaptiveHeight: true
});

$('.center').slick({
    centerMode: true,
    centerPadding: '60px',
    slidesToShow: 3,
    responsive: [
        {
            breakpoint: 768,
            settings: {
                arrows: false,
                centerMode: true,
                centerPadding: '40px',
                slidesToShow: 3
            }
        },
        {
            breakpoint: 480,
            settings: {
                arrows: false,
                centerMode: true,
                centerPadding: '40px',
                slidesToShow: 1
            }
        }
    ]
});

// To use lazy loading, set a data-lazy attribute
// on your img tags and leave off the src
// <img data-lazy="img/lazyfonz1.png"/>

$('.lazy').slick({
    lazyLoad: 'ondemand',
    slidesToShow: 3,
    slidesToScroll: 1
});

$('.autoplay').slick({
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
});

$('.fade').slick({
    dots: true,
    infinite: true,
    speed: 500,
    fade: true,
    cssEase: 'linear'
});

var slideIndex = 1;
$('.add-remove').slick({
    slidesToShow: 3,
    slidesToScroll: 3
});
$('.js-add-slide').on('click', function() {
    slideIndex++;
    $('.add-remove').slick('slickAdd','<div><h3>' + slideIndex + '</h3></div>');
});

$('.js-remove-slide').on('click', function() {
    $('.add-remove').slick('slickRemove', slideIndex - 1);
    if (slideIndex !== 0){
        slideIndex--;
    }
});

$('.filtering').slick({
    slidesToShow: 4,
    slidesToScroll: 4
});

var filtered = false;

$('.js-filter').on('click', function(){
    if (filtered === false) {
        $('.filtering').slick('slickFilter',':even');
        $(this).text('Unfilter Slides');
        filtered = true;
    } else {
        $('.filtering').slick('slickUnfilter');
        $(this).text('Filter Slides');
        filtered = false;
    }
});

$('.your-slider').slick('unslick');

$('.slider-for').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    fade: true,
    asNavFor: '.slider-nav'
});
$('.slider-nav').slick({
    slidesToShow: 3,
    slidesToScroll: 1,
    asNavFor: '.slider-for',
    dots: true,
    centerMode: true,
    focusOnSelect: true
});

$('.single-item-rtl').slick({
    rtl: true
});



// --------------------------------------------------------
// ---------------- TEST DEFAULT OPTIONS ------------------
// --------------------------------------------------------

$("#diaporama").slick({
    accessibility: true,
    adaptiveHeight: false,
    autoplay: false,
    autoplaySpeed: 3000,
    arrows: true,
    asNavFor: "#slideshow",
    appendArrows: "",
    prevArrow: "<button type=\"button\" class=\"slick-prev\">Previous</button>",
    nextArrow: "<button type=\"button\" class=\"slick-next\">Next</button>",
    centerMode: false,
    centerPadding: "50px",
    cssEase: "ease",
    customPaging: (slider, i) => {
        return "customPaging slider " + slider + " customPaging index " + i;
    },
    dots: false,
    draggable: true,
    fade: false,
    focusOnSelect: false,
    easing: "linear",
    edgeFriction: 0.15,
    infinite: true,
    initialSlide: 0,
    lazyLoad: "ondemand",
    mobileFirst: false,
    pauseOnHover: true,
    pauseOnDotsHover: false,
    respondTo:  "window",
    responsive: null,
    rows: 1,
    slide: "div",
    slidesPerRow: 1,
    slidesToShow: 1,
    slidesToScroll: 1,
    speed: 300,
    swipe: true,
    swipeToSlide: false,
    touchMove: true,
    touchThreshold: 5,
    useCSS: true,
    variableWidth: false,
    vertical: false,
    verticalSwiping: false,
    rtl: false
});
