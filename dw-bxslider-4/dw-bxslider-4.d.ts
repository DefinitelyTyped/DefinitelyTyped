// Type definitions for bxSlider v4.2.5
// Project: https://github.com/stevenwanderski/bxslider-4
// Definitions by: Piotr Sałkowski <https://github.com/namerci>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

///<reference path="../jquery/jquery.d.ts"/>

interface bxSliderOptions {
    /**
     * mode Type of transition between slides
     * 
     * default: 'horizontal'
     * options: 'horizontal', 'vertical', 'fade'
     */
    mode?: string

    /**
     * speed Slide transition duration (in ms)
     * 
     * default: 500
     * options: integer
     */
    speed?: number

    /**
     * slideMargin Margin between each slide
     * 
     * default: 0
     * options: integer
     */
    slideMargin?: number

    /**
     * startSlide Starting slide index (zero-based)
     * 
     * default: 0
     * options: integer
     */
    startSlide?: number

    /**
     * randomStart Start slider on a random slide
     * 
     * default: false
     * options: boolean (true / false)
     */
    randomStart?: boolean

    /**
     * slideSelector Element to use as slides (ex. 'div.slide').
     * Note: by default, bxSlider will use all immediate children of the slider element
     * 
     * default: ''
     * options: jQuery selector
     */
    slideSelector?: string

    /**
     * infiniteLoop If true, clicking "Next" while on the last slide will transition to the first slide and vice-versa
     * 
     * default: true
     * options: boolean (true / false)
     */
    infiniteLoop?: boolean

    /**
     * hideControlOnEnd If true, "Prev" and "Next" controls will receive a class disabled when slide is the first or the last
     * Note: Only used when infiniteLoop: false
     * 
     * default: false
     * options: boolean (true / false)
     */
    hideControlOnEnd?: boolean

    /**
     * easing The type of "easing" to use during transitions. If using CSS transitions, include a value for the transition-timing-function property. If not using CSS transitions, you may include plugins/jquery.easing.1.3.js for many options.
     * See http://gsgd.co.uk/sandbox/jquery/easing/ for more info.
     * 
     * default: null
     * options: if using CSS: 'linear', 'ease', 'ease-in', 'ease-out', 'ease-in-out', 'cubic-bezier(n,n,n,n)'. If not using CSS: 'swing', 'linear' (see the above file for more options)
     */
    easing?: string

    /**
     * captions Include image captions. Captions are derived from the image's title attribute
     * 
     * default: false
     * options: boolean (true / false)
     */
    captions?: boolean

    /**
     * ticker Use slider in ticker mode (similar to a news ticker)
     * 
     * default: false
     * options: boolean (true / false)
     */
    ticker?: boolean

    /**
     * tickerHover Ticker will pause when mouse hovers over slider. Note: this functionality does NOT work if using CSS transitions!
     * 
     * default: false
     * options: boolean (true / false)
     */
    tickerHover?: boolean

    /**
     * adaptiveHeight Dynamically adjust slider height based on each slide's height
     * 
     * default: false
     * options: boolean (true / false)
     */
    adaptiveHeight?: boolean

    /**
     * adaptiveHeightSpeed Slide height transition duration (in ms). Note: only used if adaptiveHeight: true
     * 
     * default: 500
     * options: integer
     */
    adaptiveHeightSpeed?: number

    /**
     * video If any slides contain video, set this to true. Also, include plugins/jquery.fitvids.js
     * See http://fitvidsjs.com/ for more info
     * 
     * default: false
     * options: boolean (true / false)
     */
    video?: boolean

    /**
     * responsive Enable or disable auto resize of the slider. Useful if you need to use fixed width sliders.
     * 
     * default: true
     * options: boolean (true / false)
     */
    responsive?: boolean

    /**
     * useCSS If true, CSS transitions will be used for horizontal and vertical slide animations (this uses native hardware acceleration). If false, jQuery animate() will be used.
     * 
     * default: true
     * options: boolean (true / false)
     */
    useCSS?: boolean

    /**
     * preloadImages If 'all', preloads all images before starting the slider. If 'visible', preloads only images in the initially visible slides before starting the slider (tip: use 'visible' if all slides are identical dimensions)
     * 
     * default: 'visible'
     * options: 'all', 'visible'
     */
    preloadImages?: string

    /**
     * touchEnabled If true, slider will allow touch swipe transitions
     * 
     * default: true
     * options: boolean (true / false)
     */
    touchEnabled?: boolean

    /**
     * swipeThreshold Amount of pixels a touch swipe needs to exceed in order to execute a slide transition. Note: only used if touchEnabled: true
     * 
     * default: 50
     * options: integer
     */
    swipeThreshold?: number

    /**
     * oneToOneTouch If true, non-fade slides follow the finger as it swipes
     * 
     * default: true
     * options: boolean (true / false)
     */
    oneToOneTouch?: boolean

    /**
     * preventDefaultSwipeX If true, touch screen will not move along the x-axis as the finger swipes
     * 
     * default: true
     * options: boolean (true / false)
     */
    preventDefaultSwipeX?: boolean

    /**
     * preventDefaultSwipeY If true, touch screen will not move along the y-axis as the finger swipes
     * 
     * default: false
     * options: boolean (true / false)
     */
    preventDefaultSwipeY?: boolean

    /**
     * wrapperClass Class to wrap the slider in. Change to prevent from using default bxSlider styles.
     * 
     * default: 'bx-wrapper'
     * options: string
     */
    wrapperClass?: string

    /**
     * pager If true, a pager will be added
     * 
     * default: true
     * options: boolean (true / false)
     */
    pager?: boolean

    /**
     * pagerType If 'full', a pager link will be generated for each slide. If 'short', a x / y pager will be used (ex. 1 / 5)
     * 
     * default: 'full'
     * options: 'full', 'short'
     */
    pagerType?: string

    /**
     * pagerShortSeparator If pagerType: 'short', pager will use this value as the separating character
     * 
     * default: ' / '
     * options: string
     */
    pagerShortSeparator?: string

    /**
     * pagerSelector Element used to populate the populate the pager. By default, the pager is appended to the bx-viewport
     * 
     * default: ''
     * options: jQuery selector
     */
    pagerSelector?: string

    /**
     * pagerCustom Parent element to be used as the pager. Parent element must contain a <a data-slide-index="x"> element for each slide. See example here. Not for use with dynamic carousels.
     * 
     * default: null
     * options: jQuery selector
     */
    pagerCustom?: string

    /**
     * buildPager If supplied, function is called on every slide element, and the returned value is used as the pager item markup.
     * See examples for detailed implementation
     * 
     * default: null
     * options: functoin(slideIndex)
     */
     buildPager?: (slideIndex: number) => void;


    /**
     * controls If true, "Next" / "Prev" controls will be added
     * 
     * default: true
     * options: boolean (true / false)
     */
    controls?: boolean

    /**
     * nextText Text to be used for the "Next" control
     * 
     * default: 'Next'
     * options: string
     */
    nextText?: string

    /**
     * prevText Text to be used for the "Prev" control
     * 
     * default: 'Prev'
     * options: string
     */
    prevText?: string

    /**
     * nextSelector Element used to populate the "Next" control
     * 
     * default: null
     * options: jQuery selector
     */
    nextSelector?: string

    /**
     * prevSelector Element used to populate the "Prev" control
     * 
     * default: null
     * options: jQuery selector
     */
    prevSelector?: string

    /**
     * autoControls If true, "Start" / "Stop" controls will be added
     * 
     * default: false
     * options: boolean (true / false)
     */
    autoControls?: boolean

    /**
     * startText Text to be used for the "Start" control
     * 
     * default: 'Start'
     * options: string
     */
    startText?: string

    /**
     * stopText Text to be used for the "Stop" control
     * 
     * default: 'Stop'
     * options: string
     */
    stopText?: string

    /**
     * autoControlsCombine When slideshow is playing only "Stop" control is displayed and vice-versa
     * 
     * default: false
     * options: boolean (true / false)
     */
    autoControlsCombine?: boolean

    /**
     * autoControlsSelector Element used to populate the auto controls
     * 
     * default: null
     * options: jQuery selector
     */
    autoControlsSelector?: string

    /**
     * keyboardEnabled Allows for keyboard control of visible slider. Keypress ignored if slider not visible.
     * 
     * default: false
     * options: boolean (true / false)
     */
    keyboardEnabled?: boolean

    /**
     * auto Slides will automatically transition
     * 
     * default: false
     * options: boolean (true / false)
     */
    auto?: boolean

    /**
     * stopAutoOnClick Auto will stop on interaction with controls
     * 
     * default: false
     * options: boolean (true / false)
     */
    stopAutoOnClick?: boolean

    /**
     * pause The amount of time (in ms) between each auto transition
     * 
     * default: 4000
     * options: integer
     */
    pause?: number

    /**
     * autoStart Auto show starts playing on load. If false, slideshow will start when the "Start" control is clicked
     * 
     * default: true
     * options: boolean (true / false)
     */
    autoStart?: boolean

    /**
     * autoDirection The direction of auto show slide transitions
     * 
     * default: 'next'
     * options: 'next', 'prev'
     */
    autoDirection?: string

    /**
     * autoHover Auto show will pause when mouse hovers over slider
     * 
     * default: false
     * options: boolean (true / false)
     */
    autoHover?: boolean

    /**
     * autoDelay Time (in ms) auto show should wait before starting
     * 
     * default: 0
     * options: integer
     */
    autoDelay?: number

    /**
     * minSlides The minimum number of slides to be shown. Slides will be sized down if carousel becomes smaller than the original size.
     * 
     * default: 1
     * options: integer
     */
    minSlides?: number

    /**
     * maxSlides The maximum number of slides to be shown. Slides will be sized up if carousel becomes larger than the original size.
     * 
     * default: 1
     * options: integer
     */
    maxSlides?: number

    /**
     * moveSlides The number of slides to move on transition. This value must be >= minSlides, and <= maxSlides. If zero (default), the number of fully-visible slides will be used.
     * 
     * default: 0
     * options: integer
     */
    moveSlides?: number

    /**
     * slideWidth The width of each slide. This setting is required for all horizontal carousels!
     * 
     * default: 0
     * options: integer
     */
    slideWidth?: number

    /**
     * shrinkItems The Carousel will only show whole items and shrink the images to fit the viewport based on maxSlides/MinSlides.
     * 
     * default: false
     * options: boolean (true / false)
     */
    shrinkItems?: boolean

    /**
     * ariaLive Adds Aria Live attribute to slider.
     * 
     * default: true
     * options: boolean (true / false)
     */
    ariaLive?: boolean

    /**
     * ariaHidden Adds Aria Hidden attribute to any nonvisible slides.
     * 
     * default: true
     * options: boolean (true / false)
     */
    ariaHidden?: boolean

    /**
     * onSliderLoad Executes immediately after the slider is fully loaded
     * 
     * default: function(){}
     * options: function(currentIndex){ // your code here }
     * arguments:
     *   currentIndex: element index of the current slide
     */
    onSliderLoad?: (currentIndex?: number) => void;

    /**
     * onSliderResize Executes immediately after the slider is resized
     * 
     * default: function(){}
     * options: function(currentIndex){ // your code here }
     * arguments:
     *   currentIndex: element index of the current slide
     */
    onSliderResize?: (currentIndex?: number) => void;

    /**
     * onSlideBefore Executes immediately before each slide transition.
     * 
     * default: function(){}
     * options: function($slideElement, oldIndex, newIndex){ // your code here }
     * arguments:
     *   $slideElement: jQuery element of the destination element
     *   oldIndex: element index of the previous slide (before the transition)
     *   newIndex: element index of the destination slide (after the transition)
     */
    onSlideBefore?: ($slideElement?: JQuery, oldIndex?: number, newIndex?: number) => void;

    /**
     * onSlideAfter Executes immediately after each slide transition. Function argument is the current slide element (when transition completes).
     * 
     * default: function(){}
     * options: function($slideElement, oldIndex, newIndex){ // your code here }
     * arguments:
     *   $slideElement: jQuery element of the destination element
     *   oldIndex: element index of the previous slide (before the transition)
     *   newIndex: element index of the destination slide (after the transition)
     */
    onSlideAfter?: ($slideElement?: JQuery, oldIndex?: number, newIndex?: number) => void;

    /**
     * onSlideNext Executes immediately before each "Next" slide transition. Function argument is the target (next) slide element.
     * 
     * default: function(){}
     * options: function($slideElement, oldIndex, newIndex){ // your code here }
     * arguments:
     *   $slideElement: jQuery element of the destination element
     *   oldIndex: element index of the previous slide (before the transition)
     *   newIndex: element index of the destination slide (after the transition)
     */
    onSlideNext?: ($slideElement?: JQuery, oldIndex?: number, newIndex?: number) => void;

    /**
     * onSlidePrev Executes immediately before each "Prev" slide transition. Function argument is the target (prev) slide element.
     * 
     * default: function(){}
     * options: function($slideElement, oldIndex, newIndex){ // your code here }
     * arguments:
     *   $slideElement: jQuery element of the destination element
     *   oldIndex: element index of the previous slide (before the transition)
     *   newIndex: element index of the destination slide (after the transition)
     */
    onSlidePrev?: ($slideElement?: JQuery, oldIndex?: number, newIndex?: number) => void;
}

interface bxSlider {

    /**
     * goToSlide Performs a slide transition to the supplied slide index (zero-based)
     * 
     * example:
     * slider = $('.bxslider').bxSlider();
     * slider.goToSlide(3);
     */
    goToSlide: (index: number) => void;

    /**
     * goToNextSlide Performs a "Next" slide transition
     * 
     * example:
     * slider = $('.bxslider').bxSlider();
     * slider.goToNextSlide();
     */
    goToNextSlide: () => void;

    /**
     * goToPrevSlide Performs a "Prev" slide transition
     * 
     * example:
     * slider = $('.bxslider').bxSlider();
     * slider.goToPrevSlide();
     */
    goToPrevSlide: () => void;

    /**
     * startAuto Starts the auto show. Provide an argument false to prevent the auto controls from being updated.
     * 
     * example:
     * slider = $('.bxslider').bxSlider();
     * slider.startAuto();
     */
    startAuto: (preventControlUpdate?: boolean) => void;

    /**
     * stopAuto Stops the auto show. Provide an argument false to prevent the auto controls from being updated.
     * 
     * example:
     * slider = $('.bxslider').bxSlider();
     * slider.stopAuto();
     */
    stopAuto: (preventControlUpdate?: boolean) => void;

    /**
     * getCurrentSlide Returns the current active slide
     * 
     * example:
     * slider = $('.bxslider').bxSlider();
     * var current = slider.getCurrentSlide();
     */
    getCurrentSlide: () => number;

    /**
     * getSlideCount Returns the total number of slides in the slider
     * 
     * example:
     * slider = $('.bxslider').bxSlider();
     * var slideQty = slider.getSlideCount();
     */
    getSlideCount: () => number;

    /**
     * redrawSlider Redraw the slider. Useful when needing to redraw a hidden slider after it is unhidden.
     * 
     * example:
     * slider = $('.bxslider').bxSlider();
     * slider.redrawSlider();
     */
    redrawSlider: () => void;

    /**
     * reloadSlider Reload the slider. Useful when adding slides on the fly. Accepts an optional settings object. See here for an example.
     * 
     * example:
     * slider = $('.bxslider').bxSlider();
     * slider.reloadSlider();
     */
    reloadSlider: (settings?: bxSliderOptions) => void;

    /**
     * destroySlider Destroy the slider. This reverts all slider elements back to their original state (before calling the slider).
     * 
     * example:
     * slider = $('.bxslider').bxSlider();
     * slider.destroySlider();
     */
    destroySlider: () => void;
}

interface JQuery {
    /**
     * Creates a bxSlider from the current element.
     * @param options
     */
    bxSlider(options?:bxSliderOptions): bxSlider;
}