import DocumentFragment from "./documentfragment";
import Element from "./element";
import ViewText from "./text";
import Position from "./position";
import Range from "./range";
import Selection, { Selectable } from "./selection";
import ViewDocument from "./document";
import ViewNode from "./node";
import { Item as ViewItem } from "./item";

/**
 * View upcast writer. It provides a set of methods used to manipulate non-semantic view trees.
 *
 * It should be used only while working on a non-semantic view
 * (e.g. a view created from HTML string on paste).
 * To manipulate a view which was or is being downcasted from the the model use the
 * {@link module:engine/view/downcastwriter~DowncastWriter downcast writer}.
 *
 * Read more about changing the view in the {@glink framework/guides/architecture/editing-engine#changing-the-view Changing the view}
 * section of the {@glink framework/guides/architecture/editing-engine Editing engine architecture} guide.
 *
 * Unlike `DowncastWriter`, which is available in the {@link module:engine/view/view~View#change `View#change()`} block,
 * `UpcastWriter` can be created wherever you need it:
 *
 *    const writer = new UpcastWriter( viewDocument );
 *    const text = writer.createText( 'foo!' );
 *
 *    writer.appendChild( text, someViewElement );
 */
export default class UpcastWriter {
    constructor(document: ViewDocument);
    readonly document: ViewDocument;

    /**
     * Creates a new {@link module:engine/view/documentfragment~DocumentFragment} instance.
     */
    createDocumentFragment(children: ViewNode | Iterable<ViewNode>): DocumentFragment;

    /**
     * Creates a new {@link module:engine/view/element~Element} instance.
     *
     * Attributes can be passed in various formats:
     *
     *    upcastWriter.createElement( 'div', { class: 'editor', contentEditable: 'true' } ); // object
     *    upcastWriter.createElement( 'div', [ [ 'class', 'editor' ], [ 'contentEditable', 'true' ] ] ); // map-like iterator
     *    upcastWriter.createElement( 'div', mapOfAttributes ); // map
     */
    createElement(
        name: string,
        attrs?: Record<string, unknown> | Iterable<unknown>,
        children?: ViewNode | Iterable<ViewNode>,
    ): Element;

    /**
     * Creates a new {@link module:engine/view/text~Text} instance.
     */
    createText(data: string): ViewText;

    /**
     * Clones the provided element.
     *
     * @see module:engine/view/element~Element#_clone
     */
    clone(element: Element, deep?: boolean): Element;

    /**
     * Appends a child node or a list of child nodes at the end of this node
     * and sets the parent of these nodes to this element.
     *
     * @see module:engine/view/element~Element#_appendChild
     */
    appendChild(items: ViewItem | Iterable<ViewItem>, element: Element | DocumentFragment): number;

    /**
     * Inserts a child node or a list of child nodes on the given index and sets the parent of these nodes to
     * this element.
     *
     * @see module:engine/view/element~Element#_insertChild
     */
    insertChild(index: number, items: ViewItem | Iterable<ViewItem>, element: DocumentFragment): number;

    /**
     * Removes the given number of child nodes starting at the given index and set the parent of these nodes to `null`.
     *
     * @see module:engine/view/element~Element#_removeChildren
     */
    removeChildren(index: number, howMany: number, element: Element | DocumentFragment): ViewNode[];

    /**
     * Removes given element from the view structure. Will not have effect on detached elements.
     */
    remove(element: Element): ViewNode;

    /**
     * Replaces given element with the new one in the view structure. Will not have effect on detached elements.
     */
    replace(oldElement: Element, newElement: Element): boolean;

    /**
     * Removes given element from view structure and places its children in its position.
     * It does nothing if element has no parent.
     */
    unwrapElement(element: Element): void;

    /**
     * Renames element by creating a copy of a given element but with its name changed and then moving contents of the
     * old element to the new one.
     *
     * Since this function creates a new element and removes the given one, the new element is returned to keep reference.
     */
    rename(newName: string, element: Element): Element | null;

    /**
     * Adds or overwrites element's attribute with a specified key and value.
     *
     *    writer.setAttribute( linkElement, 'href', 'http://ckeditor.com' );
     *
     * @see module:engine/view/element~Element#_setAttribute
     */
    setAttribute(key: string, value: unknown, element: Element): void;

    /**
     * Removes attribute from the element.
     *
     *    writer.removeAttribute( linkElement, 'href' );
     *
     * @see module:engine/view/element~Element#_removeAttribute
     */
    removeAttribute(key: string, element: Element): void;

    /**
     * Adds specified class to the element.
     *
     *    writer.addClass( linkElement, 'foo' );
     *    writer.addClass( linkElement, [ 'foo', 'bar' ] );
     *
     * @see module:engine/view/element~Element#_addClass
     */
    addClass(className: string | string[], element: Element): void;

    /**
     * Removes specified class from the element.
     *
     *    writer.removeClass( linkElement, 'foo' );
     *    writer.removeClass( linkElement, [ 'foo', 'bar' ] );
     *
     * @see module:engine/view/element~Element#_removeClass
     */
    removeClass(className: string | string[], element: Element): void;

    /**
     * Adds style to the element.
     *
     *    writer.setStyle( element, 'color', 'red' );
     *    writer.setStyle( element, {
     *        color: 'red',
     *        position: 'fixed'
     *    } );
     *
     * **Note**: This method can work with normalized style names if
     * {@link module:engine/controller/datacontroller~DataController#addStyleProcessorRules a particular style processor rule is enabled}.
     * See {@link module:engine/view/stylesmap~StylesMap#set `StylesMap#set()`} for details.
     *
     * @see module:engine/view/element~Element#_setStyle
     */

    setStyle(property: string, value: string, element: Element): void;
    setStyle(property: Record<string, string>, value: unknown, element: Element): void;

    /**
     * Removes specified style from the element.
     *
     *    writer.removeStyle( element, 'color' );  // Removes 'color' style.
     *    writer.removeStyle( element, [ 'color', 'border-top' ] ); // Removes both 'color' and 'border-top' styles.
     *
     * **Note**: This method can work with normalized style names if
     * {@link module:engine/controller/datacontroller~DataController#addStyleProcessorRules a particular style processor rule is enabled}.
     * See {@link module:engine/view/stylesmap~StylesMap#remove `StylesMap#remove()`} for details.
     *
     * @see module:engine/view/element~Element#_removeStyle
     */
    removeStyle(property: string | string[], element: Element): void;

    /**
     * Sets a custom property on element. Unlike attributes, custom properties are not rendered to the DOM,
     * so they can be used to add special data to elements.
     *
     * @see module:engine/view/element~Element#_setCustomProperty
     */
    setCustomProperty(key: string, value: unknown, element: Element): void;

    /**
     * Removes a custom property stored under the given key.
     *
     * @see module:engine/view/element~Element#_removeCustomProperty
     */
    removeCustomProperty(key: string, element: Element): boolean;

    /**
     * Creates position at the given location. The location can be specified as:
     *
     * * a {@link module:engine/view/position~Position position},
     * * parent element and offset (offset defaults to `0`),
     * * parent element and `'end'` (sets position at the end of that element),
     * * {@link module:engine/view/item~Item view item} and `'before'` or `'after'` (sets position before or after given view item).
     *
     * This method is a shortcut to other constructors such as:
     *
     * * {@link #createPositionBefore},
     * * {@link #createPositionAfter},
     */
    createPositionAt(itemOrPosition: ViewItem | Position, offset?: number | "end" | "before" | "after"): void;

    /**
     * Creates a new position after given view item.
     */
    createPositionAfter(item: ViewItem): void;

    /**
     * Creates a new position before given view item.
     */
    createPositionBefore(item: ViewItem): Position;

    /**
     * Creates a range spanning from `start` position to `end` position.
     *
     * **Note:** This factory method creates it's own {@link module:engine/view/position~Position} instances basing on passed values.
     */
    createRange(start: Position, end?: Position): Range;

    /**
     * Creates a range that starts before given {@link module:engine/view/item~Item view item} and ends after it.
     */
    createRangeOn(item: ViewItem): Range;

    /**
     * Creates a range inside an {@link module:engine/view/element~Element element} which starts before the first child of
     * that element and ends after the last child of that element.
     */
    createRangeIn(element: Element): Range;

    /**
     * Creates a new {@link module:engine/view/selection~Selection} instance.
     *
     *         // Creates empty selection without ranges.
     *    const selection = writer.createSelection();
     *
     *    // Creates selection at the given range.
     *    const range = writer.createRange( start, end );
     *    const selection = writer.createSelection( range );
     *
     *    // Creates selection at the given ranges
     *         const ranges = [ writer.createRange( start1, end2 ), writer.createRange( star2, end2 ) ];
     *    const selection = writer.createSelection( ranges );
     *
     *    // Creates selection from the other selection.
     *    const otherSelection = writer.createSelection();
     *    const selection = writer.createSelection( otherSelection );
     *
     *    // Creates selection from the document selection.
     *    const selection = writer.createSelection( editor.editing.view.document.selection );
     *
     *         // Creates selection at the given position.
     *    const position = writer.createPositionFromPath( root, path );
     *    const selection = writer.createSelection( position );
     *
     *    // Creates collapsed selection at the position of given item and offset.
     *    const paragraph = writer.createContainerElement( 'paragraph' );
     *    const selection = writer.createSelection( paragraph, offset );
     *
     *    // Creates a range inside an {@link module:engine/view/element~Element element} which starts before the
     *    // first child of that element and ends after the last child of that element.
     *    const selection = writer.createSelection( paragraph, 'in' );
     *
     *    // Creates a range on an {@link module:engine/view/item~Item item} which starts before the item and ends
     *    // just after the item.
     *    const selection = writer.createSelection( paragraph, 'on' );
     *
     * `Selection`'s constructor allow passing additional options (`backward`, `fake` and `label`) as the last argument.
     *
     *    // Creates backward selection.
     *    const selection = writer.createSelection( range, { backward: true } );
     *
     * Fake selection does not render as browser native selection over selected elements and is hidden to the user.
     * This way, no native selection UI artifacts are displayed to the user and selection over elements can be
     * represented in other way, for example by applying proper CSS class.
     *
     * Additionally fake's selection label can be provided. It will be used to describe fake selection in DOM
     * (and be  properly handled by screen readers).
     *
     *    // Creates fake selection with label.
     *    const selection = writer.createSelection( range, { fake: true, label: 'foo' } );
     *
     */
    createSelection(
        selectable?: Selectable,
        placeOrOffset?: number | "before" | "end" | "after" | "on" | "in",
        options?: {
            backward?: boolean;
            fake?: boolean;
            label?: string;
        },
    ): Selection;
}
