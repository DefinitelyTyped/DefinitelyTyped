/// <reference types="jquery" />

declare namespace RoyalSlider {
    export interface RoyalSliderThumbsOptions {
        /**
         * Thumbnails mouse drag. (default: true)
         */
        drag?: boolean | undefined;
        /**
         * Thumbnails touch. (default: true)
         */
        touch?: boolean | undefined;
        /**
         * 'horizontal' or 'vertical'. (default: 'horizontal')
         */
        orientation?: string | undefined;
        /**
         * Thumbnails arrows. (default: true)
         */
        arrows?: boolean | undefined;
        /**
         * Spacing between thumbs. (default: 4)
         */
        spacing?: number | undefined;
        /**
         * Auto hide thumbnails arrows on hover. (default: false)
         */
        arrowsAutoHide?: boolean | undefined;
        /**
         * Automatically centers container with thumbs if there are small number of items (default: true)
         */
        autoCenter?: boolean | undefined;
        /**
         * Thumbnails transition speed. (default: 600)
         */
        transitionSpeed?: number | undefined;
        /**
         * Reduces size of main viewport area by thumbnails width or height, use it when you set 100 % width to slider.This option is always true, when slider is in fullscreen mode. (default: true)
         */
        fitInViewport?: boolean | undefined;
        /**
         * Margin that equals thumbs spacing for first and last item. (default: true)
         */
        firstMargin?: boolean | undefined;
        /**
         * Replaces default thumbnail arrow. You have to add it to DOM manually. (default: null)
         */
        arrowLeft?: JQuery | undefined;
        /**
         * Replaces default thumbnail arrow. You have to add it to DOM manually. (default: null)
         */
        arrowRight?: JQuery | undefined;
        /**
         * Adds span element with class thumbIco to every thumbnail. Useful for styling (default: false)
         */
        appendSpan?: boolean | undefined;
    }

    export interface RoyalSliderFullscreenOptions {
        /**
         * Fullscreen functions enabled. (default: false)
         */
        enabled?: boolean | undefined;
        /**
         * Force keyboard arrows nav in fullscreen. (default: true)
         */
        keyboardNav?: boolean | undefined;
        /**
         * Fullscreen button at top right. (default: true)
         */
        buttonFS?: boolean | undefined;
        /**
         * Native browser fullscreen. (default: false)
         */
        nativeFS?: boolean | undefined;
    }

    export interface RoyalSliderDeeplinkingOptions {
        /**
         * Linking to slides by appending #SLIDE_INDEX to url.Slides count starts from 1. If change is set to false hash is only read once, after page load. (default: false)
         */
        enabled?: boolean | undefined;
        /**
         * Automatically change URL after transition and listen for hash change. (default: false)
         */
        change?: boolean | undefined;
        /**
         * Prefix that will be added to hash. For example if you set it to 'gallery-', hash would look like this: #gallery-5 (default: '')
         */
        prefix?: string | undefined;
    }

    export interface RoyalSliderAutoplayOptions {
        /**
         * Enable autoplay or not. (default: false)
         */
        enabled?: boolean | undefined;
        /**
         * Stop autoplay at first user action. (default: true)
         */
        stopAtAction?: boolean | undefined;
        /**
         * Pause autoplay on hover. (default: true)
         */
        pauseOnHover?: boolean | undefined;
        /**
         * Delay between items in ms. (default: 300)
         */
        delay?: number | undefined;
    }

    export interface RoyalSliderVideoOptions {
        /**
         * Auto hide arrows when video is playing  (default: true)
         */
        autoHideArrows?: boolean | undefined;
        /**
         * Auto hide navigation when video is playing. (default: false)
         */
        autoHideControlNav?: boolean | undefined;
        /**
         * Auto hide animated blocks when video is playing. (default: false)
         */
        autoHideBlocks?: boolean | undefined;
        /**
         * Youtube embed code. %id% is replaced by video id. (default: '<iframe src="http://www.youtube.com/embed/%id%?rel=1&autoplay=1&showinfo=0" frameborder="no"></iframe>')
         */
        youTubeCode?: string | undefined;
        /**
         * Vimeo embed code. %id% is replaced by video id. (default: '<iframe src="http://player.vimeo.com/video/%id%?byline=0&amp;portrait=0&amp;autoplay=1" frameborder="no" webkitAllowFullScreen mozallowfullscreen allowFullScreen></iframe>')
         */
        vimeoCode?: string | undefined;
    }

    export interface RoyalSliderBlockOptions {
        /**
         * true or false  (default: true)
         */
        fadeEffect?: boolean | undefined;
        /**
         * Move effect direction.Can be 'left', 'right', 'top', 'bottom' or 'none'. (default: 'top')
         */
        moveEffect?: string | undefined;
        /**
         * Distance for move effect in pixels. (default: 20)
         */
        moveOffset?: number | undefined;
        /**
         * Transition speed of block, in ms. (default: 400)
         */
        speed?: number | undefined;
        /**
         * Easing function of block animation.Read more in easing section of docs. (default: 'easeOutSine' )
         */
        easing?: string | undefined;
        /**
         * Delay between each block show up, in ms. (default: 200)
         */
        delay?: number | undefined;
    }

    export interface RoyalSliderVisibleOptions {
        /**
         * Enable visible-nearby. (default: true)
         */
        enabled?: boolean | undefined;
        /**
         * Ratio that determines area of center image.For example for 0.6 - 60 % of slider area will get center image and 20% for two images on sides. (default: 0.6)
         */
        centerArea?: number | undefined;
        /**
         * Alignment of center image, if you set it to false center image will be aligned to left. (default: true)
         */
        center?: boolean | undefined;
        /**
         * Disables navigation to next slide by clicking on current slide (if navigateByClick is true). (default: true)
         */
        navigateByCenterClick?: boolean | undefined;
        /**
         * Used for responsive design. Changes centerArea value to breakpointCenterArea when width of slider is less then value in this option. Set to 0 to disable. (default: 0)
         */
        breakpoint?: number | undefined;
        /**
         * Same as centerArea option, just for breakpoint. Can be changed dynamically via `sliderInstance.st.breakpointCenterArea`. (default: 0.8)
         */
        breakpointCenterArea?: number | undefined;
    }

    export interface RoyalSliderOptions {
        /**
         * Automatically updates slider height based on base width. (default: false)
         */
        autoScaleSlider?: boolean | undefined;
        /**
         * Base slider width.Slider will autocalculate the ratio based on these values. (default: 800)
         */
        autoScaleSliderWidth?: number | undefined;
        /**
         * 400 Base slider height
         */
        autoScaleSliderHeight?: number | undefined;
        /**
         * Scale mode for images."fill", "fit", "fit-if-smaller" or "none". (default: 'fit-if-smaller')
         */
        imageScaleMode?: string | undefined;
        /**
         * Aligns image to center of slide. (default: true)
         */
        imageAlignCenter?: boolean | undefined;
        /**
         * Distance between image and edge of slide (doesn't work with 'fill' scale mode). (default: 4)
         */
        imageScalePadding?: number | undefined;
        /**
         * Navigation type, can be 'bullets', 'thumbnails', 'tabs' or 'none' (default: 'bullets')
         */
        controlNavigation?: string | undefined;
        /**
         * Direction arrows navigation. (default: true)
         */
        arrowsNav?: boolean | undefined;
        /**
         * Auto hide arrows. (default: true)
         */
        arrowsNavAutoHide?: boolean | undefined;
        /**
         * Hides arrows completely on touch devices. (default: false)
         */
        arrowsNavHideOnTouch?: boolean | undefined;
        /**
         * Adds base width to all images for better-looking loading. Can be specified separately for each image. (default: null)
         */
        imgWidth?: number | undefined;
        /**
         * Adds base height to all images for better-looking loading. Can be specified separately for each image. (default: null)
         */
        imgHeight?: number | undefined;
        /**
         * Spacing between slides in pixels. (default: 8)
         */
        slidesSpacing?: number | undefined;
        /**
         * Start slide index. (default: 0)
         */
        startSlideId?: number | undefined;
        /**
         * Makes slider to go from last slide to first. (default: false)
         */
        loop?: boolean | undefined;
        /**
         * Makes slider to go from last slide to first with rewind. Overrides prev option. (default: false)
         */
        loopRewind?: boolean | undefined;
        /**
         * Randomizes all slides at start. (default: false)
         */
        randomizeSlides?: boolean | undefined;
        /**
         * Number of slides to preload on sides.If you set it to 0, only one slide will be kept in the display list at once. (default: 4)
         */
        numImagesToPreload?: number | undefined;
        /**
         * Enables spinning preloader, you may style it via CSS (class rsPreloader). (default: true)
         */
        usePreloader?: boolean | undefined;
        /**
         * Can be 'vertical' or 'horizontal'. (default: 'horizontal')
         */
        slidesOrientation?: string | undefined;
        /**
         * 'move' or 'fade'. Important note about fade transition, slides must have background as only one image is animating. (default: 'move')
         */
        transitionType?: string | undefined;
        /**
         * Slider transition speed, in ms. (default: 600)
         */
        transitionSpeed?: number | undefined;
        /**
         * Easing function for simple transition.Read more in the easing section of the documentation. (default: 'easeInOutSine')
         */
        easeInOut?: string | undefined;
        /**
         * Easing function of animation after ending of the swipe gesture. Read more in the easing section of the documentation. (default: 'easeOutSine')
         */
        easeOut?: string | undefined;
        /**
         *  If set to true adds arrows and fullscreen button inside rsOverflow container, otherwise inside root slider container. (default: true)
         */
        controlsInside?: boolean | undefined;
        /**
         * Navigates forward by clicking on slide. (default: true)
         */
        navigateByClick?: boolean | undefined;
        /**
         * Mouse drag navigation over slider. (default: true)
         */
        sliderDrag?: boolean | undefined;
        /**
         * Touch navigation of slider. (default: true)
         */
        sliderTouch?: boolean | undefined;
        /**
         * Navigate slider with keyboard left and right arrows. (default: false)
         */
        keyboardNavEnabled?: boolean | undefined;
        /**
         * Fades in slide after it's loaded. (default: true)
         */
        fadeinLoadedSlide?: boolean | undefined;
        /**
         * Allows usage of CSS3 transitions. Might be useful if you're experiencing font-rendering problems, or other CSS3-related bugs. (default: true)
         */
        allowCSS3?: boolean | undefined;
        /**
         * Adds global caption element to slider, read more in the global caption section of documentation. (default: false)
         */
        globalCaption?: boolean | undefined;
        /**
         * Adds rsActiveSlide class to current slide before transition. (default: false)
         */
        addActiveClass?: boolean | undefined;
        /**
         * Minimum distance in pixels to show next slide while dragging. (default: 10)
         */
        minSlideOffset?: number | undefined;
        /**
         * Scales and animates height based on current slide. Please note: if you have images in slide that don't have rsImg class) or don't have fixed size, use $(window).load() instead of $(document).ready() before initializing slider. Also, autoHeight doesn't work with properties like autoScaleSlider, imageScaleMode and imageAlignCenter.  (default: false)
         */
        autoHeight?: boolean | undefined; // false
        /**
         * Overrides HTML of slides, used for creating of slides from HTML that is not attached to DOM. More info in knowledge base.  (default: null)
         */
        slides?: Element | undefined;
        /**
         * Thumbnail options
         */
        thumbs?: RoyalSliderThumbsOptions | undefined;
        /**
         * You may specify larger images when slider is in fullscreen mode by adding data-rsBigImg attribute to rsImg element. A few examples:
         */
        fullscreen?: RoyalSliderFullscreenOptions | undefined;
        /**
         * Deep linking module makes URL automatically change when you switch slides and you can easily link to specific slide (aka permalink).
         */
        deeplinking?: RoyalSliderDeeplinkingOptions | undefined;
        /**
         * Autoplay slideshow can be enabled via slider options. Delay between items can be set globally via delay option, or specifically for each item by adding data-rsDelay="1000" to root element of the slide (1000 = 1sec).
         */
        autoplay?: RoyalSliderAutoplayOptions | undefined;
        /**
         * To add video to slide, you need to add data-rsVideo="" attribute to image. It can contain link to YouTube or Vimeo video.
         */
        video?: RoyalSliderVideoOptions | undefined;
        /**
         * All elements inside slide that have class rsABlock will be treated by slider as animated blocks (tag name doesn't matter). Blocks can not be nested, but you can put multiple instances of them into one slide, or make slide itself animated block.
         */
        block?: RoyalSliderBlockOptions | undefined;
        /**
         * Module "reveals" next and previous slides, like in this template.
         */
        visibleNearby?: RoyalSliderVisibleOptions | undefined;
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

    export interface RoyalSlider { // TODO: extends/implements JQuery? (giving problems due to next(), prev(), width and height and 'selector'.
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
        slidesJQ: JQuery[]; // TODO: what type?
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
