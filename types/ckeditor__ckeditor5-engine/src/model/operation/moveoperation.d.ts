import Document from '../document';
import Position from '../position';
import Operation from './operation';

/**
 * Operation to move a range of {@link module:engine/model/item~Item model items}
 * to given {@link module:engine/model/position~Position target position}.
 */
export default class MoveOperation extends Operation {
    /**
     * Creates a move operation.
     */
    constructor(sourcePosition: Position, howMany: number, targetPosition: Position, baseVersion: number | null);

    /**
     * Position before the first {@link module:engine/model/item~Item model item} to move.
     */
    sourcePosition: Position;

    /**
     * Offset size of moved range.
     */
    howMany: number;

    /**
     * Position at which moved nodes will be inserted.
     */
    targetPosition: Position;

    readonly type: 'remove' | 'reinsert' | 'move';

    /**
     * Creates and returns an operation that has the same parameters as this operation.
     */
    clone(): MoveOperation;

    /**
     * Returns the start position of the moved range after it got moved. This may be different than
     * {@link module:engine/model/operation/moveoperation~MoveOperation#targetPosition} in some cases, i.e. when a range is moved
     * inside the same parent but {@link module:engine/model/operation/moveoperation~MoveOperation#targetPosition targetPosition}
     * is after {@link module:engine/model/operation/moveoperation~MoveOperation#sourcePosition sourcePosition}.
     *
     *     vv              vv
     *    abcdefg ===> adefbcg
     *         ^          ^
     *         targetPos  movedRangeStart
     *         offset 6  offset 4
     */
    getMovedRangeStart(): Position;

    /**
     * See {@link module:engine/model/operation/operation~Operation#getReversed `Operation#getReversed()`}.
     */
    getReversed(): MoveOperation;

    toJSON(): ReturnType<Operation['toJSON']> & {
        sourcePosition: ReturnType<Position['toJSON']>;
        targetPosition: ReturnType<Position['toJSON']>;
        type: 'remove' | 'reinsert' | 'move';
        howMany: number;
    };

    static readonly className: 'MoveOperation';

    /**
     * Creates `MoveOperation` object from deserilized object, i.e. from parsed JSON string.
     */
    static fromJSON(
        json: {
            sourcePosition: ReturnType<Position['toJSON']>;
            targetPosition: ReturnType<Position['toJSON']>;
            howMany: number;
            baseVersion: number | null;
        },
        document: Document,
    ): MoveOperation;
}
