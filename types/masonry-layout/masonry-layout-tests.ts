import Masonry = require("masonry-layout");

// responsive layouts
function testResponsiveLayouts() {
    $(document).ready(() => {
        $('.grid').masonry({
            itemSelector: '.grid-item',
            columnWidth: '.grid-sizer',
            percentPosition: true
        });
    });
}

// recommended Options
function testRecommendedOptions() {
    $(document).ready(() => {
        $('.grid').masonry({
            columnWidth: 200,
            itemSelector: '.grid-item'
        });
    });

    const msnry = new Masonry('.grid', {
        columnWidth: 200,
        itemSelector: '.grid-item'
    });
}

// extended Options
function testExtendedOptions() {
    const msnry = new Masonry('.grid', {
        itemSelector: '.grid-item',
        columnWidth: '.grid-sizer',
        percentPosition: true,
        gutter: '.gutter-sizer',
        stamp: '.stamp',
        fitWidth: true,
        originLeft: true,
        originTop: true,
        containerStyle: {
            position: 'relative'
        },
        transitionDuration: '0.4s',
        resize: true,
        initLayout: true
    });
}
