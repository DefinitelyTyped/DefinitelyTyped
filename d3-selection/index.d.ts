// Type definitions for D3JS d3-selection module v1.0.2
// Project: https://github.com/d3/d3-selection/
// Definitions by: Tom Wanzek <https://github.com/tomwanzek>, Alex Ford <https://github.com/gustavderdrache>, Boris Yankov <https://github.com/borisyankov>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

// --------------------------------------------------------------------------
// Shared Type Definitions and Interfaces
// --------------------------------------------------------------------------

/**
 * BaseType serves as an alias for the 'minimal' data type which can be selected
 * without 'd3-selection' trying to use properties internally which would otherwise not
 * be supported.
 */
export type BaseType = Element | EnterElement | Window;
// export type BaseType = any; // Alternative, very permissive BaseType specification for edge cases

export interface ArrayLike<T> {
    length: number;
    item(index: number): T;
    [index: number]: T;
}


export interface EnterElement {
    ownerDocument: Document;
    namespaceURI: string;
    appendChild(newChild: Node): Node;
    insertBefore(newChild: Node, refChild: Node): Node;
    querySelector(selectors: string): Element;
    querySelectorAll(selectors: string): NodeListOf<Element>;
}

/**
 * Container element type usable for mouse/touch functions
 */
export type ContainerElement = HTMLElement | SVGSVGElement | SVGGElement;


/**
 * Type for optional parameters map, when dispatching custom events
 * on a selection
 */
export type CustomEventParameters = {
    /**
     * If true, the event is dispatched to ancestors in reverse tree order
     */
    bubbles: boolean;
    /**
     * If true, event.preventDefault is allowed
     */
    cancelable: boolean;
    /**
     * Any custom data associated with the event
     */
    detail: any;
}

/**
 * Callback type for selections and transitions
 */
export type ValueFn<Element, Datum, Result> = (this: Element, datum: Datum, index: number, groups: Array<Element> | ArrayLike<Element>) => Result;


/**
 * TransitionLike is a helper interface to represent a quasi-Transition, without specifying the full Transition  interface in this file.
 * For example, whereever d3-zoom allows a Transition to be passed in as an argument, it internally immediately invokes its `selection()`
 * method to retrieve the underlying Selection object before proceeding.
 * d3-brush uses a subset of Transition methods internally.
 * The use of this interface instead of the full imported Transition interface is [referred] to achieve
 * two things:
 * (1) the d3-transition module may not be required by a projects use case,
 * (2) it avoid avoids possible complications from 'module augmentation' from d3-transition to Selection.
 */
export interface TransitionLike<GElement extends BaseType, Datum> {
    selection(): Selection<GElement, Datum, any, any>;
    on(type: string, listener: null): TransitionLike<GElement, Datum>;
    on(type: string, listener: ValueFn<GElement, Datum, void>): TransitionLike<GElement, Datum>;
    tween(name: string, tweenFn: null): TransitionLike<GElement, Datum>;
    tween(name: string, tweenFn: ValueFn<GElement, Datum, ((t: number) => void)>): TransitionLike<GElement, Datum>;
}



// --------------------------------------------------------------------------
// All Selection related interfaces and function
// --------------------------------------------------------------------------

// NB: Note that, d3.select does not generate the same parent element, when targeting the same DOM element with string selector
// or node element
export function select<GElement extends BaseType, OldDatum>(selector: string): Selection<GElement, OldDatum, HTMLElement, any>;
export function select<GElement extends BaseType, OldDatum>(node: GElement): Selection<GElement, OldDatum, null, undefined>;

export function selectAll(): Selection<null, undefined, null, undefined>; // _groups are set to empty array, first generic type is set to null by convention
export function selectAll(selector: null): Selection<null, undefined, null, undefined>; // _groups are set to empty array, first generic type is set to null by convention
export function selectAll<GElement extends BaseType, OldDatum>(selector: string): Selection<GElement, OldDatum, HTMLElement, any>;
export function selectAll<GElement extends BaseType, OldDatum>(nodes: GElement[]): Selection<GElement, OldDatum, null, undefined>;
export function selectAll<GElement extends BaseType, OldDatum>(nodes: ArrayLike<GElement>): Selection<GElement, OldDatum, null, undefined>;



interface Selection<GElement extends BaseType, Datum, PElement extends BaseType, PDatum> {

    // Sub-selection -------------------------

    select<DescElement extends BaseType>(selector: string): Selection<DescElement, Datum, PElement, PDatum>;
    select<DescElement extends BaseType>(selector: null): Selection<null, undefined, PElement, PDatum>; // _groups are set to empty array, first generic type is set to null by convention
    select<DescElement extends BaseType>(selector: ValueFn<GElement, Datum, DescElement>): Selection<DescElement, Datum, PElement, PDatum>;

    selectAll(): Selection<null, undefined, GElement, Datum>; // _groups are set to empty array, first generic type is set to null by convention
    selectAll(selector: null): Selection<null, undefined, GElement, Datum>; // _groups are set to empty array, first generic type is set to null by convention
    selectAll<DescElement extends BaseType, OldDatum>(selector: string): Selection<DescElement, OldDatum, GElement, Datum>;
    selectAll<DescElement extends BaseType, OldDatum>(selector: ValueFn<GElement, Datum, Array<DescElement> | ArrayLike<DescElement>>): Selection<DescElement, OldDatum, GElement, Datum>;

    // Modifying -------------------------------

    attr(name: string): string;
    attr(name: string, value: null): this;
    attr(name: string, value: string | number | boolean): this;
    attr(name: string, value: ValueFn<GElement, Datum, string | number | boolean>): this;

    classed(name: string): boolean;
    classed(name: string, value: boolean): this;
    classed(name: string, value: ValueFn<GElement, Datum, boolean>): this;

    style(name: string): string;
    style(name: string, value: null): this;
    style(name: string, value: string | number | boolean, priority?: null | 'important'): this;
    style(name: string, value: ValueFn<GElement, Datum, string | number | boolean>, priority?: null | 'important'): this;

    property(name: string): any;
    /**
     * Look up a local variable on the first node of this selection. Note that this is not equivalent to `local.get(selection.node())` in that it will not look up locals set on the parent node(s).
     *
     * @param name The `d3.local` variable to look up.
     */
    property<T>(name: Local<T>): T | undefined;
    property(name: string, value: ValueFn<GElement, Datum, any>): this;
    property(name: string, value: null): this;
    property(name: string, value: any): this;
    /**
     * Store a value in a `d3.local` variable. This is equivalent to `selection.each(function (d, i, g) { name.set(this, value.call(this, d, i, g)); })` but more concise.
     *
     * @param name A `d3.local` variable
     * @param value A callback that returns the value to store
     */
    property<T>(name: Local<T>, value: ValueFn<GElement, Datum, T>): this;
    /**
     * Store a value in a `d3.local` variable for each node in the selection. This is equivalent to `selection.each(function () { name.set(this, value); })` but more concise.
     *
     * @param name A `d3.local` variable
     * @param value A callback that returns the value to store
     */
    property<T>(name: Local<T>, value: T): this;

    text(): string;
    text(value: string | number | boolean): this;
    text(value: ValueFn<GElement, Datum, string | number | boolean>): this;

    html(): string;
    html(value: string): this;
    html(value: ValueFn<GElement, Datum, string>): this;

    append<ChildElement extends BaseType>(type: string): Selection<ChildElement, Datum, PElement, PDatum>;
    append<ChildElement extends BaseType>(type: ValueFn<GElement, Datum, ChildElement>): Selection<ChildElement, Datum, PElement, PDatum>;

    insert<ChildElement extends BaseType>(type: string, before: string): Selection<ChildElement, Datum, PElement, PDatum>;
    insert<ChildElement extends BaseType>(type: ValueFn<GElement, Datum, ChildElement>, before: string): Selection<ChildElement, Datum, PElement, PDatum>;
    insert<ChildElement extends BaseType>(type: string, before: ValueFn<GElement, Datum, BaseType>): Selection<ChildElement, Datum, PElement, PDatum>;
    insert<ChildElement extends BaseType>(type: ValueFn<GElement, Datum, ChildElement>, before: ValueFn<GElement, Datum, BaseType>): Selection<ChildElement, Datum, PElement, PDatum>;

    /**
     * Removes the selected elements from the document.
     * Returns this selection (the removed elements) which are now detached from the DOM.
     */
    remove(): this;

    merge(other: Selection<GElement, Datum, PElement, PDatum>): Selection<GElement, Datum, PElement, PDatum>;

    filter(selector: string): this;
    filter(selector: ValueFn<GElement, Datum, boolean>): this;



    sort(comparator?: (a: Datum, b: Datum) => number): this;

    order(): this;

    raise(): this;

    lower(): this;


    // Data Join ---------------------------------

    datum(): Datum;
    datum(value: null): Selection<GElement, undefined, PElement, PDatum>;
    datum<NewDatum>(value: ValueFn<GElement, Datum, NewDatum>): Selection<GElement, NewDatum, PElement, PDatum>;
    datum<NewDatum>(value: NewDatum): Selection<GElement, NewDatum, PElement, PDatum>;

    data(): Datum[];
    data<NewDatum>(data: Array<NewDatum>, key?: ValueFn<GElement | PElement, Datum | NewDatum, string>): Selection<GElement, NewDatum, PElement, PDatum>;
    data<NewDatum>(data: ValueFn<PElement, PDatum, Array<NewDatum>>, key?: ValueFn<GElement | PElement, Datum | NewDatum, string>): Selection<GElement, NewDatum, PElement, PDatum>;

    enter(): Selection<EnterElement, Datum, PElement, PDatum>;

    // The type Datum on the exit items is actually of the type prior to calling data(...), as by definition, no new data of type NewDatum exists for these
    // elements. Due to the chaining, .data(...).exit(...), however, the definition would imply that the exit group elements have assumed the NewDatum type.
    // This seems to imply the following workaroud: Recast the exit Selection to OldDatum, if needed, or ommit and allow exit group elements to be of type any.
    exit<OldDatum>(): Selection<GElement, OldDatum, PElement, PDatum>;

    // Event Handling -------------------

    on(type: string): ValueFn<GElement, Datum, void>;
    on(type: string, listener: null): this;
    on(type: string, listener: ValueFn<GElement, Datum, void>, capture?: boolean): this;


    dispatch(type: string, parameters?: CustomEventParameters): this;
    dispatch(type: string, parameters?: ValueFn<GElement, Datum, CustomEventParameters>): this;

    // Control Flow ----------------------

    each(valueFn: ValueFn<GElement, Datum, void>): this;

    call(func: (selection: Selection<GElement, Datum, PElement, PDatum>, ...args: any[]) => void, ...args: any[]): this;

    empty(): boolean;

    node(): GElement;
    nodes(): Array<GElement>;

    size(): number;


}


interface SelectionFn extends Function {
    (): Selection<HTMLElement, any, null, undefined>;
}
export var selection: SelectionFn;


// ---------------------------------------------------------------------------
// on.js event and customEvent related
// ---------------------------------------------------------------------------

// See issue #3 (https://github.com/tomwanzek/d3-v4-definitelytyped/issues/3)
interface BaseEvent {
    type: string;
    sourceEvent?: any; // Could be of all sorts of types, too general: BaseEvent | Event | MouseEvent | TouchEvent | ... | OwnCustomEventType;
}

export var event: any; // Could be of all sorts of types, too general: BaseEvent | Event | MouseEvent | TouchEvent | ... | OwnCustomEventType;


export function customEvent<Context, Result>(event: BaseEvent, listener: (this: Context, ...args: any[]) => Result, that: Context, ...args: any[]): Result;

// ---------------------------------------------------------------------------
// mouse.js related
// ---------------------------------------------------------------------------

/**
 * Get (x, y)-coordinates of the current event relative to the specified container element.
 * The coordinates are returned as a two-element array of numbers [x, y].
 * @param container
 */
export function mouse(container: ContainerElement): [number, number];

// ---------------------------------------------------------------------------
// touch.js and touches.js related
// ---------------------------------------------------------------------------

export function touch(container: ContainerElement, identifier: number): [number, number];
export function touch(container: ContainerElement, touches: TouchList, identifier: number): [number, number];

export function touches(container: ContainerElement, touches?: TouchList): Array<[number, number]>;

// ---------------------------------------------------------------------------
// local.js related
// ---------------------------------------------------------------------------


export interface Local<T> {
    /**
     * Retrieves a local variable stored on the node (or one of its parents).
     */
    get(node: Element): T | undefined;
    /**
     * Deletes the value associated with the given node. Values stored on ancestors are not affected, meaning that child nodes will still see inherited values.
     *
     * This function returns true if there was a value stored directly on the node, and false otherwise.
     */
    remove(node: Element): boolean;
    /**
     * Store a value for this local variable. Calling `.get()` on children of this node will also retrieve the variable's value.
     */
    set(node: Element, value: T): Element;
    /**
     * Obtain a string with the internally assigned property name for the local
     * which is used to store the value on a node
     */
    toString(): string;
}

/**
 * Obtain a new local variable
 */
export function local<T>(): Local<T>;

// ---------------------------------------------------------------------------
// namespace.js related
// ---------------------------------------------------------------------------

/**
 * Type for object literal containing local name with related fully qualified namespace
 */
export type NamespaceLocalObject = {
    /**
     * Fully qualified namespace
     */
    space: string,
    /**
     * Name of the local to be namespaced.
     */
    local: string
}

/**
 * Obtain an object with properties of fully qualified namespace string and
 * name of local by parsing a shorthand string "prefix:local". If the prefix
 * does not exist in the "namespaces" object provided by d3-selection, then
 * the local name is returned as a simple string.
 *
 * @param prefixedLocal A string composed of the namespace prefix and local
 * name separated by colon, e.g. "svg:text".
 */
export function namespace(prefixedLocal: string): NamespaceLocalObject | string;


// ---------------------------------------------------------------------------
// namespaces.js related
// ---------------------------------------------------------------------------

/**
 * Type for maps of namespace prefixes to corresponding fully qualified namespace strings
 */
export type NamespaceMap = { [prefix: string]: string };

/**
 * Map of namespace prefixes to corresponding fully qualified namespace strings
 */
export var namespaces: NamespaceMap;


// ---------------------------------------------------------------------------
// window.js related
// ---------------------------------------------------------------------------

export function window(DOMNode: Window | Document | Element): Window;


// ---------------------------------------------------------------------------
// creator.js and matcher.js Complex helper closure generating functions
// for explicit bound-context dependent use
// ---------------------------------------------------------------------------


/**
 * Returns a closure structure which can be invoked in the 'this' context
 * of a group element. Depending on the use of namespacing, the NewGElement can be HTMLElement,
 * SVGElement an extension thereof or an element from a different namespace.
 *
 * @param elementName Name of the element to be added
 */
export function creator<NewGElement extends Element>(elementName: string): (this: BaseType) => NewGElement;

/**
 * Returns a closure structure which can be invoked in the 'this' context
 * of a group element. Returns true, if the element in the 'this' context matches the selector
 *
 * @param selector A valid selector string
 */
export function matcher<GElement extends Element>(selector: string): (this: BaseType) => boolean;

// ----------------------------------------------------------------------------
// selector.js and selectorAll.js related functions
// ----------------------------------------------------------------------------

export function selector<DescElement extends Element>(selector: string): (this: BaseType) => DescElement

export function selectorAll<DescElement extends Element>(selector: string): (this: BaseType) => NodeListOf<DescElement>;
