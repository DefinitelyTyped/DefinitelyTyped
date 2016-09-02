// Type definitions for D3JS d3-transition module 1.0.0
// Project: https://github.com/d3/d3-transition/
// Definitions by: Tom Wanzek <https://github.com/tomwanzek>, Alex Ford <https://github.com/gustavderdrache>, Boris Yankov <https://github.com/borisyankov>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

import { ArrayLike, BaseType, Selection, ValueFn } from 'd3-selection';

/**
 * Extend interface 'Selection' by declaration merging with 'd3-selection'
 */
declare module 'd3-selection' {
    export interface Selection<GElement extends BaseType, Datum, PElement extends BaseType, PDatum> {
        interrupt(name?: string): Transition<GElement, Datum, PElement, PDatum>;
        transition(name?: string): Transition<GElement, Datum, PElement, PDatum>;
        transition(transition: Transition<GElement, Datum, PElement, PDatum>): Transition<GElement, Datum, PElement, PDatum>;
    }
}


export function active<GElement extends BaseType, Datum, PElement extends BaseType, PDatum>(node: GElement, name?: string): Transition<GElement, Datum, PElement, PDatum> | null;

export function interrupt(node: BaseType, name?: string): void;

export interface Transition<GElement extends BaseType, Datum, PElement extends BaseType, PDatum> {

    // Sub-selection -------------------------

    select<DescElement extends BaseType>(selector: string): Transition<DescElement, Datum, PElement, PDatum>;
    select<DescElement extends BaseType>(selector: ValueFn<GElement, Datum, DescElement>): Transition<DescElement, Datum, PElement, PDatum>;

    // NB: while the empty selections (null or undefined selector) are defined on the underlying object, they should not be exposed in the type definition API
    // as they are meaningless on transitions.)
    // selectAll(): Transition<undefined, undefined, GElement, Datum>; // _groups are set to empty array, first generic type is set to undefined by convention
    // selectAll(selector: null): Transition<undefined, undefined, GElement, Datum>; // _groups are set to empty array, first generic type is set to undefined by convention
    selectAll<DescElement extends BaseType, OldDatum>(selector: string): Transition<DescElement, OldDatum, GElement, Datum>;
    selectAll<DescElement extends BaseType, OldDatum>(selector: ValueFn<GElement, Datum, Array<DescElement> | ArrayLike<DescElement>>): Transition<DescElement, OldDatum, GElement, Datum>;

    selection(): Selection<GElement, Datum, PElement, PDatum>;
    transition(): Transition<GElement, Datum, PElement, PDatum>;

    // Modifying -------------------------------

    attr(name: string, value: null): this;
    attr(name: string, value: string | number | boolean): this;
    attr(name: string, value: ValueFn<GElement, Datum, string | number | boolean>): this;
    attrTween(name: string, tweenFn: ValueFn<GElement, Datum, (t: number) => (string | number | boolean)>): this;

    style(name: string, value: null): this;
    style(name: string, value: string | number | boolean, priority?: null | 'important'): this;
    style(name: string, value: ValueFn<GElement, Datum, string | number | boolean>, priority?: null | 'important'): this;
    styleTween(name: string, tweenFn: ValueFn<GElement, Datum, (t: number) => (string | number | boolean)>, priority?: null | 'important'): this;

    text(value: null): this;
    text(value: string | number | boolean): this;
    text(value: ValueFn<GElement, Datum, string | number | boolean>): this;

    tween(name: string): ValueFn<GElement, Datum, (t: number) => void>;
    tween(name: string, tweenFn: null): this;
    tween(name: string, tweenFn: ValueFn<GElement, Datum, (t: number) => void>): this;

    remove(): this;

    merge(other: Transition<GElement, Datum, PElement, PDatum>): Transition<GElement, Datum, PElement, PDatum>;

    filter(filter: string): this;
    filter(filter: ValueFn<GElement, Datum, boolean>): this;

    // Event Handling -------------------

    on(type: string): ValueFn<GElement, Datum, void>;
    on(type: string, listener: null): this;
    on(type: string, listener: ValueFn<GElement, Datum, void>): this;

    // Control Flow ----------------------

    each(valueFn: ValueFn<GElement, Datum, void>): this;

    call(func: (transition: Transition<GElement, Datum, PElement, PDatum>, ...args: any[]) => any, ...args: any[]): this;

    empty(): boolean;

    node(): GElement;
    nodes(): Array<GElement>;

    size(): number;

    // Transition Configuration ----------------------

    delay(): number;
    delay(milliseconds: number): this;

    duration(): number;
    duration(milliseconds: number): this;

    ease(): (normalizedTime: number) => number;
    ease(easingFn: (normalizedTime: number) => number): this;
}


export function transition(name: string): Transition<HTMLElement, any, null, undefined>;
export function transition<GElement extends BaseType, Datum, PElement extends BaseType, PDatum>(transition: Transition<GElement, Datum, PElement, PDatum>): Transition<GElement, Datum, PElement, PDatum>;
