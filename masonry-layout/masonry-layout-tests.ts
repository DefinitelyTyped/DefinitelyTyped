// test file for masonry-layout.d.ts

/// <reference path="../jquery/jquery.d.ts" />
/// <reference path="./masonry-layout.d.ts" />

//import {Masonry} from "./masonry-layout.d.ts";

// responsive layouts
function testResponsiveLayouts() {
    $('.grid').masonry({
        itemSelector: '.grid-item',
        columnWidth: '.grid-sizer',
        percentPosition: true
    });
}

// recommended Options
function testRecommendedOptions() {
    $('.grid').masonry({
        columnWidth: 200,
        itemSelector: '.grid-item'
    });

    var msnry = new Masonry.Masonry('.grid', {
        columnWidth: 200,
        itemSelector: '.grid-item'
    });
}

// extended Options
function testExtendedOptions() {
    var msnry = new Masonry.Masonry('.grid', {
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
