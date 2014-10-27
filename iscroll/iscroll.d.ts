// Type definitions for iScroll 5.1.3
// Project: http://iscrolljs.com/
// Definitions by: Igor Yegorov <https://github.com/iyegoroff/>
// Definitions: https://github.com/borisyankov/DefinitelyTyped

interface IScrollStatic {
    new(el: HTMLElement, options?: IScrollOptions): IScrollInstance;
    new(el: string, options?: IScrollOptions): IScrollInstance;

    utils: IScrollUtils;
}

interface IScrollInstance {
    destroy(): void;
    disable(): void;
    enable(): void;
    getComputedPosition(): { x: number; y: number };
    handleEvent(e: Event): void;
    off(type: string, fn: Function): void;
    on(type: string, fn: Function): void;
    refresh(): void;
    resetPosition(time?: number): void;
    next(time?: number, easing?: IScrollEasing): void;
    prev(time?: number, easing?: IScrollEasing): void;
    goToPage(x: number, y: number, time?: number, easing?: IScrollEasing): void;
    scrollBy(x: number, y: number, time?: number, easing?: IScrollEasing): void;
    scrollTo(x: number, y: number, time?: number, easing?: IScrollEasing): void;
    scrollToElement(el: string, time?: number, offsetX?: number, offsetY?: number, easing?: IScrollEasing): void;
    scrollToElement(el: HTMLElement, time?: number, offsetX?: number, offsetY?: number, easing?: IScrollEasing): void;
    scrollToElement(el: string, time?: number, offsetX?: boolean, offsetY?: number, easing?: IScrollEasing): void;
    scrollToElement(el: HTMLElement, time?: number, offsetX?: boolean, offsetY?: number, easing?: IScrollEasing): void;
    scrollToElement(el: string, time?: number, offsetX?: number, offsetY?: boolean, easing?: IScrollEasing): void;
    scrollToElement(el: HTMLElement, time?: number, offsetX?: number, offsetY?: boolean, easing?: IScrollEasing): void;
    scrollToElement(el: string, time?: number, offsetX?: boolean, offsetY?: boolean, easing?: IScrollEasing): void;
    scrollToElement(el: HTMLElement, time?: number, offsetX?: boolean, offsetY?: boolean, easing?: IScrollEasing): void;

    currentPage: IScrollSnapPoint;
    directionX: number;
    directionY: number;
    enabled: boolean;
    endTime: number;
    hasHorizontalScroll: boolean;
    hasVerticalScroll: boolean;
    isInTransition: boolean;
    maxScrollX: number;
    maxScrollY: number;
    options: IScrollOptions;
    scroller: HTMLElement;
    scrollerWidth: number;
    scrollerHeight: number;
    scrollerStyle: CSSStyleDeclaration;
    translateZ: string;
    version: string;
    wrapper: HTMLElement;
    wrapperWidth: number;
    wrapperHeight: number;
    wrapperOffset: { left: number; top: number };
    x: number;
    y: number;
}

interface IScrollOptions {
    HWCompositing?: boolean;
    bindToWrapper?: boolean;
    bounce?: boolean;
    bounceEasing?: any; // string | IScrollEasing
    bounceTime?: number;
    click?: boolean;
    deceleration?: number;
    directionLockThreshold?: number;
    disableMouse?: boolean;
    disablePointer?: boolean;
    disableTouch?: boolean;
    eventPassthrough?: any; // boolean | string
    fadeScrollbars?: boolean;
    freeScroll?: boolean;
    indicators?: IScrollIndicatorOptions;
    interactiveScrollbars?: boolean;
    invertWheelDirection?: boolean;
    keyBindings?: any; // boolean | Object
    momentum?: boolean;
    mouseWheel?: boolean;
    mouseWheelSpeed?: number;
    preventDefault?: boolean;
    preventDefaultException?: any;
    resizePolling?: number;
    resizeScrollbars?: boolean;
    scrollbars?: any; // boolean | string
    scrollX?: boolean;
    scrollY?: boolean;
    shrinkScrollbars?: any; // boolean | string
    snap?: any; // boolean | string
    snapThreshold?: number;
    startX?: number;
    startY?: number;
    tap?: any; // boolean | string
    useTransform?: boolean;
    useTransition?: boolean;
}

interface IScrollIndicatorOptions {
    el: any; // HTMLElement | string
    fade?: boolean;
    ignoreBoundaries?: boolean;
    interactive?: boolean;
    listenX?: boolean;
    listenY?: boolean;
    resize?: boolean;
    shrink?: boolean;
    speedRatioX?: number;
    speedRatioY?: number;
}

interface IScrollUtils {
    ease: {
        back: IScrollEasing;
        bounce: IScrollEasing;
        circular: IScrollEasing;
        elastic: IScrollEasing;
        quadratic: IScrollEasing;
    };
}

interface IScrollEasing {
    fn(k: number): number;

    style: string;
}

interface IScrollSnapPoint {
    x: number;
    y: number;
    pageX: number;
    pageY: number;
}

declare var IScroll: IScrollStatic;
