import ObservableMixin from "@ckeditor/ckeditor5-utils/src/observablemixin";
import Batch from "./batch";
import Document from "./document";
import DocumentFragment from "./documentfragment";
import DocumentSelection from "./documentselection";
import Element from "./element";
import { Item } from "./item";
import MarkerCollection from "./markercollection";
import Operation from "./operation/operation";
import Position, { PositionStickiness } from "./position";
import Range from "./range";
import Schema from "./schema";
import Selection, { Selectable } from "./selection";
import Writer from "./writer";

/**
 * Editor's data model. Read about the model in the
 * {@glink framework/guides/architecture/editing-engine engine architecture guide}.
 */
export default class Model extends ObservableMixin {
    readonly markers: MarkerCollection;
    readonly document: Document;
    readonly schema: Schema;

    /**
     * The `change()` method is the primary way of changing the model. You should use it to modify all document nodes
     * (including detached nodes – i.e. nodes not added to the {@link module:engine/model/model~Model#document model document}),
     * the {@link module:engine/model/document~Document#selection document's selection}, and
     * {@link module:engine/model/model~Model#markers model markers}.
     *
     *        model.change( writer => {
     *            writer.insertText( 'foo', paragraph, 'end' );
     *        } );
     *
     * All changes inside the change block use the same {@link module:engine/model/batch~Batch} so they are combined
     * into a single undo step.
     *
     *        model.change( writer => {
     *            writer.insertText( 'foo', paragraph, 'end' ); // foo.
     *
     *            model.change( writer => {
     *                writer.insertText( 'bar', paragraph, 'end' ); // foobar.
     *            } );
     *
     *             writer.insertText( 'bom', paragraph, 'end' ); // foobarbom.
     *        } );
     *
     * The callback of the `change()` block is executed synchronously.
     *
     * You can also return a value from the change block.
     *
     *        const img = model.change( writer => {
     *            return writer.createElement( 'img' );
     *        } );
     *
     * @see #enqueueChange
     */
    change<T = unknown>(callback: (writer: Writer) => T): T;

    /**
     * The `enqueueChange()` method performs similar task as the {@link #change `change()` method}, with two major differences.
     *
     * First, the callback of `enqueueChange()` is executed when all other enqueued changes are done. It might be executed
     * immediately if it is not nested in any other change block, but if it is nested in another (enqueue)change block,
     * it will be delayed and executed after the outermost block.
     *
     *        model.change( writer => {
     *            console.log( 1 );
     *
     *            model.enqueueChange( writer => {
     *                console.log( 2 );
     *            } );
     *
     *             console.log( 3 );
     *        } ); // Will log: 1, 3, 2.
     *
     * In addition to that, the changes enqueued with `enqueueChange()` will be converted separately from the changes
     * done in the outer `change()` block.
     *
     * Second, it lets you define the {@link module:engine/model/batch~Batch} into which you want to add your changes.
     * By default, a new batch is created. In the sample above, `change` and `enqueueChange` blocks use a different
     * batch (and different {@link module:engine/model/writer~Writer} since each of them operates on the separate batch).
     *
     * When using the `enqueueChange()` block you can also add some changes to the batch you used before.
     *
     *        model.enqueueChange( batch, writer => {
     *            writer.insertText( 'foo', paragraph, 'end' );
     *        } );
     *
     * In order to make a nested `enqueueChange()` create a single undo step together with the changes done in the outer `change()`
     * block, you can obtain the batch instance from the  {@link module:engine/model/writer~Writer#batch writer} of the outer block.
     */
    enqueueChange(batchOrType: Batch | "transparent" | "default", callback: (writer: Writer) => void): void;

    /**
     * {@link module:utils/observablemixin~ObservableMixin#decorate Decorated} function for applying
     * {@link module:engine/model/operation/operation~Operation operations} to the model.
     *
     * This is a low-level way of changing the model. It is exposed for very specific use cases (like the undo feature).
     * Normally, to modify the model, you will want to use {@link module:engine/model/writer~Writer `Writer`}.
     * See also {@glink framework/guides/architecture/editing-engine#changing-the-model Changing the model} section
     * of the {@glink framework/guides/architecture/editing-engine Editing architecture} guide.
     */
    applyOperation(operation: Operation): void;

    /**
     * Inserts content at the position in the editor specified by the selection, as one would expect the paste
     * functionality to work.
     *
     * This is a high-level method. It takes the {@link #schema schema} into consideration when inserting
     * the content, clears the given selection's content before inserting nodes and moves the selection
     * to its target position at the end of the process.
     * It can split elements, merge them, wrap bare text nodes with paragraphs, etc. &mdash; just like the
     * pasting feature should do.
     *
     * For lower-level methods see {@link module:engine/model/writer~Writer `Writer`}.
     *
     * This method, unlike {@link module:engine/model/writer~Writer `Writer`}'s methods, does not have to be used
     * inside a {@link #change `change()` block}.
     *
     * # Conversion and schema
     *
     * Inserting elements and text nodes into the model is not enough to make CKEditor 5 render that content
     * to the user. CKEditor 5 implements a model-view-controller architecture and what `model.insertContent()` does
     * is only adding nodes to the model. Additionally, you need to define
     * {@glink framework/guides/architecture/editing-engine#conversion converters} between the model and view
     * and define those nodes in the {@glink framework/guides/architecture/editing-engine#schema schema}.
     *
     * So, while this method may seem similar to CKEditor 4 `editor.insertHtml()` (in fact, both methods
     * are used for paste-like content insertion), the CKEditor 5 method cannot be use to insert arbitrary HTML
     * unless converters are defined for all elements and attributes in that HTML.
     *
     * # Examples
     *
     * Using `insertContent()` with a manually created model structure:
     *
     *        // Let's create a document fragment containing such content as:
     *        //
     *        // <paragraph>foo</paragraph>
     *        // <blockQuote>
     *        //    <paragraph>bar</paragraph>
     *        // </blockQuote>
     *        const docFrag = editor.model.change( writer => {
     *            const p1 = writer.createElement( 'paragraph' );
     *            const p2 = writer.createElement( 'paragraph' );
     *            const blockQuote = writer.createElement( 'blockQuote' );
     *            const docFrag = writer.createDocumentFragment();
     *
     *            writer.append( p1, docFrag );
     *            writer.append( blockQuote, docFrag );
     *            writer.append( p2, blockQuote );
     *            writer.insertText( 'foo', p1 );
     *            writer.insertText( 'bar', p2 );
     *
     *            return docFrag;
     *        } );
     *
     *        // insertContent() does not have to be used in a change() block. It can, though,
     *        // so this code could be moved to the callback defined above.
     *        editor.model.insertContent( docFrag );
     *
     * Using `insertContent()` with an HTML string converted to a model document fragment (similar to the pasting mechanism):
     *
     *        // You can create your own HtmlDataProcessor instance or use editor.data.processor
     *        // if you have not overridden the default one (which is the HtmlDataProcessor instance).
     *        const htmlDP = new HtmlDataProcessor( viewDocument );
     *
     *        // Convert an HTML string to a view document fragment:
     *        const viewFragment = htmlDP.toView( htmlString );
     *
     *        // Convert the view document fragment to a model document fragment
     *        // in the context of $root. This conversion takes the schema into
     *        // account so if, for example, the view document fragment contained a bare text node,
     *        // this text node cannot be a child of $root, so it will be automatically
     *        // wrapped with a <paragraph>. You can define the context yourself (in the second parameter),
     *        // and e.g. convert the content like it would happen in a <paragraph>.
     *        // Note: The clipboard feature uses a custom context called $clipboardHolder
     *        // which has a loosened schema.
     *        const modelFragment = editor.data.toModel( viewFragment );
     *
     *        editor.model.insertContent( modelFragment );
     *
     * By default this method will use the document selection but it can also be used with a position, range or selection instance.
     *
     *        // Insert text at the current document selection position.
     *        editor.model.change( writer => {
     *            editor.model.insertContent( writer.createText( 'x' ) );
     *        } );
     *
     *        // Insert text at a given position - the document selection will not be modified.
     *        editor.model.change( writer => {
     *            editor.model.insertContent( writer.createText( 'x' ), doc.getRoot(), 2 );
     *
     *            // Which is a shorthand for:
     *            editor.model.insertContent( writer.createText( 'x' ), writer.createPositionAt( doc.getRoot(), 2 ) );
     *        } );
     *
     * If you want the document selection to be moved to the inserted content, use the
     * {@link module:engine/model/writer~Writer#setSelection `setSelection()`} method of the writer after inserting
     * the content:
     *
     *        editor.model.change( writer => {
     *            const paragraph = writer.createElement( 'paragraph' );
     *
     *            // Insert an empty paragraph at the beginning of the root.
     *            editor.model.insertContent( paragraph, writer.createPositionAt( editor.model.document.getRoot(), 0 ) );
     *
     *            // Move the document selection to the inserted paragraph.
     *            writer.setSelection( paragraph, 'in' );
     *        } );
     *
     * If an instance of the {@link module:engine/model/selection~Selection model selection} is passed as `selectable`,
     * the new content will be inserted at the passed selection (instead of document selection):
     *
     *        editor.model.change( writer => {
     *            // Create a selection in a paragraph that will be used as a place of insertion.
     *            const selection = writer.createSelection( paragraph, 'in' );
     *
     *            // Insert the new text at the created selection.
     *            editor.model.insertContent( writer.createText( 'x' ), selection );
     *
     *            // insertContent() modifies the passed selection instance so it can be used to set the document selection.
     *            // Note: This is not necessary when you passed the document selection to insertContent().
     *            writer.setSelection( selection );
     *        } );
     *
     * @fires insertContent
     */
    insertContent(
        content: DocumentFragment,
        selectable?: Selectable,
        placeOrOffset?: number | "before" | "end" | "after" | "on" | "in",
    ): Range;

    /**
     * Deletes content of the selection and merge siblings. The resulting selection is always collapsed.
     *
     * **Note:** For the sake of predictability, the resulting selection should always be collapsed.
     * In cases where a feature wants to modify deleting behavior so selection isn't collapsed
     * (e.g. a table feature may want to keep row selection after pressing <kbd>Backspace</kbd>),
     * then that behavior should be implemented in the view's listener. At the same time, the table feature
     * will need to modify this method's behavior too, e.g. to "delete contents and then collapse
     * the selection inside the last selected cell" or "delete the row and collapse selection somewhere near".
     * That needs to be done in order to ensure that other features which use `deleteContent()` will work well with tables.
     *
     * @fires deleteContent
     *
     * For example `<heading1>x[x</heading1><paragraph>y]y</paragraph>` will become:
     *
     * * `<heading1>x^y</heading1>` with the option disabled (`leaveUnmerged == false`)
     * * `<heading1>x^</heading1><paragraph>y</paragraph>` with enabled (`leaveUnmerged == true`).
     *
     * Note: {@link module:engine/model/schema~Schema#isObject object} and {@link module:engine/model/schema~Schema#isLimit limit}
     * elements will not be merged.
     *
     */
    deleteContent(
        selection: Selection | DocumentSelection,
        options?: {
            leaveUnmerged?: boolean;
            doNotResetEntireContent?: boolean;
            doNotAutoparagraph?: boolean;
            direction?: "forward" | "backward";
        },
    ): void;

    /**
     * Modifies the selection. Currently, the supported modifications are:
     *
     * * Extending. The selection focus is moved in the specified `options.direction` with a step specified in `options.unit`.
     * Possible values for `unit` are:
     *  * `'character'` (default) - moves selection by one user-perceived character. In most cases this means moving by one
     *  character in `String` sense. However, unicode also defines "combing marks". These are special symbols, that combines
     *  with a symbol before it ("base character") to create one user-perceived character. For example, `q̣̇` is a normal
     *  letter `q` with two "combining marks": upper dot (`Ux0307`) and lower dot (`Ux0323`). For most actions, i.e. extending
     *  selection by one position, it is correct to include both "base character" and all of it's "combining marks". That is
     *  why `'character'` value is most natural and common method of modifying selection.
     *  * `'codePoint'` - moves selection by one unicode code point. In contrary to, `'character'` unit, this will insert
     *  selection between "base character" and "combining mark", because "combining marks" have their own unicode code points.
     *  However, for technical reasons, unicode code points with values above `UxFFFF` are represented in native `String` by
     *  two characters, called "surrogate pairs". Halves of "surrogate pairs" have a meaning only when placed next to each other.
     *  For example `𨭎` is represented in `String` by `\uD862\uDF4E`. Both `\uD862` and `\uDF4E` do not have any meaning
     *  outside the pair (are rendered as ? when alone). Position between them would be incorrect. In this case, selection
     *  extension will include whole "surrogate pair".
     *  * `'word'` - moves selection by a whole word.
     *
     * **Note:** if you extend a forward selection in a backward direction you will in fact shrink it.
     *
     * @fires modifySelection
     */
    modifySelection(
        selection: Selection | DocumentSelection,
        options?: {
            direction?: "backward" | "forward";
            unit?: "character" | "codePoint" | "word";
        },
    ): void;

    /**
     * Gets a clone of the selected content.
     *
     * For example, for the following selection:
     *
     * ```html
     * <paragraph>x</paragraph>
     * <blockQuote>
     *    <paragraph>y</paragraph>
     *    <heading1>fir[st</heading1>
     * </blockQuote>
     * <paragraph>se]cond</paragraph>
     * <paragraph>z</paragraph>
     * ```
     *
     * It will return a document fragment with such a content:
     *
     * ```html
     * <blockQuote>
     *    <heading1>st</heading1>
     * </blockQuote>
     * <paragraph>se</paragraph>
     * ```
     *
     * @fires getSelectedContent
     */
    getSelectedContent(selection: Selection | DocumentSelection): DocumentFragment;

    /**
     * Checks whether the given {@link module:engine/model/range~Range range} or
     * {@link module:engine/model/element~Element element} has any meaningful content.
     *
     * Meaningful content is:
     *
     * * any text node (`options.ignoreWhitespaces` allows controlling whether this text node must also contain
     * any non-whitespace characters),
     * * or any {@link module:engine/model/schema~Schema#isContent content element},
     * * or any {@link module:engine/model/markercollection~Marker marker} which
     * {@link module:engine/model/markercollection~Marker#_affectsData affects data}.
     *
     * This means that a range containing an empty `<paragraph></paragraph>` is not considered to have a meaningful content.
     * However, a range containing an `<image></image>` (which would normally be marked in the schema as an object element)
     * is considered non-empty.
     */
    hasContent(
        rangeOrElement: Range | Element,
        options?: { ignoreWhitespaces?: boolean; ignoreMarkers?: boolean },
    ): boolean;

    /**
     * Creates a position from the given root and path in that root.
     *
     * Note: This method is also available as
     * {@link module:engine/model/writer~Writer#createPositionFromPath `Writer#createPositionFromPath()`}.
     */
    createPositionFromPath(root: Element | DocumentFragment, path: number[], stickiness?: PositionStickiness): Position;

    /**
     * Creates position at the given location. The location can be specified as:
     *
     * * a {@link module:engine/model/position~Position position},
     * * a parent element and offset in that element,
     * * a parent element and `'end'` (the position will be set at the end of that element),
     * * a {@link module:engine/model/item~Item model item} and `'before'` or `'after'`
     * (the position will be set before or after the given model item).
     *
     * This method is a shortcut to other factory methods such as:
     *
     * * {@link module:engine/model/model~Model#createPositionBefore `createPositionBefore()`},
     * * {@link module:engine/model/model~Model#createPositionAfter `createPositionAfter()`}.
     *
     * Note: This method is also available as
     * {@link module:engine/model/writer~Writer#createPositionAt `Writer#createPositionAt()`},
     *
     */
    createPositionAt(itemOrPosition: Position): Position;
    createPositionAt(itemOrPosition: Item, offset?: number | "end" | "before" | "after"): Position;

    /**
     * Creates a new position after the given {@link module:engine/model/item~Item model item}.
     *
     * Note: This method is also available as
     * {@link module:engine/model/writer~Writer#createPositionAfter `Writer#createPositionAfter()`}.
     */
    createPositionAfter(item: Item): Position;

    /**
     * Creates a new position before the given {@link module:engine/model/item~Item model item}.
     *
     * Note: This method is also available as
     * {@link module:engine/model/writer~Writer#createPositionBefore `Writer#createPositionBefore()`}.
     */
    createPositionBefore(item: Item): Position;

    /**
     * Creates a range spanning from the `start` position to the `end` position.
     *
     * Note: This method is also available as
     * {@link module:engine/model/writer~Writer#createRange `Writer#createRange()`}:
     *
     *        model.change( writer => {
     *            const range = writer.createRange( start, end );
     *        } );
     */
    createRange(start: Position, end?: Position): Range;

    /**
     * Creates a range inside the given element which starts before the first child of
     * that element and ends after the last child of that element.
     *
     * Note: This method is also available as
     * {@link module:engine/model/writer~Writer#createRangeIn `Writer#createRangeIn()`}:
     *
     *        model.change( writer => {
     *            const range = writer.createRangeIn( paragraph );
     *        } );
     */
    createRangeIn(element: Element): Range;

    /**
     * Creates a range that starts before the given {@link module:engine/model/item~Item model item} and ends after it.
     *
     * Note: This method is also available on `writer` instance as
     * {@link module:engine/model/writer~Writer#createRangeOn `Writer.createRangeOn()`}:
     *
     *        model.change( writer => {
     *            const range = writer.createRangeOn( paragraph );
     *        } );
     */
    createRangeOn(item: Item): Range;

    /**
     * Creates a new selection instance based on the given {@link module:engine/model/selection~Selectable selectable}
     * or creates an empty selection if no arguments were passed.
     *
     * Note: This method is also available as
     * {@link module:engine/model/writer~Writer#createSelection `Writer#createSelection()`}.
     *
     *        // Creates empty selection without ranges.
     *        const selection = writer.createSelection();
     *
     *        // Creates selection at the given range.
     *        const range = writer.createRange( start, end );
     *        const selection = writer.createSelection( range );
     *
     *        // Creates selection at the given ranges
     *        const ranges = [ writer.createRange( start1, end2 ), writer.createRange( star2, end2 ) ];
     *        const selection = writer.createSelection( ranges );
     *
     *        // Creates selection from the other selection.
     *        // Note: It doesn't copies selection attributes.
     *        const otherSelection = writer.createSelection();
     *        const selection = writer.createSelection( otherSelection );
     *
     *        // Creates selection from the given document selection.
     *        // Note: It doesn't copies selection attributes.
     *        const documentSelection = model.document.selection;
     *        const selection = writer.createSelection( documentSelection );
     *
     *        // Creates selection at the given position.
     *        const position = writer.createPositionFromPath( root, path );
     *        const selection = writer.createSelection( position );
     *
     *        // Creates selection at the given offset in the given element.
     *        const paragraph = writer.createElement( 'paragraph' );
     *        const selection = writer.createSelection( paragraph, offset );
     *
     *        // Creates a range inside an {@link module:engine/model/element~Element element} which starts before the
     *        // first child of that element and ends after the last child of that element.
     *        const selection = writer.createSelection( paragraph, 'in' );
     *
     *        // Creates a range on an {@link module:engine/model/item~Item item} which starts before the item and ends
     *        // just after the item.
     *        const selection = writer.createSelection( paragraph, 'on' );
     *
     *        // Additional options (`'backward'`) can be specified as the last argument.
     *
     *        // Creates backward selection.
     *        const selection = writer.createSelection( range, { backward: true } );
     */
    createSelection(
        selectable: Selectable,
        placeOrOffset?: number | "before" | "end" | "after" | "on" | "in",
        options?: {
            backward?: boolean;
        },
    ): Selection;

    /**
     * Creates a {@link module:engine/model/batch~Batch} instance.
     *
     * **Note:** In most cases creating a batch instance is not necessary as they are created when using:
     *
     * * {@link #change `change()`},
     * * {@link #enqueueChange `enqueueChange()`}.
     */
    createBatch(type?: "transparent" | "default"): Batch;

    /**
     * Creates an operation instance from a JSON object (parsed JSON string).
     *
     * This is an alias for {@link module:engine/model/operation/operationfactory~OperationFactory.fromJSON `OperationFactory.fromJSON()`}.
     */
    createOperationFromJSON(json: Record<string, unknown>): Operation;

    /**
     * Removes all events listeners set by model instance and destroys {@link module:engine/model/document~Document}.
     */
    destroy(): void;
}
