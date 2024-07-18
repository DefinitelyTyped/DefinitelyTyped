/// <reference types="jquery" />

interface IOwlCarouselOptions {
    // options
    items?: number | undefined;
    itemsDesktop?: number[] | undefined;
    itemsDesktopSmall?: number[] | undefined;
    itemsTablet?: number[] | undefined;
    itemsTabletSmall?: any;
    itemsMobile?: number[] | undefined;
    itemsCustom?: any;
    singleItem?: boolean | undefined;
    itemsScaleUp?: boolean | undefined;
    slideSpeed?: number | undefined;
    paginationSpeed?: number | undefined;
    rewindSpeed?: number | undefined;
    autoPlay?: any;
    stopOnHover?: boolean | undefined;
    navigation?: boolean | undefined;
    navigationText?: any;
    rewindNav?: boolean | undefined;
    scrollPerPage?: boolean | undefined;
    pagination?: boolean | undefined;
    paginationNumbers?: boolean | undefined;
    responsive?: boolean | undefined;
    responsiveRefreshRate?: number | undefined;
    responsiveBaseWidth?: JQuery | string | undefined;
    baseClass?: string | undefined;
    theme?: string | undefined;
    lazyLoad?: boolean | undefined;
    lazyFollow?: boolean | undefined;
    lazyEffect?: any;
    autoHeight?: boolean | undefined;
    jsonPath?: any;
    jsonSuccess?: ((data: any) => void) | undefined;
    dragBeforeAnimFinish?: boolean | undefined;
    mouseDrag?: boolean | undefined;
    touchDrag?: boolean | undefined;
    addClassActive?: boolean | undefined;
    loop?: boolean | undefined;
    nav?: boolean | undefined;
    transitionStyle?: any;

    // callbacks
    beforeUpdate?: ((params?: any) => void) | undefined;
    afterUpdate?: ((params?: any) => void) | undefined;
    beforeInit?: ((params?: any) => void) | undefined;
    afterInit?: ((params?: any) => void) | undefined;
    beforeMove?: ((params?: any) => void) | undefined;
    afterMove?: ((params?: any) => void) | undefined;
    afterAction?: ((params?: any) => void) | undefined;
    startDragging?: ((params?: any) => void) | undefined;
    afterLazyLoad?: ((params?: any) => void) | undefined;
}

interface JQuery {
    owlCarousel(options?: IOwlCarouselOptions): JQuery;
}
