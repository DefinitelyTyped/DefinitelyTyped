// Type definitions for Swiper 2.0.0
// Project: https://github.com/nolimits4web/Swiper
// Definitions by: Sebastián Galiano <https://github.com/sgaliano/>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped


interface SwiperOptions {
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

    // Autoplay
    autoplay?: number;
    autoplayStopOnLast?: boolean;
    autoplayDisableOnInteraction?: boolean;

    // Progress
    watchSlidesProgress?: boolean;
    watchSlidesVisibility?: boolean;

    // Freemode
    freeMode?: boolean;
    freeModeMomentum?: boolean;
    freeModeMomentumRatio?: number;
    freeModeMomentumBounce?: boolean;
    freeModeMomentumBounceRatio?: number;
    freeModeMinimumVelocity?: number;
    freeModeSticky?: boolean;

    // Effects
    effect?: string;
    fade?: Object;
    cube?: Object;
    coverflow?: Object;
    flip?: Object;

    // Parallax
    parallax?: boolean;

    // Slides grid
    spaceBetween?: number;
    slidesPerView?: number|string;
    slidesPerColumn?: number;
    slidesPerColumnFill?: string;
    slidesPerGroup?: number;
    centeredSlides?: boolean;
    slidesOffsetBefore?: number;
    slidesOffsetAfter?: number;

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
    onlyExternal?: boolean;
    threshold?: number;
    touchMoveStopPropagation?: boolean;
    iOSEdgeSwipeDetection?: boolean;
    iOSEdgeSwipeThreshold?: number;

    // Touch Resistance
    resistance?: boolean;
    resistanceRatio?: number;

    // Clicks
    preventClicks?: boolean;
    preventClicksPropagation?: boolean;
    slideToClickedSlide?: boolean;

    // Swiping / No swiping
    allowSwipeToPrev?: boolean;
    allowSwipeToNext?: boolean;
    noSwiping?: boolean;
    noSwipingClass?: string;
    swipeHandler?: string|Element;

    // Navigation Controls
    uniqueNavElements?: boolean;

    // Pagination
    pagination?: string|Element;
    paginationType?: string;
    paginationHide?: boolean;
    paginationClickable?: boolean;
    paginationElement?: string;
    paginationBulletRender?: (index: number, className: string) => void;
    paginationFractionRender?: (swiper: Swiper, currentClassName: string, totalClassName: string) => void;
    paginationProgressRender?: (swiper: Swiper, progressbarClass: string) => void;
    paginationCustomRender?: (swiper: Swiper, current: number, total: number) => void;

    // Navigation Buttons
    nextButton?: string|Element;
    prevButton?: string|Element;

    // Scollbar
    scrollbar?: string|Element|SwiperScrollbarOptions;
    scrollbarHide?: boolean;
    scrollbarDraggable?: boolean;
    scrollbarSnapOnRelease?: boolean;


    // Accessibility
    a11y?: boolean;
    prevSlideMessage?: string;
    nextSlideMessage?: string;
    firstSlideMessage?: string;
    lastSlideMessage?: string;
    paginationBulletMessage?: string;



    // Keyboard / Mousewheel
    keyboardControl?: boolean;
    mousewheelControl?: boolean;
    mousewheelForceToAxis?: boolean;
    mousewheelReleaseOnEdges?: boolean;
    mousewheelInvert?: boolean;
    mousewheelSensitivity?: number;

    // Hash Navigation
    hashnav?: boolean;


    // Images
    preloadImages?: boolean;
    updateOnImagesReady?: boolean;
    lazyLoading?: boolean;
    lazyLoadingInPrevNext?: boolean;
    lazyLoadingInPrevNextAmount?: number;
    lazyLoadingOnTransitionStart?: boolean;

    // Loop
    loop?: boolean;
    loopAdditionalSlides?: number;
    loopedSlides?: number;

    // Controller
    control?: Swiper;
    controlInverse?: boolean;
    controlBy?: string;

    // Observer
    observer?: boolean;
    observeParents?: boolean;

    // Breakpoints
    breakpoints?: Object;

    // Callbacks
    runCallbacksOnInit?: boolean;
    onInit?: (swiper: Swiper) => void;
    onSlideChangeStart?: (swiper: Swiper) => void;
    onSlideChangeEnd?: (swiper: Swiper) => void;
    onSlideNextStart?: (swiper: Swiper) => void;
    onSlideNextEnd?: (swiper: Swiper) => void;
    onSlidePrevStart?: (swiper: Swiper) => void;
    onSlidePrevEnd?: (swiper: Swiper) => void;
    onTransitionStart?: (swiper: Swiper) => void;
    onTransitionEnd?: (swiper: Swiper) => void;
    onTouchStart?: (swiper: Swiper, event: Event) => void;
    onTouchMove?: (swiper: Swiper, event: Event) => void;
    onTouchMoveOpposite?: (swiper: Swiper, event: Event) => void;
    onSliderMove?: (swiper: Swiper, event: Event) => void;
    onTouchEnd?: (swiper: Swiper, event: Event) => void;
    onClick?: (swiper: Swiper, event: Event) => void;
    onTap?: (swiper: Swiper, event: Event) => void;
    onDoubleTap?: (swiper: Swiper, event: Event) => void;
    onImagesReady?: (swiper: Swiper) => void;
    onProgress?: (swiper: Swiper, progress: number) => void;
    onReachBeginning?: (swiper: Swiper) => void;
    onReachEnd?: (swiper: Swiper) => void;
    onDestroy?: (swiper: Swiper) => void;
    onSetTranslate?: (swiper: Swiper, translate: any) => void;
    onSetTransition?: (swiper: Swiper, transition: any) => void;
    onAutoplay?: (swiper: Swiper) => void;
    onAutoplayStart?: (swiper: Swiper) => void;
    onAutoplayStop?: (swiper: Swiper) => void;
    onLazyImageLoad?: (swiper: Swiper, slide, image) => void;
    onLazyImageReady?: (swiper: Swiper, slide, image) => void;
    onPaginationRendered?: (swiper: Swiper, paginationContainer) => void;

    // Namespace
    slideClass?: string;
    slideActiveClass?: string;
    slideVisibleClass?: string;
    slideDuplicateClass?: string;
    slideNextClass?: string;
    slidePrevClass?: string;
    wrapperClass?: string;
    bulletClass?: string;
    bulletActiveClass?: string;
    paginationHiddenClass?: string;
    paginationCurrentClass?: string;
    paginationTotalClass?: string;
    paginationProgressbarClass?: string;
    buttonDisabledClass?: string;

}

interface SwiperScrollbarOptions {
    container: string;          // Default: '.swiper-scrollbar'
    draggable?: boolean;        // Default: true
    hide?: boolean;             // Default: true
    snapOnRelease?: boolean;    // Default: false
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
    constructor(container: string|Element, options?: SwiperOptions);

    // Properties
    width: number;
    height: number;
    params;
    positions;

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
    touches;
    isTouched: boolean;
    clickedSlideIndex: number;
    clickedSlide: SwiperSlide;
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
    setWrapperTransition(duration): void;

    // Slides API
    slides: SwiperSlide[];
    createSlide(html: string, slideClassList?: string, element?: string): SwiperSlide;
    appendSlide(html: string, slideClassList?: string, element?: string): SwiperSlide;
    appendSlide(slideInstance: HTMLElement): SwiperSlide;
    prependSlide(html: string, slideClassList?: string, element?: string): SwiperSlide;
    prependSlide(slideInstance: HTMLElement): SwiperSlide;
    insertSlideAfter(index: number, html: string, slideClassList?: string, element?: string): SwiperSlide;
    insertSlideAfter(index: number, slideInstance: HTMLElement): SwiperSlide;
    removeSlide(index: number): boolean;
    removeLastSlide(): boolean;
    removeAllSlides(): void;
    getSlide(index: number): SwiperSlide;
    getLastSlide(): SwiperSlide;
    getFirstSlide(): SwiperSlide;
}
