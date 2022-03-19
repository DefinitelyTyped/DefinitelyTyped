import Document from '../document';
import { NodeSet } from '../node';
import NodeList from '../nodelist';
import Position from '../position';
import MoveOperation from './moveoperation';
import Operation from './operation';

/**
 * Operation to insert one or more nodes at given position in the model.
 */
export default class InsertOperation extends Operation {
    /**
     * Creates an insert operation.
     */
    constructor(position: Position, nodes: NodeSet, baseVersion: number | null);

    /**
     * Position of insertion.
     */
    position: Position;

    /**
     * List of nodes to insert.
     */
    readonly nodes: NodeList;

    /**
     * Flag deciding how the operation should be transformed. If set to `true`, nodes might get additional attributes
     * during operational transformation. This happens when the operation insertion position is inside of a range
     * where attributes have changed.
     */
    shouldReceiveAttributes: boolean;

    readonly type: 'insert';

    /**
     * Total offset size of inserted nodes.
     */
    readonly howMany: number;

    /**
     * Creates and returns an operation that has the same parameters as this operation.
     */
    clone(): InsertOperation;

    /**
     * See {@link module:engine/model/operation/operation~Operation#getReversed `Operation#getReversed()`}.
     */
    getReversed(): MoveOperation;

    toJSON(): ReturnType<Operation['toJSON']> & {
        position: ReturnType<Position['toJSON']>;
        nodes: ReturnType<NodeList['toJSON']>;
        howMany: number;
        type: 'insert';
        shouldReceiveAttributes: boolean;
    };

    static readonly className: 'InsertOperation';

    /**
     * Creates `InsertOperation` object from deserilized object, i.e. from parsed JSON string.
     */
    static fromJSON(
        json: {
            nodes: ReturnType<NodeList['toJSON']>;
            position: ReturnType<Position['toJSON']>;
            baseVersion: number | null;
            shouldReceiveAttributes: boolean;
        },
        document: Document,
    ): InsertOperation;
}
