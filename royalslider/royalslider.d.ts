// Type definitions for jQuery royal-slider
// Project: http://dimsemenov.com/plugins/royal-slider/documentation/
// Definitions by: Christiaan Rakowski <https://github.com/csrakowski/>
// Definitions: https://github.com/borisyankov/DefinitelyTyped

/// <reference path="../jquery/jquery.d.ts" />

declare module RoyalSlider {
    export interface RoyalSliderThumbsOptions {
        /**
         * Thumbnails mouse drag. (default: true)
         */
        drag?: boolean;
        /**
         * Thumbnails touch. (default: true)
         */
        touch?: boolean;
        /**
         * 'horizontal' or 'vertical'. (default: 'horizontal')
         */
        orientation?: string;
        /**
         * Thumbnails arrows. (default: true)
         */
        arrows?: boolean;
        /**
         * Spacing between thumbs. (default: 4)
         */
        spacing?: number;
        /**
         * Auto hide thumbnails arrows on hover. (default: false)
         */
        arrowsAutoHide?: boolean;
        /**
         * Automatically centers container with thumbs if there are small number of items (default: true)
         */
        autoCenter?: boolean;
        /**
         * Thumbnails transition speed. (default: 600)
         */
        transitionSpeed?: number;
        /**
         * Reduces size of main viewport area by thumbnails width or height, use it when you set 100 % width to slider.This option is always true, when slider is in fullscreen mode. (default: true)
         */
        fitInViewport?: boolean;
        /**
         * Margin that equals thumbs spacing for first and last item. (default: true)
         */
        firstMargin?: boolean;
        /**
         * Replaces default thumbnail arrow. You have to add it to DOM manually. (default: null)
         */
        arrowLeft?: JQuery;
        /**
         * Replaces default thumbnail arrow. You have to add it to DOM manually. (default: null)
         */
        arrowRight?: JQuery;
        /**
         * Adds span element with class thumbIco to every thumbnail. Useful for styling (default: false)
         */
        appendSpan?: boolean;
    }

    export interface RoyalSliderFullscreenOptions {
        /**
         * Fullscreen functions enabled. (default: false)
         */
        enabled?: boolean;
        /**
         * Force keyboard arrows nav in fullscreen. (default: true)
         */
        keyboardNav?: boolean;
        /**
         * Fullscreen button at top right. (default: true)
         */
        buttonFS?: boolean;
        /**
         * Native browser fullscreen. (default: false)
         */
        nativeFS?: boolean;
    }

    export interface RoyalSliderDeeplinkingOptions {
        /**
         * Linking to slides by appending #SLIDE_INDEX to url.Slides count starts from 1. If change is set to false hash is only read once, after page load. (default: false)
         */
        enabled?: boolean;
        /**
         * Automatically change URL after transition and listen for hash change. (default: false)
         */
        change?: boolean;
        /**
         * Prefix that will be added to hash. For example if you set it to 'gallery-', hash would look like this: #gallery-5 (default: '')
         */
        prefix?: string;
    }

    export interface RoyalSliderOptions {
        /**
         * Automatically updates slider height based on base width. (default: false)
         */
        autoScaleSlider?: boolean;
        /**
         * Base slider width.Slider will autocalculate the ratio based on these values. (default: 800)
         */
        autoScaleSliderWidth?: number;
        /**
         * 400 Base slider height 
         */
        autoScaleSliderHeight?: number;
        /**
         * Scale mode for images."fill", "fit", "fit-if-smaller" or "none". (default: 'fit-if-smaller')
         */
        imageScaleMode?: string;
        /**
         * Aligns image to center of slide. (default: true)
         */
        imageAlignCenter?: boolean;
        /**
         * Distance between image and edge of slide (doesn't work with 'fill' scale mode). (default: 4)
         */
        imageScalePadding?: number;
        /**
         * Navigation type, can be 'bullets', 'thumbnails', 'tabs' or 'none' (default: 'bullets')
         */
        controlNavigation?: string;
        /**
         * Direction arrows navigation. (default: true)
         */
        arrowsNav?: boolean;
        /**
         * Auto hide arrows. (default: true)
         */
        arrowsNavAutoHide?: boolean;
        /**
         * Hides arrows completely on touch devices. (default: false)
         */
        arrowsNavHideOnTouch?: boolean;
        /**
         * Adds base width to all images for better-looking loading. Can be specified separately for each image. (default: null)
         */
        imgWidth?: number;
        /**
         * Adds base height to all images for better-looking loading. Can be specified separately for each image. (default: null)
         */
        imgHeight?: number;
        /**
         * Spacing between slides in pixels. (default: 8)
         */
        slidesSpacing?: number;
        /**
         * Start slide index. (default: 0)
         */
        startSlideId?: number;
        /**
         * Makes slider to go from last slide to first. (default: false)
         */
        loop?: boolean;
        /**
         * Makes slider to go from last slide to first with rewind. Overrides prev option. (default: false)
         */
        loopRewind?: boolean;
        /**
         * Randomizes all slides at start. (default: false)
         */
        randomizeSlides?: boolean;
        /**
         * Number of slides to preload on sides.If you set it to 0, only one slide will be kept in the display list at once. (default: 4)
         */
        numImagesToPreload?: number;
        /**
         * Enables spinning preloader, you may style it via CSS (class rsPreloader). (default: true)
         */
        usePreloader?: boolean;
        /**
         * Can be 'vertical' or 'horizontal'. (default: 'horizontal')
         */
        slidesOrientation?: string;
        /**
         * 'move' or 'fade'. Important note about fade transition, slides must have background as only one image is animating. (default: 'move')
         */
        transitionType?: string;
        /**
         * Slider transition speed, in ms. (default: 600)
         */
        transitionSpeed?: number;
        /**
         * Easing function for simple transition.Read more in the easing section of the documentation. (default: 'easeInOutSine')
         */
        easeInOut?: string;
        /**
         * Easing function of animation after ending of the swipe gesture. Read more in the easing section of the documentation. (default: 'easeOutSine')
         */
        easeOut?: string;
        /**
         *  If set to true adds arrows and fullscreen button inside rsOverflow container, otherwise inside root slider container. (default: true)
         */
        controlsInside?: boolean;
        /**
         * Navigates forward by clicking on slide. (default: true)
         */
        navigateByClick?: boolean;
        /**
         * Mouse drag navigation over slider. (default: true)
         */
        sliderDrag?: boolean;
        /**
         * Touch navigation of slider. (default: true)
         */
        sliderTouch?: boolean;
        /**
         * Navigate slider with keyboard left and right arrows. (default: false)
         */
        keyboardNavEnabled?: boolean;
        /**
         * Fades in slide after it's loaded. (default: true)
         */
        fadeinLoadedSlide?: boolean;
        /**
         * Allows usage of CSS3 transitions. Might be useful if you're experiencing font-rendering problems, or other CSS3-related bugs. (default: true)
         */
        allowCSS3?: boolean;
        /**
         * Adds global caption element to slider, read more in the global caption section of documentation. (default: false)
         */
        globalCaption?: boolean;
        /**
         * Adds rsActiveSlide class to current slide before transition. (default: false)
         */
        addActiveClass?: boolean;
        /**
         * Minimum distance in pixels to show next slide while dragging. (default: 10)
         */
        minSlideOffset?: number;
        /**
         * Scales and animates height based on current slide. Please note: if you have images in slide that don't have rsImg class) or don't have fixed size, use $(window).load() instead of $(document).ready() before initializing slider. Also, autoHeight doesn't work with properties like autoScaleSlider, imageScaleMode and imageAlignCenter.  (default: false)
         */
        autoHeight?: boolean;// false 
        /**
         * Overrides HTML of slides, used for creating of slides from HTML that is not attached to DOM. More info in knowledge base.  (default: null)
         */
        slides?: Element;
        /**
         * Thumbnail options
         */
        thumbs?: RoyalSliderThumbsOptions;
        /**
         * You may specify larger images when slider is in fullscreen mode by adding data-rsBigImg attribute to rsImg element. A few examples:
         */
        fullscreen?: RoyalSliderFullscreenOptions;
        /**
         * Deep linking module makes URL automatically change when you switch slides and you can easily link to specific slide (aka permalink).
         */
        deeplinking?: RoyalSliderDeeplinkingOptions
    }
}

interface JQuery {
    /**
    * Creates a new royal-slider with the specified, or default, options.
    *
    * @param options The options
    */
    royalSlider(options?: RoyalSlider.RoyalSliderOptions): JQuery;
}