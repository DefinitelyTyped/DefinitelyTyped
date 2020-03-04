// Type definitions for Swiper 5.2
// Project: https://github.com/nolimits4web/Swiper, http://www.idangero.us/swiper
// Definitions by: Sebastián Galiano <https://github.com/sgaliano>
//                 Luca Trazzi <https://github.com/lucax88x>
//                 Eugene Matseruk <https://github.com/ematseruk>
//                 Luiz M. <https://github.com/odahcam>
//                 Justin Abene <https://github.com/jmca>
//                 Asif Rahman <https://github.com/daem0ndev>
//                 Liad Idan <https://github.com/LiadIdan>
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
    | 'resize';

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
 * Swiper event names.
 */
export type SwiperEvent = CommonEvent | PaginationEvent | AutoplayEvent | LazyLoadingEvent;

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
    init?: boolean;

    /**
     * Index number of initial slide.
     *
     * @default 0
     */
    initialSlide?: number;

    /**
     * Could be 'horizontal' or 'vertical' (for vertical slider).
     *
     * @default 'horizontal'
     */
    direction?: 'horizontal' | 'vertical';

    /**
     * Duration of transition between slides (in ms)
     *
     * @default 300
     */
    speed?: number;

    /**
     * Enabled this option and plugin will set width/height on swiper wrapper equal to total size of all slides.
     * Mostly should be used as compatibility fallback option for browser that don't support flexbox layout well
     */
    setWrapperSize?: boolean;

    /**
     * Enabled this option and swiper will be operated as usual except it will not move, real translate values on wrapper will not be set.
     * Useful when you may need to create custom slide transition
     */
    virtualTranslate?: boolean;

    /**
     * Swiper width (in px). Parameter allows to force Swiper width.
     * Useful only if you initialize Swiper when it is hidden.
     *
     * @note Setting this parameter will make Swiper not responsive
     */
    width?: number;

    /**
     * Swiper height (in px). Parameter allows to force Swiper height.
     * Useful only if you initialize Swiper when it is hidden.
     *
     * @note Setting this parameter will make Swiper not responsive
     */
    height?: number;

    /**
     * Set to true and slider wrapper will adopt its height to the height of the currently active slide
     *
     * @default false
     */
    autoHeight?: boolean;

    /**
     * Set to true to round values of slides width and height to prevent blurry texts on usual
     * resolution screens (if you have such)
     *
     * @default false
     */
    roundLengths?: boolean;

    /**
     * Set to true on  Swiper for correct touch events interception. Use only on
     * swipers that use same direction as the parent one
     *
     * @default false
     */
    nested?: boolean;

    /**
     * If enabled (by default) and navigation elements' parameters passed as a string (like ".pagination")
     * then Swiper will look for such elements through child elements first.
     * Applies for pagination, prev/next buttons and scrollbar elements
     *
     * @default true
     */
    uniqueNavElements?: boolean;

    /**
     * Tranisition effect. Could be "slide", "fade", "cube", "coverflow" or "flip"
     *
     * @default 'slide'
     */
    effect?: 'slide' | 'fade' | 'cube' | 'coverflow' | 'flip';

    /**
     * Fire [Transition/SlideChange][Start/End] events on swiper initialization.
     * Such events will be fired on initialization in case of your initialSlide is not 0, or you use loop mode
     *
     * @default true
     */
    runCallbacksOnInit?: boolean;

    /**
     * When enabled Swiper will be disabled and hide navigation buttons on
     * case there are not enough slides for sliding.
     *
     * @default false
     */
    watchOverflow?: boolean;

    /**
     * Register event handlers.
     */
    on?: { [key in SwiperEvent]?: () => void };

    // Slides grid

    /**
     * Distance between slides in px.
     */
    spaceBetween?: number;

    /**
     * Number of slides per view (slides visible at the same time on slider's container).
     * If you use it with "auto" value and along with loop: true then you need to specify loopedSlides parameter with amount of slides to loop (duplicate)
     * slidesPerView: 'auto' is currently not compatible with multirow mode, when slidesPerColumn > 1
     */
    slidesPerView?: number | 'auto';

    /**
     * Number of slides per column, for multirow layout
     * slidesPerColumn > 1 is currently not compatible with loop mode (loop: true)
     */
    slidesPerColumn?: number;

    /**
     * Could be 'column' or 'row'. Defines how slides should fill rows, by column or by row
     */
    slidesPerColumnFill?: 'row' | 'column';

    /**
     * Set numbers of slides to define and enable group sliding. Useful to use with slidesPerView > 1
     */
    slidesPerGroup?: number;

    /**
     * If true, then active slide will be centered, not always on the left side.
     */
    centeredSlides?: boolean;

    /**
     * Add (in px) additional slide offset in the beginning of the container (before all slides)
     */
    slidesOffsetBefore?: number;

    /**
     * Add (in px) additional slide offset in the end of the container (after all slides)
     */
    slidesOffsetAfter?: number;

    /**
     * Normalize slide index.
     */
    normalizeSlideIndex?: boolean;

    /**
     * When enabled it center slides if the amount of slides less than `slidesPerView`. Not intended to be used loop mode and slidesPerColumn
     */
    centerInsufficientSlides?: boolean;

    // Grab Cursor
    grabCursor?: boolean;

    // Touches

    /**
     * Target element to listen touch events on. Can be 'container' (to listen for touch events on swiper-container) or 'wrapper'
     * (to listen for touch events on swiper-wrapper)
     */
    touchEventsTarget?: 'container' | 'wrapper';

    /**
     * Touch ratio
     */
    touchRatio?: number;

    /**
     * Allowable angle (in degrees) to trigger touch move
     */
    touchAngle?: number;

    /**
     * If true, Swiper will accept mouse events like touch events (click and drag to change slides)
     */
    simulateTouch?: boolean;

    /**
     * Set to false if you want to disable short swipes
     */
    shortSwipes?: boolean;

    /**
     * Set to false if you want to disable long swipes
     */
    longSwipes?: boolean;

    /**
     * Ratio to trigger swipe to next/previous slide during long swipes
     */
    longSwipesRatio?: number;

    /**
     * Minimal duration (in ms) to trigger swipe to next/previous slide during long swipes
     */
    longSwipesMs?: number;

    /**
     * If disabled, then slider will be animated only when you release it, it will not move while you hold your finger on it
     */
    followFinger?: boolean;

    /**
     * If false, then the only way to switch the slide is use of external API functions like slidePrev or slideNext
     */
    allowTouchMove?: boolean;

    /**
     * Threshold value in px. If "touch distance" will be lower than this value then swiper will not move
     */
    threshold?: number;

    /**
     * If disabled, `touchstart` (`mousedown`) event won't be prevented
     */
    touchStartPreventDefault?: boolean;

    /**
     * Force to always prevent default for `touchstart` (`mousedown`) event
     */
    touchStartForcePreventDefault?: boolean;

    /**
     * If enabled, then propagation of "touchmove" will be stopped
     */
    touchMoveStopPropagation?: boolean;

    /**
     * Enable to release Swiper events for swipe-to-go-back work in iOS UIWebView
     */
    iOSEdgeSwipeDetection?: boolean;

    /**
     * Area (in px) from left edge of the screen to release touch events for swipe-to-go-back in iOS UIWebView
     */
    iOSEdgeSwipeThreshold?: number;

    /**
     * Enable to release touch events on slider edge position (beginning, end) to allow for further page scrolling
     */
    touchReleaseOnEdges?: boolean;

    /**
     * Passive event listeners will be used by default where possible to improve scrolling performance on mobile devices.
     * But if you need to use `e.preventDefault` and you have conflict with it, then you should disable this parameter
     */
    passiveListeners?: boolean;

    // Touch Resistance

    /**
     * Set to false if you want to disable resistant bounds
     */
    resistance?: boolean;

    /**
     * This option allows you to control resistance ratio
     */
    resistanceRatio?: number;

    // Swiping / No swiping
    preventInteractionOnTransition?: boolean;
    allowSlidePrev?: boolean;
    allowSlideNext?: boolean;
    noSwiping?: boolean;
    noSwipingClass?: string;
    noSwipingSelector?: string;
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
        [index: number]: SwiperOptions;
    };
    breakpointsInverse?: boolean;

    // Observer
    observer?: boolean;
    observeParents?: boolean;

    // Namespace
    containerModifierClass?: string;
    slideClass?: string;
    slideActiveClass?: string;
    slideDuplicateActiveClass?: string;
    slideVisibleClass?: string;
    slideDuplicateClass?: string;
    slideNextClass?: string;
    slideDuplicateNextClass?: string;
    slidePrevClass?: string;
    slideDuplicatePrevClass?: string;
    wrapperClass?: string;

    // Components
    controller?: ControllerOptions | boolean;
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
    thumbs?: ThumbsOptions;
    zoom?: ZoomOptions | boolean;
    keyboard?: KeyboardOptions | boolean;
    mousewheel?: MousewheelOptions | boolean;
    virtual?: VirtualOptions | boolean;
    hashNavigation?: HashNavigationOptions | boolean;
    history?: HistoryNavigationOptions | boolean;
    a11y?: A11yOptions | boolean;
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
    init?: () => any;

    /**
     * Triggered right beforey Swiper destoryed
     */
    beforeDestroy?: () => any;

    /**
     * Triggered when currently active slide is changed
     */
    slideChange?: () => any;

    /**
     * Triggered in the beginning of animation to other slide (next or previous).
     */
    slideChangeTransitionStart?: () => any;

    /**
     * Triggered after animation to other slide (next or previous).
     */
    slideChangeTransitionEnd?: () => any;

    /**
     * Same as "slideChangeTransitionStart" but for "forward" direction only
     */
    slideNextTransitionStart?: () => any;

    /**
     * Same as "slideChangeTransitionEnd" but for "forward" direction only
     */
    slideNextTransitionEnd?: () => any;

    /**
     * Same as "slideChangeTransitionStart" but for "backward" direction only
     */
    slidePrevTransitionStart?: () => any;

    /**
     * Same as "slideChangeTransitionEnd" but for "backward" direction only
     */
    slidePrevTransitionEnd?: () => any;

    /**
     * Triggered in the beginning of transition.
     */
    transitionStart?: () => any;

    /**
     * Triggered after transition.
     */
    transitionEnd?: () => any;

    /**
     * Triggered when user touch Swiper. Receives 'touchstart' event as an arguments.
     */
    touchStart?: (event: any) => any;

    /**
     * Triggered when user touch and move finger over Swiper. Receives 'touchmove' event as an arguments.
     */
    touchMove?: (event: any) => any;

    /**
     * Fired when user touch and move finger over
     * Swiper in direction opposite to direction parameter.
     * Receives 'touchmove' event as an arguments.
     */
    touchMoveOpposite?: (event: any) => any;

    /**
     * Triggered when user touch and move finger over Swiper and move it.
     * Receives 'touchmove' event as an arguments.
     */
    sliderMove?: (event: any) => any;

    /**
     * Triggered when user release Swiper. Receives 'touchend' event as an arguments.
     */
    touchEnd?: (event: any) => any;

    /**
     * Triggered when user click/tap on Swiper after 300ms delay. Receives 'touchend' event as an arguments.
     */
    click?: (event: any) => any;

    /**
     * Triggered when user click/tap on Swiper. Receives 'touchend' event as an arguments.
     */
    tap?: (event: any) => any;

    /**
     * Triggered when user double tap on Swiper's container. Receives 'touchend' event as an arguments
     */
    doubleTap?: (event: any) => any;

    /**
     * Triggered right after all inner images are loaded. updateOnImagesReady should be also enabled
     */
    imagesReady?: () => any;

    /**
     * Triggered when Swiper progress is changed, as an arguments it receives
     * progress that is always from 0 to 1
     */
    progress?: (progress: any) => any;

    /**
     * Triggered when Swiper reach its beginning (initial position)
     */
    reachBeginning?: () => any;

    /**
     * Triggered when Swiper reach last slide
     */
    reachEnd?: () => any;

    /**
     * Triggered when Swiper goes from beginning or end position
     */
    fromEdge?: () => any;

    /**
     * Triggered when swiper's wrapper change its position. Receives current translate value as an arguments
     */
    setTranslate?: (translate: any) => any;

    /**
     * Triggered everytime when swiper starts animation.
     * Receives current transition duration (in ms) as an arguments,
     */
    setTransition?: (transition: any) => any;

    /**
     * Triggered on window resize right before swiper's onresize manipulation
     */
    resize?: () => any;
}

export interface NavigationOptions {
    /**
     * String with CSS selector or HTML element of the element that will work
     * like "next" button after click on it
     *
     * @default null
     */
    nextEl?: SelectableElement;

    /**
     * String with CSS selector or HTML element of the element that will work
     * like "prev" button after click on it
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

export interface PaginationOptions {
    /**
     * String with CSS selector or HTML element of the container with pagination
     */
    el: SelectableElement;

    /**
     * String with type of pagination. Can be "bullets", "fraction", "progressbar" or "custom"
     */
    type?: 'bullets' | 'fraction' | 'progressbar' | 'custom';

    /**
     * Defines which HTML tag will be use to represent single pagination bullet. Only for bullets pagination type.
     */
    bulletElement?: string;

    /**
     * Good to enable if you use bullets pagination with a lot of slides. So it will keep only few bullets visible at the same time.
     */
    dynamicBullets?: boolean;

    /**
     * The number of main bullets visible when dynamicBullets enabled.
     */
    dynamicMainBullets?: number;

    /**
     * Toggle (hide/true) pagination container visibility after click on Slider's container
     */
    hideOnClick?: boolean;

    /**
     * If true then clicking on pagination button will cause transition to appropriate slide. Only for bullets pagination type
     */
    clickable?: boolean;

    /**
     * Makes pagination progressbar opposite to Swiper's `direction` parameter, means vertical progressbar for horizontal swiper
     * direction and horizontal progressbar for vertical swiper direction
     */
    progressbarOpposite?: boolean;

    /**
     * format fraction pagination current number. Function receives current number,
     * and you need to return formatted value
     */
    formatFractionCurrent?: (number: number) => number;

    /**
     * format fraction pagination total number. Function receives total number, and you
     * need to return formatted value
     */
    formatFractionTotal?: (number: number) => number;

    /**
     * This parameter allows totally customize pagination bullets, you need to pass here a function that accepts index number of
     * pagination bullet and required element class name (className). Only for bullets pagination type
     */
    renderBullet?: (index: number, className: string) => void;

    /**
     * This parameter allows to customize "fraction" pagination html. Only for fraction pagination type
     */
    renderFraction?: (currentClass: string, totalClass: string) => void;

    /**
     * This parameter allows to customize "progress" pagination. Only for progress pagination type
     */
    renderProgressbar?: (progressbarFillClass: string) => void;

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
    renderCustom?: (swiper: Swiper, current: number, total: number) => void;

    /**
     * CSS class name of single pagination bullet
     */
    bulletClass?: string;

    /**
     * CSS class name of currently active pagination bullet
     */
    bulletActiveClass?: string;

    /**
     * The beginning of the modifier CSS class name that will be added to pagination depending on parameters
     */
    modifierClass?: string;

    /**
     * CSS class name of the element with currently active index in "fraction" pagination
     */
    currentClass?: string;

    /**
     * CSS class name of the element with total number of "snaps" in "fraction" pagination
     */
    totalClass?: string;

    /**
     * CSS class name of pagination when it becomes inactive
     */
    hiddenClass?: string;

    /**
     * CSS class name of pagination progressbar fill element
     */
    progressbarFillClass?: string;

    /**
     * CSS class name set to pagination when it is clickable
     */
    clickableClass?: string;
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
    hide?: boolean;

    /**
     * Set to true to enable make scrollbar draggable that allows you to control slider position
     *
     * @default true
     */
    draggable?: boolean;

    /**
     * Set to true to snap slider position to slides when you release scrollbar
     *
     * @default false
     */
    snapOnRelease?: boolean;

    /**
     * Size of scrollbar draggable element in px
     *
     * @default 'auto'
     */
    dragSize?: 'auto' | number;

    /**
     * Scrollbar element additional CSS class when it is disabled
     *
     * @default 'swiper-scrollbar-lock'
     */
    lockClass?: string;

    /**
     * 	Scrollbar draggable element CSS class
     *
     * @default 'swiper-scrollbar-drag'
     */
    dragClass?: string;
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
    delay?: number;

    /**
     * Enable this parameter and autoplay will be stopped when it reaches last slide (has no effect in loop mode)
     *
     * @default false
     */
    stopOnLastSlide?: boolean;

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
     * When enabled autoplay will wait for wrapper transition to continue.
     * Can be disabled in case of using Virtual Translate when your
     * slider may not have transition
     *
     * @default true
     */
    waitForTransition?: boolean;
}

export interface LazyOptions {
    loadPrevNext?: boolean;
    loadPrevNextAmount?: number;
    loadOnTransitionStart?: boolean;
    elementClass?: string;
    loadingClass?: string;
    loadedClass?: string;
    preloaderClass?: string;
}

/*
 * Options - Effect
 */

export interface FadeEffectOptions {
    crossFade?: boolean;
}

export interface CoverflowEffectOptions {
    slideShadows?: boolean;
    rotate?: number;
    stretch?: number;
    depth?: number;
    modifier?: number;
}

export interface FlipEffectOptions {
    slideShadows?: boolean;
    limitRotation?: boolean;
}

export interface CubeEffectOptions {
    slideShadows?: boolean;
    shadow?: boolean;
    shadowOffset?: number;
    shadowScale?: number;
}

export interface ThumbsOptions {
    swiper?: Swiper;
    slideThumbActiveClass?: string;
    thumbsContainerClass?: string;
}

export interface ZoomOptions {
    maxRatio?: number;
    minRatio?: number;
    toggle?: boolean;
    containerClass?: string;
    zoomedSlideClass?: string;
}

export interface KeyboardOptions {
    enabled?: boolean;
    onlyInViewport?: boolean;
}

export interface MousewheelOptions {
    forceToAxis?: boolean;
    releaseOnEdges?: boolean;
    invert?: boolean;
    sensitivity?: number;
    eventsTarged?: SelectableElement;
}

export interface VirtualOptions {
    slides?: any[];
    cache?: boolean;
    addSlidesBefore?: number;
    addSlidesAfter?: number;
    renderSlide?: (slide: any, index: any) => any;
    renderExternal?: (data: any) => any;
}

export interface HashNavigationOptions {
    /**
     * Set to true to enable also navigation through slides (when hashnav
     * is enabled) by browser history or by setting directly hash on document location
     *
     * @default false
     */
    watchState?: boolean;

    /**
     * Works in addition to hashnav to replace current url state with the
     * new one instead of adding it to history
     *
     * @default 	false
     */
    replaceState?: boolean;
}

export interface HistoryNavigationOptions {
    /**
     * Works in addition to hashnav or history to replace current url state with the
     * new one instead of adding it to history
     *
     * @default false
     */
    replaceState?: boolean;

    /**
     * Url key for slides
     *
     * @default 'slides'
     */
    key?: string;
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
    control?: Swiper;

    /**
     * Set to true and controlling will be in inverse direction
     *
     * @default false
     */
    inverse?: boolean;

    /**
     * Can be 'slide' or 'container'. Defines a way how to control another slider: slide by slide
     * (with respect to other slider's grid) or depending on all slides/container
     * (depending on total slider percentage).
     *
     * @default 'slide'
     */
    by?: 'slide' | 'container';
}

export interface A11yOptions {
    /**
     * Enables A11y
     *
     * @default true
     */
    enabled?: boolean;

    /**
     * Message for screen readers for previous button
     *
     * @default 'Previous slide'
     */
    prevSlideMessage?: string;

    /**
     * Message for screen readers for next button
     *
     * @default 'Next slide'
     */
    nextSlideMessage?: string;

    /**
     * Message for screen readers for previous button when swiper is on first slide
     *
     * @default 'This is the first slide'
     */
    firstSlideMessage?: string;

    /**
     * Message for screen readers for previous button when swiper is on last slide
     *
     * @default 'This is the last slide'
     */
    lastSlideMessage?: string;

    /**
     * Message for screen readers for single pagination bullet
     *
     * @default 'Go to slide {{index}}'
     */
    paginationBulletMessage?: string;

    /**
     * CSS class name of a11 notification
     *
     * @default 'swiper-notification'
     */
    notificationClass?: string;
}

// "Multiple imports from './dist/js/swiper.esm' can be combined into one" + "Line breaks are not allowed in import declaration" = ...
// tslint:disable-next-line:max-line-length
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
     * @example removeAllSlides();	// Remove all slides
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
    navigation?: Navigation;

    /**
     * Swiper Pagination module.
     */
    pagination?: Pagination;

    /**
     * Swiper Scrollbar module.
     */
    scrollbar?: Scrollbar;

    /**
     * Swiper Autoplay module.
     */
    autoplay?: Autoplay;

    /**
     * Swiper Parallax module.
     */
    parallax?: Parallax;

    /**
     * Swiper Lazy module.
     */
    lazy?: Lazy;

    /**
     * Swiper FadeEffect module.
     */
    fadeEffect?: EffectFade;

    /**
     * Swiper CoverflowEffect module.
     */
    coverflowEffect?: EffectCoverflow;

    /**
     * Swiper FlipEffect module.
     */
    flipEffect?: EffectFlip;

    /**
     * Swiper CubeEffect module.
     */
    cubeEffect?: EffectCube;

    /**
     * Swiper Thumbs module.
     */
    thumbs?: object;

    /**
     * Swiper Zoom module.
     */
    zoom?: Zoom;

    /**
     * Swiper Keyboard module.
     */
    keyboard?: Keyboard;

    /**
     * Swiper Mousewheel module.
     */
    mousewheel?: Mousewheel;

    /**
     * Swiper Virtual module.
     */
    virtual?: Virtual;

    /**
     * Swiper HashNavigation module.
     */
    hashNavigation?: HashNavigation;

    /**
     * Swiper History module.
     */
    history?: History;

    /**
     * Swiper Controller module.
     */
    controller?: Controller;

    /**
     * Swiper A11y module.
     */
    a11y?: A11y;
}
