import EmitterMixin from "@ckeditor/ckeditor5-utils/src/emittermixin";
import DocumentSelection from "./documentselection";
import Element from "./element";
import { Item } from "./item";
import Node from "./node";
import Position from "./position";
import Range from "./range";

/**
 * Selection is a set of {@link module:engine/model/range~Range ranges}. It has a direction specified by its
 * {@link module:engine/model/selection~Selection#anchor anchor} and {@link module:engine/model/selection~Selection#focus focus}
 * (it can be {@link module:engine/model/selection~Selection#isBackward forward or backward}).
 * Additionally, selection may have its own attributes (think – whether text typed in in this selection
 * should have those attributes – e.g. whether you type a bolded text).
 */
export default class Selection extends EmitterMixin {
    /**
     * Creates a new selection instance based on the given {@link module:engine/model/selection~Selectable selectable}
     * or creates an empty selection if no arguments were passed.
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
     * Selection's constructor allow passing additional options (`'backward'`) as the last argument.
     *
     *        // Creates backward selection.
     *        const selection = writer.createSelection( range, { backward: true } );
     */
    constructor(
        selectable: Selectable,
        placeOrOffset?: number | "before" | "end" | "after" | "on" | "in",
        options?: { backward?: boolean },
    );
    /**
     * Selection anchor. Anchor is the position from which the selection was started. If a user is making a selection
     * by dragging the mouse, the anchor is where the user pressed the mouse button (the beginning of the selection).
     *
     * Anchor and {@link #focus} define the direction of the selection, which is important
     * when expanding/shrinking selection. The focus moves, while the anchor should remain in the same place.
     *
     * Anchor is always set to the {@link module:engine/model/range~Range#start start} or
     * {@link module:engine/model/range~Range#end end} position of the last of selection's ranges. Whether it is
     * the `start` or `end` depends on the specified `options.backward`. See the {@link #setTo `setTo()`} method.
     *
     * May be set to `null` if there are no ranges in the selection.
     *
     * @see #focus
     */
    get anchor(): Position | null;
    /**
     * Selection focus. Focus is the position where the selection ends. If a user is making a selection
     * by dragging the mouse, the focus is where the mouse cursor is.
     *
     * May be set to `null` if there are no ranges in the selection.
     *
     * @see #anchor
     */
    get focus(): Position | null;
    /**
     * Whether the selection is collapsed. Selection is collapsed when there is exactly one range in it
     * and it is collapsed.
     */
    get isCollapsed(): boolean;
    /**
     * Returns the number of ranges in the selection.
     */
    get rangeCount(): number;
    /**
     * Specifies whether the selection's {@link #focus} precedes the selection's {@link #anchor}.
     */
    get isBackward(): boolean;
    /**
     * Checks whether this selection is equal to the given selection. Selections are equal if they have the same directions,
     * the same number of ranges and all ranges from one selection equal to ranges from the another selection.
     */
    isEqual(otherSelection: Selection | DocumentSelection): boolean;
    /**
     * Returns an iterable object that iterates over copies of selection ranges.
     */
    getRanges(): Iterable<Range>;
    /**
     * Returns a copy of the first range in the selection.
     * First range is the one which {@link module:engine/model/range~Range#start start} position
     * {@link module:engine/model/position~Position#isBefore is before} start position of all other ranges
     * (not to confuse with the first range added to the selection).
     *
     * Returns `null` if there are no ranges in selection.
     */
    getFirstRange(): Range | null;
    /**
     * Returns a copy of the last range in the selection.
     * Last range is the one which {@link module:engine/model/range~Range#end end} position
     * {@link module:engine/model/position~Position#isAfter is after} end position of all other ranges (not to confuse with the range most
     * recently added to the selection).
     *
     * Returns `null` if there are no ranges in selection.
     */
    getLastRange(): Range | null;
    /**
     * Returns the first position in the selection.
     * First position is the position that {@link module:engine/model/position~Position#isBefore is before}
     * any other position in the selection.
     *
     * Returns `null` if there are no ranges in selection.
     */
    getFirstPosition(): Position | null;
    /**
     * Returns the last position in the selection.
     * Last position is the position that {@link module:engine/model/position~Position#isAfter is after}
     * any other position in the selection.
     *
     * Returns `null` if there are no ranges in selection.
     */
    getLastPosition(): Position | null;
    /**
     * Sets this selection's ranges and direction to the specified location based on the given
     * {@link module:engine/model/selection~Selectable selectable}.
     *
     *        // Removes all selection's ranges.
     *        selection.setTo( null );
     *
     *        // Sets selection to the given range.
     *        const range = writer.createRange( start, end );
     *        selection.setTo( range );
     *
     *        // Sets selection to given ranges.
     *        const ranges = [ writer.createRange( start1, end2 ), writer.createRange( star2, end2 ) ];
     *        selection.setTo( ranges );
     *
     *        // Sets selection to other selection.
     *        // Note: It doesn't copies selection attributes.
     *        const otherSelection = writer.createSelection();
     *        selection.setTo( otherSelection );
     *
     *        // Sets selection to the given document selection.
     *        // Note: It doesn't copies selection attributes.
     *        const documentSelection = new DocumentSelection( doc );
     *        selection.setTo( documentSelection );
     *
     *        // Sets collapsed selection at the given position.
     *        const position = writer.createPositionFromPath( root, path );
     *        selection.setTo( position );
     *
     *        // Sets collapsed selection at the position of the given node and an offset.
     *        selection.setTo( paragraph, offset );
     *
     * Creates a range inside an {@link module:engine/model/element~Element element} which starts before the first child of
     * that element and ends after the last child of that element.
     *
     *        selection.setTo( paragraph, 'in' );
     *
     * Creates a range on an {@link module:engine/model/item~Item item} which starts before the item and ends just after the item.
     *
     *        selection.setTo( paragraph, 'on' );
     *
     * `Selection#setTo()`' method allow passing additional options (`backward`) as the last argument.
     *
     *        // Sets backward selection.
     *        const selection = writer.createSelection( range, { backward: true } );
     */
    setTo(
        selectable: Selectable,
        placeOrOffset?: number | "before" | "end" | "after" | "on" | "in",
        options?: { backward?: boolean },
    ): void;
    /**
     * Moves {@link module:engine/model/selection~Selection#focus} to the specified location.
     *
     * The location can be specified in the same form as
     * {@link module:engine/model/writer~Writer#createPositionAt writer.createPositionAt()} parameters.
     *
     * @fires change:range
     */
    setFocus(itemOrPosition: Item | Position, offset: number | "end" | "before" | "after"): void;
    /**
     * Gets an attribute value for given key or `undefined` if that attribute is not set on the selection.
     */
    getAttribute(key: string): unknown;
    /**
     * Returns iterable that iterates over this selection's attributes.
     *
     * Attributes are returned as arrays containing two items. First one is attribute key and second is attribute value.
     * This format is accepted by native `Map` object and also can be passed in `Node` constructor.
     */
    getAttributes(): Array<[string, unknown]>;
    /**
     * Returns iterable that iterates over this selection's attribute keys.
     */
    getAttributeKeys(): Iterable<string>;
    /**
     * Checks if the selection has an attribute for given key.
     */
    hasAttribute(key: string): boolean;
    /**
     * Removes an attribute with given key from the selection.
     *
     * If given attribute was set on the selection, fires the {@link #event:change:range} event with
     * removed attribute key.
     *
     * @fires change:attribute
     */
    removeAttribute(key: string): void;
    /**
     * Sets attribute on the selection. If attribute with the same key already is set, it's value is overwritten.
     *
     * If the attribute value has changed, fires the {@link #event:change:range} event with
     * the attribute key.
     *
     * @fires change:attribute
     */
    setAttribute(key: string, value: unknown): void;
    /**
     * Returns the selected element. {@link module:engine/model/element~Element Element} is considered as selected if there is only
     * one range in the selection, and that range contains exactly one element.
     * Returns `null` if there is no selected element.
     */
    getSelectedElement(): Element | null;
    /**
     * Checks whether this object is of the given.
     *
     *        selection.is( 'selection' ); // -> true
     *        selection.is( 'model:selection' ); // -> true
     *
     *        selection.is( 'view:selection' ); // -> false
     *        selection.is( 'range' ); // -> false
     *
     * {@link module:engine/model/node~Node#is Check the entire list of model objects} which implement the `is()` method.
     */
    is(type: string): boolean;
    /**
     * Gets elements of type {@link module:engine/model/schema~Schema#isBlock "block"} touched by the selection.
     *
     * This method's result can be used for example to apply block styling to all blocks covered by this selection.
     *
     * **Note:** `getSelectedBlocks()` returns blocks that are nested in other non-block elements
     * but will not return blocks nested in other blocks.
     *
     * In this case the function will return exactly all 3 paragraphs (note: `<blockQuote>` is not a block itself):
     *
     *        <paragraph>[a</paragraph>
     *        <blockQuote>
     *            <paragraph>b</paragraph>
     *        </blockQuote>
     *        <paragraph>c]d</paragraph>
     *
     * In this case the paragraph will also be returned, despite the collapsed selection:
     *
     *        <paragraph>[]a</paragraph>
     *
     * In such a scenario, however, only blocks A, B & E will be returned as blocks C & D are nested in block B:
     *
     *        [<blockA></blockA>
     *        <blockB>
     *            <blockC></blockC>
     *            <blockD></blockD>
     *        </blockB>
     *        <blockE></blockE>]
     *
     * If the selection is inside a block all the inner blocks (A & B) are returned:
     *
     *         <block>
     *            <blockA>[a</blockA>
     *             <blockB>b]</blockB>
     *         </block>
     *
     * **Special case**: If a selection ends at the beginning of a block, that block is not returned as from user perspective
     * this block wasn't selected. See [#984](https://github.com/ckeditor/ckeditor5-engine/issues/984) for more details.
     *
     *        <paragraph>[a</paragraph>
     *        <paragraph>b</paragraph>
     *        <paragraph>]c</paragraph> // this block will not be returned
     */
    getSelectedBlocks(): Iterable<Element>;
    /**
     * Checks whether the selection contains the entire content of the given element. This means that selection must start
     * at a position {@link module:engine/model/position~Position#isTouching touching} the element's start and ends at position
     * touching the element's end.
     *
     * By default, this method will check whether the entire content of the selection's current root is selected.
     * Useful to check if e.g. the user has just pressed <kbd>Ctrl</kbd> + <kbd>A</kbd>.
     */
    containsEntireContent(element?: Element): boolean;
}
/**
 * An entity that is used to set selection.
 *
 * See also {@link module:engine/model/selection~Selection#setTo}
 */

export type Selectable = Selection | DocumentSelection | Position | Range | Node | Iterable<Range> | null;
