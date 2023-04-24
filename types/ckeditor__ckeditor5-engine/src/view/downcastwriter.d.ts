import AttributeElement from './attributeelement';
import ContainerElement from './containerelement';
import ViewDocument from './document';
import DocumentFragment from './documentfragment';
import DomConverter from './domconverter';
import EditableElement from './editableelement';
import Element from './element';
import EmptyElement from './emptyelement';
import { Item } from './item';
import Node from './node';
import Position from './position';
import Range from './range';
import RawElement from './rawelement';
import Selection, { Selectable } from './selection';
import Text from './text';
import UIElement from './uielement';
import View from './view';

/**
 * View downcast writer.
 *
 * It provides a set of methods used to manipulate view nodes.
 *
 * Do not create an instance of this writer manually. To modify a view structure, use
 * the {@link module:engine/view/view~View#change `View#change()`} block.
 *
 * The `DowncastWriter` is designed to work with semantic views which are the views that were/are being downcasted from the model.
 * To work with ordinary views (e.g. parsed from a pasted content) use the
 * {@link module:engine/view/upcastwriter~UpcastWriter upcast writer}.
 *
 * Read more about changing the view in the {@glink framework/guides/architecture/editing-engine#changing-the-view Changing the view}
 * section of the {@glink framework/guides/architecture/editing-engine Editing engine architecture} guide.
 */
export default class DowncastWriter<D extends ViewDocument = ViewDocument> {
    constructor(document: D);

    readonly document: D;

    addClass(className: string | string[], element: Element): void;
    breakAttributes(positionOrRange: Position | Range): Position | Range;
    breakContainer(position: Position): Position;
    clear(range: Range, element: Element): void;
    clearClonedElementsGroup(groupName: string): void;
    createAttributeElement(
        name: string,
        attributes?: Record<string, string>,
        options?: { priority?: number; id?: string; renderUnsafeAttributes?: string[] },
    ): AttributeElement;
    createContainerElement(
        name: string,
        attributes?: Record<string, string>,
        options?: {
            isAllowedInsideAttributeElement?: boolean | undefined;
            renderUnsafeAttributes?: string[] | undefined;
        },
    ): ContainerElement;
    createDocumentFragment(children: Node | Iterable<Node>): DocumentFragment;
    createEditableElement(
        name: string,
        attributes?: Record<string, string>,
        options?: { renderUnsafeAttributes?: string[] },
    ): EditableElement;
    createEmptyElement(
        name: string,
        attributes?: Record<string, string>,
        options?: {
            isAllowedInsideAttributeElement?: boolean | undefined;
            renderUnsafeAttributes?: string[] | undefined;
        },
    ): EmptyElement;
    createPositionAfter(item: Item): Position;
    createPositionAt(itemOrPosition: Item, offset?: number | 'end' | 'before' | 'after'): Position;
    createPositionAt(itemOrPosition: Position): Position;
    createPositionBefore(item: Item): Position;
    createRange(start: Position, end?: Position): Range;
    createRangeIn(element: Element): Range;
    createRangeOn(item: Item): Range;
    /**
     * Creates a new {@link module:engine/view/rawelement~RawElement}.
     *
     *    writer.createRawElement( 'span', { id: 'foo-1234' }, function( domElement ) {
     *      domElement.innerHTML = '<b>This is the raw content of the raw element.</b>';
     *    } );
     *
     * Raw elements work as data containers ("wrappers", "sandboxes") but their children are not managed or
     * even recognized by the editor. This encapsulation allows integrations to maintain custom DOM structures
     * in the editor content without, for instance, worrying about compatibility with other editor features.
     * Raw elements are a perfect tool for integration with external frameworks and data sources.
     *
     * Unlike {@link #createUIElement UI elements}, raw elements act like "real" editor content (similar to
     * {@link module:engine/view/containerelement~ContainerElement} or {@link module:engine/view/emptyelement~EmptyElement}),
     * and they are considered by the editor selection.
     *
     * You should not use raw elements to render the UI in the editor content. Check out {@link #createUIElement `#createUIElement()`}
     * instead.
     */
    createRawElement(
        name: string,
        attributes?: Record<string, string>,
        renderFunction?: (this: DowncastWriter, domElement: HTMLElement, domConverter: DomConverter) => void,
        options?: {
            renderUnsafeAttributes?: string[] | undefined;
            isAllowedInsideAttributeElement?: boolean | undefined;
        },
    ): RawElement;
    createSelection(
        selectable?: Selectable,
        placeOrOffset?: number | 'before' | 'end' | 'after' | 'on' | 'in',
        options?: { backward?: boolean | undefined; fake?: boolean | undefined; label?: string | undefined },
    ): Selection;
    createText(data: string): Text;
    createUIElement(
        name: string,
        attributes?: Record<string, string> | null,
        renderFunction?: (this: UIElement, domElement: Document) => void,
        options?: { isAllowedInsideAttributeElement?: boolean | undefined },
    ): UIElement;
    insert(
        position: Position | null,
        nodes:
            | Text
            | AttributeElement
            | ContainerElement
            | EmptyElement
            | RawElement
            | UIElement
            | Iterable<Text | AttributeElement | ContainerElement | EmptyElement | RawElement | UIElement>,
    ): Range;
    mergeAttributes(position: Position): Position;
    mergeContainers(position: Position): Position;
    move(sourceRange: Range, targetPosition: Position): Range;
    remove(rangeOrItem: Range | Item): DocumentFragment;
    removeAttribute(key: string, element: Element): void;
    removeClass(className: string, element: Element): void;
    removeCustomProperty(key: string, element: Element): boolean;
    removeStyle(property: string, element: Element): void;
    rename(newName: string, viewElement: ContainerElement): ContainerElement;
    setAttribute(key: string, value: string, element: Element): void;
    setCustomProperty(key: string, value: any, element: Element): void;
    setSelection(
        selectable: Selectable,
        placeOrOffset?: number | 'before' | 'end' | 'after' | 'on' | 'in',
        options?: { backward?: boolean | undefined; fake?: boolean | undefined; label?: string | undefined },
    ): void;
    setSelectionFocus(itemOrPosition: View, offset?: number | 'end' | 'before' | 'after'): void;
    setSelectionFocus(itemOrPosition: Item | Position): void;
    setStyle(property: string, value: string, element: Element): void;
    setStyle(property: Record<string, string>, element: Element): void;
    unwrap(range: Range, attribute: AttributeElement): void;
    wrap(range: Range, attribute: AttributeElement): Range;
}
