// Type definitions for Swiper 3.4
// Project: https://github.com/nolimits4web/Swiper
// Definitions by: Sebastián Galiano <https://github.com/sgaliano>, Luca Trazzi <https://github.com/lucax88x>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 2.3

interface SwiperOptions {
    initialSlide?: number | undefined;
    direction?: string | undefined;
    speed?: number | undefined;
    setWrapperSize?: boolean | undefined;
    virtualTranslate?: boolean | undefined;
    width?: number | undefined;
    height?: number | undefined;
    autoHeight?: boolean | undefined;
    roundLengths?: boolean | undefined;
    nested?: boolean | undefined;

    // Autoplay
    autoplay?: number | undefined;
    autoplayStopOnLast?: boolean | undefined;
    autoplayDisableOnInteraction?: boolean | undefined;

    // Progress
    watchSlidesProgress?: boolean | undefined;
    watchSlidesVisibility?: boolean | undefined;

    // Freemode
    freeMode?: boolean | undefined;
    freeModeMomentum?: boolean | undefined;
    freeModeMomentumRatio?: number | undefined;
    freeModeMomentumVelocityRatio?: number | undefined;
    freeModeMomentumBounce?: boolean | undefined;
    freeModeMomentumBounceRatio?: number | undefined;
    freeModeMinimumVelocity?: number | undefined;
    freeModeSticky?: boolean | undefined;

    // Effects
    effect?: string | undefined;
    fade?: {} | undefined;
    cube?: {} | undefined;
    coverflow?: {} | undefined;
    flip?: {} | undefined;

    // Parallax
    parallax?: boolean | undefined;

    // Slides grid
    spaceBetween?: number | undefined;
    slidesPerView?: number | string | undefined;
    slidesPerColumn?: number | undefined;
    slidesPerColumnFill?: string | undefined;
    slidesPerGroup?: number | undefined;
    centeredSlides?: boolean | undefined;
    slidesOffsetBefore?: number | undefined;
    slidesOffsetAfter?: number | undefined;

    // Grab Cursor
    grabCursor?: boolean | undefined;

    // Touches
    touchEventsTarget?: string | undefined;
    touchRatio?: number | undefined;
    touchAngle?: number | undefined;
    simulateTouch?: boolean | undefined;
    shortSwipes?: boolean | undefined;
    longSwipes?: boolean | undefined;
    longSwipesRatio?: number | undefined;
    longSwipesMs?: number | undefined;
    followFinger?: boolean | undefined;
    onlyExternal?: boolean | undefined;
    threshold?: number | undefined;
    touchMoveStopPropagation?: boolean | undefined;
    iOSEdgeSwipeDetection?: boolean | undefined;
    iOSEdgeSwipeThreshold?: number | undefined;

    // Touch Resistance
    resistance?: boolean | undefined;
    resistanceRatio?: number | undefined;

    // Clicks
    preventClicks?: boolean | undefined;
    preventClicksPropagation?: boolean | undefined;
    slideToClickedSlide?: boolean | undefined;

    // Swiping / No swiping
    allowSwipeToPrev?: boolean | undefined;
    allowSwipeToNext?: boolean | undefined;
    noSwiping?: boolean | undefined;
    noSwipingClass?: string | undefined;
    swipeHandler?: string | Element | undefined;

    // Navigation Controls
    uniqueNavElements?: boolean | undefined;

    // Pagination
    pagination?: string | Element | undefined;
    paginationType?: string | undefined;
    paginationHide?: boolean | undefined;
    paginationClickable?: boolean | undefined;
    paginationElement?: string | undefined;
    paginationBulletRender?(swiper: Swiper, index: number, className: string): void;
    paginationFractionRender?(swiper: Swiper, currentClassName: string, totalClassName: string): void;
    paginationProgressRender?(swiper: Swiper, progressbarClass: string): void;
    paginationCustomRender?(swiper: Swiper, current: number, total: number): void;

    // Navigation Buttons
    nextButton?: string | Element | undefined;
    prevButton?: string | Element | undefined;

    // Scollbar
    scrollbar?: string | Element | SwiperScrollbarOptions | undefined;
    scrollbarHide?: boolean | undefined;
    scrollbarDraggable?: boolean | undefined;
    scrollbarSnapOnRelease?: boolean | undefined;

    // Accessibility
    a11y?: boolean | undefined;
    prevSlideMessage?: string | undefined;
    nextSlideMessage?: string | undefined;
    firstSlideMessage?: string | undefined;
    lastSlideMessage?: string | undefined;
    paginationBulletMessage?: string | undefined;

    // Keyboard / Mousewheel
    keyboardControl?: boolean | undefined;
    mousewheelControl?: boolean | undefined;
    mousewheelForceToAxis?: boolean | undefined;
    mousewheelReleaseOnEdges?: boolean | undefined;
    mousewheelInvert?: boolean | undefined;
    mousewheelSensitivity?: number | undefined;

    // Hash Navigation
    hashnav?: boolean | undefined;
    hashnavWatchState?: boolean | undefined;
    history?: string | undefined;

    // Images
    preloadImages?: boolean | undefined;
    updateOnImagesReady?: boolean | undefined;
    lazyLoading?: boolean | undefined;
    lazyLoadingInPrevNext?: boolean | undefined;
    lazyLoadingInPrevNextAmount?: number | undefined;
    lazyLoadingOnTransitionStart?: boolean | undefined;

    // Loop
    loop?: boolean | undefined;
    loopAdditionalSlides?: number | undefined;
    loopedSlides?: number | undefined;

    zoom?: boolean | undefined;

    // Controller
    control?: Swiper | undefined;
    controlInverse?: boolean | undefined;
    controlBy?: string | undefined;

    // Observer
    observer?: boolean | undefined;
    observeParents?: boolean | undefined;

    // Breakpoints
    breakpoints?: {} | undefined;

    // Callbacks
    runCallbacksOnInit?: boolean | undefined;
    onInit?(swiper: Swiper): void;
    onSlideChangeStart?(swiper: Swiper): void;
    onSlideChangeEnd?(swiper: Swiper): void;
    onSlideNextStart?(swiper: Swiper): void;
    onSlideNextEnd?(swiper: Swiper): void;
    onSlidePrevStart?(swiper: Swiper): void;
    onSlidePrevEnd?(swiper: Swiper): void;
    onTransitionStart?(swiper: Swiper): void;
    onTransitionEnd?(swiper: Swiper): void;
    onTouchStart?(swiper: Swiper, event: Event): void;
    onTouchMove?(swiper: Swiper, event: Event): void;
    onTouchMoveOpposite?(swiper: Swiper, event: Event): void;
    onSliderMove?(swiper: Swiper, event: Event): void;
    onTouchEnd?(swiper: Swiper, event: Event): void;
    onClick?(swiper: Swiper, event: Event): void;
    onTap?(swiper: Swiper, event: Event): void;
    onDoubleTap?(swiper: Swiper, event: Event): void;
    onImagesReady?(swiper: Swiper): void;
    onProgress?(swiper: Swiper, progress: number): void;
    onReachBeginning?(swiper: Swiper): void;
    onReachEnd?(swiper: Swiper): void;
    onDestroy?(swiper: Swiper): void;
    onSetTranslate?(swiper: Swiper, translate: any): void;
    onSetTransition?(swiper: Swiper, transition: any): void;
    onAutoplay?(swiper: Swiper): void;
    onAutoplayStart?(swiper: Swiper): void;
    onAutoplayStop?(swiper: Swiper): void;
    onLazyImageLoad?(swiper: Swiper, slide: any, image: any): void;
    onLazyImageReady?(swiper: Swiper, slide: any, image: any): void;
    onPaginationRendered?(swiper: Swiper, paginationContainer: any): void;
    onScroll?(swiper: Swiper, event: Event): void;
    onBeforeResize?(swiper: Swiper): void;
    onAfterResize?(swiper: Swiper): void;
    onKeyPress?(swiper: Swiper, kc: any): void;

    // Namespace
    slideClass?: string | undefined;
    slideActiveClass?: string | undefined;
    slideVisibleClass?: string | undefined;
    slideDuplicateClass?: string | undefined;
    slideNextClass?: string | undefined;
    slidePrevClass?: string | undefined;
    wrapperClass?: string | undefined;
    bulletClass?: string | undefined;
    bulletActiveClass?: string | undefined;
    paginationHiddenClass?: string | undefined;
    paginationCurrentClass?: string | undefined;
    paginationTotalClass?: string | undefined;
    paginationProgressbarClass?: string | undefined;
    buttonDisabledClass?: string | undefined;
}

interface SwiperScrollbarOptions {
    container: string;          // Default: '.swiper-scrollbar'
    draggable?: boolean | undefined;        // Default: true
    hide?: boolean | undefined;             // Default: true
    snapOnRelease?: boolean | undefined;    // Default: false
}

declare class SwiperSlide {
    append(): SwiperSlide;
    clone(): SwiperSlide;
    getWidth(): number;
    getHeight(): number;
    getOffset(): { top: number; left: number; };
    insertAfter(index: number): SwiperSlide;
    prepend(): SwiperSlide;
    remove(): void;
}

declare class Swiper {
    constructor(container: string | Element, options?: SwiperOptions);

    // Properties
    width: number;
    height: number;
    params: any;
    positions: any;
    wrapper: any;
    virtualSize: number;

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
    activeSlide(): SwiperSlide;
    updateActiveSlide(index: number): void;

    // Events
    touches: any;
    isTouched: boolean;
    clickedSlideIndex: number;
    clickedSlide: SwiperSlide;
    wrapperTransitionEnd(callback: () => void, permanent: boolean): void;

    // Init/reset
    destroy(deleteInstance: boolean, cleanupStyles: boolean): void;
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

    slides: SwiperSlide[];

    slidePrev(runCallbacks?: boolean, speed?: number): void;
    slideNext(runCallbacks?: boolean, speed?: number): void;
    slideTo(index: number, speed?: number, runCallbacks?: boolean): void;
    update(updateTranslate?: boolean): void;
    onResize(): void;
    detachEvents(): void;
    attachEvents(): void;

    appendSlide(slides: HTMLElement | string | string[]): void;
    prependSlide(slides: HTMLElement | string | string[]): void;
    removeSlide(slideIndex: number): void;
    removeAllSlides(): void;

    lockSwipeToNext(): void;
    unlockSwipeToNext(): void;
    lockSwipeToPrev(): void;
    unlockSwipeToPrev(): void;
    lockSwipes(): void;
    unlockSwipes(): void;
    disableMousewheelControl(): void;
    enableMousewheelControl(): void;
    disableKeyboardControl(): void;
    enableKeyboardControl(): void;
    disableTouchControl(): void;
    enableTouchControl(): void;
    unsetGrabCursor(): void;
    setGrabCursor(): void;

    plugins?: {
        debugger?(swiper: any, params: any): void;
    } | undefined;
}

declare module "swiper" {
    const swiper: {
        new (element: Element | string, options?: SwiperOptions): Swiper;
    };

    export = swiper;
}
