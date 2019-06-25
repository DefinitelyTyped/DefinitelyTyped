export function parseHTML(html: string): Selection;

// Selection
export abstract class Selection {
    protected __brand: never;
    attr(name: string): string | undefined;
    children(selector?: string): Selection;
    closest(selector: string): Selection;
    contents(): Selection;
    data(key?: string): string | undefined;
    each(handler: Handler): void;
    eq(index: number): Selection;
    filter(selector: string | Tester | Selection): Selection;
    find(selector: string): Selection;
    first(): Selection;
    get(index: number): Element;
    has(selector: string): Selection;
    html(): string | undefined;
    is(selector: string | Tester | Selection): Selection;
    last(): Selection;
    map(mapper: Mapper): unknown[];
    next(selector?: string): Selection;
    nextAll(selector?: string): Selection;
    nextUntil(selector?: string): Selection;
    not(selector: string | Tester): Selection;
    parent(selector?: string): Selection;
    parents(selector?: string): Selection;
    parentsUntil(selector?: string): Selection;
    prev(selector?: string): Selection;
    prevAll(selector?: string): Selection;
    prevUntil(selector?: string): Selection;
    serialize(): string;
    serializeArray(): FormValue[];
    serializeObject(): { [name: string]: string };
    size(): number;
    slice(start: number, end?: number): Selection;
    text(): string;
    toArray(): Selection[];
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

// Attribute
export abstract class Attribute {
    protected __brand: never;
    name: string;
    ownerElement: Element;
    value: string;
    localName(): string;
    namespaceURI(): string;
    prefix(): string;
}

// NodeType
export enum NodeType {
    ElementNode = 1,
    TextNode = 3,
    CommentNode = 8,
    DocumentNode = 9,
    DoctypeNode = 10,
}

// Element
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
