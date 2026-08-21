interface IFlipsnap {
    /**
     * Return true or false. true is returned when there is previous element.
     */
    hasPrev(): boolean;

    /**
     * Return true or false. true is returned when there is next element.
     */
    hasNext(): boolean;

    /**
     * Move to previous item.
     */
    toPrev(transitionDuration?: number): void;

    /**
     * Move to next item.
     */
    toNext(transitionDuration?: number): void;

    /**
     * Move to item of number.
     */
    moveToPoint(point: number, transitionDuration?: number): void;

    /**
     * Recalculate values
     */
    refresh(): void;

    element: HTMLElement;
}

interface FlipsnapStatic {
    /**
     * @param element The element
     */
    (element: HTMLElement, opts?: FlipsnapOptions): IFlipsnap;

    /**
     * @param selector The parameter must be CSS Selector. When set string, to get first element of result. Not all element.
     */
    (selector: string, opts?: FlipsnapOptions): IFlipsnap;
}

interface FlipsnapOptions {
    /**
     * Stop point count. default is auto calculate from element item count.
     */
    maxPoint?: number | undefined;
    /**
     * Move distance. default is auto calculate from element width and maxPont.
     */
    distance?: number | undefined;
    /**
     * Transition duration (millisecond). default is 350.
     */
    transitionDuration?: number | undefined;
    /**
     * When set true, touch event is disabled. Only handling button or etc interface. default is false.
     */
    disableTouch?: boolean | undefined;
    /**
     * When support 3D transform browser and this option set true, it is not used 3D transform and use 2D transform. You should set true, when it is a device which has a bug in 3D transform(old Android or BlackBerry etc). default is false.
     */
    disable3d?: boolean | undefined;
}

interface HTMLElement {
    addEventListener(type: "fstouchstart", listener: (ev: Event) => any, useCapture?: boolean): void;
    addEventListener(type: "fstouchmove", listener: (ev: FlipsnapTouchMoveEvent) => any, useCapture?: boolean): void;
    addEventListener(type: "fstouchend", listener: (ev: FlipsnapTouchEndEvent) => any, useCapture?: boolean): void;
}

interface FlipsnapTouchMoveEvent extends Event {
    delta: number;
    direction: number;
}

interface FlipsnapTouchEndEvent extends Event {
    moved: boolean;
    cancelled: boolean;
    newPoint: number;
    originalPoint: number;
}

declare var Flipsnap: FlipsnapStatic;
