// Type definitions for iScroll 5.1.3 (iscroll-lite)
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
    freeScroll?: boolean;
    momentum?: boolean;
    preventDefault?: boolean;
    preventDefaultException?: any;
    resizePolling?: number;
    scrollX?: boolean;
    scrollY?: boolean;
    startX?: number;
    startY?: number;
    tap?: any; // boolean | string
    useTransform?: boolean;
    useTransition?: boolean;
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

declare var IScroll: IScrollStatic;
