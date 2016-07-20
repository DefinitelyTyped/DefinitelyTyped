// Type definitions for d3JS d3-zoom module 1.0.2
// Project: https://github.com/d3/d3-zoom/
// Definitions by: Alex Ford <https://github.com/gustavderdrache>, Boris Yankov <https://github.com/borisyankov>, Tom Wanzek <https://github.com/tomwanzek>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

import { Selection, TransitionLike } from 'd3-selection';


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


export interface ZoomBehavior<ZoomRefElement extends ZoomedElementBaseType, ZoomRefDatum> extends Function {
    (selection: Selection<ZoomRefElement, ZoomRefDatum, any, any>, ...args: any[]): void;
    transform<GElement extends ZoomedElementBaseType, Datum>(selection: Selection<GElement, Datum, any, any>, transform: ZoomTransform): void;
    transform<GElement extends ZoomedElementBaseType, Datum>(selection: Selection<GElement, Datum, any, any>, transform: (this: GElement, d?: Datum, i?: number, group?: Array<GElement> | NodeListOf<GElement>) => ZoomTransform): void;
    transform<GElement extends ZoomedElementBaseType, Datum>(transition: TransitionLike<GElement, Datum>, transform: ZoomTransform): void;
    transform<GElement extends ZoomedElementBaseType, Datum>(transition: TransitionLike<GElement, Datum>, transform: (this: GElement, d?: Datum, i?: number, group?: Array<GElement> | NodeListOf<GElement>) => ZoomTransform): void;

    translateBy<GElement extends ZoomedElementBaseType, Datum>(selection: Selection<GElement, Datum, any, any>, x: number, y: number): void;
    translateBy<GElement extends ZoomedElementBaseType, Datum>(selection: Selection<GElement, Datum, any, any>,
        x: (this: GElement, d?: Datum, i?: number, group?: Array<GElement> | NodeListOf<GElement>) => number,
        y: number): void;
    translateBy<GElement extends ZoomedElementBaseType, Datum>(selection: Selection<GElement, Datum, any, any>,
        x: number,
        y: (this: GElement, d?: Datum, i?: number, group?: Array<GElement> | NodeListOf<GElement>) => number): void;
    translateBy<GElement extends ZoomedElementBaseType, Datum>(selection: Selection<GElement, Datum, any, any>,
        x: (this: GElement, d?: Datum, i?: number, group?: Array<GElement> | NodeListOf<GElement>) => number,
        y: (this: GElement, d?: Datum, i?: number, group?: Array<GElement>) => number): void;
    translateBy<GElement extends ZoomedElementBaseType, Datum>(transition: TransitionLike<GElement, Datum>, x: number, y: number): void;
    translateBy<GElement extends ZoomedElementBaseType, Datum>(transition: TransitionLike<GElement, Datum>,
        x: (this: GElement, d?: Datum, i?: number, group?: Array<GElement> | NodeListOf<GElement>) => number,
        y: number): void;
    translateBy<GElement extends ZoomedElementBaseType, Datum>(transition: TransitionLike<GElement, Datum>,
        x: number,
        y: (this: GElement, d?: Datum, i?: number, group?: Array<GElement> | NodeListOf<GElement>) => number): void;
    translateBy<GElement extends ZoomedElementBaseType, Datum>(transition: TransitionLike<GElement, Datum>,
        x: (this: GElement, d?: Datum, i?: number, group?: Array<GElement> | NodeListOf<GElement>) => number,
        y: (this: GElement, d?: Datum, i?: number, group?: Array<GElement> | NodeListOf<GElement>) => number): void;

    scaleBy<GElement extends ZoomedElementBaseType, Datum>(selection: Selection<GElement, Datum, any, any>, k: number): void;
    scaleBy<GElement extends ZoomedElementBaseType, Datum>(selection: Selection<GElement, Datum, any, any>, k: (this: GElement, d?: Datum, i?: number, group?: Array<GElement>) => number): void;
    scaleBy<GElement extends ZoomedElementBaseType, Datum>(transition: TransitionLike<GElement, Datum>, k: number): void;
    scaleBy<GElement extends ZoomedElementBaseType, Datum>(transition: TransitionLike<GElement, Datum>, k: (this: GElement, d?: Datum, i?: number, group?: Array<GElement>) => number): void;

    scaleTo<GElement extends ZoomedElementBaseType, Datum>(selection: Selection<GElement, Datum, any, any>, k: number): void;
    scaleTo<GElement extends ZoomedElementBaseType, Datum>(selection: Selection<GElement, Datum, any, any>, k: (this: GElement, d?: Datum, i?: number, group?: Array<GElement>) => number): void;
    scaleTo<GElement extends ZoomedElementBaseType, Datum>(transition: TransitionLike<GElement, Datum>, k: number): void;
    scaleTo<GElement extends ZoomedElementBaseType, Datum>(transition: TransitionLike<GElement, Datum>, k: (this: GElement, d?: Datum, i?: number, group?: Array<GElement>) => number): void;

    filter(): (this: ZoomRefElement, datum: ZoomRefDatum, index: number, group: Array<ZoomRefElement>) => boolean;
    filter(filterFn: (this: ZoomRefElement, d?: ZoomRefDatum, index?: number, group?: Array<ZoomRefElement>) => boolean): ZoomBehavior<ZoomRefElement, ZoomRefDatum>;

    extent(): (this: ZoomRefElement, d: ZoomRefDatum, index: number, group: Array<ZoomRefElement>) => [[number, number], [number, number]];
    extent(extent: [[number, number], [number, number]]): ZoomBehavior<ZoomRefElement, ZoomRefDatum>;
    extent(extent: (this: ZoomRefElement, d?: ZoomRefDatum, index?: number, group?: Array<ZoomRefElement>) => [[number, number], [number, number]]): ZoomBehavior<ZoomRefElement, ZoomRefDatum>;

    scaleExtent(): [number, number];
    scaleExtent(extent: [number, number]): ZoomBehavior<ZoomRefElement, ZoomRefDatum>;

    translateExtent(): [[number, number], [number, number]];
    translateExtent(extent: [[number, number], [number, number]]): ZoomBehavior<ZoomRefElement, ZoomRefDatum>;

    duration(): number;
    duration(duration: number): ZoomBehavior<ZoomRefElement, ZoomRefDatum>;

    on(typenames: string): (this: ZoomRefElement, datum: ZoomRefDatum, index: number, group: Array<ZoomRefElement> | NodeListOf<ZoomRefElement>) => void;
    on(typenames: string, callback: null): ZoomBehavior<ZoomRefElement, ZoomRefDatum>;
    on(typenames: string, callback: (this: ZoomRefElement, datum: ZoomRefDatum, index: number, group: Array<ZoomRefElement> | NodeListOf<ZoomRefElement>) => void): ZoomBehavior<ZoomRefElement, ZoomRefDatum>;
}


export function zoom<ZoomRefElement extends ZoomedElementBaseType, ZoomRefDatum>(): ZoomBehavior<ZoomRefElement, ZoomRefDatum>;

// --------------------------------------------------------------------------
// Zoom Event
// --------------------------------------------------------------------------


export interface D3ZoomEvent<ZoomRefElement extends ZoomedElementBaseType, ZoomRefDatum> {
    target: ZoomBehavior<ZoomRefElement, ZoomRefDatum>;
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