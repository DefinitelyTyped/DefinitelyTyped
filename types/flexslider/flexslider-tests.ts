$(() => {
    $('.flexslider').flexslider({
        animation: 'slide',
    });
});

$(() => {
    $('.flexslider').flexslider({
        animation: 'slide',
        controlNav: 'thumbnails',
    });
});

$(() => {
    $('.flexslider').flexslider('play');
});

$(() => {
    $('.flexslider').flexslider(5);
});

$(() => {
    // The slider being synced must be initialized first
    $('#carousel').flexslider({
        animation: 'slide',
        controlNav: false,
        animationLoop: false,
        slideshow: false,
        itemWidth: 210,
        itemMargin: 5,
        asNavFor: '#slider',
    });

    $('#slider').flexslider({
        animation: 'slide',
        controlNav: false,
        animationLoop: false,
        slideshow: false,
        sync: '#carousel',
    });
});

$(() => {
    $('.flexslider').flexslider({
        animation: 'slide',
        animationLoop: false,
        itemWidth: 210,
        itemMargin: 5,
    });
});

$(() => {
    $('.flexslider').flexslider({
        animation: 'slide',
        animationLoop: false,
        itemWidth: 210,
        itemMargin: 5,
        minItems: 2,
        maxItems: 4,
    });
});
