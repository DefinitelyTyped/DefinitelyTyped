import Operation from './operation';

/**
 * Operation which is doing nothing ("empty operation", "do-nothing operation", "noop"). This is an operation,
 * which when executed does not change the tree model. It still has some parameters defined for transformation purposes.
 *
 * In most cases this operation is a result of transforming operations. When transformation returns
 * {@link module:engine/model/operation/nooperation~NoOperation} it means that changes done by the transformed operation
 * have already been applied.
 */
export default class NoOperation extends Operation {
    readonly type: 'noop';

    /**
     * Creates and returns an operation that has the same parameters as this operation.
     */
    clone(): NoOperation;

    /**
     * See {@link module:engine/model/operation/operation~Operation#getReversed `Operation#getReversed()`}.
     */
    getReversed(): NoOperation;

    static readonly className: 'NoOperation';
}
