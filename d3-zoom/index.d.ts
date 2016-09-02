// Type definitions for d3JS d3-zoom module 1.0.2
// Project: https://github.com/d3/d3-zoom/
// Definitions by: Tom Wanzek <https://github.com/tomwanzek>, Alex Ford <https://github.com/gustavderdrache>, Boris Yankov <https://github.com/borisyankov>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

import { ArrayLike, Selection, TransitionLike, ValueFn } from 'd3-selection';


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
    domain(domain: Array<number>): this;
    range(): Array<number>;
    range(range: Array<number>): this;
    copy(): ZoomScale;
    invert(value: number): number;
}

// --------------------------------------------------------------------------
// Zoom Behavior
// --------------------------------------------------------------------------


export interface ZoomBehavior<ZoomRefElement extends ZoomedElementBaseType, Datum> extends Function {
    (selection: Selection<ZoomRefElement, Datum, any, any>, ...args: any[]): void;
    transform(selection: Selection<ZoomRefElement, Datum, any, any>, transform: ZoomTransform): void;
    transform(selection: Selection<ZoomRefElement, Datum, any, any>, transform: ValueFn<ZoomRefElement, Datum, ZoomTransform>): void;
    transform(transition: TransitionLike<ZoomRefElement, Datum>, transform: ZoomTransform): void;
    transform(transition: TransitionLike<ZoomRefElement, Datum>, transform: ValueFn<ZoomRefElement, Datum, ZoomTransform>): void;

    translateBy(selection: Selection<ZoomRefElement, Datum, any, any>, x: number, y: number): void;
    translateBy(selection: Selection<ZoomRefElement, Datum, any, any>, x: ValueFn<ZoomRefElement, Datum, number>, y: number): void;
    translateBy(selection: Selection<ZoomRefElement, Datum, any, any>, x: number, y: ValueFn<ZoomRefElement, Datum, number>): void;
    translateBy(selection: Selection<ZoomRefElement, Datum, any, any>, x: ValueFn<ZoomRefElement, Datum, number>, y: ValueFn<ZoomRefElement, Datum, number>): void;
    translateBy(transition: TransitionLike<ZoomRefElement, Datum>, x: number, y: number): void;
    translateBy(transition: TransitionLike<ZoomRefElement, Datum>, x: ValueFn<ZoomRefElement, Datum, number>, y: number): void;
    translateBy(transition: TransitionLike<ZoomRefElement, Datum>, x: number, y: ValueFn<ZoomRefElement, Datum, number>): void;
    translateBy(transition: TransitionLike<ZoomRefElement, Datum>, x: ValueFn<ZoomRefElement, Datum, number>, y: ValueFn<ZoomRefElement, Datum, number>): void;

    scaleBy(selection: Selection<ZoomRefElement, Datum, any, any>, k: number): void;
    scaleBy(selection: Selection<ZoomRefElement, Datum, any, any>, k: ValueFn<ZoomRefElement, Datum, number>): void;
    scaleBy(transition: TransitionLike<ZoomRefElement, Datum>, k: number): void;
    scaleBy(transition: TransitionLike<ZoomRefElement, Datum>, k: ValueFn<ZoomRefElement, Datum, number>): void;

    scaleTo(selection: Selection<ZoomRefElement, Datum, any, any>, k: number): void;
    scaleTo(selection: Selection<ZoomRefElement, Datum, any, any>, k: ValueFn<ZoomRefElement, Datum, number>): void;
    scaleTo(transition: TransitionLike<ZoomRefElement, Datum>, k: number): void;
    scaleTo(transition: TransitionLike<ZoomRefElement, Datum>, k: ValueFn<ZoomRefElement, Datum, number>): void;

    filter(): ValueFn<ZoomRefElement, Datum, boolean>;
    filter(filterFn: ValueFn<ZoomRefElement, Datum, boolean>): this;

    extent(): ValueFn<ZoomRefElement, Datum, [[number, number], [number, number]]>;
    extent(extent: [[number, number], [number, number]]): this;
    extent(extent: ValueFn<ZoomRefElement, Datum, [[number, number], [number, number]]>): this;

    scaleExtent(): [number, number];
    scaleExtent(extent: [number, number]): this;

    translateExtent(): [[number, number], [number, number]];
    translateExtent(extent: [[number, number], [number, number]]): this;

    duration(): number;
    duration(duration: number): this;

    on(typenames: string): ValueFn<ZoomRefElement, Datum, void>;
    on(typenames: string, callback: null): this;
    on(typenames: string, callback: ValueFn<ZoomRefElement, Datum, void>): this;
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
