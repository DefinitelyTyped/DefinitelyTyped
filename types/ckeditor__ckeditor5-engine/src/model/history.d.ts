import Operation from "./operation/operation";

export default class History {
    addOperation(operation: Operation): void;
    getOperation(baseVersion: number): Operation | undefined;
    getOperations(from?: number, to?: number): Operation[];
    getUndoneOperation(undoingOperation: Operation): Operation | undefined;
    isUndoingOperation(operation: Operation): Boolean;
    isUndoneOperation(operation: Operation): Boolean;
    setOperationAsUndone(undoneOperation: Operation, undoingOperation: Operation): void;
}
