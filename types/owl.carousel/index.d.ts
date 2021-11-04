// Type definitions for owl.carousel 2.3
// Project: https://github.com/OwlCarousel2/OwlCarousel2
// Definitions by: Ismael Gorissen <https://github.com/igorissen>
//                 Kenneth Ceyer <https://github.com/KennethanCeyer>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 2.3

/// <reference types="jquery"/>

declare namespace OwlCarousel {
    interface Options {
        // OPTIONS
        items?: number | undefined;
        margin?: number | undefined;
        loop?: boolean | undefined;
        center?: boolean | undefined;
        mouseDrag?: boolean | undefined;
        touchDrag?: boolean | undefined;
        pullDrag?: boolean | undefined;
        freeDrag?: boolean | undefined;
        stagePadding?: number | undefined;
        merge?: boolean | undefined;
        mergeFit?: boolean | undefined;
        autoWidth?: boolean | undefined;
        startPosition?: number | string | undefined;
        URLhashListener?: boolean | undefined;
        nav?: boolean | undefined;
        rewind?: boolean | undefined;
        navText?: string[] | undefined;
        navElement?: string | undefined;
        slideBy?: number | string | undefined;
        dots?: boolean | undefined;
        dotsEach?: number | boolean | undefined;
        dotsData?: boolean | undefined;
        lazyLoad?: boolean | undefined;
        lazyLoadEager?: number | undefined;
        autoplay?: boolean | undefined;
        autoplayTimeout?: number | undefined;
        autoplayHoverPause?: boolean | undefined;
        smartSpeed?: number | boolean | undefined;
        fluidSpeed?: number | boolean | undefined;
        autoplaySpeed?: number | boolean | undefined;
        navSpeed?: number | boolean | undefined;
        dotsSpeed?: number | boolean | undefined;
        dragEndSpeed?: number | boolean | undefined;
        callbacks?: boolean | undefined;
        responsive?: { [breakpoint: string]: Options } | undefined;
        responsiveRefreshRate?: number | undefined;
        responsiveBaseElement?: Element | undefined;
        video?: boolean | undefined;
        videoHeight?: number | boolean | undefined;
        videoWidth?: number | boolean | undefined;
        animateOut?: string | boolean | undefined;
        animateIn?: string | boolean | undefined;
        fallbackEasing?: string | undefined;
        info?: HandlerCallback | undefined;
        nestedItemSelector?: string | undefined;
        itemElement?: string | undefined;
        stageElement?: string | undefined;
        navContainer?: string | boolean | undefined;
        dotsContainer?: string | boolean | undefined;
        checkVisible?: boolean | undefined;
        slideTransition?: string | undefined;
        autoHeight?: boolean | undefined;
        rtl?: boolean | undefined;
        // CLASSES
        refreshClass?: string | undefined;
        loadingClass?: string | undefined;
        loadedClass?: string | undefined;
        rtlClass?: string | undefined;
        dragClass?: string | undefined;
        grabClass?: string | undefined;
        stageClass?: string | undefined;
        stageOuterClass?: string | undefined;
        navContainerClass?: string | undefined;
        navClass?: string[] | undefined;
        controlsClass?: string | undefined;
        dotClass?: string | undefined;
        dotsClass?: string | undefined;
        autoHeightClass?: string | undefined;
        responsiveClass?: string | boolean | undefined;
        // EVENTS
        onInitialize?: HandlerCallback | undefined;
        onInitialized?: HandlerCallback | undefined;
        onResize?: HandlerCallback | undefined;
        onResized?: HandlerCallback | undefined;
        onRefresh?: HandlerCallback | undefined;
        onRefreshed?: HandlerCallback | undefined;
        onDrag?: HandlerCallback | undefined;
        onDragged?: HandlerCallback | undefined;
        onTranslate?: HandlerCallback | undefined;
        onTranslated?: HandlerCallback | undefined;
        onChange?: HandlerCallback | undefined;
        onChanged?: HandlerCallback | undefined;
        onLoadLazy?: HandlerCallback | undefined;
        onLoadedLazy?: HandlerCallback | undefined;
        onStopVideo?: HandlerCallback | undefined;
        onPlayVideo?: HandlerCallback | undefined;
    }

    type HandlerCallback = (...args: any[]) => void;

    type OnEvent = 'initialize.owl.carousel'
        | 'initialized.owl.carousel'
        | 'resize.owl.carousel'
        | 'resized.owl.carousel'
        | 'refresh.owl.carousel'
        | 'refreshed.owl.carousel'
        | 'drag.owl.carousel'
        | 'dragged.owl.carousel'
        | 'translate.owl.carousel'
        | 'translated.owl.carousel'
        | 'change.owl.carousel'
        | 'changed.owl.carousel'
        | 'load.owl.lazy'
        | 'loaded.owl.lazy'
        | 'stop.owl.video'
        | 'play.owl.video';

    type TriggerEvent = 'refresh.owl.carousel'
        | 'next.owl.carousel'
        | 'prev.owl.carousel'
        | 'to.owl.carousel'
        | 'destroy.owl.carousel'
        | 'replace.owl.carousel'
        | 'add.owl.carousel'
        | 'remove.owl.carousel'
        | 'play.owl.autoplay'
        | 'stop.owl.autoplay';
}

interface JQuery {
    owlCarousel(options?: OwlCarousel.Options | 'destroy'): JQuery;

    on(event: OwlCarousel.OnEvent, handler: OwlCarousel.HandlerCallback): JQuery;

    trigger(event: OwlCarousel.TriggerEvent): JQuery;
}
