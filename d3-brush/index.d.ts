// Type definitions for D3JS d3-brush module 1.0.1
// Project: https://github.com/d3/d3-brush/
// Definitions by: Tom Wanzek <https://github.com/tomwanzek>, Alex Ford <https://github.com/gustavderdrache>, Boris Yankov <https://github.com/borisyankov>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

import { ArrayLike, Selection, TransitionLike, ValueFn } from 'd3-selection';

/**
 * Type alias for a BrushSelection. For a two-dimensional brush, it must be defined as [[x0, y0], [x1, y1]],
 * where x0 is the minimum x-value, y0 is the minimum y-value, x1 is the maximum x-value, and y1 is the maximum y-value.
 * For an x-brush, it must be defined as [x0, x1]; for a y-brush, it must be defined as [y0, y1].
 */
export type BrushSelection = [[number, number], [number, number]] | [number, number];


export interface BrushBehavior<Datum> {
    (group: Selection<SVGGElement, Datum, any, any>, ...args: any[]): void;
    move(group: Selection<SVGGElement, Datum, any, any>, selection: BrushSelection): void;
    move(group: Selection<SVGGElement, Datum, any, any>, selection: ValueFn<SVGGElement, Datum, BrushSelection>): void;
    move(group: TransitionLike<SVGGElement, Datum>, selection: BrushSelection): void;
    move(group: TransitionLike<SVGGElement, Datum>, selection: ValueFn<SVGGElement, Datum, BrushSelection>): void;
    extent(): ValueFn<SVGGElement, Datum, [[number, number], [number, number]]>;
    extent(extent: [[number, number], [number, number]]): this;
    extent(extent: ValueFn<SVGGElement, Datum, [[number, number], [number, number]]>): this;
    filter(): ValueFn<SVGGElement, Datum, boolean>;
    filter(filterFn: ValueFn<SVGGElement, Datum, boolean>): this;
    handleSize(): number;
    handleSize(size: number): this;
    on(typenames: string): ValueFn<SVGGElement, Datum, void>;
    on(typenames: string, callback: null): this;
    on(typenames: string, callback: ValueFn<SVGGElement, Datum, void>): this;

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
