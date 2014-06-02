// Type definitions for flipsnap.js
// Project: http://pxgrid.github.io/js-flipsnap/
// Definitions by: kubosho_ & gsino <https://github.com/kubosho><https://github.com/gsino>
// Definitions: https://github.com/borisyankov/DefinitelyTyped

interface Flipsnap {
    hasPrev(): boolean;
    hasNext(): boolean;
    toPrev(transitionDuration?: number): void;
    toNext(transitionDuration?: number): void;
    moveToPoint(point: number, transitionDuration?: number): void;
    element: HTMLElement;
}

interface FlipsnapStatic {
    (element: HTMLElement, opts?: FlipsnapOptions): Flipsnap;
    (element: string, opts?: FlipsnapOptions): Flipsnap;
}

interface FlipsnapOptions {
    maxPoint?: number;
    distance?: number;
    transitionDuration?: number;
    disableTouch?: boolean;
    disable3d?: boolean;
}

interface HTMLElement {
    addEventListener(type: "fstouchend", listener: (ev: FlipsnapEvent) => any, useCapture?: boolean): void;
}

interface FlipsnapEvent extends Event {
    newPoint: number;
}

declare var Flipsnap: FlipsnapStatic;