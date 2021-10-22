// Type definitions for Swiper 2.0.0
// Project: https://github.com/nolimits4web/Swiper
// Definitions by: Sebastián Galiano <https://github.com/sgaliano/>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 2.3

interface SwiperOptions {
    speed?: number | undefined;
    autoplay?: number | undefined;
    mode?: string | undefined;
    loop?: boolean | undefined;
    loopAdditionalSlides?: number | undefined;
    slidesPerView?: any;
    slidesPerGroup?: number | undefined;
    calculateHeight?: boolean | undefined;
    updateOnImagesReady?: boolean | undefined;
    releaseFormElements?: boolean | undefined;
    watchActiveIndex?: boolean | undefined;
    visibilityFullFit?: boolean | undefined;
    autoResize?: boolean | undefined;
    resizeReInit?: boolean | undefined;
    DOMAnimation?: boolean | undefined;
    resistance?: any;
    noSwiping?: boolean | undefined;
    preventLinks?: boolean | undefined;
    initialSlide?: number | undefined;
    useCSS3Transforms?: boolean | undefined;

    // Free Mode and Scroll Container
    freeMode?: boolean | undefined;
    freeModeFluid?: boolean | undefined;
    scrollContainer?: boolean | undefined;
    momentumRatio?: number | undefined;
    momentumBounce?: boolean | undefined;
    momentumBounceRatio?: number | undefined;

    // Slides offset
    centeredSlides?: boolean | undefined;
    offsetPxBefore?: number | undefined;
    offsetPxAfter?: number | undefined;
    offsetSlidesBefore?: number | undefined;
    offsetSlidesAfter?: number | undefined;

    // Touch/mouse interactions
    touchRatio?: number | undefined;
    simulateTouch?: boolean | undefined;
    onlyExternal?: boolean | undefined;
    followFinger?: boolean | undefined;
    grabCursor?: boolean | undefined;
    shortSwipes?: boolean | undefined;
    moveStartThreshold?: number | undefined;

    // Navigation
    keyboardControl?: boolean | undefined;
    mousewheelControl?: boolean | undefined;
    nextButton?: string | HTMLElement | undefined;
    prevButton?: string | HTMLElement | undefined;

    // Pagination
    pagination?: any;
    paginationClickable?: boolean | undefined;
    paginationAsRange?: boolean | undefined;
    createPagination?: boolean | undefined;

    // Namespace
    wrapperClass?: string | undefined;
    slideClass?: string | undefined;
    slideActiveClass?: string | undefined;
    slideVisibleClass?: string | undefined;
    slideElement?: string | undefined;
    noSwipingClass?: string | undefined;
    paginationElement?: string | undefined;
    paginationElementClass?: string | undefined;
    paginationActiveClass?: string | undefined;
    paginationVisibleClass?: string | undefined;

    // Callbacks
    queueStartCallbacks?: boolean | undefined;
    queueEndCallbacks?: boolean | undefined;
    onTouchStart?(swiper: Swiper): void;
    onTouchMove?(swiper: Swiper): void;
    onTouchEnd?(swiper: Swiper): void;
    onSlideReset?(swiper: Swiper): void;
    onSlideChangeStart?(swiper: Swiper): void;
    onSlideChangeEnd?(swiper: Swiper): void;
    onSlideClick?(swiper: Swiper): void;
    onSlideTouch?(swiper: Swiper): void;
    onImagesReady?(swiper: Swiper): void;
    onMomentumBounce?(swiper: Swiper): void;
    onResistanceBefore?(swiper: Swiper, distance: any): void;
    onResistanceAfter?(swiper: Swiper, distance: any): void;

    // Slides Loader
    loader?: {
        slides?: any[] | undefined;
        slidesHTMLType?: string | undefined;
        surroundGroups?: number | undefined;
        logic?: string | undefined;
        loadAllSlides?: boolean | undefined;
    } | undefined;

    // Plugins
    scrollbar?: SwiperScrollbarOptions | undefined;
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

declare module "swiper" {
    const swiper: {
        new (element: Element | string, options?: SwiperOptions): Swiper;
    };

    export = swiper;
}
