// Type definitions for D3JS d3-drag module 1.0.0
// Project: https://github.com/d3/d3-drag/
// Definitions by: Tom Wanzek <https://github.com/tomwanzek>, Alex Ford <https://github.com/gustavderdrache>, Boris Yankov <https://github.com/borisyankov>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

import { ArrayLike, Selection, ValueFn } from 'd3-selection';


// --------------------------------------------------------------------------
// Shared Type Definitions and Interfaces
// --------------------------------------------------------------------------


/**
 * DraggedElementBaseType serves as an alias for the 'minimal' data type which can be selected
 * without 'd3-drag' (and related code in 'd3-selection') trying to use properties internally which would otherwise not
 * be supported.
 */
export type DraggedElementBaseType = Element;


/**
 * Container element type usable for mouse/touch functions
 */
export type DragContainerElement = HTMLElement | SVGSVGElement | SVGGElement; // HTMLElement includes HTMLCanvasElement

/**
 * The subject datum should at a minimum expose x and y properties, so that the relative position
 * of the subject and the pointer can be preserved during the drag gesture.
 */
export interface SubjectPosition {
    x: number;
    y: number;
}

export interface DragBehavior<GElement extends DraggedElementBaseType, Datum, Subject> extends Function {
    (selection: Selection<GElement, Datum, any, any>, ...args: any[]): void;
    container(): ValueFn<GElement, Datum, DragContainerElement>;
    container(accessor: ValueFn<GElement, Datum, DragContainerElement>): this;
    container(container: DragContainerElement): this;
    filter(): ValueFn<GElement, Datum, boolean>;
    filter(filterFn: ValueFn<GElement, Datum, boolean>): this;
    subject(): ValueFn<GElement, Datum, Subject>;
    subject(accessor: ValueFn<GElement, Datum, Subject>): this;
    on(typenames: string): ValueFn<GElement, Datum, void>;
    on(typenames: string, callback: null): this;
    on(typenames: string, callback: ValueFn<GElement, Datum, void>): this;
}

export function drag<GElement extends DraggedElementBaseType, Datum>(): DragBehavior<GElement, Datum, Datum | SubjectPosition>;
export function drag<GElement extends DraggedElementBaseType, Datum, Subject>(): DragBehavior<GElement, Datum, Subject>;


export interface D3DragEvent<GElement extends DraggedElementBaseType, Datum, Subject> {
    target: DragBehavior<GElement, Datum, Subject>;
    type: 'start' | 'drag' | 'end' | string;  // Leave failsafe string type for cases like 'drag.foo'
    subject: Subject;
    x: number;
    y: number;
    dx: number;
    dy: number;
    identifier: 'mouse' | number;
    active: number;
    sourceEvent: any;
    on(typenames: string): ValueFn<GElement, Datum, void>;
    on(typenames: string, callback: null): this;
    on(typenames: string, callback: ValueFn<GElement, Datum, void>): this;
}

export function dragDisable(window: Window): void;

export function dragEnable(window: Window, noClick?: boolean): void;
