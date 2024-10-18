declare namespace BScroll {
    interface WheelOption {
        selectedIndex: number;
        rotate: number;
        adjustTime: number;
        wheelWrapperClass: string;
        wheelItemClass: string;
    }

    interface PageOption {
        x: number;
        y: number;
        pageX: number;
        pageY: number;
    }

    interface SlideOption {
        loop: boolean;
        el: Element;
        threshold: number;
        stepX: number;
        stepY: number;
        speed: number;
        listenFlick: boolean;
    }

    interface ScrollBarOption {
        fade: boolean;
    }

    interface PullDownOption {
        threshold: number;
        stop: number;
    }

    interface PullUpOption {
        threshold: number;
    }

    interface MouseWheelOption {
        speed: number;
        invert: boolean;
        easeTime: number;
    }

    interface ZoomOption {
        start: number;
        min: number;
        max: number;
    }

    interface InfinityOption {
        fetch: (count: number) => void;
        render: (item: any, div: Element) => Element;
        createTombstone: () => Element;
    }

    interface BounceObjectOption {
        top?: boolean | undefined;
        bottom?: boolean | undefined;
        left?: boolean | undefined;
        right?: boolean | undefined;
    }

    interface DoubleClick {
        delay: number;
    }

    interface EaseOption {
        swipe?: {
            style: string;
            fn: (t: number) => number;
        } | undefined;
        swipeBounce?: {
            style: string;
            fn: (t: number) => number;
        } | undefined;
        bounce?: {
            style: string;
            fn: (t: number) => number;
        } | undefined;
    }

    interface BsOption {
        startX: number;
        startY: number;
        scrollX: boolean;
        scrollY: boolean;
        freeScroll: boolean;
        directionLockThreshold: number;
        eventPassthrough: string | boolean;
        click: boolean;
        dblclick: boolean | DoubleClick;
        tap: boolean;
        bounce: boolean | BounceObjectOption;
        bounceTime: number;
        momentum: boolean;
        momentumLimitTime: number;
        momentumLimitDistance: number;
        swipeTime: number;
        swipeBounceTime: number;
        deceleration: number;
        flickLimitTime: number;
        flickLimitDistance: number;
        resizePolling: number;
        probeType: number;
        preventDefault: boolean;
        preventDefaultException: object;
        HWCompositing: boolean;
        useTransition: boolean;
        useTransform: boolean;
        bindToWrapper: boolean;
        disableMouse: boolean;
        disableTouch: boolean;
        observeDOM: boolean;
        autoBlur: boolean;
        stopPropagation: boolean;
        /**
         * for picker
         * wheel: {
         *   selectedIndex: 0,
         *   rotate: 25,
         *   adjustTime: 400
         * }
         */
        wheel: Partial<WheelOption> | boolean;
        /**
         * for slide
         * snap: {
         *   loop: boolean,
         *   el: domEl,
         *   threshold: 0.1,
         *   stepX: 100,
         *   stepY: 100,
         *   listenFlick: true
         * }
         */
        snap: Partial<SlideOption> | boolean;
        /**
         * for scrollbar
         * scrollbar: {
         *   fade: true
         * }
         */
        scrollbar: Partial<ScrollBarOption> | boolean;
        /**
         * for pull down and refresh
         * pullDownRefresh: {
         *   threshold: 50,
         *   stop: 20
         * }
         */
        pullDownRefresh: Partial<PullDownOption> | boolean;
        /**
         * for pull up and load
         * pullUpLoad: {
         *   threshold: 50
         * }
         */
        pullUpLoad: Partial<PullUpOption> | boolean;

        // mouseWheel: {
        //  speed: 20,
        //  invert: false,
        //  easeTime: 300
        // }
        mouseWheel: Partial<MouseWheelOption> | boolean;

        // zoom: {
        //  start: 1,
        //  min: 1,
        //  max: 4
        // }
        zoom: Partial<ZoomOption> | boolean;

        // https://ustbhuangyi.github.io/better-scroll/doc/zh-hans/options-advanced.html
        infinity: Partial<InfinityOption> | boolean;
    }

    interface Position {
        x: number;
        y: number;
    }
}

declare class BScroll {
    constructor(element: Element | string, options?: Partial<BScroll.BsOption>);

    x: number;
    y: number;
    maxScrollX: number;
    maxScrollY: number;
    movingDirectionX: number;
    movingDirectionY: number;
    directionX: number;
    directionY: number;
    enabled: boolean;
    isInTransition: boolean;
    isAnimating: boolean;
    options: BScroll.BsOption;

    refresh(): void;

    enable(): void;

    disable(): void;

    scrollBy(x: number, y: number, time?: number, easing?: object): void;

    scrollTo(x: number, y: number, time?: number, easing?: object): void;

    scrollToElement(
        el: HTMLElement | string,
        time?: number,
        offsetX?: number | boolean,
        offsetY?: number | boolean,
        easing?: object,
    ): void;

    stop(): void;

    destroy(): void;

    goToPage(x: number, y: number, time?: number, easing?: object): void;

    next(time?: number, easing?: object): void;

    prev(time?: number, easing?: object): void;

    getCurrentPage(): BScroll.PageOption;

    wheelTo(index: number): void;

    getSelectedIndex(): number;

    finishPullDown(): void;

    finishPullUp(): void;

    on(
        type:
            | "beforeScrollStart"
            | "scrollStart"
            | "scrollCancel"
            | "beforeScrollStart"
            | "flick"
            | "refresh"
            | "destroy"
            | "pullingDown"
            | "pullingUp",
        fn: () => any,
    ): void;

    on(
        type:
            | "scroll"
            | "scrollEnd"
            | "touchEnd",
        fn: (pos: BScroll.Position) => any,
    ): void;

    off(
        type:
            | "beforeScrollStart"
            | "scrollStart"
            | "scroll"
            | "scrollCancel"
            | "beforeScrollStart"
            | "scrollEnd"
            | "touchEnd"
            | "flick"
            | "refresh"
            | "destroy"
            | "pullingDown"
            | "pullingUp",
        fn: (...args: any[]) => void,
    ): void;

    trigger(type: string): void;
}

export = BScroll;
