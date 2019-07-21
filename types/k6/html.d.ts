/*
 * HTML parsing and access.
 * https://docs.k6.io/docs/k6html
 */

// === Main ===
// ------------

/**
 * Parse an HTML string.
 * @param html - HTML source.
 * @returns Document node object.
 * @public
 */
export function parseHTML(html: string): Selection;

// === Selection ===
// -----------------

/**
 * Represents a set of nodes in a DOM tree.
 * https://docs.k6.io/docs/selection-k6html
 * @public
 */
export abstract class Selection {
    protected __brand: never;

    /**
     * Get the value of an attribute for the first element in the Selection.
     * https://docs.k6.io/docs/selectionattrname
     * @param name - Name of attribute to get.
     * @returns Attribute value.
     */
    attr(name: string): string | undefined;

    /**
     * Get the children of each element in the set of matched elements,
     * optionally filtered by a selector.
     * https://docs.k6.io/docs/selectionchildrenselector
     * @param selector - Selector expression.
     * @returns Selected children.
     */
    children(selector?: string): Selection;

    /**
     * For each element in the set, get the first element that matches the
     * selector by testing the element itself and traversing up through its
     * ancestors in the DOM tree.
     * https://docs.k6.io/docs/selectionclosestselector
     * @param selector - Selector expression.
     * @returns Selected nodes.
     */
    closest(selector: string): Selection;

    /**
     * Get the children of each element in the set of matched elements,
     * including text and comment nodes.
     * https://docs.k6.io/docs/selectioncontents
     * @returns Selected nodes.
     */
    contents(): Selection;

    /**
     * Return the value at the named data store for the first element in the
     * set of matched elements.
     * https://docs.k6.io/docs/selectiondatakey
     * @param key - A string naming the piece of data to set.\
     * @returns The value at the named data store.
     */
    data(key?: string): string | undefined;

    /**
     * Iterate over a Selection (k6/html), executing a function for each
     * matched element.
     * https://docs.k6.io/docs/selectioneachfn
     * @param handler - Logic to execute for each element.
     */
    each(handler: Handler): void;

    /**
     * Reduce the set of matched elements to the one at the specified index.
     * https://docs.k6.io/docs/selectioneqindex
     * @param index - An integer indicating the 0-based position of the element.
     * @returns Unary set of selected element.
     */
    eq(index: number): Selection;

    /**
     * Reduce the set of matched elements to those that match the selector
     * or pass the function's test.
     * https://docs.k6.io/docs/selectionfilterfn
     * @param selector - Selector expression.
     * @returns Selected elements.
     */
    filter(selector: string): Selection; // tslint:disable:unified-signatures

    /**
     * Reduce the set of matched elements to those that match the selector
     * or pass the function's test.
     * https://docs.k6.io/docs/selectionfilterfn
     * @param selector - A function used as a test for each element in the set.
     * @returns Selected elements.
     */
    filter(selector: Tester): Selection; // tslint:disable:unified-signatures

    /**
     * Reduce the set of matched elements to those that match the selector
     * or pass the function's test.
     * https://docs.k6.io/docs/selectionfilterfn
     * @param selector - A selection to match elements against.
     * @returns Selected elements.
     */
    filter(selector: Selection): Selection; // tslint:disable:unified-signatures

    /**
     * Find the selection descendants, filtered by a selector.
     * https://docs.k6.io/docs/selectionfindselector
     * @param selector - Selector expression.
     * @returns Selected elements.
     */
    find(selector: string): Selection;

    /**
     * Reduce the set of matched elements to the first.
     * https://docs.k6.io/docs/selectionfirst
     * @returns Unary set of first element.
     */
    first(): Selection;

    /**
     * Retrieve the element matched by the selector.
     * https://docs.k6.io/docs/selectiongetindex
     * @param index - A zero-based integer indicating which element to retrieve.
     * @returns Selected element.
     */
    get(index: number): Element;

    /**
     * Reduce the set of matched elements to those that have a descendant that
     * matches the selector.
     * https://docs.k6.io/docs/selectionhasselector
     * @param selector - Selector expression.
     * @returns Selected elements.
     */
    has(selector: string): Selection;

    /**
     * Get the HTML contents of the first element.
     * https://docs.k6.io/docs/selectionhtml
     * @returns The HTML content of the first element.
     */
    html(): string | undefined;

    /**
     * Check the current matched set of elements against a selector or element
     * and return true if at least one of these elements matches the given
     * arguments.
     * https://docs.k6.io/docs/selectionisselector
     * @param selector - Selector expression.
     * @returns Whether selector matched at least one element.
     */
    is(selector: string): boolean; // tslint:disable:unified-signatures

    /**
     * Check the current matched set of elements against a selector or element
     * and return true if at least one of these elements matches the given
     * arguments.
     * https://docs.k6.io/docs/selectionisselector
     * @param selector - A function used as a test for each element in the set.
     * @returns Whether selector matched at least one element.
     */
    is(selector: Tester): boolean; // tslint:disable:unified-signatures

    /**
     * Check the current matched set of elements against a selector or element
     * and return true if at least one of these elements matches the given
     * arguments.
     * https://docs.k6.io/docs/selectionisselector
     * @param selector - A selection to match against.
     * @returns Whether selector matched at least one element.
     */
    is(selector: Selection): boolean; // tslint:disable:unified-signatures

    /**
     * Reduce the set of matched elements to the final one.
     * https://docs.k6.io/docs/selectionlast
     * @returns Unary set of last element.
     */
    last(): Selection;

    /**
     * Pass each element in the current matched set through a function,
     * producing a new Array containing the return values.
     * https://docs.k6.io/docs/selectionmapfn
     * @param mapper - Procedure to execute on each element.
     * @returns Mapper return values.
     */
    map(mapper: Mapper): unknown[];

    /**
     * Get the immediately following sibling of each element.
     * https://docs.k6.io/docs/selectionnext
     * @param selector - Selector expression.
     * @returns Selected elements.
     */
    next(selector?: string): Selection;

    /**
     * Get all following siblings of each element,
     * optionally filtered by a selector.
     * https://docs.k6.io/docs/selectionnextallselector
     * @param selector - Selector expression.
     * @returns Selected elements.
     */
    nextAll(selector?: string): Selection;

    /**
     * Get all following siblings of each element up to but not including the
     * element matched by the selector.
     * https://docs.k6.io/docs/selectionnextuntilselector
     * @param selector - Selector expression.
     * @returns Selected elements.
     */
    nextUntil(selector?: string): Selection;

    /**
     * Remove elements.
     * https://docs.k6.io/docs/selectionnotselector
     * @param selector - Selector expression.
     * @returns Selection with matched elements removed.
     */
    not(selector: string): Selection; // tslint:disable:unified-signatures

    /**
     * Remove elements.
     * https://docs.k6.io/docs/selectionnotselector
     * @param selector - A function used as a test for each element in the set.
     * @returns Selection with matched elements removed.
     */
    not(selector: Tester): Selection; // tslint:disable:unified-signatures

    /**
     * Get the parent of each element, optionally filtered by a selector.
     * https://docs.k6.io/docs/selectionparentselector
     * @param selector - Selector expression.
     * @returns Selected elements.
     */
    parent(selector?: string): Selection;

    /**
     * Get the ancestors of each element, optionally filtered by a selector.
     * https://docs.k6.io/docs/selectionparentsselector
     * @param selector - Selector expression.
     * @returns Selected elements.
     */
    parents(selector?: string): Selection;

    /**
     * Get the ancestors of each element,
     * up to but not including the element matched by the selector.
     * https://docs.k6.io/docs/selectionparentsuntilselector
     * @param selector - Selector expression.
     * @returns Selected elements.
     */
    parentsUntil(selector?: string): Selection;

    /**
     * Get the immediately preceding sibling of each element.
     * https://docs.k6.io/docs/selectionprevselector
     * @param selector - Selector expression.
     * @returns Selected elements.
     */
    prev(selector?: string): Selection;

    /**
     * Get all preceding siblings of each element,
     * optionally filtered by a selector.
     * https://docs.k6.io/docs/selectionprevallselector
     * @param selector - Selector expression.
     * @returns Selected elements.
     */
    prevAll(selector?: string): Selection;

    /**
     * Get all preceding siblings of each element
     * up to but not including the element matched by the selector.
     * https://docs.k6.io/docs/selectionprevuntilselector
     * @param selector - Selector expression.
     * @returns Selected elements.
     */
    prevUntil(selector?: string): Selection;

    /**
     * Encode a set of form elements as a string
     * in standard URL-encoded notation for submission.
     * https://docs.k6.io/docs/selectionserialize
     * @returns URL-encoded representation of the form or form elements.
     */
    serialize(): string;

    /**
     * Encode a set of form elements as an array of name-value objects.
     * `[{ name: "name", value: "value" }, ... ]`
     * https://docs.k6.io/docs/selectionserializearray
     * @returns Array of name value objects of the form or form elements.
     */
    serializeArray(): FormValue[];

    /**
     * Encode a set of form elements as an object.
     * `{ inputName: "value", checkboxName: "value", ... }`
     * https://docs.k6.io/docs/selectionserializeobject
     * @returns Object representation of the form or form elements,
     *     key is field name and value is field value.
     */
    serializeObject(): { [name: string]: string };

    /**
     * Return the number of elements in the selection.
     * https://docs.k6.io/docs/selectionsize
     * @returns The number of elements in the selection.
     */
    size(): number;

    /**
     * Reduce the set of elements to a subset specified by a range of indices.
     * https://docs.k6.io/docs/selectionslicestart-end
     * @param start - An integer indicating the 0-based position at which the
     *     elements begin to be selected.
     * @param end - An integer indicating the 0-based position at which the
     *     elements stop being selected.
     * @returns Selected elements.
     */
    slice(start: number, end?: number): Selection;

    /**
     * Get the text content of the selection.
     * @returns Text content.
     */
    text(): string;

    /**
     * Retrieve all the elements contained in the selection as an array.
     * https://docs.k6.io/docs/selectiontoarray
     * @returns A unary selection of each element.
     */
    toArray(): Selection[];

    /**
     * Get the current value of the first element.
     * @returns The value of the first element.
     */
    val(): string | undefined;
}

export interface FormValue {
    name: string;
    value: string;
}
export interface Tester {
    (index: number, element: Element): boolean;
}
export interface Handler {
    (index: number, element: Element): void;
}
export interface Mapper {
    (index: number, element: Element): unknown;
}

// === Attribute ===
// -----------------

export abstract class Attribute {
    protected __brand: never;
    name: string;
    ownerElement: Element;
    value: string;
    localName(): string;
    namespaceURI(): string;
    prefix(): string;
}

// === NodeType ===
// ----------------

export enum NodeType {
    ElementNode = 1,
    TextNode = 3,
    CommentNode = 8,
    DocumentNode = 9,
    DoctypeNode = 10,
}

// === Element ===
// ---------------

export abstract class Element {
    protected __brand: never;
    attributes(): { [name: string]: Attribute };
    childElementCount(): number;
    childNodes(): Element[];
    children(): Element[];
    classList(): string[];
    className(): string | undefined;
    contains(element: Element): boolean;
    firstChild(): Element | undefined;
    firstElementChild(): Element | undefined;
    getAttribute(name: string): string | undefined;
    getAttributeNode(name: string): Attribute | undefined;
    getElementsByClassName(name: string): Element[];
    getElementsByTagName(name: string): Element[];
    hasAttribute(name: string): boolean;
    hasAttributes(): boolean;
    hasChildNodes(): boolean;
    id(): string;
    innerHTML(): string | undefined;
    isDefaultNamespace(): boolean;
    isEqualNode(element: Element): boolean;
    isSameNode(element: Element): boolean;
    lang(): string | undefined;
    lastChild(): Element | undefined;
    lastElementChild(): Element | undefined;
    matches(selector: string): boolean;
    namespaceURI(): string;
    nextElementSibling(): Element | undefined;
    nextSibling(): Element | undefined;
    nodeName(): string;
    nodeType(): NodeType | undefined;
    nodeValue(): string | undefined;
    ownerDocument(): Element | undefined;
    parentElement(): Element | undefined;
    parentNode(): Element | undefined;
    previousElementSibling(): Element | undefined;
    previousSibling(): Element | undefined;
    querySelector(selector: string): Element | undefined;
    querySelectorAll(selector: string): Element[];
    textContent(): string;
    toString(): string;
}
export abstract class AnchorElement extends HrefElement {
    protected __brand: never;
}
export abstract class AreaElement extends HrefElement {
    protected __brand: never;
}
export abstract class AudioElement extends MediaElement {
    protected __brand: never;
}
export abstract class BaseElement extends Element {
    protected __brand: never;
}
export abstract class ButtonElement extends FormFieldElement {
    protected __brand: never;
    value(): string;
}
export abstract class CanvasElement extends Element {
    protected __brand: never;
    height(): number;
    width(): number;
}
export abstract class DataElement extends Element {
    protected __brand: never;
}
export abstract class DataListElement extends Element {
    protected __brand: never;
    options(): OptionElement[];
}
export abstract class DelElement extends ModElement {
    protected __brand: never;
}
export abstract class EmbedElement extends Element {
    protected __brand: never;
}
export abstract class FieldSetElement extends Element {
    protected __brand: never;
    elements(): Element[];
    form(): FormElement | undefined;
    type(): string;
    validity(): undefined;
}
export abstract class FormElement extends Element {
    protected __brand: never;
    elements(): Element[];
    length(): number;
    method(): string;
}
export abstract class FormFieldElement extends Element {
    protected __brand: never;
    form(): FormElement | undefined;
    formAction(): string;
    formEnctype(): string;
    formMethod(): string;
    formNoValidate(): boolean;
    formTarget(): string;
    labels(): LabelElement[];
    name(): string;
}
export abstract class HrefElement extends Element {
    protected __brand: never;
    hash(): string;
    host(): string;
    hostname(): string;
    origin(): string;
    password(): string;
    pathname(): string;
    protocol(): string;
    post(): string;
    relList(): string[];
    search(): string;
    text(): string;
    username(): string;
}
export abstract class IFrameElement extends Element {
    protected __brand: never;
}
export abstract class ImageElement extends Element {
    protected __brand: never;
}
export abstract class InputElement extends FormFieldElement {
    protected __brand: never;
    form(): FormElement | undefined;
}
export abstract class InsElement extends ModElement {
    protected __brand: never;
}
export abstract class KeygenElement extends Element {
    protected __brand: never;
    form(): FormElement | undefined;
    labels(): LabelElement[];
}
export abstract class LabelElement extends Element {
    protected __brand: never;
    control(): Element | undefined;
    form(): FormElement | undefined;
}
export abstract class LegendElement extends Element {
    protected __brand: never;
    form(): FormElement | undefined;
}
export abstract class LiElement extends Element {
    protected __brand: never;
}
export abstract class LinkElement extends Element {
    protected __brand: never;
    relList(): string[];
}
export abstract class MapElement extends Element {
    protected __brand: never;
    areas(): Element[];
    images(): Element[];
}
export abstract class MediaElement extends Element {
    protected __brand: never;
    textTracks(): Element[];
}
export abstract class MetaElement extends Element {
    protected __brand: never;
}
export abstract class MeterElement extends Element {
    protected __brand: never;
    labels(): LabelElement[];
}
export abstract class ModElement extends Element {
    protected __brand: never;
}
export abstract class ObjectElement extends Element {
    protected __brand: never;
    form(): FormElement | undefined;
}
export abstract class OListElement extends Element {
    protected __brand: never;
}
export abstract class OptGroupElement extends Element {
    protected __brand: never;
}
export abstract class OptionElement extends Element {
    protected __brand: never;
    disabled(): boolean;
    form(): FormElement | undefined;
    index(): number;
    label(): string;
    text(): string;
    value(): string;
}
export abstract class OutputElement extends Element {
    protected __brand: never;
    defaultValue(): string;
    form(): FormElement | undefined;
    labels(): LabelElement[];
    value(): string;
}
export abstract class ParamElement extends Element {
    protected __brand: never;
}
export abstract class PreElement extends Element {
    protected __brand: never;
}
export abstract class ProgressElement extends Element {
    protected __brand: never;
    labels(): LabelElement[];
    max(): number;
    position(): number;
    value(): number;
}
export abstract class QuoteElement extends Element {
    protected __brand: never;
}
export abstract class ScriptElement extends Element {
    protected __brand: never;
    text(): string;
}
export abstract class SelectElement extends Element {
    protected __brand: never;
    form(): FormElement | undefined;
    labels(): LabelElement[];
    length(): number;
    options(): OptionElement[];
    selectedIndex(): number;
    selectedOptions(): OptionElement[];
    size(): number;
    type(): string;
    value(): string;
}
export abstract class SourceElement extends Element {
    protected __brand: never;
}
export abstract class StyleElement extends Element {
    protected __brand: never;
    type(): string;
}
export abstract class TableBodyElement extends TableSectionElement {
    protected __brand: never;
}
export abstract class TableCellElement extends Element {
    protected __brand: never;
    cellIndex(): number;
}
export abstract class TableColElement extends Element {
    protected __brand: never;
    span(): number;
}
export abstract class TableDataCellElement extends TableCellElement {
    protected __brand: never;
}
export abstract class TableElement extends Element {
    protected __brand: never;
    caption(): Element | undefined;
    rows(): Element[];
    tBodies(): Element[];
    tFoot(): Element | undefined;
    tHead(): Element | undefined;
}
export abstract class TableFootElement extends TableSectionElement {
    protected __brand: never;
}
export abstract class TableHeadElement extends TableSectionElement {
    protected __brand: never;
}
export abstract class TableHeaderCellElement extends TableCellElement {
    protected __brand: never;
}
export abstract class TableRowElement extends Element {
    protected __brand: never;
    cells(): TableCellElement[];
    rowIndex(): number;
    sectionRowIndex(): number;
}
export abstract class TableSectionElement extends Element {
    protected __brand: never;
    rows(): Element[];
}
export abstract class TextAreaElement extends Element {
    protected __brand: never;
    form(): FormElement | undefined;
    labels(): LabelElement[];
    length(): number;
}
export abstract class TimeElement extends Element {
    protected __brand: never;
}
export abstract class TitleElement extends Element {
    protected __brand: never;
    text(): string;
}
export abstract class TrackElement extends Element {
    protected __brand: never;
}
export abstract class UListElement extends Element {
    protected __brand: never;
}
export abstract class VideoElement extends MediaElement {
    protected __brand: never;
}
