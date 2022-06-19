import Operation from './operation/operation';

/**
 * `History` keeps the track of all the operations applied to the {@link module:engine/model/document~Document document}.
 */
export default class History {
    /**
     * Creates an empty History instance.
     */
    constructor();

    /**
     * Adds an operation to the history.
     */
    addOperation(operation: Operation): void;

    /**
     * Returns operations added to the history.
     */
    getOperations(from?: number, to?: number): Operation[];

    /**
     * Returns operation from the history that bases on given `baseVersion`.
     */
    getOperation(baseVersion: number): Operation | undefined;

    /**
     * Marks in history that one operation is an operation that is undoing the other operation. By marking operation this way,
     * history is keeping more context information about operations, which helps in operational transformation.
     */
    setOperationAsUndone(undoneOperation: Operation, undoingOperation: Operation): void;

    /**
     * Checks whether given `operation` is undoing any other operation.
     */
    isUndoingOperation(operation: Operation): boolean;

    /**
     * Checks whether given `operation` has been undone by any other operation.
     */
    isUndoneOperation(operation: Operation): boolean;

    /**
     * For given `undoingOperation`, returns the operation which has been undone by it.
     */
    getUndoneOperation(undoingOperation: Operation): Operation | undefined;
}
