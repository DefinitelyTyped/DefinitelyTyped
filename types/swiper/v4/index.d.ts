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

/*~ Write your module's methods and properties in this class */
// @NOTE this is the 3.4.7 class version.
// @TODO update this class to the 4.1.0 version. 
declare class Swiper {

  constructor(container: string | HTMLElement, options?: Options);

  // Properties
  width: number;
  height: number;
  params: any;
  positions: any;

  // Feature detection
  support: {
    touch: boolean;
    transforms: boolean;
    transforms3d: boolean;
    transitions: boolean;
  };

  // Browser detection
  browser: {
    ie8: boolean;
    ie10: boolean;
  };

  // Navigation
  activeIndex: number;
  activeLoopIndex: number;
  activeLoaderIndex: number;
  previousIndex: number;
  swipeNext(internal?: boolean): boolean;
  swipePrev(internal?: boolean): boolean;
  swipeReset(): boolean;
  swipeTo(index: number, speed?: number, runCallbacks?: boolean): boolean;
  activeSlide(): Slide;
  updateActiveSlide(index: number): void;

  // Events
  touches: any;
  isTouched: boolean;
  clickedSlideIndex: number;
  clickedSlide: Slide;
  wrapperTransitionEnd(callback: () => void, permanent: boolean): void;

  // Init/reset
  destroy(removeResizeEvent?: boolean): void;
  reInit(forceCalcSlides?: boolean): void;
  resizeFix(reInit?: boolean): void;

  // Autoplaying
  autoplay: boolean;
  startAutoplay(): void;
  stopAutoplay(): void;

  // Other methods
  getWrapperTranslate(axis: string): number;  // 'x' or 'y'
  setWrapperTranslate(x: number, y: number, z: number): void;
  setWrapperTransition(duration: any): void;

  // Slides API
  slides: Slide[];
  createSlide(html: string, slideClassList?: string, element?: string): Slide;
  appendSlide(html: string, slideClassList?: string, element?: string): Slide;
  appendSlide(slideInstance: HTMLElement): Slide;
  prependSlide(html: string, slideClassList?: string, element?: string): Slide;
  prependSlide(slideInstance: HTMLElement): Slide;
  insertSlideAfter(index: number, html: string, slideClassList?: string, element?: string): Slide;
  insertSlideAfter(index: number, slideInstance: HTMLElement): Slide;
  removeSlide(index: number): boolean;
  removeLastSlide(): boolean;
  removeAllSlides(): void;
  getSlide(index: number): Slide;
  getLastSlide(): Slide;
  getFirstSlide(): Slide;
}

namespace Swiper {

  // @NOTE take a look on this one after
  declare class Slide {
    append(): Slide;
    clone(): Slide;
    getWidth(): number;
    getHeight(): number;
    getOffset(): { top: number; left: number; };
    insertAfter(index: number): Slide;
    prepend(): Slide;
    remove(): void;
  }

  export interface Options {

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
    swipeHandler?: string | HTMLElement,

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
    nextEl: string | HTMLElement // default: null String with CSS selector or HTML element of the element that will work like "next" button after click on it
    prevEl: string | HTMLElement // default: null String with CSS selector or HTML element of the element that will work like "prev" button after click on it
    hideOnClick: boolean // default: false Toggle navigation buttons visibility after click on Slider's container
    disabledClass: string // default: 'swiper-button-disabled' CSS class name added to navigation button when it becomes disabled
    hiddenClass: string // default: 'swiper-button-hidden' CSS class name added to navigation button when it becomes hidden
  }

  interface OptionsWithElement {
    el: string | HTMLElement;
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
     * If you need to specify different delay for specifi slides you can do it by using data-swiper-autoplay (in ms) attribute on slide:
     * 
     * <!-- hold this slide for 2 seconds -->
     * <div class="swiper-slide" data-swiper-autoplay="2000">
     * stopOnLast: boolean // default:	false	Enable this parameter and autoplay will be stopped when it reaches last slide (has no effect in loop mode)
     * 
     * @default 3000
     */
    delay: number;
    /**
     * 	Set to false and autoplay will not be disabled after user interactions (swipes), it will be restarted every time after interaction
     * 
     * @default true
     */
    disableOnInteraction: boolean;
    /**
     * 	Enables autoplay in reverse direction
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
    eventsTarged: string | HTMLElement;
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
