// Type definitions for D3JS d3-drag module
// Project: https://github.com/d3/d3-drag/
// Definitions by: Alex Ford <https://github.com/gustavderdrache>, Boris Yankov <https://github.com/borisyankov>, Tom Wanzek <https://github.com/tomwanzek>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

import { Selection } from 'd3-selection';


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
    container(): (this: GElement, datum?: Datum, index?: number, group?: Array<GElement> | NodeListOf<GElement>) => DragContainerElement;
    container(accessor: (this: GElement, datum?: Datum, index?: number, group?: Array<GElement> | NodeListOf<GElement>) => DragContainerElement): DragBehavior<GElement, Datum, Subject>;
    container(container: DragContainerElement): DragBehavior<GElement, Datum, Subject>;
    filter(): (this: GElement, datum?: Datum, index?: number, group?: Array<GElement>| NodeListOf<GElement>) => boolean;
    filter(filterFn: (this: GElement, datum?: Datum, index?: number, group?: Array<GElement>| NodeListOf<GElement>) => boolean): DragBehavior<GElement, Datum, Subject>;
    subject(): (this: GElement, datum?: Datum, index?: number, group?: Array<GElement> | NodeListOf<GElement>) => Subject;
    subject(accessor: (this: GElement, datum?: Datum, index?: number, group?: Array<GElement> | NodeListOf<GElement>) => Subject): DragBehavior<GElement, Datum, Subject>;
    on(typenames: string): (this: GElement, datum?: Datum, index?: number, group?: Array<GElement> | NodeListOf<GElement>) => any;
    on(typenames: string, callback: null): DragBehavior<GElement, Datum, Subject>;
    on(typenames: string, callback: (this: GElement, datum?: Datum, index?: number, group?: Array<GElement> | NodeListOf<GElement>) => any): DragBehavior<GElement, Datum, Subject>;
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
    on(typenames: string): (this: GElement, datum?: Datum, index?: number, group?: Array<GElement> | NodeListOf<GElement>) => void;
    on(typenames: string, callback: null): D3DragEvent<GElement, Datum, Subject>;
    on(typenames: string, callback: (this: GElement, datum?: Datum, index?: number, group?: Array<GElement> | NodeListOf<GElement>) => void): D3DragEvent<GElement, Datum, Subject>;
}

export function dragDisable(window: Window): void;

export function dragEnable(window: Window, noClick?: boolean): void;
