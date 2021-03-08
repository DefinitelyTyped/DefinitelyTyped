import DocumentSelection from "./documentselection";
import EditableElement from "./editableelement";
import Element from "./element";
import EmitterMixin from "@ckeditor/ckeditor5-utils/src/emittermixin";
import Node from "./node";
import Position from "./position";
import Range from "./range";
import { Item } from "./item";

/**
 * Class representing an arbirtary selection in the view.
 * See also {@link module:engine/view/documentselection~DocumentSelection}.
 *
 * New selection instances can be created via the constructor or one these methods:
 *
 * * {@link module:engine/view/view~View#createSelection `View#createSelection()`},
 * * {@link module:engine/view/upcastwriter~UpcastWriter#createSelection `UpcastWriter#createSelection()`}.
 *
 * A selection can consist of {@link module:engine/view/range~Range ranges} that can be set by using
 * the {@link module:engine/view/selection~Selection#setTo `Selection#setTo()`} method.
 */
export default class ViewSelection extends EmitterMixin {
    /**
     * Creates new selection instance.
     *
     * **Note**: The selection constructor is available as a factory method:
     *
     * * {@link module:engine/view/view~View#createSelection `View#createSelection()`},
     * * {@link module:engine/view/upcastwriter~UpcastWriter#createSelection `UpcastWriter#createSelection()`}.
     *
     *         // Creates empty selection without ranges.
     *        const selection = writer.createSelection();
     *
     *        // Creates selection at the given range.
     *        const range = writer.createRange( start, end );
     *        const selection = writer.createSelection( range );
     *
     *        // Creates selection at the given ranges
     *         const ranges = [ writer.createRange( start1, end2 ), writer.createRange( star2, end2 ) ];
     *        const selection = writer.createSelection( ranges );
     *
     *        // Creates selection from the other selection.
     *        const otherSelection = writer.createSelection();
     *        const selection = writer.createSelection( otherSelection );
     *
     *        // Creates selection from the document selection.
     *        const selection = writer.createSelection( editor.editing.view.document.selection );
     *
     *         // Creates selection at the given position.
     *        const position = writer.createPositionFromPath( root, path );
     *        const selection = writer.createSelection( position );
     *
     *        // Creates collapsed selection at the position of given item and offset.
     *        const paragraph = writer.createContainerElement( 'paragraph' );
     *        const selection = writer.createSelection( paragraph, offset );
     *
     *        // Creates a range inside an {@link module:engine/view/element~Element element} which starts before the
     *        // first child of that element and ends after the last child of that element.
     *        const selection = writer.createSelection( paragraph, 'in' );
     *
     *        // Creates a range on an {@link module:engine/view/item~Item item} which starts before the item and ends
     *        // just after the item.
     *        const selection = writer.createSelection( paragraph, 'on' );
     *
     * `Selection`'s constructor allow passing additional options (`backward`, `fake` and `label`) as the last argument.
     *
     *        // Creates backward selection.
     *        const selection = writer.createSelection( range, { backward: true } );
     *
     * Fake selection does not render as browser native selection over selected elements and is hidden to the user.
     * This way, no native selection UI artifacts are displayed to the user and selection over elements can be
     * represented in other way, for example by applying proper CSS class.
     *
     * Additionally fake's selection label can be provided. It will be used to describe fake selection in DOM
     * (and be  properly handled by screen readers).
     *
     *        // Creates fake selection with label.
     *        const selection = writer.createSelection( range, { fake: true, label: 'foo' } );
     */
    constructor(
        selectable: Selectable,
        placeOrOffset?: number | "before" | "end" | "after" | "on" | "in",
        options?: { backward?: boolean; fake?: boolean; label?: string },
    );

    /**
     * Returns true if selection instance is marked as `fake`.
     */
    readonly isFake: boolean;

    /**
     * Returns fake selection label.
     */
    readonly fakeSelectionLabel: string;

    /**
     * Selection anchor. Anchor may be described as a position where the selection starts. Together with
     * {@link #focus focus} they define the direction of selection, which is important
     * when expanding/shrinking selection. Anchor is always the start or end of the most recent added range.
     * It may be a bit unintuitive when there are multiple ranges in selection.
     */
    readonly anchor: Position;

    /**
     * Selection focus. Focus is a position where the selection ends.
     */
    readonly focus: Position;

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
    readonly editableElement: EditableElement | null;

    /**
     * Returns an iterable that contains copies of all ranges added to the selection.
     */
    getRanges(): Iterable<Range>;

    /**
     * Returns copy of the first range in the selection. First range is the one which
     * {@link module:engine/view/range~Range#start start} position {@link module:engine/view/position~Position#isBefore is before} start
     * position of all other ranges (not to confuse with the first range added to the selection).
     * Returns `null` if no ranges are added to selection.
     */
    getFirstRange(): Range | null;

    /**
     * Returns copy of the last range in the selection. Last range is the one which {@link module:engine/view/range~Range#end end}
     * position {@link module:engine/view/position~Position#isAfter is after} end position of all other ranges (not to confuse
     * with the last range added to the selection). Returns `null` if no ranges are added to selection.
     */
    getLastRange(): Range | null;

    /**
     * Returns copy of the first position in the selection. First position is the position that
     * {@link module:engine/view/position~Position#isBefore is before} any other position in the selection ranges.
     * Returns `null` if no ranges are added to selection.
     */
    getFirstPosition(): Position | null;

    /**
     * Returns copy of the last position in the selection. Last position is the position that
     * {@link module:engine/view/position~Position#isAfter is after} any other position in the selection ranges.
     * Returns `null` if no ranges are added to selection.
     */
    getLastPosition(): Position | null;

    /**
     * Checks whether, this selection is equal to given selection. Selections are equal if they have same directions,
     * same number of ranges and all ranges from one selection equal to a range from other selection.
     */
    isEqual(otherSelection: DocumentSelection): boolean;

    /**
     * Checks whether this selection is similar to given selection. Selections are similar if they have same directions, same
     * number of ranges, and all {@link module:engine/view/range~Range#getTrimmed trimmed} ranges from one selection are
     * equal to any trimmed range from other selection.
     */
    isSimilar(otherSelection: DocumentSelection): boolean;

    /**
     * Returns the selected element. {@link module:engine/view/element~Element Element} is considered as selected if there is only
     * one range in the selection, and that range contains exactly one element.
     * Returns `null` if there is no selected element.
     */
    getSelectedElement(): Element | null;

    /**
     * Sets this selection's ranges and direction to the specified location based on the given
     * {@link module:engine/view/selection~Selectable selectable}.
     *
     *        // Sets selection to the given range.
     *        const range = writer.createRange( start, end );
     *        selection.setTo( range );
     *
     *        // Sets selection to given ranges.
     *         const ranges = [ writer.createRange( start1, end2 ), writer.createRange( star2, end2 ) ];
     *        selection.setTo( range );
     *
     *        // Sets selection to the other selection.
     *        const otherSelection = writer.createSelection();
     *        selection.setTo( otherSelection );
     *
     *         // Sets selection to contents of DocumentSelection.
     *        selection.setTo( editor.editing.view.document.selection );
     *
     *         // Sets collapsed selection at the given position.
     *        const position = writer.createPositionAt( root, path );
     *        selection.setTo( position );
     *
     *         // Sets collapsed selection at the position of given item and offset.
     *        selection.setTo( paragraph, offset );
     *
     * Creates a range inside an {@link module:engine/view/element~Element element} which starts before the first child of
     * that element and ends after the last child of that element.
     *
     *        selection.setTo( paragraph, 'in' );
     *
     * Creates a range on an {@link module:engine/view/item~Item item} which starts before the item and ends just after the item.
     *
     *        selection.setTo( paragraph, 'on' );
     *
     *         // Clears selection. Removes all ranges.
     *        selection.setTo( null );
     *
     * `Selection#setTo()` method allow passing additional options (`backward`, `fake` and `label`) as the last argument.
     *
     *        // Sets selection as backward.
     *        selection.setTo( range, { backward: true } );
     *
     * Fake selection does not render as browser native selection over selected elements and is hidden to the user.
     * This way, no native selection UI artifacts are displayed to the user and selection over elements can be
     * represented in other way, for example by applying proper CSS class.
     *
     * Additionally fake's selection label can be provided. It will be used to describe fake selection in DOM
     * (and be  properly handled by screen readers).
     *
     *        // Creates fake selection with label.
     *        selection.setTo( range, { fake: true, label: 'foo' } );
     */
    setTo(
        selectable: Selectable,
        placeOrOffset?: number | "before" | "end" | "after" | "on" | "in",
        options?: { backward?: boolean; fake?: boolean; label?: string },
    ): void;

    /**
     * Moves {@link #focus} to the specified location.
     *
     * The location can be specified in the same form as {@link module:engine/view/view~View#createPositionAt view.createPositionAt()}
     * parameters.
     */
    setFocus(itemOrPosition: Item | Position, offset?: number | "end" | "before" | "after"): void;

    /**
     * Checks whether this object is of the given type.
     *
     *        selection.is( 'selection' ); // -> true
     *        selection.is( 'view:selection' ); // -> true
     *
     *        selection.is( 'model:selection' ); // -> false
     *        selection.is( 'element' ); // -> false
     *        selection.is( 'range' ); // -> false
     *
     * {@link module:engine/view/node~Node#is Check the entire list of view objects} which implement the `is()` method.
     */
    is(type: string): boolean;
}

export type Selectable = ViewSelection | DocumentSelection | Position | Iterable<Range> | Range | Item | null;
