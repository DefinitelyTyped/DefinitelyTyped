// Type definitions for better-scroll 1.12
// Project: https://github.com/ustbhuangyi/better-scroll
// Definitions by: cloudstone <https://github.com/stoneChen>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

// TypeScript Version: 2.2
export interface WheelOption {
    selectedIndex: number;
    rotate: number;
    adjustTime: number;
    wheelWrapperClass: string;
    wheelItemClass: string;
}

export interface PageOption {
    x: number;
    y: number;
    pageX: number;
    pageY: number;
}

export interface SlideOption {
    loop: boolean;
    el: Element;
    threshold: number;
    stepX: number;
    stepY: number;
    speed: number;
    listenFlick: boolean;
}

export interface ScrollBarOption {
    fade: boolean;
}

export interface PullDownOption {
    threshold: number;
    stop: number;
}

export interface PullUpOption {
    threshold: number;
}

export interface BounceObjectOption {
    top?: boolean;
    bottom?: boolean;
    left?: boolean;
    right?: boolean;
}

export interface EaseOption {
    swipe?: {
        style: string;
        fn: (t: number) => number;
    };
    swipeBounce?: {
        style: string;
        fn: (t: number) => number;
    };
    bounce?: {
        style: string;
        fn: (t: number) => number;
    };
}

export interface BsOption {
    startX: number;
    startY: number;
    scrollX: boolean;
    scrollY: boolean;
    freeScroll: boolean;
    directionLockThreshold: number;
    eventPassthrough: string | boolean;
    click: boolean;
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
}

export interface Position {
    x: number;
    y: number;
}

export default class BScroll {
    constructor(element: Element | string, options?: Partial<BsOption>);

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
    options: BsOption;

    refresh(): void;

    enable(): void;

    disable(): void;

    scrollBy(x: number, y: number, time?: number, easing?: object): void;

    scrollTo(x: number, y: number, time?: number, easing?: object): void;

    scrollToElement(el: HTMLElement | string, time?: number, offsetX?: number | boolean, offsetY?: number | boolean, easing?: object): void;

    stop(): void;

    destroy(): void;

    goToPage(x: number, y: number, time?: number, easing?: object): void;

    next(time?: number, easing?: object): void;

    prev(time?: number, easing?: object): void;

    getCurrentPage(): PageOption;

    wheelTo(index: number): void;

    getSelectedIndex(): number;

    finishPullDown(): void;

    finishPullUp(): void;

    on(
        type:
            'beforeScrollStart' |
            'scrollStart' |
            'scrollCancel' |
            'beforeScrollStart' |
            'flick' |
            'refresh' |
            'destroy' |
            'pullingDown' |
            'pullingUp',
        fn: () => any
    ): void;

    on(
        type:
            'scroll' |
            'scrollEnd' |
            'touchEnd',
        fn: (pos: Position) => any
    ): void;

    off(
        type:
            'beforeScrollStart' |
            'scrollStart' |
            'scroll' |
            'scrollCancel' |
            'beforeScrollStart' |
            'scrollEnd' |
            'touchEnd' |
            'flick' |
            'refresh' |
            'destroy' |
            'pullingDown' |
            'pullingUp',
        fn: (...args: any[]) => void
    ): void;

    trigger(type: string): void;
}
