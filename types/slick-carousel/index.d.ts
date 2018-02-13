// Type definitions for stick 1.6.0
// Project: http://kenwheeler.github.io/slick/
// Definitions by: John Gouigouix <https://github.com/orchestra-ts/DefinitelyTyped/>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 2.3

/// <reference types="jquery"/>

interface JQuerySlickOptions {

    /**
     * Enables tabbing and arrow key navigation
     * Default: true
     */
    accessibility?: boolean;

    /**
     * Enables adaptive height for single slide horizontal carousels.
     * Default: false
     */
    adaptiveHeight?: boolean;

    /**
     * Enables Autoplay
     * Default: false
     */
    autoplay?: boolean;

    /**
     * Autoplay Speed in milliseconds
     * Default: 3000
     */
    autoplaySpeed?: number;

    /**
     * Prev/Next Arrows
     * Default: true
     */
    arrows?: boolean;

    /**
     * Set the slider to be the navigation of other slider
     * Default: null
     */
    asNavFor?: Element | JQuery | string;

    /**
     * Change where the navigation arrows are attached (Selector, htmlString, Array, Element, jQuery object)
     * `false` will prevent arrows from being created/appended
     * Default: $(element)
     */
    appendArrows?: Element | Element[] | JQuery | string | boolean;

    /**
     * Change where the navigation dots are attached (Selector, htmlString, Array, Element, jQuery object)
     * Default: $(element)
     */
    appendDots?: Element | Element[] | JQuery | string;

    /**
     * Allows you to select a node or customize the HTML for the "Previous" arrow.
     * Default: <button type="button" class="slick-prev">Previous</button>
     */
    prevArrow?: Element | JQuery | string;

    /**
     * Allows you to select a node or customize the HTML for the "Next" arrow.
     * Default: <button type="button" class="slick-next">Next</button>
     */
    nextArrow?: Element | JQuery | string;

    /**
     * Enables centered view with partial prev/next slides. Use with odd numbered slidesToShow counts.
     * Default: false
     */
    centerMode?: boolean;

    /**
     * Side padding when in center mode (px or %)
     * Default: '50px'
     */
    centerPadding?: string;

    /**
     * CSS3 Animation Easing
     * Default: 'ease'
     */
    cssEase?: string;

    /**
     * Custom paging templates. See source for use example.
     * Default: n/a
     */
    customPaging?: (slider: any, i: number) => string;

    /**
     * Show dot indicators
     * Default: false
     */
    dots?: boolean;

    /**
     * Class for slide indicator dots container
     * Default: 'slick-dots'
     */
    dotsClass?: string;

    /**
     * Enable mouse dragging
     * Default: true
     */
    draggable?: boolean;

    /**
     * Enable fade
     * Default: false
     */
    fade?: boolean;

    /**
     * Enable focus on selected element (click)
     * Default: false
     */
    focusOnSelect?: boolean;

    /**
     * Add easing for jQuery animate. Use with easing libraries or default easing methods
     * Default: 'linear'
     */
    easing?: string;

    /**
     * Resistance when swiping edges of non-infinite carousels
     * Default: 0.15
     */
    edgeFriction?: number;

    /**
     * Infinite loop sliding
     * Default: true
     */
    infinite?: boolean;

    /**
     * Slide to start on
     * Default: 0
     */
    initialSlide?: number;

    /**
     * Set lazy loading technique. Accepts 'ondemand' or 'progressive'.
     * Default: 'ondemand'
     */
    lazyLoad?: string;

    /**
     * Responsive settings use mobile first calculation
     * Default: false
     */
    mobileFirst?: boolean;

    /**
     * Pause Autoplay On Focus
     * Default: true
     */
    pauseOnFocus?: boolean;

    /**
     * Pause Autoplay On Hover
     * Default: true
     */
    pauseOnHover?: boolean;

    /**
     * Pause Autoplay when a dot is hovered
     * Default: false
     */
    pauseOnDotsHover?: boolean;

    /**
     * Width that responsive object responds to. Can be 'window', 'slider' or 'min' (the smaller of the two)
     * Default: 'window'
     */
    respondTo?: string;

    /**
     * Object containing breakpoints and settings objects (see demo).
     * Enables settings sets at given screen width.
     * Set settings to "unslick" instead of an object to disable slick at a given breakpoint.
     * Default: none
     */
    responsive?: Object;

    /**
     * Setting this to more than 1 initializes grid mode. Use slidesPerRow to set how many slides should be in each row.
     * Default: 1
     */
    rows?: number;

    /**
     * Element query to use as slide
     * Default: 'div'
     */
    slide?: string;

    /**
     * With grid mode intialized via the rows option, this sets how many slides are in each grid row.
     * Default: 1
     */
    slidesPerRow?: number;

    /**
     * # of slides to show
     * Default: 1
     */
    slidesToShow?: number;

    /**
     * # of slides to scroll
     * Default: 1
     */
    slidesToScroll?: number;

    /**
     * Slide/Fade animation speed (ms)
     * Default: 300
     */
    speed?: number;

    /**
     * Enable swiping
     * Default: true
     */
    swipe?: boolean;

    /**
     * Allow users to drag or swipe directly to a slide irrespective of slidesToScroll.
     * Default: false
     */
    swipeToSlide?: boolean;

    /**
     * Enable slide motion with touch
     * Default: true
     */
    touchMove?: boolean;

    /**
     * To advance slides, the user must swipe a length of (1/touchThreshold) * the width of the slider.
     * Default: 5
     */
    touchThreshold?: number;

    /**
     * Enable/Disable CSS Transitions
     * Default: true
     */
    useCSS?: boolean;

    /**
     * Enable/Disable CSS Transforms
     * Default: true
     */
    useTransform?: boolean;

    /**
     * Variable width slides.
     * Default: false
     */
    variableWidth?: boolean;

    /**
     * Vertical slide mode
     * Default: false
     */
    vertical?: boolean;

    /**
     * Vertical swipe mode
     * Default: false
     */
    verticalSwiping?: boolean;

    /**
     * Change the slider's direction to become right-to-left
     * Default: false
     */
    rtl?: boolean;

    /**
     * Change the slider's direction to become right-to-left
     * Default: false
     */
    waitForAnimate?: boolean;

    /**
     * Set the zIndex values for slides, useful for IE9 and lower
     * Default: 1000
     */
    zIndex?: number;
    
}


interface JQuery {

    /**
     * Create slick component
     */
    slick(): JQuery;
    slick(options: JQuerySlickOptions): JQuery;

    /**
     * Trigger non-specialized signature method
     * @param methodName
     * @param arg
     */
    slick(methodName: string, ...arg: any[]): any;

    /**
     * Returns the current slide index
     * @param methodName The name of the method
     */
    slick(methodName: "slickCurrentSlide"): number;

    /**
     * Navigates to a slide by index
     * @param methodName The name of the method
     * @param slide
     * @param animate
     */
    slick(methodName: "slickGoTo", slide: number, animate?: boolean): JQuery;

    /**
     * Navigates to the next slide
     * @param methodName The name of the method
     */
    slick(methodName: "slickNext"): JQuery;

    /**
     * Navigates to the previous slide
     * @param methodName The name of the method
     */
    slick(methodName: "slickPrev"): JQuery;

    /**
     * Pauses autoplay
     * @param methodName The name of the method
     */
    slick(methodName: "slickPause"): JQuery;

    /**
     * Starts autoplay
     * @param methodName The name of the method
     */
    slick(methodName: "slickPlay"): JQuery;

    /**
     * Add a slide. If an index is provided, will add at that index, or before if addBefore is set. If no index is provided,
     * add to the end or to the beginning if addBefore is set. Accepts HTML String || Object
     * @param methodName The name of the method
     * @param html
     * @param index/div>
     * @param addBefore
     */
    slick(methodName: "slickAdd", html: string | Object, index?: number, addBefore?: number): JQuery;

    /**
     * Remove slide by index. If removeBefore is set true, remove slide preceding index, or the first slide if no index is specified.
     * If removeBefore is set to false, remove the slide following index, or the last slide if no index is set.
     * @param methodName The name of the method
     * @param index
     * @param removeBefore
     */
    slick(methodName: "slickRemove", index: number, removeBefore?: number): JQuery;

    /**
     * Filters slides using jQuery .filter()
     * @param methodName The name of the method
     * @param selector
     */
    slick(methodName : "slickFilter", selector: string): JQuery;

    /**
     * Filters slides using jQuery .filter()
     * @param methodName The name of the method
     * @param func
     */
    slick(methodName : "slickFilter", func: (index: number, element: Element) => any): JQuery;

    /**
     * Removes applied filtering
     * @param methodName The name of the method
     * @param index
     */
    slick(methodName: "slickUnfilter", index: number): JQuery;

    /**
     * Sets an individual value live. Set refresh to true if it's a UI update.
     * @param methodName The name of the method
     * @param option The option name
     */
    slick(methodName: "slickGetOption", option: any): JQuerySlickOptions;

    /**
     * Sets an individual value live. Set refresh to true if it's a UI update.
     * @param methodName The name of the method
     * @param option The option name
     * @param value depends on option
     * @param refresh
     */
    slick(methodName: "slickSetOption", option: string, value: JQuerySlickOptions, refresh?: boolean): JQuery;

    /**
     * Deconstructs slick
     * @param methodName The name of the method
     */
    slick(methodName: "unslick"): JQuery;

    /**
     * Get Slick Object
     * @param methodName The name of the method
     */
    slick(methodName: "getSlick"): Object;

}
