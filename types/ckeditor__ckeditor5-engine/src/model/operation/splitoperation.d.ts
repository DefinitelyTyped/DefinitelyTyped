import Document from '../document';
import Position from '../position';
import Range from '../range';
import MergeOperation from './mergeoperation';
import Operation from './operation';

export default class SplitOperation extends Operation {
    /**
     * Creates a split operation.
     */
    constructor(
        splitPosition: Position,
        howMany: number,
        insertionPosition: Position,
        graveyardPosition: Position,
        baseVersion: number | null,
    );

    /**
     * Position at which an element should be split.
     */
    splitPosition: Position;

    /**
     * Total offset size of elements that are in the split element after `position`.
     */
    readonly howMany: number;

    /**
     * Position at which the clone of split element (or element from graveyard) will be inserted.
     */
    readonly insertionPosition: Position;

    /**
     * Position in the graveyard root before the element which should be used as a parent of the nodes after `position`.
     * If it is not set, a copy of the the `position` parent will be used.
     *
     * The default behavior is to clone the split element. Element from graveyard is used during undo.
     */
    graveyardPosition: Position | null;

    readonly type: 'split';

    /**
     * Position inside the new clone of a split element.
     *
     * This is a position where nodes that are after the split position will be moved to.
     */
    readonly moveTargetPosition: Position;

    /**
     * Artificial range that contains all the nodes from the split element that will be moved to the new element.
     * The range starts at {@link ~#splitPosition} and ends in the same parent, at `POSITIVE_INFINITY` offset.
     */
    readonly movedRange: Range;

    /**
     * Creates and returns an operation that has the same parameters as this operation.
     */
    clone(): SplitOperation;

    /**
     * See {@link module:engine/model/operation/operation~Operation#getReversed `Operation#getReversed()`}.
     */
    getReversed(): MergeOperation;

    toJSON(): {
        splitPosition: ReturnType<Position['toJSON']>;
        insertionPosition: ReturnType<Position['toJSON']>;
        graveyardPosition?: ReturnType<Position['toJSON']>;
        baseVersion: number | null;
    };

    static readonly className: 'SplitOperation';

    /**
     * Helper function that returns a default insertion position basing on given `splitPosition`. The default insertion
     * position is after the split element.
     */
    static getInsertionPosition(splitPosition: Position): Position;

    /**
     * Creates `SplitOperation` object from deserilized object, i.e. from parsed JSON string.
     */
    static fromJSON(
        json: {
            splitPosition: ReturnType<Position['toJSON']>;
            insertionPosition: ReturnType<Position['toJSON']>;
            graveyardPosition: ReturnType<Position['toJSON']>;
            howMany: number;
            baseVersion: number | null;
        },
        document: Document,
    ): SplitOperation;
}
