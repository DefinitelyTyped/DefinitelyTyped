import Position from "./position";
import Range from "./range";

/**
 * `LiveRange` is a type of {@link module:engine/model/range~Range Range}
 * that updates itself as {@link module:engine/model/document~Document document}
 * is changed through operations. It may be used as a bookmark.
 *
 * **Note:** Be very careful when dealing with `LiveRange`. Each `LiveRange` instance bind events that might
 * have to be unbound. Use {@link module:engine/model/liverange~LiveRange#detach detach} whenever you don't need `LiveRange` anymore.
 */
export default class LiveRange extends Range {
    /**
     * Creates a live range.
     */
    constructor(start: Position, end?: Position);
    /**
     * Unbinds all events previously bound by `LiveRange`. Use it whenever you don't need `LiveRange` instance
     * anymore (i.e. when leaving scope in which it was declared or before re-assigning variable that was
     * referring to it).
     */
    detach(): void;
    /**
     * Checks whether this object is of the given.
     *
     *        liveRange.is( 'range' ); // -> true
     *        liveRange.is( 'model:range' ); // -> true
     *        liveRange.is( 'liveRange' ); // -> true
     *        liveRange.is( 'model:liveRange' ); // -> true
     *
     *        liveRange.is( 'view:range' ); // -> false
     *        liveRange.is( 'documentSelection' ); // -> false
     *
     * {@link module:engine/model/node~Node#is Check the entire list of model objects} which implement the `is()` method.
     */
    is(type: string): boolean;
    /**
     * Creates a {@link module:engine/model/range~Range range instance} that is equal to this live range.
     */
    toRange(): Range;
    /**
     * Creates a `LiveRange` instance that is equal to the given range.
     */
    static fromRange(range: Range): LiveRange;
}
