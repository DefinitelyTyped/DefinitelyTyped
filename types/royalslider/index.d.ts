// Type definitions for jQuery royal-slider 9.4
// Project: http://dimsemenov.com/plugins/royal-slider/documentation/
// Definitions by: Christiaan Rakowski <https://github.com/csrakowski>, sKopheK <https://github.com/sKopheK>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 2.3

/// <reference types="jquery" />

declare namespace RoyalSlider {
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

    export interface RoyalSliderAutoplayOptions {
        /**
         * Enable autoplay or not. (default: false)
         */
        enabled?: boolean;
        /**
         * Stop autoplay at first user action. (default: true)
         */
        stopAtAction?: boolean;
        /**
         * Pause autoplay on hover. (default: true)
         */
        pauseOnHover?: boolean;
        /**
         * Delay between items in ms. (default: 300)
         */
        delay?: number;
    }

    export interface RoyalSliderVideoOptions {
        /**
         * Auto hide arrows when video is playing  (default: true)
         */
        autoHideArrows?: boolean;
        /**
         * Auto hide navigation when video is playing. (default: false)
         */
        autoHideControlNav?: boolean;
        /**
         * Auto hide animated blocks when video is playing. (default: false)
         */
        autoHideBlocks?: boolean;
        /**
         * Youtube embed code. %id% is replaced by video id. (default: '<iframe src="http://www.youtube.com/embed/%id%?rel=1&autoplay=1&showinfo=0" frameborder="no"></iframe>')
         */
        youTubeCode?: string;
        /**
         * Vimeo embed code. %id% is replaced by video id. (default: '<iframe src="http://player.vimeo.com/video/%id%?byline=0&amp;portrait=0&amp;autoplay=1" frameborder="no" webkitAllowFullScreen mozallowfullscreen allowFullScreen></iframe>')
         */
        vimeoCode?: string;
    }

    export interface RoyalSliderBlockOptions {
        /**
         * true or false  (default: true)
         */
        fadeEffect?: boolean;
        /**
         * Move effect direction.Can be 'left', 'right', 'top', 'bottom' or 'none'. (default: 'top')
         */
        moveEffect?: string;
        /**
         * Distance for move effect in pixels. (default: 20)
         */
        moveOffset?: number;
        /**
         * Transition speed of block, in ms. (default: 400)
         */
        speed?: number;
        /**
         * Easing function of block animation.Read more in easing section of docs. (default: 'easeOutSine' )
         */
        easing?: string;
        /**
         * Delay between each block show up, in ms. (default: 200)
         */
        delay?: number;
    }

    export interface RoyalSliderVisibleOptions {
        /**
         * Enable visible-nearby. (default: true)
         */
        enabled?: boolean;
        /**
         * Ratio that determines area of center image.For example for 0.6 - 60 % of slider area will get center image and 20% for two images on sides. (default: 0.6)
         */
        centerArea?: number;
        /**
         * Alignment of center image, if you set it to false center image will be aligned to left. (default: true)
         */
        center?: boolean;
        /**
         * Disables navigation to next slide by clicking on current slide (if navigateByClick is true). (default: true)
         */
        navigateByCenterClick?: boolean;
        /**
         * Used for responsive design. Changes centerArea value to breakpointCenterArea when width of slider is less then value in this option. Set to 0 to disable. (default: 0)
         */
        breakpoint?: number;
        /**
         * Same as centerArea option, just for breakpoint. Can be changed dynamically via `sliderInstance.st.breakpointCenterArea`. (default: 0.8)
         */
        breakpointCenterArea?: number;
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
        deeplinking?: RoyalSliderDeeplinkingOptions;
        /**
         * Autoplay slideshow can be enabled via slider options. Delay between items can be set globally via delay option, or specifically for each item by adding data-rsDelay="1000" to root element of the slide (1000 = 1sec).
         */
        autoplay?: RoyalSliderAutoplayOptions;
        /**
         * To add video to slide, you need to add data-rsVideo="" attribute to image. It can contain link to YouTube or Vimeo video.
         */
        video?: RoyalSliderVideoOptions;
        /**
         * All elements inside slide that have class rsABlock will be treated by slider as animated blocks (tag name doesn't matter). Blocks can not be nested, but you can put multiple instances of them into one slide, or make slide itself animated block.
         */
        block?: RoyalSliderBlockOptions;
        /**
         * Module "reveals" next and previous slides, like in this template.
         */
        visibleNearby?: RoyalSliderVisibleOptions;
    }

    export interface RoyalSliderSlide {
        /**
         * TODO
         */
        appendOnLoaded: boolean;
        /**
         * slide element
         */
        content: JQuery;
        /**
         * TODO
         */
        contentAdded: boolean;
        /**
         * slide element wrapper
         */
        holder: JQuery;
        /**
         * slide index
         */
        id: number;
        /**
         * TODO
         */
        images: null;
        /**
         * TODO
         */
        isAdded: boolean;
        /**
         * TODO
         */
        isAppended: boolean;
        /**
         * TODO
         */
        isBig: boolean;
        /**
         * TODO
         */
        isLoaded: boolean;
        /**
         * TODO
         */
        isLoading: boolean;
        /**
         * TODO
         */
        isRendered: boolean;
        /**
         * TODO
         */
        loadedTriggered: boolean;
        /**
         * TODO
         */
        positionSet: boolean;
        /**
         * TODO
         */
        sizeReady: boolean;
        /**
         * TODO
         */
        thumbnail: string;
    }

    export interface RoyalSlider { //TODO: extends/implements JQuery? (giving problems due to next(), prev(), width and height and 'selector'.
        /**
         * go to slide with id
         */
        goTo(id: number): void;
        /**
         * next slide
         */
        next(): void;
        /**
         * prev slide
         */
        prev(): void;
        /**
         * removes all events and clears all slider data (use on ajax sites to avoid memory leaks)
         */
        destroy(): void;
        /**
         * Dynamic slides adding/removing
         */
        appendSlide(element: JQuery, index?: number): void;
        /**
         * Remove slide
         */
        removeSlide(index?: number): void;
        /**
         * updates size of slider.  Use after you resize slider with js.
         */
        updateSliderSize(forceResize?: boolean): void;
        /**
         * changes orientation of thumbnails
         */
        setThumbsOrientation(orientation: string): void;
        /**
         * updates size of thumbnails
         */
        updateThumbsSize(): void;
        /**
         * Enter Fullscreen mode
         */
        enterFullscreen(): void;
        /**
         * Exit Fullscreen mode
         */
        exitFullscreen(): void;
        /**
         * Start autoplay
         */
        startAutoPlay(): void;
        /**
         * Stop autoplay
         */
        stopAutoPlay(): void;
        /**
         * Toggle autoplay between start and stop
         */
        toggleAutoPlay(): void;
        /**
         * Toggle video between start and stop
         */
        toggleVideo(): void;
        /**
         * Play video
         */
        playVideo(): void;
        /**
         * Stop video
         */
        stopVideo(): void;
        /**
         * current slide index
         */
        currSlideId: number;
        /**
         * current slide object
         */
        currSlide: RoyalSliderSlide;
        /**
         * total number of slides
         */
        numSlides: number;
        /**
         * indicates if slider is in fullscreen mode
         */
        isFullscreen: boolean;
        /**
         * indicates if browser supports native fullscreen
         */
        nativeFS: boolean;
        /**
         * width of slider
         */
        width: number;
        /**
         * height of slider
         */
        height: number;
        /**
         * Boolean, changes on mouseup, indicates if slide was dragged. Used to check if event is drag or click.
         */
        dragSuccess: boolean;
        /**
         * contains all data about each slide
         */
        slides: RoyalSliderSlide[];
        /**
         * Contains list of HTML slides that are added to slider
         */
        slidesJQ: JQuery[]; //TODO: what type?
        /**
         * Object with slider settings
         */
        st: RoyalSliderOptions;
        /**
         * jQuery object with slider events
         */
        ev: JQuery;
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
