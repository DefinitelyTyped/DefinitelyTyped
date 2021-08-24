// Type definitions for Swiper 5.4
// Project: https://github.com/nolimits4web/Swiper, http://www.idangero.us/swiper
// Definitions by: Sebastián Galiano <https://github.com/sgaliano>
//                 Luca Trazzi <https://github.com/lucax88x>
//                 Eugene Matseruk <https://github.com/ematseruk>
//                 Luiz M. <https://github.com/odahcam>
//                 Justin Abene <https://github.com/jmca>
//                 Asif Rahman <https://github.com/daem0ndev>
//                 Liad Idan <https://github.com/LiadIdan>
//                 Sangwon Lee <https://github.com/john015>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 2.9

/**
 * Common Swiper events.
 */
export type CommonEvent =
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
    | 'resize'
    | 'observerUpdate'
    | 'beforeLoopFix'
    | 'loopFix';

/**
 * Swiper pagination event names.
 */
export type PaginationEvent = 'paginationRender' | 'paginationUpdate';

/**
 * Swiper autoplay event names.
 */
export type AutoplayEvent = 'autoplayStart' | 'autoplayStop' | 'autoplay';

/**
 * Swiper lazy-loading event names.
 */
export type LazyLoadingEvent = 'lazyImageLoad' | 'lazyImageReady';

/**
 * Swiper hash-navigation event names.
 */
export type HashNavigationEvent = 'hashChange' | 'hashSet';

/**
 * Swiper event names.
 */
export type SwiperEvent = CommonEvent | PaginationEvent | AutoplayEvent | LazyLoadingEvent | HashNavigationEvent;

/**
 * Swiper module types.
 */
export type SwiperModule =
    | Navigation
    | Pagination
    | Scrollbar
    | Autoplay
    | Parallax
    | Lazy
    | EffectFade
    | EffectCoverflow
    | EffectFlip
    | EffectCube
    | Zoom
    | Keyboard
    | Mousewheel
    | Virtual
    | HashNavigation
    | History
    | Controller
    | A11y;

export type DOM7Element = any;
export type SelectableElement = string | HTMLElement;

/*
 * Swiper options and events.
 */

/**
 * Main constructor options.
 */
export interface SwiperOptions {
    /**
     * Whether Swiper should be initialised automatically when you create an instance.
     * If disabled, then you need to init it manually by calling mySwiper.init()
     *
     * @default true
     */
    init?: boolean | undefined;

    /**
     * Swiper will recalculate slides position on window resize (orientationchange)
     *
     * @default true
     */
    updateOnWindowResize?: boolean | undefined;

    /**
     * Index number of initial slide.
     *
     * @default 0
     */
    initialSlide?: number | undefined;

    /**
     * Could be 'horizontal' or 'vertical' (for vertical slider).
     *
     * @default 'horizontal'
     */
    direction?: 'horizontal' | 'vertical' | undefined;

    /**
     * Duration of transition between slides (in ms)
     *
     * @default 300
     */
    speed?: number | undefined;

    /**
     * Enabled this option and plugin will set width/height on swiper wrapper equal to total size of all slides.
     * Mostly should be used as compatibility fallback option for browser that don't support flexbox layout well
     */
    setWrapperSize?: boolean | undefined;

    /**
     * Enabled this option and swiper will be operated as usual except it will not move, real translate values on wrapper will not be set.
     * Useful when you may need to create custom slide transition
     */
    virtualTranslate?: boolean | undefined;

    /**
     * Swiper width (in px). Parameter allows to force Swiper width.
     * Useful only if you initialize Swiper when it is hidden.
     *
     * @note Setting this parameter will make Swiper not responsive
     */
    width?: number | undefined;

    /**
     * Swiper height (in px). Parameter allows to force Swiper height.
     * Useful only if you initialize Swiper when it is hidden.
     *
     * @note Setting this parameter will make Swiper not responsive
     */
    height?: number | undefined;

    /**
     * Set to true and slider wrapper will adopt its height to the height of the currently active slide
     *
     * @default false
     */
    autoHeight?: boolean | undefined;

    /**
     * Set to true to round values of slides width and height to prevent blurry texts on usual
     * resolution screens (if you have such)
     *
     * @default false
     */
    roundLengths?: boolean | undefined;

    /**
     * Set to true on  Swiper for correct touch events interception. Use only on
     * swipers that use same direction as the parent one
     *
     * @default false
     */
    nested?: boolean | undefined;

    /**
     * If enabled (by default) and navigation elements' parameters passed as a string (like ".pagination")
     * then Swiper will look for such elements through child elements first.
     * Applies for pagination, prev/next buttons and scrollbar elements
     *
     * @default true
     */
    uniqueNavElements?: boolean | undefined;

    /**
     * Tranisition effect. Could be "slide", "fade", "cube", "coverflow" or "flip"
     *
     * @default 'slide'
     */
    effect?: 'slide' | 'fade' | 'cube' | 'coverflow' | 'flip' | undefined;

    /**
     * Fire [Transition/SlideChange][Start/End] events on swiper initialization.
     * Such events will be fired on initialization in case of your initialSlide is not 0, or you use loop mode
     *
     * @default true
     */
    runCallbacksOnInit?: boolean | undefined;

    /**
     * When enabled Swiper will be disabled and hide navigation buttons on
     * case there are not enough slides for sliding.
     *
     * @default false
     */
    watchOverflow?: boolean | undefined;

    /**
     * Register event handlers.
     */
    on?: {
        [key in Exclude<SwiperEvent, LazyLoadingEvent>]?: (this: Swiper, swiper: Swiper) => void;
    } & {
        [key in LazyLoadingEvent]?: (this: Swiper, slideEl: HTMLElement, imageEl: HTMLImageElement) => void;
    } | undefined;

    // CSS Scroll Snap

    /**
     * When enabled it will use modern CSS Scroll Snap API.
     * It doesn't support all of Swiper's features, but potentially should bring a much better performance in simple configurations.
     *
     * @default false
     */
    cssMode?: boolean | undefined;

    // Slides grid

    /**
     * Distance between slides in px.
     */
    spaceBetween?: number | undefined;

    /**
     * Number of slides per view (slides visible at the same time on slider's container).
     * If you use it with "auto" value and along with loop: true then you need to specify loopedSlides parameter with amount of slides to loop (duplicate)
     * slidesPerView: 'auto' is currently not compatible with multirow mode, when slidesPerColumn > 1
     */
    slidesPerView?: number | 'auto' | undefined;

    /**
     * Number of slides per column, for multirow layout
     * slidesPerColumn > 1 is currently not compatible with loop mode (loop: true)
     */
    slidesPerColumn?: number | undefined;

    /**
     * Could be 'column' or 'row'. Defines how slides should fill rows, by column or by row
     */
    slidesPerColumnFill?: 'row' | 'column' | undefined;

    /**
     * Set numbers of slides to define and enable group sliding. Useful to use with slidesPerView > 1
     */
    slidesPerGroup?: number | undefined;

    /**
     * The parameter works in the following way: If slidesPerGroupSkip equals 0 (default), no slides are excluded from grouping, and the resulting behaviour is the same as without this change.
     * If slidesPerGroupSkip is equal or greater than 1 the first X slides are treated as single groups, whereas all following slides are grouped by the slidesPerGroup value.
     *
     * @default 0
     */
    slidesPerGroupSkip?: number | undefined;

    /**
     * If true, then active slide will be centered, not always on the left side.
     */
    centeredSlides?: boolean | undefined;

    /**
     * If true, then active slide will be centered without adding gaps at the beginning and end of slider.
     * Required centeredSlides: true. Not intended to be used with loop or pagination
     *
     * @default false
     */
    centeredSlidesBounds?: boolean | undefined;

    /**
     * Add (in px) additional slide offset in the beginning of the container (before all slides)
     */
    slidesOffsetBefore?: number | undefined;

    /**
     * Add (in px) additional slide offset in the end of the container (after all slides)
     */
    slidesOffsetAfter?: number | undefined;

    /**
     * Normalize slide index.
     */
    normalizeSlideIndex?: boolean | undefined;

    /**
     * When enabled it center slides if the amount of slides less than `slidesPerView`. Not intended to be used loop mode and slidesPerColumn
     */
    centerInsufficientSlides?: boolean | undefined;

    // Grab Cursor
    grabCursor?: boolean | undefined;

    // Touches

    /**
     * Target element to listen touch events on. Can be 'container' (to listen for touch events on swiper-container) or 'wrapper'
     * (to listen for touch events on swiper-wrapper)
     */
    touchEventsTarget?: 'container' | 'wrapper' | undefined;

    /**
     * Touch ratio
     */
    touchRatio?: number | undefined;

    /**
     * Allowable angle (in degrees) to trigger touch move
     */
    touchAngle?: number | undefined;

    /**
     * If true, Swiper will accept mouse events like touch events (click and drag to change slides)
     */
    simulateTouch?: boolean | undefined;

    /**
     * Set to false if you want to disable short swipes
     */
    shortSwipes?: boolean | undefined;

    /**
     * Set to false if you want to disable long swipes
     */
    longSwipes?: boolean | undefined;

    /**
     * Ratio to trigger swipe to next/previous slide during long swipes
     */
    longSwipesRatio?: number | undefined;

    /**
     * Minimal duration (in ms) to trigger swipe to next/previous slide during long swipes
     */
    longSwipesMs?: number | undefined;

    /**
     * If disabled, then slider will be animated only when you release it, it will not move while you hold your finger on it
     */
    followFinger?: boolean | undefined;

    /**
     * If false, then the only way to switch the slide is use of external API functions like slidePrev or slideNext
     */
    allowTouchMove?: boolean | undefined;

    /**
     * Threshold value in px. If "touch distance" will be lower than this value then swiper will not move
     */
    threshold?: number | undefined;

    /**
     * If disabled, `touchstart` (`mousedown`) event won't be prevented
     */
    touchStartPreventDefault?: boolean | undefined;

    /**
     * Force to always prevent default for `touchstart` (`mousedown`) event
     */
    touchStartForcePreventDefault?: boolean | undefined;

    /**
     * If enabled, then propagation of "touchmove" will be stopped
     */
    touchMoveStopPropagation?: boolean | undefined;

    /**
     * Enable to release Swiper events for swipe-to-go-back work in iOS UIWebView
     */
    iOSEdgeSwipeDetection?: boolean | undefined;

    /**
     * Area (in px) from left edge of the screen to release touch events for swipe-to-go-back in iOS UIWebView
     */
    iOSEdgeSwipeThreshold?: number | undefined;

    /**
     * Enable to release touch events on slider edge position (beginning, end) to allow for further page scrolling
     */
    touchReleaseOnEdges?: boolean | undefined;

    /**
     * Passive event listeners will be used by default where possible to improve scrolling performance on mobile devices.
     * But if you need to use `e.preventDefault` and you have conflict with it, then you should disable this parameter
     */
    passiveListeners?: boolean | undefined;

    // Touch Resistance

    /**
     * Set to false if you want to disable resistant bounds
     */
    resistance?: boolean | undefined;

    /**
     * This option allows you to control resistance ratio
     */
    resistanceRatio?: number | undefined;

    // Swiping / No swiping
    preventInteractionOnTransition?: boolean | undefined;
    allowSlidePrev?: boolean | undefined;
    allowSlideNext?: boolean | undefined;
    noSwiping?: boolean | undefined;
    noSwipingClass?: string | undefined;
    noSwipingSelector?: string | undefined;
    swipeHandler?: SelectableElement | undefined;

    // Clicks
    preventClicks?: boolean | undefined;
    preventClicksPropagation?: boolean | undefined;
    slideToClickedSlide?: boolean | undefined;

    // Freemode
    freeMode?: boolean | undefined;
    freeModeMomentum?: boolean | undefined;
    freeModeMomentumRatio?: number | undefined;
    freeModeMomentumVelocityRatio?: number | undefined;
    freeModeMomentumBounce?: boolean | undefined;
    freeModeMomentumBounceRatio?: number | undefined;
    freeModeMinimumVelocity?: number | undefined;
    freeModeSticky?: boolean | undefined;

    // Progress
    watchSlidesProgress?: boolean | undefined;
    watchSlidesVisibility?: boolean | undefined;

    // Images
    preloadImages?: boolean | undefined;
    updateOnImagesReady?: boolean | undefined;

    // Loop
    loop?: boolean | undefined;
    loopAdditionalSlides?: number | undefined;
    loopedSlides?: number | undefined;
    loopFillGroupWithBlank?: boolean | undefined;

    // Breakpoints
    breakpoints?: {
        [index: number]: SwiperOptions;
    } | undefined;
    breakpointsInverse?: boolean | undefined;

    // Observer

    /**
     * Set to true if you also need to watch Mutations for Swiper slide children elements
     *
     * @default false
     */
    observeSlideChildren?: boolean | undefined;

    observer?: boolean | undefined;
    observeParents?: boolean | undefined;

    // Namespace
    containerModifierClass?: string | undefined;
    slideClass?: string | undefined;
    slideActiveClass?: string | undefined;
    slideDuplicateActiveClass?: string | undefined;
    slideVisibleClass?: string | undefined;
    slideDuplicateClass?: string | undefined;
    slideNextClass?: string | undefined;
    slideDuplicateNextClass?: string | undefined;
    slidePrevClass?: string | undefined;
    slideDuplicatePrevClass?: string | undefined;
    wrapperClass?: string | undefined;

    // Components
    controller?: ControllerOptions | boolean | undefined;
    navigation?: NavigationOptions | undefined;
    pagination?: PaginationOptions | undefined;
    scrollbar?: ScrollbarOptions | undefined;
    autoplay?: AutoplayOptions | boolean | undefined;
    parallax?: boolean | undefined;
    lazy?: LazyOptions | boolean | undefined;
    fadeEffect?: FadeEffectOptions | undefined;
    coverflowEffect?: CoverflowEffectOptions | undefined;
    flipEffect?: FlipEffectOptions | undefined;
    cubeEffect?: CubeEffectOptions | undefined;
    thumbs?: ThumbsOptions | undefined;
    zoom?: ZoomOptions | boolean | undefined;
    keyboard?: KeyboardOptions | boolean | undefined;
    mousewheel?: MousewheelOptions | boolean | undefined;
    virtual?: VirtualOptions | boolean | undefined;
    hashNavigation?: HashNavigationOptions | boolean | undefined;
    history?: HistoryNavigationOptions | boolean | undefined;
    a11y?: A11yOptions | boolean | undefined;
}

export interface EventsOptions {
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
    init?: (() => any) | undefined;

    /**
     * Triggered right beforey Swiper destoryed
     */
    beforeDestroy?: (() => any) | undefined;

    /**
     * Triggered when currently active slide is changed
     */
    slideChange?: (() => any) | undefined;

    /**
     * Triggered in the beginning of animation to other slide (next or previous).
     */
    slideChangeTransitionStart?: (() => any) | undefined;

    /**
     * Triggered after animation to other slide (next or previous).
     */
    slideChangeTransitionEnd?: (() => any) | undefined;

    /**
     * Same as "slideChangeTransitionStart" but for "forward" direction only
     */
    slideNextTransitionStart?: (() => any) | undefined;

    /**
     * Same as "slideChangeTransitionEnd" but for "forward" direction only
     */
    slideNextTransitionEnd?: (() => any) | undefined;

    /**
     * Same as "slideChangeTransitionStart" but for "backward" direction only
     */
    slidePrevTransitionStart?: (() => any) | undefined;

    /**
     * Same as "slideChangeTransitionEnd" but for "backward" direction only
     */
    slidePrevTransitionEnd?: (() => any) | undefined;

    /**
     * Triggered in the beginning of transition.
     */
    transitionStart?: (() => any) | undefined;

    /**
     * Triggered after transition.
     */
    transitionEnd?: (() => any) | undefined;

    /**
     * Triggered when user touch Swiper. Receives 'touchstart' event as an arguments.
     */
    touchStart?: ((event: any) => any) | undefined;

    /**
     * Triggered when user touch and move finger over Swiper. Receives 'touchmove' event as an arguments.
     */
    touchMove?: ((event: any) => any) | undefined;

    /**
     * Fired when user touch and move finger over
     * Swiper in direction opposite to direction parameter.
     * Receives 'touchmove' event as an arguments.
     */
    touchMoveOpposite?: ((event: any) => any) | undefined;

    /**
     * Triggered when user touch and move finger over Swiper and move it.
     * Receives 'touchmove' event as an arguments.
     */
    sliderMove?: ((event: any) => any) | undefined;

    /**
     * Triggered when user release Swiper. Receives 'touchend' event as an arguments.
     */
    touchEnd?: ((event: any) => any) | undefined;

    /**
     * Triggered when user click/tap on Swiper after 300ms delay. Receives 'touchend' event as an arguments.
     */
    click?: ((event: any) => any) | undefined;

    /**
     * Triggered when user click/tap on Swiper. Receives 'touchend' event as an arguments.
     */
    tap?: ((event: any) => any) | undefined;

    /**
     * Triggered when user double tap on Swiper's container. Receives 'touchend' event as an arguments
     */
    doubleTap?: ((event: any) => any) | undefined;

    /**
     * Triggered right after all inner images are loaded. updateOnImagesReady should be also enabled
     */
    imagesReady?: (() => any) | undefined;

    /**
     * Triggered when Swiper progress is changed, as an arguments it receives
     * progress that is always from 0 to 1
     */
    progress?: ((progress: any) => any) | undefined;

    /**
     * Triggered when Swiper reach its beginning (initial position)
     */
    reachBeginning?: (() => any) | undefined;

    /**
     * Triggered when Swiper reach last slide
     */
    reachEnd?: (() => any) | undefined;

    /**
     * Triggered when Swiper goes from beginning or end position
     */
    fromEdge?: (() => any) | undefined;

    /**
     * Triggered when swiper's wrapper change its position. Receives current translate value as an arguments
     */
    setTranslate?: ((translate: any) => any) | undefined;

    /**
     * Triggered everytime when swiper starts animation.
     * Receives current transition duration (in ms) as an arguments,
     */
    setTransition?: ((transition: any) => any) | undefined;

    /**
     * Triggered on window resize right before swiper's onresize manipulation
     */
    resize?: (() => any) | undefined;

    /**
     * Event will be fired if observer is enabled and it detects DOM mutations
     */
    observerUpdate?: (() => any) | undefined;

    /**
     * Event will be fired right before "loop fix"
     */
    beforeLoopFix?: (() => any) | undefined;

    /**
     * Event will be fired after "loop fix"
     */
    loopFix?: (() => any) | undefined;
}

export interface NavigationOptions {
    /**
     * String with CSS selector or HTML element of the element that will work
     * like "next" button after click on it
     *
     * @default null
     */
    nextEl?: SelectableElement | undefined;

    /**
     * String with CSS selector or HTML element of the element that will work
     * like "prev" button after click on it
     *
     * @default null
     */
    prevEl?: SelectableElement | undefined;

    /**
     * buttons visibility after click on Slider's container
     *
     * @default false Toggle navigation
     */
    hideOnClick?: boolean | undefined;

    /**
     * CSS class name added to navigation button when it becomes disabled
     *
     * @default 'swiper-button-disabled'
     */
    disabledClass?: string | undefined;

    /**
     * CSS class name added to navigation button when it becomes hidden
     *
     * @default 'swiper-button-hidden'
     */
    hiddenClass?: string | undefined;
}

export interface PaginationOptions {
    /**
     * String with CSS selector or HTML element of the container with pagination
     */
    el: SelectableElement;

    /**
     * String with type of pagination. Can be "bullets", "fraction", "progressbar" or "custom"
     */
    type?: 'bullets' | 'fraction' | 'progressbar' | 'custom' | undefined;

    /**
     * Defines which HTML tag will be use to represent single pagination bullet. Only for bullets pagination type.
     */
    bulletElement?: string | undefined;

    /**
     * Good to enable if you use bullets pagination with a lot of slides. So it will keep only few bullets visible at the same time.
     */
    dynamicBullets?: boolean | undefined;

    /**
     * The number of main bullets visible when dynamicBullets enabled.
     */
    dynamicMainBullets?: number | undefined;

    /**
     * Toggle (hide/true) pagination container visibility after click on Slider's container
     */
    hideOnClick?: boolean | undefined;

    /**
     * If true then clicking on pagination button will cause transition to appropriate slide. Only for bullets pagination type
     */
    clickable?: boolean | undefined;

    /**
     * Makes pagination progressbar opposite to Swiper's `direction` parameter, means vertical progressbar for horizontal swiper
     * direction and horizontal progressbar for vertical swiper direction
     */
    progressbarOpposite?: boolean | undefined;

    /**
     * format fraction pagination current number. Function receives current number,
     * and you need to return formatted value
     */
    formatFractionCurrent?: ((number: number) => number) | undefined;

    /**
     * format fraction pagination total number. Function receives total number, and you
     * need to return formatted value
     */
    formatFractionTotal?: ((number: number) => number) | undefined;

    /**
     * This parameter allows totally customize pagination bullets, you need to pass here a function that accepts index number of
     * pagination bullet and required element class name (className). Only for bullets pagination type
     */
    renderBullet?: ((index: number, className: string) => void) | undefined;

    /**
     * This parameter allows to customize "fraction" pagination html. Only for fraction pagination type
     */
    renderFraction?: ((currentClass: string, totalClass: string) => void) | undefined;

    /**
     * This parameter allows to customize "progress" pagination. Only for progress pagination type
     */
    renderProgressbar?: ((progressbarFillClass: string) => void) | undefined;

    /**
     * This parameter is required for custom pagination type where you have to specify
     * how it should be rendered.
     *
     * @example
     * var swiper = new Swiper('.swiper-container', {
     *   //...
     *   renderCustom: function (swiper, current, total) {
     *     return current + ' of ' + total;
     *   }
     * });
     */
    renderCustom?: ((swiper: Swiper, current: number, total: number) => void) | undefined;

    /**
     * CSS class name of single pagination bullet
     */
    bulletClass?: string | undefined;

    /**
     * CSS class name of currently active pagination bullet
     */
    bulletActiveClass?: string | undefined;

    /**
     * The beginning of the modifier CSS class name that will be added to pagination depending on parameters
     */
    modifierClass?: string | undefined;

    /**
     * CSS class name of the element with currently active index in "fraction" pagination
     */
    currentClass?: string | undefined;

    /**
     * CSS class name of the element with total number of "snaps" in "fraction" pagination
     */
    totalClass?: string | undefined;

    /**
     * CSS class name of pagination when it becomes inactive
     */
    hiddenClass?: string | undefined;

    /**
     * CSS class name of pagination progressbar fill element
     */
    progressbarFillClass?: string | undefined;

    /**
     * CSS class name set to pagination when it is clickable
     */
    clickableClass?: string | undefined;
}

/**
 * Object with scrollbar parameters.
 *
 * @example
 * var mySwiper = new Swiper('.swiper-container', {
 *   scrollbar: {
 *     el: '.swiper-scrollbar',
 *     draggable: true,
 *   },
 * });
 */
export interface ScrollbarOptions {
    /**
     * String with CSS selector or HTML element of the container with scrollbar.
     */
    el: SelectableElement;

    /**
     * Hide scrollbar automatically after user interaction
     *
     * @default true
     */
    hide?: boolean | undefined;

    /**
     * Set to true to enable make scrollbar draggable that allows you to control slider position
     *
     * @default true
     */
    draggable?: boolean | undefined;

    /**
     * Set to true to snap slider position to slides when you release scrollbar
     *
     * @default false
     */
    snapOnRelease?: boolean | undefined;

    /**
     * Size of scrollbar draggable element in px
     *
     * @default 'auto'
     */
    dragSize?: 'auto' | number | undefined;

    /**
     * Scrollbar element additional CSS class when it is disabled
     *
     * @default 'swiper-scrollbar-lock'
     */
    lockClass?: string | undefined;

    /**
     *     Scrollbar draggable element CSS class
     *
     * @default 'swiper-scrollbar-drag'
     */
    dragClass?: string | undefined;
}

/**
 * Object with autoplay parameters or boolean true to enable with default settings.
 *
 * @example
 * var mySwiper = new Swiper('.swiper-container', {
 *   autoplay: {
 *     delay: 5000,
 *   },
 * });
 */
export interface AutoplayOptions {
    /**
     * Delay between transitions (in ms). If this parameter is not specified, auto play will be disabled
     *
     * If you need to specify different delay for specifi slides you can do it by using
     * data-swiper-autoplay (in ms) attribute on slide.
     *
     * @example
     * <!-- hold this slide for 2 seconds -->
     * <div class="swiper-slide" data-swiper-autoplay="2000">
     *
     * @default 3000
     */
    delay?: number | undefined;

    /**
     * Enable this parameter and autoplay will be stopped when it reaches last slide (has no effect in loop mode)
     *
     * @default false
     */
    stopOnLastSlide?: boolean | undefined;

    /**
     * Set to false and autoplay will not be disabled after
     * user interactions (swipes), it will be restarted
     * every time after interaction
     *
     * @default true
     */
    disableOnInteraction?: boolean | undefined;

    /**
     * Enables autoplay in reverse direction
     *
     * @default false
     */
    reverseDirection?: boolean | undefined;

    /**
     * When enabled autoplay will wait for wrapper transition to continue.
     * Can be disabled in case of using Virtual Translate when your
     * slider may not have transition
     *
     * @default true
     */
    waitForTransition?: boolean | undefined;
}

export interface LazyOptions {
    loadPrevNext?: boolean | undefined;
    loadPrevNextAmount?: number | undefined;
    loadOnTransitionStart?: boolean | undefined;
    elementClass?: string | undefined;
    loadingClass?: string | undefined;
    loadedClass?: string | undefined;
    preloaderClass?: string | undefined;
}

/*
 * Options - Effect
 */

export interface FadeEffectOptions {
    crossFade?: boolean | undefined;
}

export interface CoverflowEffectOptions {
    slideShadows?: boolean | undefined;
    rotate?: number | undefined;
    stretch?: number | undefined;
    depth?: number | undefined;
    modifier?: number | undefined;
}

export interface FlipEffectOptions {
    slideShadows?: boolean | undefined;
    limitRotation?: boolean | undefined;
}

export interface CubeEffectOptions {
    slideShadows?: boolean | undefined;
    shadow?: boolean | undefined;
    shadowOffset?: number | undefined;
    shadowScale?: number | undefined;
}

export interface ThumbsOptions {
    swiper?: Swiper | undefined;
    slideThumbActiveClass?: string | undefined;
    thumbsContainerClass?: string | undefined;
    multipleActiveThumbs?: boolean | undefined;
    autoScrollOffset?: number | undefined;
}

export interface ZoomOptions {
    maxRatio?: number | undefined;
    minRatio?: number | undefined;
    toggle?: boolean | undefined;
    containerClass?: string | undefined;
    zoomedSlideClass?: string | undefined;
}

export interface KeyboardOptions {
    enabled?: boolean | undefined;
    onlyInViewport?: boolean | undefined;
}

export interface MousewheelOptions {
    forceToAxis?: boolean | undefined;
    releaseOnEdges?: boolean | undefined;
    invert?: boolean | undefined;
    sensitivity?: number | undefined;
    eventsTarged?: SelectableElement | undefined;
}

export interface VirtualOptions {
    slides?: any[] | undefined;
    cache?: boolean | undefined;
    addSlidesBefore?: number | undefined;
    addSlidesAfter?: number | undefined;
    renderSlide?: ((slide: any, index: any) => any) | undefined;
    renderExternal?: ((data: any) => any) | undefined;
}

export interface HashNavigationOptions {
    /**
     * Set to true to enable also navigation through slides (when hashnav
     * is enabled) by browser history or by setting directly hash on document location
     *
     * @default false
     */
    watchState?: boolean | undefined;

    /**
     * Works in addition to hashnav to replace current url state with the
     * new one instead of adding it to history
     *
     * @default     false
     */
    replaceState?: boolean | undefined;
}

export interface HistoryNavigationOptions {
    /**
     * Works in addition to hashnav or history to replace current url state with the
     * new one instead of adding it to history
     *
     * @default false
     */
    replaceState?: boolean | undefined;

    /**
     * Url key for slides
     *
     * @default 'slides'
     */
    key?: string | undefined;
}

/**
 * Object with controller parameters or boolean true to enable with default settings. For example:
 *
 * @example
 * var mySwiper = new Swiper('.swiper-container', {
 *   controller: {
 *     inverse: true,
 *   },
 * });
 */
export interface ControllerOptions {
    /**
     * Pass here another Swiper instance or array with Swiper instances that should be controlled
     * by this Swiper
     */
    control?: Swiper | undefined;

    /**
     * Set to true and controlling will be in inverse direction
     *
     * @default false
     */
    inverse?: boolean | undefined;

    /**
     * Can be 'slide' or 'container'. Defines a way how to control another slider: slide by slide
     * (with respect to other slider's grid) or depending on all slides/container
     * (depending on total slider percentage).
     *
     * @default 'slide'
     */
    by?: 'slide' | 'container' | undefined;
}

export interface A11yOptions {
    /**
     * Enables A11y
     *
     * @default true
     */
    enabled?: boolean | undefined;

    /**
     * Message for screen readers for previous button
     *
     * @default 'Previous slide'
     */
    prevSlideMessage?: string | undefined;

    /**
     * Message for screen readers for next button
     *
     * @default 'Next slide'
     */
    nextSlideMessage?: string | undefined;

    /**
     * Message for screen readers for previous button when swiper is on first slide
     *
     * @default 'This is the first slide'
     */
    firstSlideMessage?: string | undefined;

    /**
     * Message for screen readers for previous button when swiper is on last slide
     *
     * @default 'This is the last slide'
     */
    lastSlideMessage?: string | undefined;

    /**
     * Message for screen readers for single pagination bullet
     *
     * @default 'Go to slide {{index}}'
     */
    paginationBulletMessage?: string | undefined;

    /**
     * CSS class name of a11 notification
     *
     * @default 'swiper-notification'
     */
    notificationClass?: string | undefined;
}

import {
    Virtual,
    Keyboard,
    Mousewheel,
    Navigation,
    Pagination,
    Scrollbar,
    Parallax,
    Zoom,
    Lazy,
    Controller,
    A11y,
    History,
    HashNavigation,
    Autoplay,
    EffectFade,
    EffectCube,
    EffectFlip,
    EffectCoverflow
} from './js/swiper.esm';

/**
 * Core module
 */
// XXX: This is an export assignment in `dist/js/swiper.js` (referenced by
// the "main" field of package.json) but a default export in
// `dist/js/swiper.esm.bundle.js` (referenced by the "module" field).  Short
// of trying to convince upstream to change their packaging, the best we can
// do is choose one or the other and hope that users use `esModuleInterop`.
export default class Swiper {
    /**
     * Constructs a new Swiper instance.
     *
     * @param container Where Swiper applies to.
     * @param options   Instance options.
     */
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
    width: number;

    /**
     * Height of container
     */
    height: number;

    /**
     * Current value of wrapper translate
     */
    translate: number;

    /**
     * Current progress of wrapper translate (from 0 to 1)
     */
    progress: number;

    /**
     * Index number of currently active slide.
     *
     * @note Note, that in loop mode active index value will be always shifted
     * on a number of looped/duplicated slides.
     */
    activeIndex: number;

    /**
     * Index number of currently active slide considering duplicated slides in loop mode
     */
    realIndex: number;

    /**
     * Index number of previously active slide
     */
    previousIndex: number;

    /**
     * true if slider on most "left"/"top" position
     */
    isBeginning: true;

    /**
     * true if slider on most "right"/"bottom" position
     */
    isEnd: boolean;

    /**
     * true if swiper is in transition
     */
    animating: boolean;

    /**
     * Object with the following touch event properties:
     */
    touches: {
        startX: number;
        startY: number;
        currentX: number;
        currentY: number;
        diff: number;
    };

    /**
     * Index number of last clicked slide
     */
    clickedIndex: number;

    /**
     * Link to last clicked slide (HTMLElement)
     */
    clickedSlide: HTMLElement;

    /**
     * Disable/enable ability to slide to the next slides by assigning false/true to this property
     *
     * @default true
     */
    allowSlideNext: boolean;

    /**
     * Disable/enable ability to slide to the previous slides by assigning false/true to this property
     *
     * @default true
     */
    allowSlidePrev: boolean;

    /**
     * Disable/enable ability move slider by grabbing it with
     * mouse or by touching it with finger (on touch screens)
     * by assigning false/true to this property
     *
     * @default true
     */
    allowTouchMove: boolean;

    // Methods
    /**
     * Run transition to next slide.
     *
     * @param speed Transition duration (in ms).
     * @param runCallbacks Set it to false (by default it is true) and transition will
     *  not produce transition events.
     */
    slideNext(speed?: number, runCallbacks?: boolean): void;

    /**
     * Run transition to previous slide.
     *
     * @param speed Transition duration (in ms).
     * @param runCallbacks Set it to false (by default it is true) and transition will
     *  not produce transition events.
     */
    slidePrev(speed?: number, runCallbacks?: boolean): void;

    /**
     * Run transition to the slide with index number equal to 'index' parameter for the
     *  duration equal to 'speed' parameter.
     *
     * @param index Index number of slide.
     * @param speed Transition duration (in ms).
     * @param runCallbacks Set it to false (by default it is true) and transition will
     *  not produce transition events.
     */
    slideTo(index: number, speed?: number, runCallbacks?: boolean): void;

    /**
     * Does the same as .slideTo but for the case when used with enabled loop. So this
     * method will slide to slides with realIndex matching to passed index
     *
     * @param index Index number of slide.
     * @param speed Transition duration (in ms).
     * @param runCallbacks Set it to false (by default it is true) and transition will
     *  not produce transition events.
     */
    slideToLoop(index: number, speed?: number, runCallbacks?: boolean): void;

    /**
     * Reset swiper position to currently active slide for the duration equal to 'speed'
     * parameter.
     *
     * @param speed Transition duration (in ms).
     * @param runCallbacks Set it to false (by default it is true) and transition will
     *  not produce transition events.
     */
    slideReset(speed?: number, runCallbacks?: boolean): void;

    /**
     * Reset swiper position to closest slide/snap point for the duration equal to 'speed' parameter.
     *
     * @param speed Transition duration (in ms).
     * @param runCallbacks Set it to false (by default it is true) and transition will
     *  not produce transition events.
     */
    slideToClosest(speed?: number, runCallbacks?: boolean): void;

    /**
     * Force swiper to update its height (when autoHeight enabled) for the duration equal to
     * 'speed' parameter
     *
     * @param speed Transition duration (in ms).
     */
    updateAutoHeight(speed?: number): void;

    /**
     * You should call it after you add/remove slides
     * manually, or after you hide/show it, or do any
     * custom DOM modifications with Swiper
     * This method also includes subcall of the following
     * methods which you can use separately:
     */
    update(): void;

    /**
     * recalculate size of swiper container
     */
    updateSize(): void;

    /**
     * recalculate number of slides and their offsets. Useful after you add/remove slides with JavaScript
     */
    updateSlides(): void;

    /**
     * recalculate swiper progress
     */
    updateProgress(): void;

    /**
     * update active/prev/next classes on slides and bullets
     */
    updateSlidesClasses(): void;

    /**
     * tach all events listeners
     */
    detachEvents(): void;

    /**
     * Atach all events listeners again
     */
    attachEvents(): void;

    /**
     * Destroy slider instance and detach all events listeners, where
     */
    destroy(deleteInstance: boolean, cleanupStyles: boolean): void;

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

    /**
     * Installs modules on Swiper in runtime.
     */
    static use(modules: SwiperModule[]): void;

    /**
     * Add new slides to the end. slides could be
     * HTMLElement or HTML string with new slide or
     * array with such slides, for example:
     *
     * @example appendSlide('<div class="swiper-slide">Slide 10"</div>')
     * @example
     * appendSlide([
     *  '<div class="swiper-slide">Slide 10"</div>',
     *  '<div class="swiper-slide">Slide 11"</div>'
     * ]);
     */
    appendSlide(slides: HTMLElement | string | string[]): void;

    /**
     * Add new slides to the beginning. slides could be
     * HTMLElement or HTML string with new slide or array with such slides, for example:
     *
     * @example prependSlide('<div class="swiper-slide">Slide 0"</div>')
     * @example prependSlide([
     *  '<div class="swiper-slide">Slide 1"</div>',
     *  '<div class="swiper-slide">Slide 2"</div>'
     * ]);
     */
    prependSlide(slides: HTMLElement | string | string[]): void;

    /**
     * Add new slides to the required index. slides could be HTMLElement or HTML string with new slide or array with such slides, for example:
     *
     * @example addSlide(1, '<div class="swiper-slide">Slide 10"</div>')
     * @example addSlide(1, [
     *  '<div class="swiper-slide">Slide 10"</div>',
     *  '<div class="swiper-slide">Slide 11"</div>'
     * ]);
     */
    addSlide(index: number, slides: HTMLElement | string | string[]): void;

    /**
     * Remove selected slides. slideIndex could be a number with slide index to remove or array with indexes.
     *
     * @example removeSlide(0); // remove first slide
     * @example removeSlide([0, 1]); // remove first and second slides
     * @example removeAllSlides();    // Remove all slides
     */
    removeSlide(slideIndex: number | number[]): void;

    /**
     * Remove all slides
     */
    removeAllSlides(): void;

    /**
     * Set custom css3 transform's translate value for swiper wrapper
     */
    setTranslate(translate: any): void;

    /**
     * Get current value of swiper wrapper css3 transform translate
     */
    getTranslate(): any;

    /**
     * Animate custom css3 transform's translate value for swiper wrapper
     */
    translateTo(translate: number, speed: number, runCallbacks?: boolean, translateBounds?: boolean): any;

    /**
     * Add event listener
     */
    on(event: SwiperEvent, handler: () => void): void;

    /**
     * Add event listener that will be executed only once
     */
    once(event: SwiperEvent, handler: () => void): void;

    /**
     * Remove event listener for specified event
     * If no handler specified, removes all listeners for specified event
     */
    off(event: SwiperEvent, handler?: () => void): void;

    /**
     * Disable mousewheel control
     */
    disableMousewheelControl(): void;

    /**
     * Enable mousewheel control
     */
    enableMousewheelControl(): void;

    /**
     * Disable keyboard control
     */
    disableKeyboardControl(): void;

    /**
     * Enable keyboard control
     */
    enableKeyboardControl(): void;

    /**
     * Unset grab cursor
     */
    unsetGrabCursor(): void;

    /**
     * Set grab cursor
     */
    setGrabCursor(): void;

    // Components

    /**
     * Swiper Navigation module.
     */
    navigation?: Navigation | undefined;

    /**
     * Swiper Pagination module.
     */
    pagination?: Pagination | undefined;

    /**
     * Swiper Scrollbar module.
     */
    scrollbar?: Scrollbar | undefined;

    /**
     * Swiper Autoplay module.
     */
    autoplay?: Autoplay | undefined;

    /**
     * Swiper Parallax module.
     */
    parallax?: Parallax | undefined;

    /**
     * Swiper Lazy module.
     */
    lazy?: Lazy | undefined;

    /**
     * Swiper FadeEffect module.
     */
    fadeEffect?: EffectFade | undefined;

    /**
     * Swiper CoverflowEffect module.
     */
    coverflowEffect?: EffectCoverflow | undefined;

    /**
     * Swiper FlipEffect module.
     */
    flipEffect?: EffectFlip | undefined;

    /**
     * Swiper CubeEffect module.
     */
    cubeEffect?: EffectCube | undefined;

    /**
     * Swiper Thumbs module.
     */
    thumbs?: object | undefined;

    /**
     * Swiper Zoom module.
     */
    zoom?: Zoom | undefined;

    /**
     * Swiper Keyboard module.
     */
    keyboard?: Keyboard | undefined;

    /**
     * Swiper Mousewheel module.
     */
    mousewheel?: Mousewheel | undefined;

    /**
     * Swiper Virtual module.
     */
    virtual?: Virtual | undefined;

    /**
     * Swiper HashNavigation module.
     */
    hashNavigation?: HashNavigation | undefined;

    /**
     * Swiper History module.
     */
    history?: History | undefined;

    /**
     * Swiper Controller module.
     */
    controller?: Controller | undefined;

    /**
     * Swiper A11y module.
     */
    a11y?: A11y | undefined;
}
