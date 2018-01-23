// Type definitions for Swiper v4.1.0
// Project: https://github.com/nolimits4web/Swiper
// Definitions by: Sebastián Galiano <https://github.com/sgaliano/>
// Definitions by: Luiz Machado <https://github.com/odahcam/>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 2.5
// Swiper Version: 4.1.0

/*~ If this module is a UMD module that exposes a global variable 'myClassLib' when
 *~ loaded outside a module loader environment, declare that global here.
 *~ Otherwise, delete this declaration.
 */
export as namespace swiperLib;

/*~ This declaration specifies that the class constructor function
 *~ is the exported object from the file
 */
export = Swiper;

type SelectableElement = string | HTMLElement;

/*~ Write your module's methods and properties in this class */
declare class Swiper {

  constructor(container: SelectableElement, options?: Options);

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
   * Disable / enable ability to slide to the next slides by assigning false/true to this property
   */
  allowSlideNext; 

  /**
   * Disable / enable ability to slide to the previous slides by assigning false/true to this property
   */
  allowSlidePrev; 

  /**
   * Disable / enable ability move slider by grabbing it with mouse or by touching it with finger (on touch screens) by assigning false/true to this property
   */
  allowTouchMove; 

  // Methods

  /**
   * Run transition to next slide
   *  speed - number - transition duration (in ms). Optional
   * runCallbacks - boolean - Set it to false (by default it is true) and transition will not produce transition events. Optional
   */
  slideNext: (speed: number, runCallbacks: boolean) => {};
  
  /**
   * Run transition to previous slide
  // speed - number - transition duration (in ms). Optional
  // runCallbacks - boolean - Set it to false (by default it is true) and transition will not produce transition events. Optional
   */
  slidePrev: (speed: number, runCallbacks: boolean) => {};
  
  /**
   * Run transition to the slide with index number equal to 'index' parameter for the duration equal         // to 'speed' parameter.
   * 
   * @param index - index number of slide
   * @param speed - transition duration (in ms). Optional
   * @param runCallbacks - Set it to false (by default it is true) and transition will not produce transition events. Optional
   */
  slideTo: (index: number, speed: number, runCallbacks: boolean) => {};
  
  /**
   * You should call it after you add/remove slides manually, or after you hide/show it, or do any custom DOM modifications with Swiper
   * This method also includes subcall of the following methods which you can use separately:
   */
  update: () => {};

  /**
   * recalculate size of swiper container
   */
  updateSize: () => {}; 
  /**
   * recalculate number of slides and their offsets. Useful after you add/remove slides with JavaScript
   */
  updateSlides: () => {}; 
  /**
   * recalculate swiper progress
   */
  updateProgress: () => {}; 
  /**
   * update active/prev/next classes on slides and bullets
   */
  updateSlidesClasses: () => {}; 
  /**
   * tach all events listeners
   */
  detachEvents: () => {}; 
  /**
   * Atach all events listeners again
   */
  attachEvents: () => {}; 
  /**
   * Destroy slider instance and detach all events listeners, where
   */
  destroy: (deleteInstance: any, cleanStyles: any) => {};
  /**
   * Set it to false (by default it is true) to not to delete Swiper instance
   */
  deleteInstance: boolean,
  /**
   * Set it to true (by default it is true) and all custom styles will be removed from slides, wrapper and container. Useful if you need to destroy Swiper and to init again with new options or in different direction
   */
  cleanStyles: boolean,
  /**
   * Add new slides to the end. slides could be HTMLElement or HTML string with new slide or array with such slides, for example:
   * 
   * @example appendSlide('<div class="swiper-slide">Slide 10"</div>')
   * @example appendSlide(['<div class="swiper-slide">Slide 10"</div>', '<div class="swiper-slide">Slide 11"</div>']);
   */
  appendSlide: (slides: string | string[]) => {};
  /** 
   * Add new slides to the beginning. slides could be HTMLElement or HTML string with new slide or array with such slides, for example:
   * 
   * @example prependSlide('<div class="swiper-slide">Slide 0"</div>')
   * @example prependSlide(['<div class="swiper-slide">Slide 1"</div>', '<div class="swiper-slide">Slide 2"</div>']);
   */
  prependSlide: (slides: string | string[]) => {};
  /**
   * Remove selected slides. slideIndex could be a number with slide index to remove or array with indexes.
   * 
   * @example removeSlide(0); // remove first slide
   * @example removeSlide([0, 1]); // remove first and second slides
   * @example removeAllSlides();	// Remove all slides
   */
  removeSlide: (slideIndex: number | number[]) => {};
  /**
   * Set custom css3 transform's translate value for swiper wrapper
   */
  setTranslate: (translate);
  /**
   * Get current value of swiper wrapper css3 transform translate
   */
  getTranslate: () => {};

  /**
   * Add event listener
   */
  on: (event: any, handler: any) => {}; 
  
  /**
   * Add event listener that will be executed only once
   */
  once: (event: any, handler: any) => {}; 
  
  /**
   * Remove event listener for specified event
   */
  off: (event: any, handler: any) => {}; 
  
  /**
   * Remove all listeners for specified event
   */
  off: (event: any) => {}; 
  
  /**
   * Disable mousewheel control
   */
  disableMousewheelControl: () => {}; 
  
  /**
   * Enable mousewheel control
   */
  enableMousewheelControl: () => {}; 
  
  /**
   * Disable keyboard control
   */
  disableKeyboardControl: () => {}; 
  
  /**
   * Enable keyboard control
   */
  enableKeyboardControl: () => {}; 
  
  /**
   * Unset grab cursor
   */
  unsetGrabCursor: () => {}; 
  
  /**
   * Set grab cursor
   */
  setGrabCursor: () => {}; 
}


namespace Swiper {

  export interface SwiperEvents {

    /**
     * Event will be fired right after Swiper initialization. Note that with swiper.on('init') syntax it will work only in case you set init: false parameter.
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
    init: () => {};

    /**
     * Event will be fired right beforey Swiper destoryed
     */
    beforeDestroy: () => {};

    /**
     * Event will be fired when currently active slide is changed
     */
    slideChange: () => {};

    /**
     * Event will be fired in the beginning of animation to other slide (next or previous).
     */
    slideChangeTransitionStart: () => {};

    /**
     * Event will be fired after animation to other slide (next or previous).
     */
    slideChangeTransitionEnd: () => {};

    /**
     * Same as "slideChangeTransitionStart" but for "forward" direction only
     */
    slideNextTransitionStart: () => {};

    /**
     * Same as "slideChangeTransitionEnd" but for "forward" direction only
     */
    slideNextTransitionEnd: () => {};

    /**
     * Same as "slideChangeTransitionStart" but for "backward" direction only
     */
    slidePrevTransitionStart: () => {};

    /**
     * Same as "slideChangeTransitionEnd" but for "backward" direction only
     */
    slidePrevTransitionEnd: () => {};

    /**
     * Event will be fired in the beginning of transition.
     */
    transitionStart: () => {};

    /**
     * Event will be fired after transition.
     */
    transitionEnd: () => {};

    /**
     * Event will be fired when user touch Swiper. Receives 'touchstart' event as an arguments.
     */
    touchStart: (event: any) => {};

    /**
     * Event will be fired when user touch and move finger over Swiper. Receives 'touchmove' event as an arguments.
     */
    touchMove: (event: any) => {};

    /**
     * Event will be fired when user touch and move finger over Swiper in direction opposite to direction parameter. Receives 'touchmove' event as an arguments.
     */
    touchMoveOpposite: (event: any) => {};

    /**
     * Event will be fired when user touch and move finger over Swiper and move it. Receives 'touchmove' event as an arguments.
     */
    sliderMove: (event: any) => {};

    /**
     * Event will be fired when user release Swiper. Receives 'touchend' event as an arguments.
     */
    touchEnd: (event: any) => {};

    /**
     * Event will be fired when user click/tap on Swiper after 300ms delay. Receives 'touchend' event as an arguments.
     */
    click: (event: any) => {};

    /**
     * Event will be fired when user click/tap on Swiper. Receives 'touchend' event as an arguments.
     */
    tap: (event: any) => {};

    /**
     * Event will be fired when user double tap on Swiper's container. Receives 'touchend' event as an arguments
     */
    doubleTap: (event: any) => {};

    /**
     * Event will be fired right after all inner images are loaded. updateOnImagesReady should be also enabled
     */
    imagesReady: () => {};

    /**
     * Event will be fired when Swiper progress is changed, as an arguments it receives progress that is always from 0 to 1
     */
    progress: (progress: any) => {};

    /**
     * Event will be fired when Swiper reach its beginning (initial position)
     */
    reachBeginning: () => {};

    /**
     * Event will be fired when Swiper reach last slide
     */
    reachEnd: () => {};

    /**
     * Event will be fired when Swiper goes from beginning or end position
     */
    fromEdge: () => {};

    /**
     * Event will be fired when swiper's wrapper change its position. Receives current translate value as an arguments
     */
    setTranslate: (translate: any) => {};


    /**
     * Event will be fired everytime when swiper starts animation. Receives current transition duration (in ms) as an      arguments, 
     */
    setTransition: (transition: any) => {};

    /**
     * Event will be fired on window resize right before swiper's onresize manipulation
     */
    resize: () => {};
  }

  export interface SwiperOptions {

    init?: boolean;
    initialSlide?: number;
    direction?: string;
    speed?: number;
    setWrapperSize?: boolean;
    virtualTranslate?: boolean;
    width?: number;
    height?: number;
    autoHeight?: boolean;
    roundLengths?: boolean;
    nested?: boolean;
    uniqueNavElements?: boolean;
    effect?: string;
    runCallbacksOnInit?: boolean;
    watchOverflow?: boolean;
    on?: EventsOptions;

    // Slides grid
    spaceBetween?: number;
    slidesPerView?: number | string; // 'auto'
    slidesPerColumn?: number;
    slidesPerColumnFill?: string;
    slidesPerGroup?: number;
    centeredSlides?: boolean;
    slidesOffsetBefore?: number;
    slidesOffsetAfter?: number;
    normalizeSlideIndex?: boolean;

    // Grab Cursor
    grabCursor?: boolean;

    // Touches
    touchEventsTarget?: string;
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
    breakpoints?: object;

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
    hashNavigation?: SwiperHashNavigation | boolean;
    history?: HistoryOptions | boolean;
    a11y?: A11yOptions | boolean;
  }

  interface EventsOptions {
    init: () => {};
    beforeDestroy: () => {};
    slideChange: () => {};
    slideChangeTransitionStart: () => {};
    slideChangeTransitionEnd: () => {};
    slideNextTransitionStart: () => {};
    slideNextTransitionEnd: () => {};
    slidePrevTransitionStart: () => {};
    slidePrevTransitionEnd: () => {};
    transitionStart: () => {};
    transitionEnd: () => {};
    touchStart: (event: any) => {};
    touchMove: (event: any) => {};
    touchMoveOpposite: (event: any) => {};
    sliderMove: (event: any) => {};
    touchEnd: (event: any) => {};
    click: (event: any) => {};
    tap: (event: any) => {};
    doubleTap: (event: any) => {};
    imagesReady: () => {};
    progress: (progress: any) => {};
    reachBeginning: () => {};
    reachEnd: () => {};
    fromEdge: () => {};
    setTranslate: (translate: any) => {};
    setTransition: (transition: any) => {};
    resize: () => {};
  }

  interface NavigationOptions {

    /**
     * String with CSS selector or HTML element of the element that will work like "next" button after click on it
     * 
     * @default null
     */
    nextEl: SelectableElement;

    /**
     * String with CSS selector or HTML element of the element that will work like "prev" button after click on it
     * 
     * @default null
     */
    prevEl: SelectableElement;

    /**
     * buttons visibility after click on Slider's container
     * 
     * @default false Toggle navigation
     */
    hideOnClick: boolean;

    /**
     * CSS class name added to navigation button when it becomes disabled
     * 
     * @default 'swiper-button-disabled'
     */
    disabledClass: string;

    /**
     * CSS class name added to navigation button when it becomes hidden
     * 
     * @default 'swiper-button-hidden'
     */
    hiddenClass: string;

  }

  interface OptionsWithElement {
    el: SelectableElement;
  }

  interface PaginationOptions extends OptionsWithElement {
    type: string;
    bulletElement: string;
    dynamicBullets: boolean;
    hideOnClick: boolean;
    clickable: boolean;
    renderBullet: (index: any, className: any) => {};
    renderFraction: (currentClass: any, totalClass: any) => {};
    renderProgressbar: (progressbarFillClass: any) => {};
    renderCustom: (swiper: any, current: any, total: any) => {};
    bulletClass: string;
    bulletActiveClass: string;
    modifierClass: string;
    currentClass: string;
    totalClass: string;
    hiddenClass: string;
    progressbarFillClass: string;
    clickableClass: string;
  }

  interface ScrollbarOptions extends OptionsWithElement {
    hide: boolean;
    draggable: boolean;
    snapOnRelease: boolean;
    dragSize: string | number;
  }

  interface AutoplayOptions extends OptionsWithElement {

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
    delay: number;

    /**
     * Set to false and autoplay will not be disabled after user interactions (swipes), it will be restarted every time after interaction
     * 
     * @default true
     */
    disableOnInteraction: boolean;

    /**
     * Enables autoplay in reverse direction
     * 
     * @default false
     */
    reverseDirection: boolean;

    /**
     * When enabled autoplay will wait for wrapper transition to continue. Can be disabled in case of using Virtual Translate when your
     * slider may not have transition
     * 
     * @default true
     */
    waitForTransition: boolean;

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

  // Effects

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
    maxRatio: number;
    minRatio: number;
    toggle: boolean;
    containerClass: string;
    zoomedSlideClass: string;
  }

  interface KeyboardOptions {
    enabled: boolean
    onlyInViewport: boolean
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
    renderSlide: (slide: any, index: any) => {};
    renderExternal: (data: any) => {};
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

}

// Swiper exports the folloing as ES5 module (in swiper.esm.js), so we gotta make sure that everything is exported here.
export {
  // Swiper, // - core module
  /* virtual as */ Virtual, // - Virtual Slides module
  /* keyboard as */ Keyboard, // - Keyboard Control module
  /* mousewheel as */ Mousewheel, // - Mousewheel Control module
  /* navigation as */ Navigation, // - Navigation module
  /* pagination as */ Pagination, // - Pagination module
  /* scrollbar as */ Scrollbar, // - Scrollbar module
  /* parallax as */ Parallax, // - Parallax module
  /* zoom as */ Zoom, // - Zoom module
  /* lazy as */ Lazy, // - Lazy module
  /* controller as */ Controller, // - Controller module
  /* a11y$1 as */ A11y, // - Accessibility module
  /* history as */ History, // - History Navigation module
  /* hashNavigation as */ HashNavigation, // - Hash Navigation module
  /* autoplay as */ Autoplay, // - Autoplay module
  /* effectFade as */ EffectFade, // - Fade Effect module
  /* effectCube as */ EffectCube, // - Cube Effect module
  /* effectFlip as */ EffectFlip, // - Flip Effect module
  /* effectCoverflow as */ EffectCoverflow // - Coverflow Effect module
};
