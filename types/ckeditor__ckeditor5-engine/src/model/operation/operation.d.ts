import Batch from '../batch';
import Document from '../document';

// These methods are "abstract" in Operation, and derived classes are not mandated to implement them.
export default interface Operation {
    /**
     * Creates and returns an operation that has the same parameters as this operation.
     */
    clone?(): Operation;

    /**
     * Creates and returns a reverse operation. Reverse operation when executed right after
     * the original operation will bring back tree model state to the point before the original
     * operation execution. In other words, it reverses changes done by the original operation.
     *
     * Keep in mind that tree model state may change since executing the original operation,
     * so reverse operation will be "outdated". In that case you will need to transform it by
     * all operations that were executed after the original operation.
     */
    getReversed?(): Operation;
}
/**
 * Abstract base operation class.
 */
export default abstract class Operation {
    /**
     * Base operation constructor.
     */
    constructor(baseVersion: number | null);

    readonly baseVersion: number | null;

    /**
     * Defines whether operation is executed on attached or detached {@link module:engine/model/item~Item items}.
     */
    readonly isDocumentOperation: boolean;

    /**
     * {@link module:engine/model/batch~Batch Batch} to which the operation is added or `null` if the operation is not
     * added to any batch yet.
     */
    batch: Batch | null;

    /**
     * Operation type.
     */
    abstract readonly type: string;

    /**
     * Custom toJSON method to solve child-parent circular dependencies.
     */
    toJSON(): {
        baseVersion: number | null;
    };

    /**
     * Name of the operation class used for serialization.
     */
    static readonly className: string;

    /**
     * Creates Operation object from deserilized object, i.e. from parsed JSON string.
     */
    static fromJSON(json: { baseVersion: number | null }, doc: Document): Operation;
}
