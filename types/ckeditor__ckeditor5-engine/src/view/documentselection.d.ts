import Selection, { Selectable } from "./selection";
import EmitterMixin from "@ckeditor/ckeditor5-utils/src/emittermixin";
import ViewPosition from "./position";
import ViewEditableElement from "./editableelement";
import ViewRange from "./range";
import ViewElement from "./element";

/**
 * Class representing the document selection in the view.
 *
 * Its instance is available in {@link module:engine/view/document~Document#selection `Document#selection`}.
 *
 * It is similar to {@link module:engine/view/selection~Selection} but
 * it has a read-only API and can be modified only by the writer available in
 * the {@link module:engine/view/view~View#change `View#change()`} block
 * (so via {@link module:engine/view/downcastwriter~DowncastWriter#setSelection `DowncastWriter#setSelection()`}).
 */
export default class DocumentSelection extends EmitterMixin {
    /**
     * Creates new DocumentSelection instance.
     *
     *         // Creates empty selection without ranges.
     *        const selection = new DocumentSelection();
     *
     *        // Creates selection at the given range.
     *        const range = writer.createRange( start, end );
     *        const selection = new DocumentSelection( range );
     *
     *        // Creates selection at the given ranges
     *         const ranges = [ writer.createRange( start1, end2 ), writer.createRange( start2, end2 ) ];
     *        const selection = new DocumentSelection( ranges );
     *
     *        // Creates selection from the other selection.
     *        const otherSelection = writer.createSelection();
     *        const selection = new DocumentSelection( otherSelection );
     *
     *         // Creates selection at the given position.
     *        const position = writer.createPositionAt( root, offset );
     *        const selection = new DocumentSelection( position );
     *
     *        // Creates collapsed selection at the position of given item and offset.
     *        const paragraph = writer.createContainerElement( 'paragraph' );
     *        const selection = new DocumentSelection( paragraph, offset );
     *
     *        // Creates a range inside an {@link module:engine/view/element~Element element} which starts before the
     *        // first child of that element and ends after the last child of that element.
     *        const selection = new DocumentSelection( paragraph, 'in' );
     *
     *        // Creates a range on an {@link module:engine/view/item~Item item} which starts before the item and ends
     *        // just after the item.
     *        const selection = new DocumentSelection( paragraph, 'on' );
     *
     * `Selection`'s constructor allow passing additional options (`backward`, `fake` and `label`) as the last argument.
     *
     *        // Creates backward selection.
     *        const selection = new DocumentSelection( range, { backward: true } );
     *
     * Fake selection does not render as browser native selection over selected elements and is hidden to the user.
     * This way, no native selection UI artifacts are displayed to the user and selection over elements can be
     * represented in other way, for example by applying proper CSS class.
     *
     * Additionally fake's selection label can be provided. It will be used to describe fake selection in DOM
     * (and be  properly handled by screen readers).
     *
     *        // Creates fake selection with label.
     *        const selection = new DocumentSelection( range, { fake: true, label: 'foo' } );
     */
    constructor(
        selectable: Selectable,
        placeOrOffset?: number | "before" | "end" | "after" | "on" | "in",
        options?: { backward?: boolean; fake?: boolean; label?: string },
    );

    /**
     * Returns true if selection instance is marked as `fake`.
     *
     * @see #_setTo
     */
    readonly isFake: boolean;

    /**
     * Returns fake selection label.
     *
     * @see #_setTo
     */
    readonly fakeSelectionLabel: string;

    /**
     * Selection anchor. Anchor may be described as a position where the selection starts. Together with
     * {@link #focus focus} they define the direction of selection, which is important
     * when expanding/shrinking selection. Anchor is always the start or end of the most recent added range.
     * It may be a bit unintuitive when there are multiple ranges in selection.
     */
    readonly anchor: ViewPosition;

    /**
     * Selection focus. Focus is a position where the selection ends.
     */
    readonly focus: ViewPosition;

    /**
     * Returns whether the selection is collapsed. Selection is collapsed when there is exactly one range which is
     * collapsed.
     */
    readonly isCollapsed: boolean;

    /**
     * Returns number of ranges in selection.
     */
    readonly rangeCount: number;

    /**
     * Specifies whether the {@link #focus} precedes {@link #anchor}.
     */
    readonly isBackward: boolean;

    /**
     * {@link module:engine/view/editableelement~EditableElement EditableElement} instance that contains this selection, or `null`
     * if the selection is not inside an editable element.
     */
    readonly editableElement: ViewEditableElement | null;

    /**
     * Returns an iterable that contains copies of all ranges added to the selection.
     *
     */
    getRanges(): Iterable<ViewRange>;

    /**
     * Returns copy of the first range in the selection. First range is the one which
     * {@link module:engine/view/range~Range#start start} position {@link module:engine/view/position~Position#isBefore is before} start
     * position of all other ranges (not to confuse with the first range added to the selection).
     * Returns `null` if no ranges are added to selection.
     *
     */
    getFirstRange(): ViewRange | null;

    /**
     * Returns copy of the last range in the selection. Last range is the one which {@link module:engine/view/range~Range#end end}
     * position {@link module:engine/view/position~Position#isAfter is after} end position of all other ranges (not to confuse
     * with the last range added to the selection). Returns `null` if no ranges are added to selection.
     *
     */
    getLastRange(): ViewRange | null;

    /**
     * Returns copy of the first position in the selection. First position is the position that
     * {@link module:engine/view/position~Position#isBefore is before} any other position in the selection ranges.
     * Returns `null` if no ranges are added to selection.
     *
     */
    getFirstPosition(): ViewPosition | null;

    /**
     * Returns copy of the last position in the selection. Last position is the position that
     * {@link module:engine/view/position~Position#isAfter is after} any other position in the selection ranges.
     * Returns `null` if no ranges are added to selection.
     *
     */
    getLastPosition(): ViewPosition | null;

    /**
     * Returns the selected element. {@link module:engine/view/element~Element Element} is considered as selected if there is only
     * one range in the selection, and that range contains exactly one element.
     * Returns `null` if there is no selected element.
     *
     */
    getSelectedElement(): ViewElement | null;

    /**
     * Checks whether, this selection is equal to given selection. Selections are equal if they have same directions,
     * same number of ranges and all ranges from one selection equal to a range from other selection.
     *
     */
    isEqual(otherSelection: DocumentSelection): boolean;

    /**
     * Checks whether this selection is similar to given selection. Selections are similar if they have same directions, same
     * number of ranges, and all {@link module:engine/view/range~Range#getTrimmed trimmed} ranges from one selection are
     * equal to any trimmed range from other selection.
     *
     */
    isSimilar(otherSelection: DocumentSelection): boolean;

    /**
     * Checks whether this object is of the given type.
     *
     *        docSelection.is( 'selection' ); // -> true
     *        docSelection.is( 'documentSelection' ); // -> true
     *        docSelection.is( 'view:selection' ); // -> true
     *        docSelection.is( 'view:documentSelection' ); // -> true
     *
     *        docSelection.is( 'model:documentSelection' ); // -> false
     *        docSelection.is( 'element' ); // -> false
     *        docSelection.is( 'node' ); // -> false
     *
     * {@link module:engine/view/node~Node#is Check the entire list of view objects} which implement the `is()` method.
     *
     */
    is(type: string): boolean;
}
