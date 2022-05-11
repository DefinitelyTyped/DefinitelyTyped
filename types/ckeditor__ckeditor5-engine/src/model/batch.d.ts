import Operation from './operation/operation';

export default class Batch {
    /**
     * Creates a batch instance.
     * @see module:engine/model/model~Model#change
     */
    constructor(type?: { isUndoable?: boolean; isLocal?: boolean; isUndo?: boolean; isTyping?: boolean });
    /**
     * An array of operations that compose this batch.
     */
    readonly operations: Operation[];

    /**
     * Whether batch can be undone through the undo feature.
     */
    readonly isUndoable: boolean;

    /**
     * Whether batch includes operations created locally (`true`) or operations created on other, remote editors (`false`).
     */
    readonly isLocal: boolean;

    /**
     * Whether batch was created by the undo feature and undoes other operations.
     */
    readonly isUndo: boolean;

    /**
     * Whether batch includes operations connected with typing.
     */
    readonly isTyping: boolean;

    /**
     * Returns the base version of this batch, which is equal to the base version of the first operation in the batch.
     * If there are no operations in the batch or neither operation has the base version set, it returns `null`.
     */
    readonly baseVersion: number | null;

    /**
     * Adds an operation to the batch instance.
     */
    addOperation(operation: Operation): Operation;
}
