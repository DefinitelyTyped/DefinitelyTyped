// Type definitions for D3JS d3-brush module 1.0.1
// Project: https://github.com/d3/d3-brush/
// Definitions by: Alex Ford <https://github.com/gustavderdrache>, Boris Yankov <https://github.com/borisyankov>, Tom Wanzek <https://github.com/tomwanzek>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

import { Selection, TransitionLike } from 'd3-selection';

/**
 * Type alias for a BrushSelection. For a two-dimensional brush, it must be defined as [[x0, y0], [x1, y1]], 
 * where x0 is the minimum x-value, y0 is the minimum y-value, x1 is the maximum x-value, and y1 is the maximum y-value. 
 * For an x-brush, it must be defined as [x0, x1]; for a y-brush, it must be defined as [y0, y1].
 */
export type BrushSelection = [[number, number], [number, number]] | [number, number];


export interface BrushBehavior<Datum> {
    (group: Selection<SVGGElement, Datum, any, any>, ...args: any[]): void;
    move(group: Selection<SVGGElement, Datum, any, any>, selection: BrushSelection): BrushBehavior<Datum>;
    move(group: Selection<SVGGElement, Datum, any, any>, selection: (this: SVGGElement, d?: Datum, i?: number, group?: Array<SVGGElement> | NodeListOf<SVGGElement>) => BrushSelection): BrushBehavior<Datum>;
    move(group: TransitionLike<SVGGElement, Datum>, selection: BrushSelection): BrushBehavior<Datum>;
    move(group: TransitionLike<SVGGElement, Datum>, selection: (this: SVGGElement, d?: Datum, i?: number, group?: Array<SVGGElement> | NodeListOf<SVGGElement>) => BrushSelection): BrushBehavior<Datum>;
    extent(): (this: SVGGElement, d: Datum, i: number, group: Array<SVGGElement> | NodeListOf<SVGGElement>) => [[number, number], [number, number]];
    extent(extent: [[number, number], [number, number]]): BrushBehavior<Datum>;
    extent(extent: (this: SVGGElement, d: Datum, i: number, group: Array<SVGGElement> | NodeListOf<SVGGElement>) => [[number, number], [number, number]]): BrushBehavior<Datum>;
    filter(): (this: SVGGElement, datum: Datum, index: number, group: Array<SVGGElement>) => boolean;
    filter(filterFn: (this: SVGGElement, datum: Datum, index: number, group: Array<SVGGElement>) => boolean): BrushBehavior<Datum>;
    handleSize(): number;
    handleSize(size: number): BrushBehavior<Datum>;
    on(typenames: string): (this: SVGGElement, datum: Datum, index: number, group: Array<SVGGElement>) => void;
    on(typenames: string, callback: null): BrushBehavior<Datum>;
    on(typenames: string, callback: (this: SVGGElement, datum: Datum, index: number, group: Array<SVGGElement>) => void): BrushBehavior<Datum>;

}

export function brush<Datum>(): BrushBehavior<Datum>;
export function brushX<Datum>(): BrushBehavior<Datum>;
export function brushY<Datum>(): BrushBehavior<Datum>;

export function brushSelection(node: SVGGElement): BrushSelection;

export interface D3BrushEvent<Datum> {
    target: BrushBehavior<Datum>;
    type: 'start' | 'brush' | 'end' | string; // Leave failsafe string type for cases like 'brush.foo'
    selection: BrushSelection;
    sourceEvent: any;
}