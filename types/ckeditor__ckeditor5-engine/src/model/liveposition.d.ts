import Position, { PositionStickiness } from "./position";
import RootElement from "./rootelement";
/**
 * `LivePosition` is a type of {@link module:engine/model/position~Position Position}
 * that updates itself as {@link module:engine/model/document~Document document}
 * is changed through operations. It may be used as a bookmark.
 *
 * **Note:** Contrary to {@link module:engine/model/position~Position}, `LivePosition` works only in roots that are
 * {@link module:engine/model/rootelement~RootElement}.
 * If {@link module:engine/model/documentfragment~DocumentFragment} is passed, error will be thrown.
 *
 * **Note:** Be very careful when dealing with `LivePosition`. Each `LivePosition` instance bind events that might
 * have to be unbound.
 * Use {@link module:engine/model/liveposition~LivePosition#detach} whenever you don't need `LivePosition` anymore.
 */
export default class LivePosition extends Position {
    /**
     * Creates a live position.
     *
     * @see module:engine/model/position~Position
     */
    constructor(root: RootElement, path: number[], stickiness?: PositionStickiness);
    /**
     * Unbinds all events previously bound by `LivePosition`. Use it whenever you don't need `LivePosition` instance
     * anymore (i.e. when leaving scope in which it was declared or before re-assigning variable that was
     * referring to it).
     */
    detach(): void;
    /**
     * Checks whether this object is of the given.
     *
     *        livePosition.is( 'position' ); // -> true
     *        livePosition.is( 'model:position' ); // -> true
     *        livePosition.is( 'liveposition' ); // -> true
     *        livePosition.is( 'model:livePosition' ); // -> true
     *
     *        livePosition.is( 'view:position' ); // -> false
     *        livePosition.is( 'documentSelection' ); // -> false
     *
     * {@link module:engine/model/node~Node#is Check the entire list of model objects} which implement the `is()` method.
     */
    is(type: string): boolean;
    /**
     * Creates a {@link module:engine/model/position~Position position instance}, which is equal to this live position.
     */
    toPosition(): Position;
    /**
     * Creates a `LivePosition` instance that is equal to position.
     */
    static fromPosition(position: Position, stickiness: PositionStickiness): LivePosition;
}
