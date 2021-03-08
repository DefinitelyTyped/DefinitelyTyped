import Operation from "./operation/operation";
/**
 * A batch instance groups model changes ({@link module:engine/model/operation/operation~Operation operations}). All operations
 * grouped in a single batch can be reverted together, so you can also think about a batch as of a single undo step. If you want
 * to extend a given undo step, you can add more changes to the batch using {@link module:engine/model/model~Model#enqueueChange}:
 *
 *        model.enqueueChange( batch, writer => {
 *            writer.insertText( 'foo', paragraph, 'end' );
 *        } );
 *
 * @see module:engine/model/model~Model#enqueueChange
 * @see module:engine/model/model~Model#change
 */
export default class Batch {
    /**
     * Creates a batch instance.
     *
     * @see module:engine/model/model~Model#enqueueChange
     * @see module:engine/model/model~Model#change
     */
    constructor(type?: "transparent" | "default");
    readonly operations: Operation[];
    readonly type: "transparent" | "default";

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
