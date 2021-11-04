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
        hiddenStyle: {
            transform: 'translateY(100px)',
            opacity: 0,
        },
        visibleStyle: {
            transform: 'translateY(0px)',
            opacity: 1
        },
        transitionDuration: '0.4s',
        stagger: 30,
        resize: true,
        initLayout: true,
        horizontalOrder: true
    });
}
