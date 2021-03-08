import Operation from "./operation/operation";
/**
 * `History` keeps the track of all the operations applied to the {@link module:engine/model/document~Document document}.
 */
export default class History {
    /**
     * Adds an operation to the history.
     *
     * @param {module:engine/model/operation/operation~Operation} operation Operation to add.
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
     *
     * @param {module:engine/model/operation/operation~Operation} operation Operation to check.
     * @returns {Boolean} `true` if given `operation` has been undone any other operation, `false` otherwise.
     */
    isUndoneOperation(operation: Operation): boolean;

    /**
     * For given `undoingOperation`, returns the operation which has been undone by it.
     *
     * @param {module:engine/model/operation/operation~Operation} undoingOperation
     * @returns {module:engine/model/operation/operation~Operation|undefined} Operation that has been undone by given
     * `undoingOperation` or `undefined` if given `undoingOperation` is not undoing any other operation.
     */
    getUndoneOperation(undoingOperation: Operation): Operation | undefined;
}
