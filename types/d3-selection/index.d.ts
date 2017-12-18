// Type definitions for D3JS d3-selection module 1.2
// Project: https://github.com/d3/d3-selection/
// Definitions by: Tom Wanzek <https://github.com/tomwanzek>, Alex Ford <https://github.com/gustavderdrache>, Boris Yankov <https://github.com/borisyankov>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

// Last module patch version validated against: 1.2.0

// --------------------------------------------------------------------------
// Shared Type Definitions and Interfaces
// --------------------------------------------------------------------------

/**
 * BaseType serves as an alias for the 'minimal' data type which can be selected
 * without 'd3-selection' trying to use properties internally which would otherwise not
 * be supported.
 */
export type BaseType = Element | EnterElement | Document | Window | null;

/**
 * A helper interface which covers arguments like NodeListOf<T> or HTMLCollectionOf<T>
 * argument types
 */
export interface ArrayLike<T> {
    length: number;
    item(index: number): T;
    [index: number]: T;
}

/**
 * An interface describing the element type of the Enter Selection group elements
 * created when invoking selection.enter().
 */
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
 * A User interface event (e.g. mouse event, touch or MSGestureEvent) with captured clientX and clientY properties.
 */
export interface ClientPointEvent {
    clientX: number;
    clientY: number;
}

/**
 * Interface for optional parameters map, when dispatching custom events
 * on a selection
 */
export interface CustomEventParameters {
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
export type ValueFn<T extends BaseType, Datum, Result> = (this: T, datum: Datum, index: number, groups: T[] | ArrayLike<T>) => Result;

/**
 * TransitionLike is a helper interface to represent a quasi-Transition, without specifying the full Transition  interface in this file.
 * For example, whereever d3-zoom allows a Transition to be passed in as an argument, it internally immediately invokes its `selection()`
 * method to retrieve the underlying Selection object before proceeding.
 * d3-brush uses a subset of Transition methods internally.
 * The use of this interface instead of the full imported Transition interface is [referred] to achieve
 * two things:
 * (1) the d3-transition module may not be required by a projects use case,
 * (2) it avoids possible complications from 'module augmentation' from d3-transition to Selection.
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

/**
 * Select the first element that matches the specified selector string. If no elements match the selector, returns an empty selection.
 * If multiple elements match the selector, only the first matching element (in document order) will be selected.
 *
 * The first generic  "GElement" refers to the type of element to be selected. The second generic "OldDatum" refers to the type of the
 * datum, on the selected element. This is useful when re-selecting an element with a previously set, know datum type.
 *
 * @param selector CSS selector string
 */
export function select<GElement extends BaseType, OldDatum>(selector: string): Selection<GElement, OldDatum, HTMLElement, any>;
/**
 * Select the specified node element.
 *
 * The first generic  "GElement" refers to the type of element to be selected. The second generic "OldDatum" refers to the type of the
 * datum, on the selected element. This is useful when re-selecting an element with a previously set, know datum type.
 *
 * @param node An element to be selected
 */
export function select<GElement extends BaseType, OldDatum>(node: GElement): Selection<GElement, OldDatum, null, undefined>;

/**
 * Create an empty selection.
 */
export function selectAll(): Selection<null, undefined, null, undefined>;
/**
 * Create an empty selection.
 */
export function selectAll(selector: null): Selection<null, undefined, null, undefined>;
/**
 * Create an empty selection.
 */
export function selectAll(selector: undefined): Selection<null, undefined, null, undefined>;
/**
 * Select all elements that match the specified selector string. The elements will be selected in document order (top-to-bottom).
 * If no elements in the document match the selector, returns an empty selection.
 *
 * The first generic "GElement" refers to the type of element to be selected. The second generic "OldDatum" refers to the type of the
 * datum, of a selected element. This is useful when re-selecting elements with a previously set, know datum type.
 *
 * @param selector CSS selector string
 */
export function selectAll<GElement extends BaseType, OldDatum>(selector: string): Selection<GElement, OldDatum, HTMLElement, any>;
/**
 * Select the specified array of nodes.
 *
 * The first generic "GElement" refers to the type of element to be selected. The second generic "OldDatum" refers to the type of the
 * datum, of a selected element. This is useful when re-selecting elements with a previously set, know datum type.
 *
 * @param nodes An Array of nodes
 */
export function selectAll<GElement extends BaseType, OldDatum>(nodes: GElement[]): Selection<GElement, OldDatum, null, undefined>;
/**
 * Select the specified nodes. This signature allows the selection of nodes contained in a NodeList, HTMLCollection or similar data structure.
 *
 * The first generic "GElement" refers to the type of element to be selected. The second generic "OldDatum" refers to the type of the
 * datum, of a selected element. This is useful when re-selecting elements with a previously set, know datum type.
 *
 * @param nodes An Array-like collection of nodes
 */
export function selectAll<GElement extends BaseType, OldDatum>(nodes: ArrayLike<GElement>): Selection<GElement, OldDatum, null, undefined>;

/**
 * A D3 Selection of elements.
 *
 * The first generic "GElement" refers to the type of the selected element(s).
 * The second generic "Datum" refers to the type of the datum of a selected element(s).
 * The third generic "PElement" refers to the type of the parent element(s) in the D3 selection.
 * The fourth generic "PDatum" refers to the type of the datum of the parent element(s).
 */
export interface Selection<GElement extends BaseType, Datum, PElement extends BaseType, PDatum> {
    // Sub-selection -------------------------

    /**
     * For each selected element, select the first descendant element that matches the specified selector string.
     * If no element matches the specified selector for the current element, the element at the current index will
     * be null in the returned selection. If multiple elements match the selector, only the first matching element
     * in document order is selected. Selection.select does not affect grouping: it preserves the existing group
     * structure and indexes, and propagates data (if any) to selected children.
     *
     * If the current element has associated data, this data is propagated to the
     * corresponding selected element.
     *
     * The generic represents the type of the descendant element to be selected.
     *
     * @param selector CSS selector string
     */
    select<DescElement extends BaseType>(selector: string): Selection<DescElement, Datum, PElement, PDatum>;
    /**
     * Create an empty sub-selection. Selection.select does not affect grouping: it preserves the existing group
     * structure and indexes.
     */
    select<DescElement extends BaseType>(selector: null): Selection<null, undefined, PElement, PDatum>;
    /**
     * For each selected element, select the descendant element returned by the selector function.
     * If no element is returned by the selector function for the current element, the element at the
     * current index will be null in the returned selection. Selection.select does not affect grouping:
     * it preserves the existing group structure and indexes, and propagates data (if any) to selected children.
     *
     * If the current element has associated data, this data is propagated to the
     * corresponding selected element.
     *
     * The generic represents the type of the descendant element to be selected.
     *
     * @param selector A selector function, which is evaluated for each selected element, in order, being passed the current datum (d),
     * the current index (i), and the current group (nodes), with this as the current DOM element (nodes[i]).
     * It must return an element, or null if there is no matching element.
     */
    select<DescElement extends BaseType>(selector: ValueFn<GElement, Datum, DescElement>): Selection<DescElement, Datum, PElement, PDatum>;

    /**
     * Create an empty sub-selection. Selection.selectAll does affect grouping: The elements in the returned
     * selection are grouped by their corresponding parent node in this selection, the group at the current index will be empty.
     */
    selectAll(): Selection<null, undefined, GElement, Datum>;
    /**
     * Create an empty sub-selection. Selection.selectAll does affect grouping: The elements in the returned
     * selection are grouped by their corresponding parent node in this selection, the group at the current index will be empty.
     */
    selectAll(selector: null): Selection<null, undefined, GElement, Datum>;
    /**
     * Create an empty sub-selection. Selection.selectAll does affect grouping: The elements in the returned
     * selection are grouped by their corresponding parent node in this selection, the group at the current index will be empty.
     */
    selectAll(selector: undefined): Selection<null, undefined, GElement, Datum>;
    /**
     * For each selected element, selects the descendant elements that match the specified selector string. The elements in the returned
     * selection are grouped by their corresponding parent node in this selection. If no element matches the specified selector
     * for the current element, the group at the current index will be empty. Selection.selectAll does affect grouping: each selected descendant
     * is grouped by the parent element in the originating selection.
     *
     * The selected elements do not inherit data from this selection; use selection.data to propagate data to children.
     *
     * The first generic "DescElement" refers to the type of descendant element to be selected. The second generic "OldDatum" refers to the type of the
     * datum, of a selected element. This is useful when re-selecting elements with a previously set, know datum type.
     *
     * @param selector CSS selector string
     */
    selectAll<DescElement extends BaseType, OldDatum>(selector: string): Selection<DescElement, OldDatum, GElement, Datum>;

    /**
     * For each selected element, selects the descendant elements returned by the selector function. The elements in the returned
     * selection are grouped by their corresponding parent node in this selection. If no element matches the specified selector
     * for the current element, the group at the current index will be empty. Selection.selectAll does affect grouping: each selected descendant
     * is grouped by the parent element in the originating selection.
     *
     * The selected elements do not inherit data from this selection; use selection.data to propagate data to children.
     *
     * The first generic "DescElement" refers to the type of descendant element to be selected. The second generic "OldDatum" refers to the type of the
     * datum, of a selected element. This is useful when re-selecting elements with a previously set, know datum type.
     *
     * @param selector A selector function which is evaluated for each selected element, in order, being passed the current datum (d),
     * the current index (i), and the current group (nodes), with this as the current DOM element (nodes[i]). It must return an array of elements
     * (or a pseudo-array, such as a NodeList), or the empty array if there are no matching elements.
     */
    selectAll<DescElement extends BaseType, OldDatum>(selector: ValueFn<GElement, Datum, DescElement[] | ArrayLike<DescElement>>): Selection<DescElement, OldDatum, GElement, Datum>;

    // Modifying -------------------------------

    /**
     * Return the current value of the specified attribute for the first (non-null) element in the selection.
     * This is generally useful only if you know that the selection contains exactly one element.
     *
     * @param name Name of the attribute
     */
    attr(name: string): string;
    /**
     * Clear the attribute with the specified name for the selected elements and returns this selection.
     *
     * @param name Name of the attribute
     * @param value null,to clear the attribute
     */
    attr(name: string, value: null): this;
    /**
     * Sets the value of the attribute with the specified name for the selected elements and returns this selection.
     * All elements are given the same attribute value.
     *
     * @param name Name of the attribute
     * @param value Constant value for the attribute
     */
    attr(name: string, value: string | number | boolean): this;
    /**
     * Sets the value of the attribute with the specified name for the selected elements and returns this selection.
     * The value for the individual selected elements is determined by the value function.
     *
     * @param name Name of the attribute
     * @param value A value function which is evaluated for each selected element, in order, being passed the current datum (d),
     * the current index (i), and the current group (nodes), with this as the current DOM element (nodes[i]).  A null value will clear the attribute.
     */
    attr(name: string, value: ValueFn<GElement, Datum, string | number | boolean | null>): this;

    /**
     * Returns true if and only if the first (non-null) selected element has the specified classes.
     * This is generally useful only if you know the selection contains exactly one element.
     *
     * @param name A string of space-separated class names.
     */
    classed(names: string): boolean;
    /**
     * Assigns or unassigns the specified CSS class names on the selected elements by setting
     * the class attribute or modifying the classList property and returns this selection.
     * If the constant value is truthy, then all elements are assigned the specified classes; otherwise, the classes are unassigned.
     *
     * @param names A string of space-separated class names.
     * @param value A boolean flag (true = assign / false = unassign)
     */
    classed(names: string, value: boolean): this;
    /**
     * Assigns or unassigns the specified CSS class names on the selected elements by setting
     * the class attribute or modifying the classList property and returns this selection.
     * The assign/unassign status for the individual selected elements is determined by the boolean return
     * value of the value function.
     *
     * @param names A string of space-separated class names.
     * @param value A value function which is evaluated for each selected element, in order,
     * being passed the current datum (d), the current index (i), and the current group (nodes), with this as the current DOM element (nodes[i]).
     * The function’s return value is then used to assign or unassign classes on each element.
     */
    classed(names: string, value: ValueFn<GElement, Datum, boolean>): this;

    /**
     * Returns the current value of the specified style property for the first (non-null) element in the selection.
     * The current value is defined as the element’s inline value, if present, and otherwise its computed value.
     * Accessing the current style value is generally useful only if you know the selection contains exactly one element.
     *
     * @param name Name of the style
     */
    style(name: string): string;
    /**
     * Clear the style with the specified name for the selected elements and returns this selection.
     *
     * @param name Name of the style
     * @param value null,to clear the style
     */
    style(name: string, value: null): this;
    /**
     * Sets the value of the style with the specified name for the selected elements and returns this selection.
     * All elements are given the same style value.
     *
     * @param name Name of the style
     * @param value Constant value for the style
     * @param priority An optional priority flag, either null or the string important (without the exclamation point)
     */
    style(name: string, value: string | number | boolean, priority?: null | 'important'): this;
    /**
     * Sets the value of the style with the specified name for the selected elements and returns this selection.
     * The value for the individual selected elements is determined by the value function.
     *
     * @param name Name of the style
     * @param value A value function which is evaluated for each selected element, in order, being passed the current datum (d),
     * the current index (i), and the current group (nodes), with this as the current DOM element (nodes[i]).  A null value will clear the style.
     * @param priority An optional priority flag, either null or the string important (without the exclamation point)
     */
    style(name: string, value: ValueFn<GElement, Datum, string | number | boolean | null>, priority?: null | 'important'): this;

    /**
     * Return the current value of the specified property for the first (non-null) element in the selection.
     * This is generally useful only if you know that the selection contains exactly one element.
     *
     * @param name Name of the property
     */
    property(name: string): any;
    /**
     * Look up a local variable on the first node of this selection. Note that this is not equivalent to `local.get(selection.node())` in that it will not look up locals set on the parent node(s).
     *
     * @param name The `d3.local` variable to look up.
     */
    property<T>(name: Local<T>): T | undefined;
    /**
     * Sets the value of the property with the specified name for the selected elements and returns this selection.
     * The value for the individual selected elements is determined by the value function.
     *
     * Some HTML elements have special properties that are not addressable using attributes or styles,
     * such as a form field’s text value and a checkbox’s checked boolean. Use this method to get or set these properties.
     *
     * @param name Name of the property
     * @param value A value function which is evaluated for each selected element, in order, being passed the current datum (d),
     * the current index (i), and the current group (nodes), with this as the current DOM element (nodes[i]).  A null value will clear the property.
     */
    property(name: string, value: ValueFn<GElement, Datum, any>): this;
    /**
     * Clears the property with the specified name for the selected elements and returns this selection.
     *
     * @param name Name of the property
     * @param value null,to clear the property
     */
    property(name: string, value: null): this;
    /**
     * Sets the value of the property with the specified name for the selected elements and returns this selection.
     * All elements are given the same property value.
     *
     * @param name Name of the property
     * @param value Constant value for the property
     */
    property(name: string, value: any): this;
    /**
     * Store a value in a `d3.local` variable.
     * This is equivalent to `selection.each(function (d, i, g) { name.set(this, value.call(this, d, i, g)); })` but more concise.
     *
     * @param name A `d3.local` variable
     * @param value A callback that returns the value to store
     */
    property<T>(name: Local<T>, value: ValueFn<GElement, Datum, T>): this;
    /**
     * Store a value in a `d3.local` variable for each node in the selection.
     * This is equivalent to `selection.each(function () { name.set(this, value); })` but more concise.
     *
     * @param name A `d3.local` variable
     * @param value A callback that returns the value to store
     */
    property<T>(name: Local<T>, value: T): this;

    /**
     * Returns the text content for the first (non-null) element in the selection.
     * This is generally useful only if you know the selection contains exactly one element.
     */
    text(): string;
    /**
     * Clear the text content of the selected elements and return the selection.
     */
    text(value: null): this;
    /**
     * Sets the text content to the specified value on all selected elements, replacing any existing child elements.
     * All elements are given the same text content.
     *
     * @param value Text content value for the elements.
     */
    text(value: string | number | boolean): this;
    /**
     * Sets the text content to the specified value on all selected elements, replacing any existing child elements.
     * All elements are given the same text content.
     *
     * @param value A value unction which is evaluated for each selected element, in order, being passed the current datum (d),
     * the current index (i), and the current group (nodes), with this as the current DOM element (nodes[i]).
     * The function’s return value is then used to set each element’s text content. A null value will clear the content.
     */
    text(value: ValueFn<GElement, Datum, string | number | boolean | null>): this;

    /**
     * Returns a string representation of the inner HTML for the first (non-null) element in the selection.
     * This is generally useful only if you know the selection contains exactly one element.
     */
    html(): string;
    /**
     * Clear the html content of the selected elements and return the selection.
     */
    html(value: null): this;
    /**
     * Sets the inner HTML to the specified value on all selected elements, replacing any existing child elements.
     * All elements are given the same inner HTML
     *
     * @param value String representation of inner HTML.
     */
    html(value: string): this;
    /**
     * Sets the inner HTML to the specified value on all selected elements, replacing any existing child elements.
     * The inner HTML is determined for each individual element using a value function.
     *
     * @param value A value function which is evaluated for each selected element, in order, being passed the current
     * datum (d), the current index (i), and the current group (nodes), with this as the current DOM element (nodes[i]).
     * The function’s return value is then used to set each element’s inner HTML. A null value will clear the content.
     */
    html(value: ValueFn<GElement, Datum, string | null>): this;

    /**
     * Appends a new element of this type (tag name) as the last child of each selected element,
     * or before the next following sibling in the update selection if this is an enter selection.
     * The latter behavior for enter selections allows you to insert elements into the DOM in an order consistent with the new bound data;
     * however, note that selection.order may still be required if updating elements change order
     * (i.e., if the order of new data is inconsistent with old data).
     *
     * This method returns a new selection containing the appended elements.
     * Each new element inherits the data of the current elements, if any.
     *
     * The generic refers to the type of the child element to be appended.
     *
     * @param type A string representing the tag name. The specified name may have a namespace prefix, such as svg:text
     * to specify a text attribute in the SVG namespace. If no namespace is specified, the namespace will be inherited
     * from the parent element; or, if the name is one of the known prefixes, the corresponding namespace will be used
     * (for example, svg implies svg:svg)
     */
    append<ChildElement extends BaseType>(type: string): Selection<ChildElement, Datum, PElement, PDatum>;
    /**
     * Appends a new element of the type provided by the element creator functionas the last child of each selected element,
     * or before the next following sibling in the update selection if this is an enter selection.
     * The latter behavior for enter selections allows you to insert elements into the DOM in an order consistent with the new bound data;
     * however, note that selection.order may still be required if updating elements change order
     * (i.e., if the order of new data is inconsistent with old data).
     *
     * This method returns a new selection containing the appended elements.
     * Each new element inherits the data of the current elements, if any.
     *
     * The generic refers to the type of the child element to be appended.
     *
     * @param type A creator function which is evaluated for each selected element, in order, being passed the current datum (d),
     * the current index (i), and the current group (nodes), with this as the current DOM element (nodes[i]). This function should return
     * an element to be appended. (The function typically creates a new element, but it may instead return an existing element.)
     */
    append<ChildElement extends BaseType>(type: ValueFn<GElement, Datum, ChildElement>): Selection<ChildElement, Datum, PElement, PDatum>;

    /**
     * Inserts a new element of the specified type (tag name) before the first element matching the specified
     * before selector for each selected element. For example, a before selector :first-child will prepend nodes before the first child.
     * If before is not specified, it defaults to null. (To append elements in an order consistent with bound data, use selection.append.)
     *
     * This method returns a new selection containing the appended elements.
     * Each new element inherits the data of the current elements, if any.
     *
     * The generic refers to the type of the child element to be appended.
     *
     * @param type One of:
     *   * A string representing the tag name for the element type to be inserted. The specified name may have a namespace prefix,
     *     such as svg:text to specify a text attribute in the SVG namespace. If no namespace is specified, the namespace will be inherited
     *     from the parent element; or, if the name is one of the known prefixes, the corresponding namespace will be used
     *     (for example, svg implies svg:svg)
     *   * A creator function which is evaluated for each selected element, in order, being passed the current datum (d),
     *     the current index (i), and the current group (nodes), with this as the current DOM element (nodes[i]). This function should return
     *     an element to be inserted. (The function typically creates a new element, but it may instead return an existing element.)
     * @param before One of:
     *   * A CSS selector string for the element before which the insertion should occur.
     *   * A child selector function which is evaluated for each selected element, in order, being passed the current datum (d),
     *     the current index (i), and the current group (nodes), with this as the current DOM element (nodes[i]). This function should return the child element
     *     before which the element should be inserted.
     */
    insert<ChildElement extends BaseType>(
        type: string | ValueFn<GElement, Datum, ChildElement>,
        before?: string | ValueFn<GElement, Datum, BaseType>
        ): Selection<ChildElement, Datum, PElement, PDatum>;

    /**
     * Removes the selected elements from the document.
     * Returns this selection (the removed elements) which are now detached from the DOM.
     */
    remove(): this;

    /**
     * Returns a new selection merging this selection with the specified other selection.
     * The returned selection has the same number of groups and the same parents as this selection.
     * Any missing (null) elements in this selection are filled with the corresponding element,
     * if present (not null), from the specified selection. (If the other selection has additional groups or parents,
     * they are ignored.)
     *
     * This method is commonly used to merge the enter and update selections after a data-join.
     * After modifying the entering and updating elements separately, you can merge the two selections and
     * perform operations on both without duplicate code.
     *
     * This method is not intended for concatenating arbitrary selections, however: if both this selection
     * and the specified other selection have (non-null) elements at the same index, this selection’s element
     * is returned in the merge and the other selection’s element is ignored.
     *
     * @param other Selection to be merged.
     */
    merge(other: Selection<GElement, Datum, PElement, PDatum>): Selection<GElement, Datum, PElement, PDatum>;

    /**
     * Filters the selection, returning a new selection that contains only the elements for
     * which the specified filter is true.
     *
     * The returned filtered selection preserves the parents of this selection, but like array.filter,
     * it does not preserve indexes as some elements may be removed; use selection.select to preserve the index, if needed.
     *
     * @param selector A CSS selector string to match when filtering.
     */
    filter(selector: string): Selection<GElement, Datum, PElement, PDatum>;
    /**
     * Filters the selection, returning a new selection that contains only the elements for
     * which the specified filter is true.
     *
     * The returned filtered selection preserves the parents of this selection, but like array.filter,
     * it does not preserve indexes as some elements may be removed; use selection.select to preserve the index, if needed.
     *
     * The generic refers to the type of element which will be selected after applying the filter, i.e. if the element types
     * contained in a pre-filter selection are narrowed to a subset as part of the filtering.
     *
     * @param selector A CSS selector string to match when filtering.
     */
    filter<FilteredElement extends BaseType>(selector: string): Selection<FilteredElement, Datum, PElement, PDatum>;
    /**
     * Filter the selection, returning a new selection that contains only the elements for
     * which the specified filter is true.
     *
     * The returned filtered selection preserves the parents of this selection, but like array.filter,
     * it does not preserve indexes as some elements may be removed; use selection.select to preserve the index, if needed.
     *
     * @param selector  A value function which is evaluated for each selected element, in order, being passed the current datum (d),
     * the current index (i), and the current group (nodes), with this as the current DOM element (nodes[i]). This function should return true
     * for an element to be included, and false otherwise.
     */
    filter(selector: ValueFn<GElement, Datum, boolean>): Selection<GElement, Datum, PElement, PDatum>;
    /**
     * Filter the selection, returning a new selection that contains only the elements for
     * which the specified filter is true.
     *
     * The returned filtered selection preserves the parents of this selection, but like array.filter,
     * it does not preserve indexes as some elements may be removed; use selection.select to preserve the index, if needed.
     *
     * @param selector  A value function which is evaluated for each selected element, in order, being passed the current datum (d),
     * the current index (i), and the current group (nodes), with this as the current DOM element (nodes[i]). This function should return true
     * for an element to be included, and false otherwise.
     */
    filter<FilteredElement extends BaseType>(selector: ValueFn<GElement, Datum, boolean>): Selection<FilteredElement, Datum, PElement, PDatum>;

    /**
     * Return a new selection that contains a copy of each group in this selection sorted according
     * to the compare function. After sorting, re-inserts elements to match the resulting order (per selection.order).
     *
     * Note that sorting is not guaranteed to be stable; however, it is guaranteed to have the same
     * behavior as your browser’s built-in sort method on arrays.
     *
     * @param comparator An optional comparator function, which defaults to "ascending". The function is passed
     * two elements’ data a and b to compare. It should return either a negative, positive, or zero value.
     * If negative, then a should be before b; if positive, then a should be after b; otherwise, a and b are
     * considered equal and the order is arbitrary.
     */
    sort(comparator?: (a: Datum, b: Datum) => number): this;

    /**
     * Re-insert elements into the document such that the document order of each group matches the selection order.
     * This is equivalent to calling selection.sort if the data is already sorted, but much faster.
     */
    order(): this;

    /**
     * Re-insert each selected element, in order, as the last child of its parent.
     */
    raise(): this;

    /**
     * Re-insert each selected element, in order, as the first child of its parent.
     */
    lower(): this;

    // Data Join ---------------------------------

    /**
     * Returns the bound datum for the first (non-null) element in the selection.
     * This is generally useful only if you know the selection contains exactly one element.
     */
    datum(): Datum;
    /**
     * Delete the bound data for each element in the selection.
     */
    datum(value: null): Selection<GElement, undefined, PElement, PDatum>;
    /**
     * Sets the element’s bound data using the specified value function on all selected elements.
     * Unlike selection.data, this method does not compute a join and does not affect
     * indexes or the enter and exit selections.
     *
     * The generic refers to the type of the new datum to be used for the selected elements.
     *
     * @param value A value function which is evaluated for each selected element, in order,
     * being passed the current datum (d), the current index (i), and the current group (nodes),
     * with this as the current DOM element (nodes[i]). The function is then used to set each element’s new data.
     * A null value will delete the bound data.
     */
    datum<NewDatum>(value: ValueFn<GElement, Datum, NewDatum>): Selection<GElement, NewDatum, PElement, PDatum>;
    /**
     * Sets the element’s bound data to the specified value on all selected elements.
     * Unlike selection.data, this method does not compute a join and does not affect
     * indexes or the enter and exit selections.
     *
     * The generic refers to the type of the new datum to be used for the selected elements.
     *
     * @param value A value object to be used as the datum for each element.
     */
    datum<NewDatum>(value: NewDatum): Selection<GElement, NewDatum, PElement, PDatum>;

    /**
     * Returns the array of data for the selected elements.
     */
    data(): Datum[];
    /**
     * Joins the specified array of data with the selected elements, returning a new selection that represents
     * the update selection: the elements successfully bound to data. Also defines the enter and exit selections on
     * the returned selection, which can be used to add or remove elements to correspond to the new data.
     *
     * The data is specified for each group in the selection. If the selection has multiple groups
     * (such as d3.selectAll followed by selection.selectAll), then data should typically be specified as a function.
     *
     * If a key function is not specified, then the first datum in data is assigned to the first selected element,
     * the second datum to the second selected element, and so on.
     * A key function may be specified to control which datum is assigned to which element, replacing the default join-by-index,
     * by computing a string identifier for each datum and element.
     *
     * The update and enter selections are returned in data order, while the exit selection preserves the selection
     * order prior to the join. If a key function is specified, the order of elements in the selection may not match
     * their order in the document; use selection.order or selection.sort as needed.
     *
     * This method cannot be used to clear bound data; use selection.datum instead.
     *
     * For details see: {@link https://github.com/d3/d3-selection#joining-data }
     *
     * The generic refers to the type of the new datum to be used for the selected elements.
     *
     * @param data The specified data is an array of arbitrary values (e.g., numbers or objects).
     * @param key An optional key function which is evaluated for each selected element, in order, being passed the
     * current datum (d), the current index (i), and the current group (nodes), with this as the current DOM element (nodes[i]); the returned string is the element’s key.
     * The key function is then also evaluated for each new datum in data, being passed the current datum (d),
     * the current index (i), and the group’s new data, with this as the group’s parent DOM element (nodes[i]); the returned string is the datum’s key.
     * The datum for a given key is assigned to the element with the matching key. If multiple elements have the same key,
     * the duplicate elements are put into the exit selection; if multiple data have the same key, the duplicate data are put into the enter selection.
     */
    data<NewDatum>(data: NewDatum[], key?: ValueFn<GElement | PElement, Datum | NewDatum, string>): Selection<GElement, NewDatum, PElement, PDatum>;
    /**
     * Joins the data returned by the specified value function with the selected elements, returning a new selection that it represents
     * the update selection: the elements successfully bound to data. Also defines the enter and exit selections on
     * the returned selection, which can be used to add or remove elements to correspond to the new data.
     *
     * The data is specified for each group in the selection.
     *
     * If a key function is not specified, then the first datum in data is assigned to the first selected element,
     * the second datum to the second selected element, and so on.
     * A key function may be specified to control which datum is assigned to which element, replacing the default join-by-index,
     * by computing a string identifier for each datum and element.
     *
     * The update and enter selections are returned in data order, while the exit selection preserves the selection
     * order prior to the join. If a key function is specified, the order of elements in the selection may not match
     * their order in the document; use selection.order or selection.sort as needed.
     *
     * This method cannot be used to clear bound data; use selection.datum instead.
     *
     * For details see: {@link https://github.com/d3/d3-selection#joining-data }
     *
     * The generic refers to the type of the new datum to be used for the selected elements.
     *
     * @param data A value function which will be evaluated for each group in order, being passed the group’s parent datum
     * (d, which may be undefined), the group index (i), and the selection’s parent nodes (nodes),
     * with this as the group’s parent element. The function returns an array of values for each group.
     * @param key An optional key function which is evaluated for each selected element, in order, being passed the
     * current datum (d), the current index (i), and the current group (nodes), with this as the current DOM element (nodes[i]); the returned string is the element’s key.
     * The key function is then also evaluated for each new datum in data, being passed the current datum (d),
     * the current index (i), and the group’s new data, with this as the group’s parent DOM element (nodes[i]); the returned string is the datum’s key.
     * The datum for a given key is assigned to the element with the matching key. If multiple elements have the same key,
     * the duplicate elements are put into the exit selection; if multiple data have the same key, the duplicate data are put into the enter selection.
     */
    data<NewDatum>(data: ValueFn<PElement, PDatum, NewDatum[]>, key?: ValueFn<GElement | PElement, Datum | NewDatum, string>): Selection<GElement, NewDatum, PElement, PDatum>;

    /**
     * Return the enter selection: placeholder nodes for each datum that had no corresponding DOM element
     * in the selection. (The enter selection is empty for selections not returned by selection.data.)
     */
    enter(): Selection<EnterElement, Datum, PElement, PDatum>;

    /**
     * Returns the exit selection: existing DOM elements in the selection for which no new datum was found.
     * (The exit selection is empty for selections not returned by selection.data.)
     *
     * IMPORTANT: The generic refers to the type of the old datum associated with the exit selection elements.
     * Ensure you set the generic to the correct type, if you need to access the data on the exit selection in
     * follow-up steps, e.g. to set styles as part of an exit transition before removing them.
     */
    exit<OldDatum>(): Selection<GElement, OldDatum, PElement, PDatum>;

    // Event Handling -------------------

    /**
     * Return the currently-assigned listener for the specified event typename on the first (non-null) selected element,
     * if any, If multiple typenames are specified, the first matching listener is returned.
     *
     * @param typenames The typenames is a string event type, such as click, mouseover, or submit; any DOM event type supported by your browser may be used.
     * The type may be optionally followed by a period (.) and a name; the optional name allows multiple callbacks to be registered
     * to receive events of the same type, such as click.foo and click.bar. To specify multiple typenames, separate typenames with spaces,
     * such as "input change"" or "click.foo click.bar".
     */
    on(typenames: string): ValueFn<GElement, Datum, void> | undefined;
    /**
     * Remove a listener for the specified event type names. To remove all listeners for a given name,
     * pass null as the listener and ".foo" as the typename, where foo is the name; to remove all listeners with no name, specify "." as the typename.
     *
     * @param typenames The typenames is a string event type, such as click, mouseover, or submit; any DOM event type supported by your browser may be used.
     * The type may be optionally followed by a period (.) and a name; the optional name allows multiple callbacks to be registered
     * to receive events of the same type, such as click.foo and click.bar. To specify multiple typenames, separate typenames with spaces,
     * such as "input change"" or "click.foo click.bar".
     * @param listener null to indicate removal of listener
     */
    on(typenames: string, listener: null): this;
    /**
     * Add an event listener for the specified event type names. If an event listener was previously registered for the same typename
     * on a selected element, the old listener is removed before the new listener is added.
     *
     * When a specified event is dispatched on a selected node, the specified listener will be evaluated for each selected element.
     *
     * An optional capture flag may be specified which corresponds to the W3C useCapture flag:
     * “After initiating capture, all events of the specified type will be dispatched to the registered EventListener before being
     * dispatched to any EventTargets beneath them in the tree. Events which are bubbling upward through the tree will not
     * trigger an EventListener designated to use capture.”
     *
     * @param typenames The typenames is a string event type, such as click, mouseover, or submit; any DOM event type supported by your browser may be used.
     * The type may be optionally followed by a period (.) and a name; the optional name allows multiple callbacks to be registered
     * to receive events of the same type, such as click.foo and click.bar. To specify multiple typenames, separate typenames with spaces,
     * such as "input change"" or "click.foo click.bar".
     * @param listener A listener function which will be evaluated for each selected element, being passed the current datum (d), the current index (i),
     * and the current group (nodes), with this as the current DOM element (nodes[i]). Listeners always see the latest datum for their element,
     * but the index is a property of the selection and is fixed when the listener is assigned; to update the index, re-assign the listener.
     * To access the current event within a listener, use d3.event.
     * @param capture An optional capture flag which corresponds to the W3C useCapture flag.
     */
    on(typenames: string, listener: ValueFn<GElement, Datum, void>, capture?: boolean): this;

    /**
     * Dispatches a custom event of the specified type to each selected element, in order.
     * An optional parameters map may be specified to set additional properties of the event.
     *
     * @param type Name of event to dispatch
     * @param parameters An optional value map with custom event parameters
     */
    dispatch(type: string, parameters?: CustomEventParameters): this;
    /**
     * Dispatches a custom event of the specified type to each selected element, in order.
     * An optional value function returning a parameters map for each element in the selection may be specified to set additional properties of the event.
     *
     * @param type Name of event to dispatch
     * @param parameters A value function which is evaluated for each selected element, in order,
     * being passed the current datum (d), the current index (i), and the current group (nodes),
     * with this as the current DOM element (nodes[i]). It must return the parameters map for the current element.
     */
    dispatch(type: string, parameters?: ValueFn<GElement, Datum, CustomEventParameters>): this;

    // Control Flow ----------------------

    /**
     * Invoke the specified function for each selected element, passing in the current datum (d),
     * the current index (i), and the current group (nodes), with this of the current DOM element (nodes[i]).
     * This method can be used to invoke arbitrary code for each selected element, and is useful for creating a context to access parent and child data simultaneously.
     *
     * @param func A function which is invoked for each selected element,
     *             being passed the current datum (d), the current index (i), and the current group (nodes), with this of the current DOM element (nodes[i]).
     */
    each(func: ValueFn<GElement, Datum, void>): this;

    /**
     * Invoke the specified function exactly once, passing in this selection along with any optional arguments.
     * Returns this selection.
     *
     * @param func A function which is passed this selection as the first argument along with any optional arguments.
     * @param args List of optional arguments to be passed to the callback function.
     */
    call(func: (selection: Selection<GElement, Datum, PElement, PDatum>, ...args: any[]) => void, ...args: any[]): this;

    /**
     * Return true if this selection contains no (non-null) elements.
     */
    empty(): boolean;

    /**
     * Return the first (non-null) element in this selection. If the selection is empty, returns null.
     */
    node(): GElement | null;

    /**
     * Return an array of all (non-null) elements in this selection.
     */
    nodes(): GElement[];

    /**
     * Returns the total number of elements in this selection.
     */
    size(): number;
}

/**
 * Selects the root element, document.documentElement. This function can also be used to test for selections
 * (instanceof d3.selection) or to extend the selection prototype.
 */
export type SelectionFn = () => Selection<HTMLElement, any, null, undefined>;

/**
 * Selects the root element, document.documentElement. This function can also be used to test for selections
 * (instanceof d3.selection) or to extend the selection prototype.
 */
export const selection: SelectionFn;

// ---------------------------------------------------------------------------
// on.js event and customEvent related
// ---------------------------------------------------------------------------

/**
 * A D3 Base Event
 */
export interface BaseEvent {
    /**
     * Event type
     */
    type: string;
    /**
     * The prior value of d3.event, allowing custom events to retain a reference to the originating native event.
     */
    sourceEvent?: any; // Could be of all sorts of types, too general: BaseEvent | Event | MouseEvent | TouchEvent | ... | OwnCustomEventType;
}

/**
 * The current event, if any. This is set during the invocation of an event listener, and is reset after the listener terminates.
 * Use this to access standard event fields such as event.timeStamp and methods such as event.preventDefault.
 * While you can use the native event.pageX and event.pageY, it is often more convenient to transform the event position to
 * the local coordinate system of the container that received the event using d3.mouse, d3.touch or d3.touches.
 *
 * If you use Babel, Webpack, or another ES6-to-ES5 bundler, be aware that the value of d3.event changes during an event!
 * An import of d3.event must be a live binding, so you may need to configure the bundler to import from D3’s ES6 modules
 * rather than from the generated UMD bundle; not all bundlers observe jsnext:main.
 * Also beware of conflicts with the window.event global.
 */
export const event: any; // Could be of all sorts of types, too general: BaseEvent | Event | MouseEvent | TouchEvent | ... | OwnCustomEventType;

/**
 * Invokes the specified listener, using the specified "that" as "this" context and passing the specified arguments, if any.
 * During the invocation, d3.event is set to the specified event; after the listener returns (or throws an error),
 * d3.event is restored to its previous value.
 * In addition, sets event.sourceEvent to the prior value of d3.event, allowing custom events to retain a reference to the originating native event.
 * Returns the value returned by the listener.
 *
 * The first generic "Context" refers to the "this" context type in which the listener will be invoked.
 * The second generic "Result" specifies the return type of the listener.
 *
 * @param event The event to which d3.event will be set during the listener invocation.
 * @param listener The event listener function to be invoked. This function will be invoked with the "this" context, provided
 * by the "that" argument of customEvent(...). It will be passed all optional arguments passed to customEvent(...). The function returns
 * a value corresponding to the type of the second generic type.
 * @param that The "this"" context which will be used for the invocation of listener.
 * @param args A list of optional arguments, which will be passed to listener.
 */
export function customEvent<Context, Result>(event: BaseEvent, listener: (this: Context, ...args: any[]) => Result, that: Context, ...args: any[]): Result;

// ---------------------------------------------------------------------------
// mouse.js related
// ---------------------------------------------------------------------------

/**
 * Get (x, y)-coordinates of the current event relative to the specified container element.
 * The container may be an HTML or SVG container element, such as a G element or an SVG element.
 * The coordinates are returned as a two-element array of numbers [x, y].
 *
 * @param container Container element relative to which coordinates are calculated.
 */
export function mouse(container: ContainerElement): [number, number];

// ---------------------------------------------------------------------------
// touch.js and touches.js related
// ---------------------------------------------------------------------------

/**
 * Returns the x and y coordinates of the touch with the specified identifier associated
 * with the current event relative to the specified container.
 * The container may be an HTML or SVG container element, such as a G element or an SVG element.
 * The coordinates are returned as a two-element array of numbers [x, y] or null if there is no touch with
 * the specified identifier in touches, returns null; this can be useful for ignoring touchmove events
 * where the only some touches have moved.
 *
 * If touches is not specified, it defaults to the current event’s changedTouches property.
 *
 * @param container Container element relative to which coordinates are calculated.
 * @param identifier Touch Identifier associated with the current event.
 */
export function touch(container: ContainerElement, identifier: number): [number, number] | null;

/**
 * Return the x and y coordinates of the touch with the specified identifier associated
 * with the current event relative to the specified container.
 * The container may be an HTML or SVG container element, such as a G element or an SVG element.
 * The coordinates are returned as a two-element array of numbers [x, y] or null if there is no touch with
 * the specified identifier in touches, returns null; this can be useful for ignoring touchmove events
 * where the only some touches have moved.
 *
 * If touches is not specified, it defaults to the current event’s changedTouches property.
 *
 * @param container Container element relative to which coordinates are calculated.
 * @param touches TouchList to be used when identifying the touch.
 * @param identifier Touch Identifier associated with the current event.
 */
export function touch(container: ContainerElement, touches: TouchList, identifier: number): [number, number] | null;

/**
 * Return the x and y coordinates of the touches associated with the current event relative to the specified container.
 * The container may be an HTML or SVG container element, such as a G element or an SVG element.
 * The coordinates are returned as an array of two-element arrays of numbers [[x1, y1], [x2, y2], …].
 *
 * If touches is not specified, it defaults to the current event’s touches property.
 *
 * @param container Container element relative to which coordinates are calculated.
 * @param touches TouchList to be used.
 */
export function touches(container: ContainerElement, touches?: TouchList): Array<[number, number]>;

/**
 * Returns the x and y coordinates of the specified event relative to the specified container.
 * (The event may also be a touch.) The container may be an HTML or SVG container element, such as a G element or an SVG element.
 * The coordinates are returned as a two-element array of numbers [x, y].
 *
 * @param container Container element relative to which coordinates are calculated.
 * @param event A User interface event (e.g. mouse event, touch or MSGestureEvent) with captured clientX and clientY properties.
 */
export function clientPoint(container: ContainerElement, event: ClientPointEvent): [number, number];

// ---------------------------------------------------------------------------
// style
// ---------------------------------------------------------------------------

/**
 * Returns the value of the style property with the specified name for the specified node.
 * If the node has an inline style with the specified name, its value is returned; otherwise, the computed property value is returned.
 * See also selection.style.
 *
 * @param node A DOM node (e.g. HTMLElement, SVGElement) for which to retrieve the style property.
 * @param name Style property name.
 */
export function style(node: Element, name: string): string;

// ---------------------------------------------------------------------------
// local.js related
// ---------------------------------------------------------------------------

export interface Local<T> {
    /**
     * Retrieves a local variable stored on the node (or one of its parents).
     *
     * @param node A node element.
     */
    get(node: Element): T | undefined;
    /**
     * Deletes the value associated with the given node. Values stored on ancestors are not affected, meaning that child nodes will still see inherited values.
     *
     * This function returns true if there was a value stored directly on the node, and false otherwise.
     *
     * @param node A node element.
     */
    remove(node: Element): boolean;
    /**
     * Store a value for this local variable. Calling `.get()` on children of this node will also retrieve the variable's value.
     *
     * @param node A node element.
     * @param value Value to store locally
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
 *
 * The generic refers to the type of the variable to store locally.
 */
export function local<T>(): Local<T>;

// ---------------------------------------------------------------------------
// namespace.js related
// ---------------------------------------------------------------------------

/**
 * Interface for object literal containing local name with related fully qualified namespace
 */
export interface NamespaceLocalObject {
    /**
     * Fully qualified namespace
     */
    space: string;
    /**
     * Name of the local to be namespaced.
     */
    local: string;
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
 * Interface for maps of namespace prefixes to corresponding fully qualified namespace strings
 */
export interface NamespaceMap { [prefix: string]: string; }

/**
 * Map of namespace prefixes to corresponding fully qualified namespace strings
 */
export const namespaces: NamespaceMap;

// ---------------------------------------------------------------------------
// window.js related
// ---------------------------------------------------------------------------

/**
 * Returns the owner window for the specified node. If node is a node, returns the owner document’s default view;
 * if node is a document, returns its default view; otherwise returns the node.
 *
 * @param DOMNode A DOM element
 */
export function window(DOMNode: Window | Document | Element): Window;

// ---------------------------------------------------------------------------
// creator.js and matcher.js Complex helper closure generating functions
// for explicit bound-context dependent use
// ---------------------------------------------------------------------------

/**
 * Given the specified element name, returns a function which creates an element of the given name,
 * assuming that "this" is the parent element.
 *
 * The generic refers to the type of the new element to be returned by the creator function.
 *
 * @param name Tag name of the element to be added. See "namespace" for details on supported namespace prefixes,
 * such as for SVG elements.
 */
export function creator<NewGElement extends Element>(name: string): (this: BaseType) => NewGElement;

/**
 * Given the specified selector, returns a function which returns true if "this" element matches the specified selector.
 *
 * @param selector A CSS selector string.
 */
export function matcher(selector: string): (this: BaseType) => boolean;

// ----------------------------------------------------------------------------
// selector.js and selectorAll.js related functions
// ----------------------------------------------------------------------------

/**
 * Given the specified selector, returns a function which returns the first descendant of "this" element
 * that matches the specified selector.
 *
 * The generic refers to the type of the returned descendant element.
 *
 * @param selector A CSS selector string.
 */
export function selector<DescElement extends Element>(selector: string): (this: BaseType) => DescElement;

/**
 * Given the specified selector, returns a function which returns all descendants of "this" element that match the specified selector.
 *
 * The generic refers to the type of the returned descendant element.
 *
 * @param selector A CSS selector string.
 */
export function selectorAll<DescElement extends Element>(selector: string): (this: BaseType) => NodeListOf<DescElement>;
