/// <reference path="royalslider.d.ts" />

$(".royalSlider").royalSlider();

$(".royalSlider").royalSlider({
    // options go here
    // as an example, enable keyboard arrows nav
    keyboardNavEnabled: true
});

$(".royalSlider").royalSlider({
    // general options go gere
    autoScaleSlider: true,
    thumbs: {
        // thumbnails options go gere
        spacing: 10,
        arrowsAutoHide: true
    }
});

jQuery(document).ready(function ($) {
    $(".royalSlider").royalSlider({
        // general options go gere
        autoScaleSlider: true,
        fullscreen: {
            // fullscreen options go gere
            enabled: true,
            native: true
        }
    });
});

jQuery(document).ready(function ($) {
    $(".royalSlider").royalSlider({
        // general options go gere
        autoScaleSlider: true,
        deeplinking: {
            // deep linking options go gere
            enabled: true,
            prefix: 'slider-'
        }
    });
});