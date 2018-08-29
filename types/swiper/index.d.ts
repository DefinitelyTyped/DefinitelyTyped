// Type definitions for Swiper
// Project: https://github.com/nolimits4web/Swiper
// Definitions by: Sebastián Galiano <https://github.com/sgaliano/>
// Definitions by: Luiz Machado <https://github.com/odahcam/>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 2.7.2
// Swiper Version: 4.2.6

// declare namespace swiper {
declare module 'swiper' {

  type CommonEvent =
    | 'init'
    | 'beforeDestroy'
    | 'slideChange'
    | 'slideChangeTransitionStart'
    | 'slideChangeTransitionEnd'
    | 'slideNextTransitionStart'
    | 'slideNextTransitionEnd'
    | 'slidePrevTransitionStart'
    | 'slidePrevTransitionEnd'
    | 'transitionStart'
    | 'transitionEnd'
    | 'touchStart'
    | 'touchMove'
    | 'touchMoveOpposite'
    | 'sliderMove'
    | 'touchEnd'
    | 'click'
    | 'tap'
    | 'doubleTap'
    | 'imagesReady'
    | 'progress'
    | 'reachBeginning'
    | 'reachEnd'
    | 'fromEdge'
    | 'setTranslate'
    | 'setTransition'
    | 'resize';

  type PaginationEvent = 'paginationRender' | 'paginationUpdate';
  type AutoplayEvent = 'autoplayStart' | 'autoplayStop' | 'autoplay';
  type LazyLoadingEvent = 'lazyImageLoad' | 'lazyImageReady';

  type SwiperEvent = CommonEvent | PaginationEvent | AutoplayEvent | LazyLoadingEvent;

  type DOM7Element = any;
  type SelectableElement = string | HTMLElement;

  /*
   * Swiper options and events.
   */

  /**
   * Main constructor options.
   */
  interface SwiperOptions {

    init?: boolean;
    initialSlide?: number;
    direction?: 'horizontal' | 'vertical';
    speed?: number;
    setWrapperSize?: boolean;
    virtualTranslate?: boolean;
    width?: number;
    height?: number;
    autoHeight?: boolean;
    roundLengths?: boolean;
    nested?: boolean;
    uniqueNavElements?: boolean;
    effect?: 'slide' | 'fade' | 'cube' | 'coverflow' | 'flip';
    runCallbacksOnInit?: boolean;
    watchOverflow?: boolean;
    on?: EventsOptions;

    // Slides grid
    spaceBetween?: number;
    slidesPerView?: number | 'auto';
    slidesPerColumn?: number;
    slidesPerColumnFill?: 'row' | 'column';
    slidesPerGroup?: number;
    centeredSlides?: boolean;
    slidesOffsetBefore?: number;
    slidesOffsetAfter?: number;
    normalizeSlideIndex?: boolean;

    // Grab Cursor
    grabCursor?: boolean;

    // Touches
    // @TODO: verify next property
    touchEventsTarget?: 'container' | 'wrapper';
    touchRatio?: number;
    touchAngle?: number;
    simulateTouch?: boolean;
    shortSwipes?: boolean;
    longSwipes?: boolean;
    longSwipesRatio?: number;
    longSwipesMs?: number;
    followFinger?: boolean;
    allowTouchMove?: boolean;
    threshold?: number;
    touchMoveStopPropagation?: boolean;
    iOSEdgeSwipeDetection?: boolean;
    iOSEdgeSwipeThreshold?: number;
    touchReleaseOnEdges?: boolean;
    passiveListeners?: boolean;

    // Touch Resistance
    resistance?: boolean;
    resistanceRatio?: number;

    // Swiping / No swiping
    allowSlidePrev?: boolean;
    allowSlideNext?: boolean;
    noSwiping?: boolean;
    noSwipingClass?: string;
    // noSwipingSelector?: string;
    swipeHandler?: SelectableElement;

    // Clicks
    preventClicks?: boolean;
    preventClicksPropagation?: boolean;
    slideToClickedSlide?: boolean;

    // Freemode
    freeMode?: boolean;
    freeModeMomentum?: boolean;
    freeModeMomentumRatio?: number;
    freeModeMomentumVelocityRatio?: number;
    freeModeMomentumBounce?: boolean;
    freeModeMomentumBounceRatio?: number;
    freeModeMinimumVelocity?: number;
    freeModeSticky?: boolean;

    // Progress
    watchSlidesProgress?: boolean;
    watchSlidesVisibility?: boolean;

    // Images
    preloadImages?: boolean;
    updateOnImagesReady?: boolean;

    // Loop
    loop?: boolean;
    loopAdditionalSlides?: number;
    loopedSlides?: number;
    loopFillGroupWithBlank?: boolean;

    // Breakpoints
    breakpoints?: {
      // TODO: extract possible parameters for breakpoints to separate interface
      [index: number]: any;
    };

    // Observer
    observer?: boolean;
    observeParents?: boolean;

    // Namespace
    containerModifierClass?: string;
    slideClass?: string;
    slideActiveClass?: string;
    slideDuplicatedActiveClass?: string;
    slideVisibleClass?: string;
    slideDuplicateClass?: string;
    slideNextClass?: string;
    slideDuplicatedNextClass?: string;
    slidePrevClass?: string;
    slideDuplicatedPrevClass?: string;
    wrapperClass?: string;

    // Components
    navigation?: NavigationOptions;
    pagination?: PaginationOptions;
    scrollbar?: ScrollbarOptions;
    autoplay?: AutoplayOptions | boolean;
    parallax?: boolean;
    lazy?: LazyOptions | boolean;
    fadeEffect?: FadeEffectOptions;
    coverflowEffect?: CoverflowEffectOptions;
    flipEffect?: FlipEffectOptions;
    cubeEffect?: CubeEffectOptions;
    zoom?: ZoomOptions | boolean;
    keyboard?: KeyboardOptions | boolean;
    mousewheel?: MousewheelOptions | boolean;
    virtual?: VirtualOptions | boolean;
    hashNavigation?: HashNavigationOptions | boolean;
    history?: HistoryNavigationOptions | boolean;
    a11y?: A11yOptions | boolean;
  }

  interface EventsOptions {

    /**
     * Fired right after Swiper initialization.
     * Note that with swiper.on('init') syntax it will
     * work only in case you set init: false parameter.
     *
     * @example
     * var swiper = new Swiper('.swiper-container', {
     *   init: false,
     *   // other parameters
     * });
     *
     * @example
     * swiper.on('init', function() {
     *  // do something
     * });
     *
     * @example
     * // init Swiper
     * swiper.init();
     *
     * @example
     * // Otherwise use it as the parameter:
     * var swiper = new Swiper('.swiper-container', {
     *   // other parameters
     *   on: {
     *     init: function () {
     *       // do something
     *     },
     *   }
     * });
     */
    init();

    /**
     * Triggered right beforey Swiper destoryed
     */
    beforeDestroy();

    /**
     * Triggered when currently active slide is changed
     */
    slideChange();

    /**
     * Triggered in the beginning of animation to other slide (next or previous).
     */
    slideChangeTransitionStart();

    /**
     * Triggered after animation to other slide (next or previous).
     */
    slideChangeTransitionEnd();

    /**
     * Same as "slideChangeTransitionStart" but for "forward" direction only
     */
    slideNextTransitionStart();

    /**
     * Same as "slideChangeTransitionEnd" but for "forward" direction only
     */
    slideNextTransitionEnd();

    /**
     * Same as "slideChangeTransitionStart" but for "backward" direction only
     */
    slidePrevTransitionStart();

    /**
     * Same as "slideChangeTransitionEnd" but for "backward" direction only
     */
    slidePrevTransitionEnd();

    /**
     * Triggered in the beginning of transition.
     */
    transitionStart();

    /**
     * Triggered after transition.
     */
    transitionEnd();

    /**
     * Triggered when user touch Swiper. Receives 'touchstart' event as an arguments.
     */
    touchStart(event: any);

    /**
     * Triggered when user touch and move finger over Swiper. Receives 'touchmove' event as an arguments.
     */
    touchMove(event: any);

    /**
     * Fired when user touch and move finger over
     * Swiper in direction opposite to direction parameter.
     * Receives 'touchmove' event as an arguments.
     */
    touchMoveOpposite(event: any);

    /**
     * Triggered when user touch and move finger over Swiper and move it. Receives 'touchmove' event as an arguments.
     */
    sliderMove(event: any);

    /**
     * Triggered when user release Swiper. Receives 'touchend' event as an arguments.
     */
    touchEnd(event: any);

    /**
     * Triggered when user click/tap on Swiper after 300ms delay. Receives 'touchend' event as an arguments.
     */
    click(event: any);

    /**
     * Triggered when user click/tap on Swiper. Receives 'touchend' event as an arguments.
     */
    tap(event: any);

    /**
     * Triggered when user double tap on Swiper's container. Receives 'touchend' event as an arguments
     */
    doubleTap(event: any);

    /**
     * Triggered right after all inner images are loaded. updateOnImagesReady should be also enabled
     */
    imagesReady();

    /**
     * Triggered when Swiper progress is changed, as an arguments it receives progress that is always from 0 to 1
     */
    progress(progress: any);

    /**
     * Triggered when Swiper reach its beginning (initial position)
     */
    reachBeginning();

    /**
     * Triggered when Swiper reach last slide
     */
    reachEnd();

    /**
     * Triggered when Swiper goes from beginning or end position
     */
    fromEdge();

    /**
     * Triggered when swiper's wrapper change its position. Receives current translate value as an arguments
     */
    setTranslate(translate: any);


    /**
     * Triggered everytime when swiper starts animation. Receives current transition duration (in ms) as an      arguments,
     */
    setTransition(transition: any);

    /**
     * Triggered on window resize right before swiper's onresize manipulation
     */
    resize();
  }

  interface NavigationOptions {

    /**
     * String with CSS selector or HTML element of the element that will work like "next" button after click on it
     *
     * @default null
     */
    nextEl?: SelectableElement;

    /**
     * String with CSS selector or HTML element of the element that will work like "prev" button after click on it
     *
     * @default null
     */
    prevEl?: SelectableElement;

    /**
     * buttons visibility after click on Slider's container
     *
     * @default false Toggle navigation
     */
    hideOnClick?: boolean;

    /**
     * CSS class name added to navigation button when it becomes disabled
     *
     * @default 'swiper-button-disabled'
     */
    disabledClass?: string;

    /**
     * CSS class name added to navigation button when it becomes hidden
     *
     * @default 'swiper-button-hidden'
     */
    hiddenClass?: string;

  }

  interface PaginationOptions {
    el: SelectableElement;
    type?: 'bullets' | 'fraction' | 'progressbar' | 'custom';
    bulletElement?: string;
    dynamicBullets?: boolean;
    hideOnClick?: boolean;
    clickable?: boolean;
    /**
     * format fraction pagination current number. Function receives current number, and you need to return formatted value
     */
    formatFractionCurrent?: (number) => number;
    /**
     * format fraction pagination total number. Function receives total number, and you need to return formatted value
     */
    formatFractionTotal?: (number) => number;
    renderBullet?: (index: number, className: string) => {};
    renderFraction?: (currentClass: string, totalClass: string) => {};
    renderProgressbar?: (progressbarFillClass: string) => {};
    /**
     * This parameter is required for custom pagination type where you have to specify how it should be rendered.
     *
     * @example
     * var swiper = new Swiper('.swiper-container', {
     *   //...
     *   renderCustom: function (swiper, current, total) {
     *     return current + ' of ' + total;
     *   }
     * });
     */
    renderCustom?: (swiper: Swiper, current: number, total: number) => {};
    bulletClass?: string;
    bulletActiveClass?: string;
    modifierClass?: string;
    currentClass?: string;
    totalClass?: string;
    hiddenClass?: string;
    progressbarFillClass?: string;
    clickableClass?: string;
  }

  interface ScrollbarOptions {
    el: SelectableElement;
    hide: boolean;
    draggable: boolean;
    snapOnRelease: boolean;
    dragSize: string | number;
  }

  interface AutoplayOptions {

    /**
     * Delay between transitions (in ms). If this parameter is not specified, auto play will be disabled
     *
     * If you need to specify different delay for specifi slides you can do it by using data-swiper-autoplay (in ms) attribute on slide.
     *
     * @example
     * <!-- hold this slide for 2 seconds -->
     * <div class="swiper-slide" data-swiper-autoplay="2000">
     * stopOnLast: boolean // default:	false	Enable this parameter and autoplay will be stopped when it reaches last slide (has no effect in loop mode)
     *
     * @default 3000
     */
    delay?: number;

    /**
     * Set to false and autoplay will not be disabled after
     * user interactions (swipes), it will be restarted
     * every time after interaction
     *
     * @default true
     */
    disableOnInteraction?: boolean;

    /**
     * Enables autoplay in reverse direction
     *
     * @default false
     */
    reverseDirection?: boolean;

    /**
     * When enabled autoplay will wait for wrapper transition to continue. Can be disabled in case of using Virtual Translate when your
     * slider may not have transition
     *
     * @default true
     */
    waitForTransition?: boolean;

  }

  interface LazyOptions {
    loadPrevNext: boolean;
    loadPrevNextAmount: number;
    loadOnTransitionStart: boolean;
    elementClass: string;
    loadingClass: string;
    loadedClass: string;
    preloaderClass: string;
  }

  /*
   * Options - Effects
   */

  interface FadeEffectOptions {
    crossfade: boolean;
  }

  interface CoverflowEffectOptions {
    slideShadows: boolean;
    rotate: number;
    stretch: number;
    depth: number;
    modifier: number;
  }

  interface FlipEffectOptions {
    slideShadows: boolean;
    limitRotation: boolean;
  }

  interface CubeEffectOptions {
    slideShadows: boolean;
    shadow: boolean;
    shadowOffset: number;
    shadowScale: number;
  }

  interface ZoomOptions {
    maxRatio?: number;
    minRatio?: number;
    toggle?: boolean;
    containerClass?: string;
    zoomedSlideClass?: string;
  }

  interface KeyboardOptions {
    enabled: boolean;
    onlyInViewport: boolean;
  }

  interface MousewheelOptions {
    forceToAxis: boolean;
    releaseOnEdges: boolean;
    invert: boolean;
    sensitivity: number;
    eventsTarged: SelectableElement;
  }

  interface VirtualOptions {
    slides: any[];
    cache: boolean;
    renderSlide(slide: any, index: any);
    renderExternal(data: any);
  }

  interface HashNavigationOptions {
    watchState: boolean;
    replaceState: boolean;
  }

  interface HistoryNavigationOptions {
    replaceState: boolean;
    key: string;
  }

  interface ControllerOptions {
    control: Swiper;
    inverse: boolean;
    by: string;
  }

  interface A11yOptions {
    prevSlideMessage: string;
    nextSlideMessage: string;
    firstSlideMessage: string;
    lastSlideMessage: string;
    paginationBulletMessage: string;
    notificationClass: string;
  }

  /*
   * Swiper exports the following as ES5 module (in swiper.esm.js).
   */

  /**
   * Virtual Slides module.
   */
  class Virtual {

    /**
     * Object with cached slides HTML elements
     */
    cache: object;

    /**
     * Index of first rendered slide
     */
    from: number;

    /**
     * Index of last rendered slide
     */
    to: number;

    /**
     * Array with slide items passed by virtual.slides parameter
     */
    slides: Array<any>;

    /*
    * Methods
    */

    /**
     * Append slide
     */
    appendSlide(slide);

    /**
     * Prepend slide
     */
    prependSlide(slide);

    /**
     * Update virutal slides state
     */
    update();

  }

  /**
   * Keyboard Control module.
   */
  class Keyboard {
    [x: string]: any;
  }

  /**
   * Mousewheel Control module.
   */
  class Mousewheel {
    [x: string]: any;
  }

  /**
   * Navigation module.
   */
  class Navigation {

    /**
     * HTMLElement of "next" navigation button
     */
    nextEl: HTMLElement;

    /**
     * HTMLElement of "previous" navigation button
     */
    prevEl: HTMLElement;

    /**
     * Update navigation buttons state (enabled/disabled)
     */
    update();
  }

  /**
   * Pagination module.
   */
  class Pagination {

    /**
     * HTMLElement of pagination container element
     */
    el: HTMLElement;

    /**
     * Dom7 array-like collection of pagination bullets
     * HTML elements. To get specific slide HTMLElement
     * use `mySwiper.pagination.bullets[1]`.
     */
    bullets: DOM7Element[];

    /**
     * Render pagination layout
     */
    render();

    /**
     * Update pagination state (enabled/disabled/active)
     */
    update();

  }

  /**
   * Scrollbar module.
   */
  class Scrollbar {
    [x: string]: any;
  }

  /**
   * Parallax module.
   */
  class Parallax {
    [x: string]: any;
  }

  /**
   * Zoom module.
   */
  class Zoom {

    /**
     * Whether the zoom module is enabled
     */
    enabled: boolean;

    /**
     * Current image scale ratio
     */
    scale: number;

    /**
     * Enable zoom module
     */
    enable(): void;

    /**
     * Disable zoom module
     */
    disable(): void;

    /**
     * Zoom in image of the currently active slide
     */
    in(): void;

    /**
     * Zoom out image of the currently active slide
     */
    out(): void;

    /**
     * Toggle image zoom of the currently active slide
     */
    toggle(): void;

  }

  /**
   * Lazy module.
   */
  class Lazy {
    [x: string]: any;
  }

  /**
   * Controller module.
   */
  class Controller {
    [x: string]: any;
  }

  /**
   * Accessibility module (a11y$)
   */
  class A11y {
    [x: string]: any;
  }

  /**
   * History Navigation module.
   */
  class History {
    [x: string]: any;
  }

  /**
   * Hash Navigation module.
   */
  class HashNavigation {
    [x: string]: any;
  }

  /**
   * Autoplay module.
   */
  class Autoplay {
    [x: string]: any;
  }

  /**
   * Fade Effect module.
   */
  class EffectFade {
    [x: string]: any;
  }

  /**
   * Cube Effect module.
   */
  class EffectCube {
    [x: string]: any;
  }

  /**
   * Flip Effect module.
   */
  class EffectFlip {
    [x: string]: any;
  }

  /**
   * Coverflow Effect module.
   */
  class EffectCoverflow {
    [x: string]: any;
  }

  /**
   * Core module
   */
  class Swiper {

    constructor(container: SelectableElement, options?: SwiperOptions);

    /**
     * Object with passed initialization parameters
     */
    params: SwiperOptions;

    /**
     * Element with slider container.
     */
    el: HTMLElement;

    /**
     * Dom7 element with slider container HTML element. To get vanilla HTMLElement use el
     */
    $el: DOM7Element;

    /**
     * Slider wrapper HTML element.
     */
    wrapperEl: HTMLElement;

    /**
     * Dom7 element with slider wrapper HTML element. To get vanilla HTMLElement use wrapperEl
     */
    $wrapperEl: DOM7Element;

    /**
     * Dom7 array-like collection of slides HTML elements. To get specific slide HTMLElement use slides[1]
     */
    slides: DOM7Element[];

    /**
     * Width of container
     */
    width;

    /**
     * Height of container
     */
    height;

    /**
     * Current value of wrapper translate
     */
    translate;

    /**
     * Current progress of wrapper translate (from 0 to 1)
     */
    progress;

    /**
     * Index number of currently active slide.
     * Note, that in loop mode active index value will be always shifted on a number of looped/duplicated slides
     */
    activeIndex;

    /**
     * Index number of currently active slide considering duplicated slides in loop mode
     */
    realIndex;

    /**
     * Index number of previously active slide
     */
    previousIndex;

    /**
     * true if slider on most "left"/"top" position
     */
    isBeginning;

    /**
     * true if slider on most "right"/"bottom" position
     */
    isEnd;

    /**
     * true if swiper is in transition
     */
    animating;

    /**
     * Object with the following touch event properties:
     */
    touches: {
      startX,
      startY,
      currentX,
      currentY,
      diff
    };

    /**
     * Index number of last clicked slide
     */
    clickedIndex;

    /**
     * Link to last clicked slide (HTMLElement)
     */
    clickedSlide;

    /**
     * Disable/enable ability to slide to the next slides by assigning false/true to this property
     */
    allowSlideNext;

    /**
     * Disable/enable ability to slide to the previous slides by assigning false/true to this property
     */
    allowSlidePrev;

    /**
     * Disable/enable ability move slider by grabbing it with
     * mouse or by touching it with finger (on touch screens)
     * by assigning false/true to this property
     */
    allowTouchMove;

    // Methods

    /**
     * Run transition to next slide.
     *
     * @param speed Transition duration (in ms).
     * @param runCallbacks Set it to false (by default it is true) and transition will not produce transition events.
     */
    public slideNext(speed: number, runCallbacks: boolean);

    /**
     * Run transition to previous slide.
     *
     * @param speed Transition duration (in ms).
     * @param runCallbacks Set it to false (by default it is true) and transition will not produce transition events.
     */
    public slidePrev(speed?: number, runCallbacks?: boolean);

    /**
     * Run transition to the slide with index number equal to 'index' parameter for the duration equal to 'speed' parameter.
     *
     * @param index Index number of slide.
     * @param speed Transition duration (in ms).
     * @param runCallbacks Set it to false (by default it is true) and transition will not produce transition events.
     */
    public slideTo(index: number, speed?: number, runCallbacks?: boolean);

    /**
     * You should call it after you add/remove slides
     * manually, or after you hide/show it, or do any
     * custom DOM modifications with Swiper
     * This method also includes subcall of the following
     * methods which you can use separately:
     */
    public update();

    /**
     * recalculate size of swiper container
     */
    public updateSize();

    /**
     * recalculate number of slides and their offsets. Useful after you add/remove slides with JavaScript
     */
    public updateSlides();

    /**
     * recalculate swiper progress
     */
    public updateProgress();

    /**
     * update active/prev/next classes on slides and bullets
     */
    public updateSlidesClasses();

    /**
     * tach all events listeners
     */
    public detachEvents();

    /**
     * Atach all events listeners again
     */
    public attachEvents();

    /**
     * Destroy slider instance and detach all events listeners, where
     */
    destroy(deleteInstance: any, cleanStyles: any);

    /**
     * Set it to false (by default it is true) to not to delete Swiper instance
     */
    deleteInstance: boolean;

    /**
     * Set it to true (by default it is true) and all
     * custom styles will be removed from slides,
     * wrapper and container. Useful if you need to
     * destroy Swiper and to init again with new
     * options or in different direction
     */
    cleanStyles: boolean;

    /*
     * [If installed with use] The zoom module accessor.
     */
    zoom?: Zoom;

    /**
     * Installs modules on Swiper in runtime.
     */
    public static use(modules: any[]): void;

    /**
     * Add new slides to the end. slides could be
     * HTMLElement or HTML string with new slide or
     * array with such slides, for example:
     *
     * @example appendSlide('<div class="swiper-slide">Slide 10"</div>')
     * @example appendSlide(['<div class="swiper-slide">Slide 10"</div>', '<div class="swiper-slide">Slide 11"</div>']);
     */
    public appendSlide(slides: string | string[]): void;

    /**
     * Add new slides to the beginning. slides could be
     * HTMLElement or HTML string with new slide or array with such slides, for example:
     *
     * @example prependSlide('<div class="swiper-slide">Slide 0"</div>')
     * @example prependSlide(['<div class="swiper-slide">Slide 1"</div>', '<div class="swiper-slide">Slide 2"</div>']);
     */
    public prependSlide(slides: string | string[]);

    /**
     * Remove selected slides. slideIndex could be a number with slide index to remove or array with indexes.
     *
     * @example removeSlide(0); // remove first slide
     * @example removeSlide([0, 1]); // remove first and second slides
     * @example removeAllSlides();	// Remove all slides
     */
    public removeSlide(slideIndex: number | number[]);

    /**
     * Set custom css3 transform's translate value for swiper wrapper
     */
    public setTranslate(translate: any);

    /**
     * Get current value of swiper wrapper css3 transform translate
     */
    public getTranslate(): any;

    /**
     * Add event listener
     */
    public on(event: any, handler: any): void;

    /**
     * Add event listener that will be executed only once
     */
    public once(event: any, handler: any): void;

    /**
     * Remove event listener for specified event
     * If no handler specified, removes all listeners for specified event
     */
    public off(event: any, handler?: any): void;

    /**
     * Disable mousewheel control
     */
    public disableMousewheelControl();

    /**
     * Enable mousewheel control
     */
    public enableMousewheelControl();

    /**
     * Disable keyboard control
     */
    public disableKeyboardControl();

    /**
     * Enable keyboard control
     */
    public enableKeyboardControl();

    /**
     * Unset grab cursor
     */
    public unsetGrabCursor();

    /**
     * Set grab cursor
     */
    public setGrabCursor();
  }
}

// Use thru this when in TypeScript
declare module 'swiper/dist/js/swiper.esm' {
  import alias = require('swiper');
  export = alias;
}
