import Emitter from "@ckeditor/ckeditor5-utils/src/emittermixin";
import Document from "./document";
import Position from "./position";
import Collection from "@ckeditor/ckeditor5-utils/src/collection";
import { Marker } from "./markercollection";
import Range from "./range";
import Element from "./element";

/**
 * `DocumentSelection` is a special selection which is used as the
 * {@link module:engine/model/document~Document#selection document's selection}.
 * There can be only one instance of `DocumentSelection` per document.
 *
 * Document selection can only be changed by using the {@link module:engine/model/writer~Writer} instance
 * inside the {@link module:engine/model/model~Model#change `change()`} block, as it provides a secure way to modify model.
 *
 * `DocumentSelection` is automatically updated upon changes in the {@link module:engine/model/document~Document document}
 * to always contain valid ranges. Its attributes are inherited from the text unless set explicitly.
 *
 * Differences between {@link module:engine/model/selection~Selection} and `DocumentSelection` are:
 * * there is always a range in `DocumentSelection` - even if no ranges were added there is a "default range"
 * present in the selection,
 * * ranges added to this selection updates automatically when the document changes,
 * * attributes of `DocumentSelection` are updated automatically according to selection ranges.
 *
 * Since `DocumentSelection` uses {@link module:engine/model/liverange~LiveRange live ranges}
 * and is updated when {@link module:engine/model/document~Document document}
 * changes, it cannot be set on {@link module:engine/model/node~Node nodes}
 * that are inside {@link module:engine/model/documentfragment~DocumentFragment document fragment}.
 * If you need to represent a selection in document fragment,
 * use {@link module:engine/model/selection~Selection Selection class} instead.
 */
export default class DocumentSelection extends Emitter {
    /**
     * Creates an empty live selection for given {@link module:engine/model/document~Document}.
     */
    constructor(doc: Document);
    /**
     * Returns whether the selection is collapsed. Selection is collapsed when there is exactly one range which is
     * collapsed.
     */
    get isCollapsed(): boolean;
    /**
     * Selection anchor. Anchor may be described as a position where the most recent part of the selection starts.
     * Together with {@link #focus} they define the direction of selection, which is important
     * when expanding/shrinking selection. Anchor is always {@link module:engine/model/range~Range#start start} or
     * {@link module:engine/model/range~Range#end end} position of the most recently added range.
     *
     * Is set to `null` if there are no ranges in selection.
     *
     * @see #focus
     */
    get anchor(): Position | null;
    /**
     * Selection focus. Focus is a position where the selection ends.
     *
     * Is set to `null` if there are no ranges in selection.
     *
     * @see #anchor
     */
    get focus(): Position | null;
    /**
     * Returns number of ranges in selection.
     */
    get rangeCount(): number;
    /**
     * Describes whether `Documentselection` has own range(s) set, or if it is defaulted to
     * {@link module:engine/model/document~Document#_getDefaultRange document's default range}.
     */
    get hasOwnRange(): boolean;
    /**
     * Specifies whether the {@link #focus}
     * precedes {@link #anchor}.
     */
    get isBackward(): boolean;
    /**
     * Describes whether the gravity is overridden (using {@link module:engine/model/writer~Writer#overrideSelectionGravity}) or not.
     *
     * Note that the gravity remains overridden as long as will not be restored the same number of times as it was overridden.
     */
    get isGravityOverridden(): boolean;
    /**
     * A collection of selection {@link module:engine/model/markercollection~Marker markers}.
     * Marker is a selection marker when selection range is inside the marker range.
     *
     * **Note**: Only markers from {@link ~DocumentSelection#observeMarkers observed markers groups} are collected.
     */
    get markers(): Collection<Marker>;
    /**
     * Returns an iterable that iterates over copies of selection ranges.
     */
    getRanges(): Iterable<Range>;
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
     * Returns the selected element. {@link module:engine/model/element~Element Element} is considered as selected if there is only
     * one range in the selection, and that range contains exactly one element.
     * Returns `null` if there is no selected element.
     */
    getSelectedElement(): Element | null;
    /**
     * Checks whether the selection contains the entire content of the given element. This means that selection must start
     * at a position {@link module:engine/model/position~Position#isTouching touching} the element's start and ends at position
     * touching the element's end.
     *
     * By default, this method will check whether the entire content of the selection's current root is selected.
     * Useful to check if e.g. the user has just pressed <kbd>Ctrl</kbd> + <kbd>A</kbd>.
     */
    containsEntireContent(element?: Element): boolean;
    /**
     * Unbinds all events previously bound by document selection.
     */
    destroy(): void;
    /**
     * Returns iterable that iterates over this selection's attribute keys.
     */
    getAttributeKeys(): Iterable<string>;
    /**
     * Returns iterable that iterates over this selection's attributes.
     *
     * Attributes are returned as arrays containing two items. First one is attribute key and second is attribute value.
     * This format is accepted by native `Map` object and also can be passed in `Node` constructor.
     */
    getAttributes(): Iterable<[string, unknown]>;
    /**
     * Gets an attribute value for given key or `undefined` if that attribute is not set on the selection.
     */
    getAttribute(key: string): unknown | undefined;
    /**
     * Checks if the selection has an attribute for given key.
     */
    hasAttribute(key: string): boolean;
    /**
     * Refreshes selection attributes and markers according to the current position in the model.
     */
    refresh(): void;
    /**
     * Registers a marker group prefix or a marker name to be collected in the
     * {@link ~DocumentSelection#markers selection markers collection}.
     *
     * See also {@link module:engine/model/markercollection~MarkerCollection#getMarkersGroup `MarkerCollection#getMarkersGroup()`}.
     */
    observeMarkers(prefixOrName: string): void;
    /**
     * Checks whether this object is of the given type.
     *
     *        selection.is( 'selection' ); // -> true
     *        selection.is( 'documentSelection' ); // -> true
     *        selection.is( 'model:selection' ); // -> true
     *        selection.is( 'model:documentSelection' ); // -> true
     *
     *        selection.is( 'view:selection' ); // -> false
     *        selection.is( 'element' ); // -> false
     *        selection.is( 'node' ); // -> false
     *
     * {@link module:engine/model/node~Node#is Check the entire list of model objects} which implement the `is()` method.
     */
    is(type: string): boolean;
}
