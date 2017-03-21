// test file for masonry-layout.d.ts
import * as $ from "jquery";
import { Masonry } from "./index";

// responsive layouts
// function testResponsiveLayouts() {
//     $(document).ready(function () {
//         $('.grid').masonry({
//             itemSelector: '.grid-item',
//             columnWidth: '.grid-sizer',
//             percentPosition: true
//         });
//     });
// };

// recommended Options
function testRecommendedOptions() {
    // $(document).ready(function () {
    //     $('.grid').masonry({
    //         columnWidth: 200,
    //         itemSelector: '.grid-item'
    //     });
    // });

    var msnry = new Masonry('.grid', {
        columnWidth: 200,
        itemSelector: '.grid-item'
    });
};

// extended Options
function testExtendedOptions() {
    var msnry = new Masonry('.grid', {
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
};
