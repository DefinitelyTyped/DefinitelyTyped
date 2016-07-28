// Type definitions for d3JS d3-zoom module 1.0.2
// Project: https://github.com/d3/d3-zoom/
// Definitions by: Alex Ford <https://github.com/gustavderdrache>, Boris Yankov <https://github.com/borisyankov>, Tom Wanzek <https://github.com/tomwanzek>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

import { ArrayLike, Selection, TransitionLike } from 'd3-selection';


// --------------------------------------------------------------------------
// Shared Type Definitions and Interfaces
// --------------------------------------------------------------------------

/**
 * ZoomedElementBaseType serves as an alias for the 'minimal' data type which can be selected
 * without 'd3-zoom' (and related code in 'd3-selection') trying to use properties internally which would otherwise not
 * be supported.
 */
type ZoomedElementBaseType = Element;

/**
 * Minimal interface for a continuous scale.
 * This interface is used as a minimum contract for scale objects
 * that  can be passed into zoomTransform methods rescaleX and rescaleY
 */
export interface ZoomScale {
    domain(): Array<number>;
    domain(domain: Array<number>): ZoomScale;
    range(): Array<number>;
    range(range: Array<number>): ZoomScale;
    copy(): ZoomScale;
    invert(value: number): number;
}

// --------------------------------------------------------------------------
// Zoom Behavior
// --------------------------------------------------------------------------


export interface ZoomBehavior<ZoomRefElement extends ZoomedElementBaseType, Datum> extends Function {
    (selection: Selection<ZoomRefElement, Datum, any, any>, ...args: any[]): void;
    transform(selection: Selection<ZoomRefElement, Datum, any, any>, transform: ZoomTransform): void;
    transform(selection: Selection<ZoomRefElement, Datum, any, any>, transform: (this: ZoomRefElement, d?: Datum, i?: number, group?: Array<ZoomRefElement> | ArrayLike<ZoomRefElement>) => ZoomTransform): void;
    transform(transition: TransitionLike<ZoomRefElement, Datum>, transform: ZoomTransform): void;
    transform(transition: TransitionLike<ZoomRefElement, Datum>, transform: (this: ZoomRefElement, d?: Datum, i?: number, group?: Array<ZoomRefElement> | ArrayLike<ZoomRefElement>) => ZoomTransform): void;

    translateBy(selection: Selection<ZoomRefElement, Datum, any, any>, x: number, y: number): void;
    translateBy(selection: Selection<ZoomRefElement, Datum, any, any>,
        x: (this: ZoomRefElement, d?: Datum, i?: number, group?: Array<ZoomRefElement> | ArrayLike<ZoomRefElement>) => number,
        y: number): void;
    translateBy(selection: Selection<ZoomRefElement, Datum, any, any>,
        x: number,
        y: (this: ZoomRefElement, d?: Datum, i?: number, group?: Array<ZoomRefElement> | ArrayLike<ZoomRefElement>) => number): void;
    translateBy(selection: Selection<ZoomRefElement, Datum, any, any>,
        x: (this: ZoomRefElement, d?: Datum, i?: number, group?: Array<ZoomRefElement> | ArrayLike<ZoomRefElement>) => number,
        y: (this: ZoomRefElement, d?: Datum, i?: number, group?: Array<ZoomRefElement>) => number): void;
    translateBy(transition: TransitionLike<ZoomRefElement, Datum>, x: number, y: number): void;
    translateBy(transition: TransitionLike<ZoomRefElement, Datum>,
        x: (this: ZoomRefElement, d?: Datum, i?: number, group?: Array<ZoomRefElement> | ArrayLike<ZoomRefElement>) => number,
        y: number): void;
    translateBy(transition: TransitionLike<ZoomRefElement, Datum>,
        x: number,
        y: (this: ZoomRefElement, d?: Datum, i?: number, group?: Array<ZoomRefElement> | ArrayLike<ZoomRefElement>) => number): void;
    translateBy(transition: TransitionLike<ZoomRefElement, Datum>,
        x: (this: ZoomRefElement, d?: Datum, i?: number, group?: Array<ZoomRefElement> | ArrayLike<ZoomRefElement>) => number,
        y: (this: ZoomRefElement, d?: Datum, i?: number, group?: Array<ZoomRefElement> | ArrayLike<ZoomRefElement>) => number): void;

    scaleBy(selection: Selection<ZoomRefElement, Datum, any, any>, k: number): void;
    scaleBy(selection: Selection<ZoomRefElement, Datum, any, any>, k: (this: ZoomRefElement, d?: Datum, i?: number, group?: Array<ZoomRefElement> | ArrayLike<ZoomRefElement>) => number): void;
    scaleBy(transition: TransitionLike<ZoomRefElement, Datum>, k: number): void;
    scaleBy(transition: TransitionLike<ZoomRefElement, Datum>, k: (this: ZoomRefElement, d?: Datum, i?: number, group?: Array<ZoomRefElement> | ArrayLike<ZoomRefElement>) => number): void;

    scaleTo(selection: Selection<ZoomRefElement, Datum, any, any>, k: number): void;
    scaleTo(selection: Selection<ZoomRefElement, Datum, any, any>, k: (this: ZoomRefElement, d?: Datum, i?: number, group?: Array<ZoomRefElement> | ArrayLike<ZoomRefElement>) => number): void;
    scaleTo(transition: TransitionLike<ZoomRefElement, Datum>, k: number): void;
    scaleTo(transition: TransitionLike<ZoomRefElement, Datum>, k: (this: ZoomRefElement, d?: Datum, i?: number, group?: Array<ZoomRefElement> | ArrayLike<ZoomRefElement>) => number): void;

    filter(): (this: ZoomRefElement, datum: Datum, index: number, group: Array<ZoomRefElement> | ArrayLike<ZoomRefElement>) => boolean;
    filter(filterFn: (this: ZoomRefElement, d?: Datum, index?: number, group?: Array<ZoomRefElement> | ArrayLike<ZoomRefElement>) => boolean): ZoomBehavior<ZoomRefElement, Datum>;

    extent(): (this: ZoomRefElement, d: Datum, index: number, group: Array<ZoomRefElement> | ArrayLike<ZoomRefElement>) => [[number, number], [number, number]];
    extent(extent: [[number, number], [number, number]]): ZoomBehavior<ZoomRefElement, Datum>;
    extent(extent: (this: ZoomRefElement, d?: Datum, index?: number, group?: Array<ZoomRefElement> | ArrayLike<ZoomRefElement>) => [[number, number], [number, number]]): ZoomBehavior<ZoomRefElement, Datum>;

    scaleExtent(): [number, number];
    scaleExtent(extent: [number, number]): ZoomBehavior<ZoomRefElement, Datum>;

    translateExtent(): [[number, number], [number, number]];
    translateExtent(extent: [[number, number], [number, number]]): ZoomBehavior<ZoomRefElement, Datum>;

    duration(): number;
    duration(duration: number): ZoomBehavior<ZoomRefElement, Datum>;

    on(typenames: string): (this: ZoomRefElement, datum: Datum, index: number, group: Array<ZoomRefElement> | ArrayLike<ZoomRefElement>) => void;
    on(typenames: string, callback: null): ZoomBehavior<ZoomRefElement, Datum>;
    on(typenames: string, callback: (this: ZoomRefElement, datum: Datum, index: number, group: Array<ZoomRefElement> | ArrayLike<ZoomRefElement>) => void): ZoomBehavior<ZoomRefElement, Datum>;
}


export function zoom<ZoomRefElement extends ZoomedElementBaseType, Datum>(): ZoomBehavior<ZoomRefElement, Datum>;

// --------------------------------------------------------------------------
// Zoom Event
// --------------------------------------------------------------------------


export interface D3ZoomEvent<ZoomRefElement extends ZoomedElementBaseType, Datum> {
    target: ZoomBehavior<ZoomRefElement, Datum>;
    type: 'start' | 'zoom' | 'end' | string; // Leave failsafe string type for cases like 'zoom.foo'
    transform: ZoomTransform;
    sourceEvent: any;
}

// --------------------------------------------------------------------------
// Zoom Transforms
// --------------------------------------------------------------------------


export interface ZoomTransform {
    readonly x: number;
    readonly y: number;
    readonly k: number;
    apply(point: [number, number]): [number, number];
    applyX(x: number): number;
    applyY(y: number): number;
    invert(point: [number, number]): [number, number];
    invertX(x: number): number;
    invertY(y: number): number;
    rescaleX<S extends ZoomScale>(xScale: S): S;
    rescaleY<S extends ZoomScale>(yScale: S): S;
    scale(k: number): ZoomTransform;
    toString(): string;
    translate(x: number, y: number): ZoomTransform;
}

export function zoomTransform(node: ZoomedElementBaseType): ZoomTransform;


export const zoomIdentity: ZoomTransform;
