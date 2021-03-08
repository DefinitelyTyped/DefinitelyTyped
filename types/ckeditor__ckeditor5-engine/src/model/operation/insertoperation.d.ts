import Operation from "./operation";
import MoveOperation from "./moveoperation";
import Position from "../position";
import Document from "../document";
import { NodeSet } from "./utils";
/**
 * Operation to insert one or more nodes at given position in the model.
 */
export default class InsertOperation extends Operation {
    /**
     * Creates an insert operation.
     */
    constructor(position: Position, nodes: NodeSet, baseVersion: number | null);

    readonly type: string;
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
    toJSON(): this;
    static get className(): string;
    /**
     * Creates `InsertOperation` object from deserilized object, i.e. from parsed JSON string.
     */
    static fromJSON(json: Record<string, unknown>, document: Document): InsertOperation;
}
