import Document from '../document';
import Position from '../position';
import Range from '../range';
import Operation from './operation';
import SplitOperation from './splitoperation';

/**
 * Operation to merge two {@link module:engine/model/element~Element elements}.
 *
 * The merged element is the parent of {@link ~MergeOperation#sourcePosition} and it is merged into the parent of
 * {@link ~MergeOperation#targetPosition}. All nodes from the merged element are moved to {@link ~MergeOperation#targetPosition}.
 *
 * The merged element is moved to the graveyard at {@link ~MergeOperation#graveyardPosition}.
 */
export default class MergeOperation extends Operation {
    /**
     * Creates a merge operation.
     */
    constructor(
        sourcePosition: Position,
        howMany: number,
        targetPosition: Position,
        graveyardPosition: Position,
        baseVersion: number | null,
    );

    /**
     * Position inside the merged element. All nodes from that element after that position will be moved to {@link ~#targetPosition}.
     */
    sourcePosition: Position;

    /**
     * Summary offset size of nodes which will be moved from the merged element to the new parent.
     */
    readonly howMany: number;

    /**
     * Position which the nodes from the merged elements will be moved to.
     */
    targetPosition: Position;

    /**
     * Position in graveyard to which the merged element will be moved.
     */
    readonly graveyardPosition: Position;

    readonly type: 'merge';

    /**
     * Position before the merged element (which will be deleted).
     */
    readonly deletionPosition: Position;

    /**
     * Artificial range that contains all the nodes from the merged element that will be moved to {@link ~MergeOperation#sourcePosition}.
     * The range starts at {@link ~MergeOperation#sourcePosition} and ends in the same parent, at `POSITIVE_INFINITY` offset.
     */
    readonly movedRange: Range;

    /**
     * Creates and returns an operation that has the same parameters as this operation.
     */
    clone(): MergeOperation;

    /**
     * See {@link module:engine/model/operation/operation~Operation#getReversed `Operation#getReversed()`}.
     */
    getReversed(): SplitOperation;

    static readonly className: 'MergeOperation';

    toJSON(): ReturnType<Operation['toJSON']> & {
        movedRange: ReturnType<Range['toJSON']>;
        deletionPosition: ReturnType<Position['toJSON']>;
        type: 'merge';
        graveyardPosition: ReturnType<Position['toJSON']>;
        targetPosition: ReturnType<Position['toJSON']>;
        howMany: number;
        sourcePosition: ReturnType<Position['toJSON']>;
    };

    /**
     * Creates `MergeOperation` object from deserilized object, i.e. from parsed JSON string.
     */
    static fromJSON(
        json: {
            sourcePosition: ReturnType<Position['toJSON']>;
            targetPosition: ReturnType<Position['toJSON']>;
            graveyardPosition: ReturnType<Position['toJSON']>;
            howMany: number;
            baseVersion: number | null;
        },
        document: Document,
    ): MergeOperation;
}
