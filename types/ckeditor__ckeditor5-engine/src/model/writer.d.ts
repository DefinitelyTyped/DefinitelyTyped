import Batch from "./batch";
import DocumentFragment from "./documentfragment";
import Element from "./element";
import Model from "./model";
import Node from "./node";
import Position, { PositionStickiness } from "./position";
import Range from "./range";
import Selection, { Selectable } from "./selection";
import Text from "./text";
import { Item } from "./item";
import { Marker } from "./markercollection";

type Attributes = Record<string, unknown> | Array<[string, unknown]> | Map<string, unknown>;
type Offset = number | "end" | "before" | "after";

/**
 * The model can only be modified by using the writer. It should be used whenever you want to create a node, modify
 * child nodes, attributes or text, set the selection's position and its attributes.
 *
 * The instance of the writer is only available in the {@link module:engine/model/model~Model#change `change()`} or
 * {@link module:engine/model/model~Model#enqueueChange `enqueueChange()`}.
 *
 *        model.change( writer => {
 *            writer.insertText( 'foo', paragraph, 'end' );
 *        } );
 *
 * Note that the writer should never be stored and used outside of the `change()` and
 * `enqueueChange()` blocks.
 *
 * Note that writer's methods do not check the {@link module:engine/model/schema~Schema}. It is possible
 * to create incorrect model structures by using the writer. Read more about in
 * {@glink framework/guides/deep-dive/schema#who-checks-the-schema "Who checks the schema?"}.
 *
 * @see module:engine/model/model~Model#change
 * @see module:engine/model/model~Model#enqueueChange
 */
export default class Writer {
    /**
     * Creates a writer instance.
     *
     * **Note:** It is not recommended to use it directly. Use {@link module:engine/model/model~Model#change `Model#change()`} or
     * {@link module:engine/model/model~Model#enqueueChange `Model#enqueueChange()`} instead.
     */
    constructor(model: Model, batch: Batch);
    readonly model: Model;
    readonly batch: Batch;

    /**
     * Creates a new {@link module:engine/model/text~Text text node}.
     *
     *        writer.createText( 'foo' );
     *        writer.createText( 'foo', { bold: true } );
     */
    createText(data: string, attributes?: Attributes): Text;

    /**
     * Creates a new {@link module:engine/model/element~Element element}.
     *
     *        writer.createElement( 'paragraph' );
     *        writer.createElement( 'paragraph', { alignment: 'center' } );
     */
    createElement(name: string, attributes?: Attributes): Element;

    /**
     * Creates a new {@link module:engine/model/documentfragment~DocumentFragment document fragment}.
     */
    createDocumentFragment(): DocumentFragment;

    /**
     * Creates a copy of the element and returns it. Created element has the same name and attributes as the original element.
     * If clone is deep, the original element's children are also cloned. If not, then empty element is returned.
     */
    cloneElement(element: Element, deep?: boolean): Element;

    /**
     * Inserts item on given position.
     *
     *        const paragraph = writer.createElement( 'paragraph' );
     *        writer.insert( paragraph, position );
     *
     * Instead of using position you can use parent and offset:
     *
     *        const text = writer.createText( 'foo' );
     *        writer.insert( text, paragraph, 5 );
     *
     * You can also use `end` instead of the offset to insert at the end:
     *
     *        const text = writer.createText( 'foo' );
     *        writer.insert( text, paragraph, 'end' );
     *
     * Or insert before or after another element:
     *
     *        const paragraph = writer.createElement( 'paragraph' );
     *        writer.insert( paragraph, anotherParagraph, 'after' );
     *
     * These parameters works the same way as {@link #createPositionAt `writer.createPositionAt()`}.
     *
     * Note that if the item already has parent it will be removed from the previous parent.
     *
     * Note that you cannot re-insert a node from a document to a different document or a document fragment. In this case,
     * `model-writer-insert-forbidden-move` is thrown.
     *
     * If you want to move {@link module:engine/model/range~Range range} instead of an
     * {@link module:engine/model/item~Item item} use {@link module:engine/model/writer~Writer#move `Writer#move()`}.
     *
     * **Note:** For a paste-like content insertion mechanism see
     * {@link module:engine/model/model~Model#insertContent `model.insertContent()`}.
     */
    insert(item: Item | DocumentFragment, itemOrPosition: Position): void;
    insert(item: Item | DocumentFragment, itemOrPosition: Item, offset?: Offset): void;

    /**
     * Creates and inserts text on given position. You can optionally set text attributes:
     *
     *        writer.insertText( 'foo', position );
     *        writer.insertText( 'foo', { bold: true }, position );
     *
     * Instead of using position you can use parent and offset or define that text should be inserted at the end
     * or before or after other node:
     *
     *        // Inserts 'foo' in paragraph, at offset 5:
     *        writer.insertText( 'foo', paragraph, 5 );
     *        // Inserts 'foo' at the end of a paragraph:
     *        writer.insertText( 'foo', paragraph, 'end' );
     *        // Inserts 'foo' after an image:
     *        writer.insertText( 'foo', image, 'after' );
     *
     * These parameters work in the same way as {@link #createPositionAt `writer.createPositionAt()`}.
     */
    insertText(text: string, itemOrPosition: Position): void;
    insertText(text: string, itemOrPosition: Item, offset?: Offset): void;
    insertText(text: string, attributes: Attributes, itemOrPosition: Position): void;
    insertText(
        text: string,
        attributes: Attributes,
        itemOrPosition: Item,
        offset?: number | "end" | "before" | "after",
    ): void;

    /**
     * Creates and inserts element on given position. You can optionally set attributes:
     *
     *        writer.insertElement( 'paragraph', position );
     *        writer.insertElement( 'paragraph', { alignment: 'center' }, position );
     *
     * Instead of using position you can use parent and offset or define that text should be inserted at the end
     * or before or after other node:
     *
     *        // Inserts paragraph in the root at offset 5:
     *        writer.insertElement( 'paragraph', root, 5 );
     *        // Inserts paragraph at the end of a blockquote:
     *        writer.insertElement( 'paragraph', blockquote, 'end' );
     *        // Inserts after an image:
     *        writer.insertElement( 'paragraph', image, 'after' );
     *
     * These parameters works the same way as {@link #createPositionAt `writer.createPositionAt()`}.
     */
    insertElement(name: string, itemOrPosition: Position): void;
    insertElement(name: string, itemOrPosition: Item, offset?: Offset): void;
    insertElement(name: string, attributes: Attributes, itemOrPosition: Position): void;
    insertElement(name: string, attributes: Attributes, itemOrPosition: Item, offset?: Offset): void;

    /**
     * Inserts item at the end of the given parent.
     *
     *        const paragraph = writer.createElement( 'paragraph' );
     *        writer.append( paragraph, root );
     *
     * Note that if the item already has parent it will be removed from the previous parent.
     *
     * If you want to move {@link module:engine/model/range~Range range} instead of an
     * {@link module:engine/model/item~Item item} use {@link module:engine/model/writer~Writer#move `Writer#move()`}.
     */
    append(item: Item | DocumentFragment, parent: Element | DocumentFragment): void;

    /**
     * Creates text node and inserts it at the end of the parent. You can optionally set text attributes:
     *
     *        writer.appendText( 'foo', paragraph );
     *        writer.appendText( 'foo', { bold: true }, paragraph );
     */
    appendText(text: string, parent: Element | DocumentFragment): void;
    appendText(text: string, attributes: Attributes, parent: Element | DocumentFragment): void;

    /**
     * Creates element and inserts it at the end of the parent. You can optionally set attributes:
     *
     *        writer.appendElement( 'paragraph', root );
     *        writer.appendElement( 'paragraph', { alignment: 'center' }, root );
     */
    appendElement(name: string, parent: Element | DocumentFragment): void;
    appendElement(name: string, attributes: Attributes, parent: Element | DocumentFragment): void;

    /**
     * Sets value of the attribute with given key on a {@link module:engine/model/item~Item model item}
     * or on a {@link module:engine/model/range~Range range}.
     */
    setAttribute(key: string, value: unknown, itemOrRange: Item | Range): void;

    /**
     * Sets values of attributes on a {@link module:engine/model/item~Item model item}
     * or on a {@link module:engine/model/range~Range range}.
     *
     *        writer.setAttributes( {
     *            bold: true,
     *            italic: true
     *        }, range );
     */
    setAttributes(attributes: Attributes, itemOrRange: Item | Range): void;

    /**
     * Removes an attribute with given key from a {@link module:engine/model/item~Item model item}
     * or from a {@link module:engine/model/range~Range range}.
     */
    removeAttribute(key: string, itemOrRange: Item | Range): void;

    /**
     * Removes all attributes from all elements in the range or from the given item.
     */
    clearAttributes(itemOrRange: Item | Range): void;

    /**
     * Moves all items in the source range to the target position.
     *
     *        writer.move( sourceRange, targetPosition );
     *
     * Instead of the target position you can use parent and offset or define that range should be moved to the end
     * or before or after chosen item:
     *
     *        // Moves all items in the range to the paragraph at offset 5:
     *        writer.move( sourceRange, paragraph, 5 );
     *        // Moves all items in the range to the end of a blockquote:
     *        writer.move( sourceRange, blockquote, 'end' );
     *        // Moves all items in the range to a position after an image:
     *        writer.move( sourceRange, image, 'after' );
     *
     * These parameters works the same way as {@link #createPositionAt `writer.createPositionAt()`}.
     *
     * Note that items can be moved only within the same tree. It means that you can move items within the same root
     * (element or document fragment) or between {@link module:engine/model/document~Document#roots documents roots},
     * but you can not move items from document fragment to the document or from one detached element to another. Use
     * {@link module:engine/model/writer~Writer#insert} in such cases.
     */
    move(range: Range, itemOrPosition: Position): void;
    move(range: Range, itemOrPosition: Item, offset?: Offset): void;

    /**
     * Removes given model {@link module:engine/model/item~Item item} or {@link module:engine/model/range~Range range}.
     */
    remove(itemOrRange: Item | Range): void;

    /**
     * Merges two siblings at the given position.
     *
     * Node before and after the position have to be an element. Otherwise `writer-merge-no-element-before` or
     * `writer-merge-no-element-after` error will be thrown.
     */
    merge(position: Position): void;

    /**
     * Shortcut for {@link module:engine/model/model~Model#createPositionFromPath `Model#createPositionFromPath()`}.
     */
    createPositionFromPath(root: Element | DocumentFragment, path: number[], stickiness?: PositionStickiness): Position;

    /**
     * Shortcut for {@link module:engine/model/model~Model#createPositionAt `Model#createPositionAt()`}.
     */
    createPositionAt(itemOrPosition: Position): Position;
    createPositionAt(itemOrPosition: Item, offset?: Offset): Position;

    /**
     * Shortcut for {@link module:engine/model/model~Model#createPositionAfter `Model#createPositionAfter()`}.
     */
    createPositionAfter(item: Item): void;

    /**
     * Shortcut for {@link module:engine/model/model~Model#createPositionBefore `Model#createPositionBefore()`}.
     */
    createPositionBefore(item: Item): Position;

    /**
     * Shortcut for {@link module:engine/model/model~Model#createRange `Model#createRange()`}.
     */
    createRange(start: Position, end?: Position): Range;

    /**
     * Shortcut for {@link module:engine/model/model~Model#createRangeIn `Model#createRangeIn()`}.
     */
    createRangeIn(element: Element): Range;

    /**
     * Shortcut for {@link module:engine/model/model~Model#createRangeOn `Model#createRangeOn()`}.
     */
    createRangeOn(element: Element): Range;

    /**
     * Shortcut for {@link module:engine/model/model~Model#createSelection `Model#createSelection()`}.
     */
    createSelection(selectable: Selectable, placeOrOffset?: Offset, options?: { backward?: boolean }): Selection;

    /**
     * Renames the given element.
     */
    rename(element: Element, newName: string): void;

    /**
     * Splits elements starting from the given position and going to the top of the model tree as long as given
     * `limitElement` is reached. When `limitElement` is not defined then only the parent of the given position will be split.
     *
     * The element needs to have a parent. It cannot be a root element nor a document fragment.
     * The `writer-split-element-no-parent` error will be thrown if you try to split an element with no parent.
     */
    split(position: Position, limitElement?: Node): { position: Position; range: Range };

    /**
     * Wraps the given range with the given element or with a new element (if a string was passed).
     *
     * **Note:** range to wrap should be a "flat range" (see {@link module:engine/model/range~Range#isFlat `Range#isFlat`}).
     * If not, an error will be thrown.
     */
    wrap(range: Range, elementOrString: Element | string): void;

    /**
     * Unwraps children of the given element – all its children are moved before it and then the element is removed.
     * Throws error if you try to unwrap an element which does not have a parent.
     */
    unwrap(element: Element): void;

    /**
     * Adds a {@link module:engine/model/markercollection~Marker marker}. Marker is a named range, which tracks
     * changes in the document and updates its range automatically, when model tree changes.
     *
     * As the first parameter you can set marker name.
     *
     * The required `options.usingOperation` parameter lets you decide if the marker should be managed by operations or not. See
     * {@link module:engine/model/markercollection~Marker marker class description} to learn about the difference between
     * markers managed by operations and not-managed by operations.
     *
     * The `options.affectsData` parameter, which defaults to `false`, allows you to define if a marker affects the data. It should be
     * `true` when the marker change changes the data returned by the
     * {@link module:core/editor/utils/dataapimixin~DataApi#getData `editor.getData()`} method.
     * When set to `true` it fires the {@link module:engine/model/document~Document#event:change:data `change:data`} event.
     * When set to `false` it fires the {@link module:engine/model/document~Document#event:change `change`} event.
     *
     * Create marker directly base on marker's name:
     *
     *        addMarker( markerName, { range, usingOperation: false } );
     *
     * Create marker using operation:
     *
     *        addMarker( markerName, { range, usingOperation: true } );
     *
     * Create marker that affects the editor data:
     *
     *        addMarker( markerName, { range, usingOperation: false, affectsData: true } );
     *
     * Note: For efficiency reasons, it's best to create and keep as little markers as possible.
     *
     * @see module:engine/model/markercollection~Marker
     */
    addMarker(
        name: string,
        options: {
            usingOperation: boolean;
            range: Range;
            affectsData?: boolean;
        },
    ): Marker;

    /**
     * Adds, updates or refreshes a {@link module:engine/model/markercollection~Marker marker}. Marker is a named range, which tracks
     * changes in the document and updates its range automatically, when model tree changes. Still, it is possible to change the
     * marker's range directly using this method.
     *
     * As the first parameter you can set marker name or instance. If none of them is provided, new marker, with a unique
     * name is created and returned.
     *
     * As the second parameter you can set the new marker data or leave this parameter as empty which will just refresh
     * the marker by triggering downcast conversion for it. Refreshing the marker is useful when you want to change
     * the marker {@link module:engine/view/element~Element view element} without changing any marker data.
     *
     *         let isCommentActive = false;
     *
     *         model.conversion.markerToHighlight( {
     *             model: 'comment',
     *            view: data => {
     *                const classes = [ 'comment-marker' ];
     *
     *                if ( isCommentActive ) {
     *                    classes.push( 'comment-marker--active' );
     *                }
     *
     *                return { classes };
     *            }
     *         } );
     *
     *         // Change the property that indicates if marker is displayed as active or not.
     *         isCommentActive = true;
     *
     *         // And refresh the marker to convert it with additional class.
     *         model.change( writer => writer.updateMarker( 'comment' ) );
     *
     * The `options.usingOperation` parameter lets you change if the marker should be managed by operations or not. See
     * {@link module:engine/model/markercollection~Marker marker class description} to learn about the difference between
     * markers managed by operations and not-managed by operations. It is possible to change this option for an existing marker.
     *
     * The `options.affectsData` parameter, which defaults to `false`, allows you to define if a marker affects the data. It should be
     * `true` when the marker change changes the data returned by
     * the {@link module:core/editor/utils/dataapimixin~DataApi#getData `editor.getData()`} method.
     * When set to `true` it fires the {@link module:engine/model/document~Document#event:change:data `change:data`} event.
     * When set to `false` it fires the {@link module:engine/model/document~Document#event:change `change`} event.
     *
     * Update marker directly base on marker's name:
     *
     *        updateMarker( markerName, { range } );
     *
     * Update marker using operation:
     *
     *        updateMarker( marker, { range, usingOperation: true } );
     *        updateMarker( markerName, { range, usingOperation: true } );
     *
     * Change marker's option (start using operations to manage it):
     *
     *        updateMarker( marker, { usingOperation: true } );
     *
     * Change marker's option (inform the engine, that the marker does not affect the data anymore):
     *
     *        updateMarker( markerName, { affectsData: false } );
     *
     * @see module:engine/model/markercollection~Marker
     */
    updateMarker(
        markerOrName: string | Marker,
        options: {
            range?: Range;
            usingOperation?: boolean;
            affectsData?: boolean;
        },
    ): void;

    /**
     * Removes given {@link module:engine/model/markercollection~Marker marker} or marker with given name.
     * The marker is removed accordingly to how it has been created, so if the marker was created using operation,
     * it will be destroyed using operation.
     */
    removeMarker(markerOrName: Marker | string): void;

    /**
     * Sets the document's selection (ranges and direction) to the specified location based on the given
     * {@link module:engine/model/selection~Selectable selectable} or creates an empty selection if no arguments were passed.
     *
     *        // Sets selection to the given range.
     *        const range = writer.createRange( start, end );
     *        writer.setSelection( range );
     *
     *        // Sets selection to given ranges.
     *        const ranges = [ writer.createRange( start1, end2 ), writer.createRange( star2, end2 ) ];
     *        writer.setSelection( ranges );
     *
     *        // Sets selection to other selection.
     *        const otherSelection = writer.createSelection();
     *        writer.setSelection( otherSelection );
     *
     *        // Sets selection to the given document selection.
     *        const documentSelection = model.document.selection;
     *        writer.setSelection( documentSelection );
     *
     *        // Sets collapsed selection at the given position.
     *        const position = writer.createPosition( root, path );
     *        writer.setSelection( position );
     *
     *        // Sets collapsed selection at the position of the given node and an offset.
     *        writer.setSelection( paragraph, offset );
     *
     * Creates a range inside an {@link module:engine/model/element~Element element} which starts before the first child of
     * that element and ends after the last child of that element.
     *
     *        writer.setSelection( paragraph, 'in' );
     *
     * Creates a range on an {@link module:engine/model/item~Item item} which starts before the item and ends just after the item.
     *
     *        writer.setSelection( paragraph, 'on' );
     *
     *        // Removes all selection's ranges.
     *        writer.setSelection( null );
     *
     * `Writer#setSelection()` allow passing additional options (`backward`) as the last argument.
     *
     *        // Sets selection as backward.
     *        writer.setSelection( range, { backward: true } );
     *
     * Throws `writer-incorrect-use` error when the writer is used outside the `change()` block.
     */
    setSelection(
        selectable: Selectable,
        placeOrOffset?: Offset,
        options?: {
            backward?: boolean;
        },
    ): void;

    /**
     * Moves {@link module:engine/model/documentselection~DocumentSelection#focus} to the specified location.
     *
     * The location can be specified in the same form as
     * {@link #createPositionAt `writer.createPositionAt()`} parameters.
     */
    setSelectionFocus(itemOrPosition: Item | Position, offset?: Offset): void;

    /**
     * Sets attribute(s) on the selection. If attribute with the same key already is set, it's value is overwritten.
     *
     * Using key and value pair:
     *
     *     writer.setSelectionAttribute( 'italic', true );
     *
     * Using key-value object:
     *
     *     writer.setSelectionAttribute( { italic: true, bold: false } );
     *
     * Using iterable object:
     *
     *     writer.setSelectionAttribute( new Map( [ [ 'italic', true ] ] ) );
     */
    setSelectionAttribute(keyOrObjectOrIterable: string, value: unknown): void;
    setSelectionAttribute(keyOrObjectOrIterable: Attributes): void;

    /**
     * Removes attribute(s) with given key(s) from the selection.
     *
     * Remove one attribute:
     *
     *        writer.removeSelectionAttribute( 'italic' );
     *
     * Remove multiple attributes:
     *
     *        writer.removeSelectionAttribute( [ 'italic', 'bold' ] );
     */
    removeSelectionAttribute(keyOrIterableOfKeys: string | Iterable<string>): void;

    /**
     * Temporarily changes the {@link module:engine/model/documentselection~DocumentSelection#isGravityOverridden gravity}
     * of the selection from left to right.
     *
     * The gravity defines from which direction the selection inherits its attributes. If it's the default left gravity,
     * then the selection (after being moved by the user) inherits attributes from its left-hand side.
     * This method allows to temporarily override this behavior by forcing the gravity to the right.
     *
     * For the following model fragment:
     *
     *        <$text bold="true" linkHref="url">bar[]</$text><$text bold="true">biz</$text>
     *
     * * Default gravity: selection will have the `bold` and `linkHref` attributes.
     * * Overridden gravity: selection will have `bold` attribute.
     *
     * **Note**: It returns an unique identifier which is required to restore the gravity. It guarantees the symmetry
     * of the process.
     */
    overrideSelectionGravity(): string;

    /**
     * Restores {@link ~Writer#overrideSelectionGravity} gravity to default.
     *
     * Restoring the gravity is only possible using the unique identifier returned by
     * {@link ~Writer#overrideSelectionGravity}. Note that the gravity remains overridden as long as won't be restored
     * the same number of times it was overridden.
     */
    restoreSelectionGravity(uid: string): void;
}

export {};
