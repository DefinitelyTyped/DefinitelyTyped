import Document from '../document';
import RootElement from '../rootelement';
import Operation from './operation';

/**
 * Operation to change root element's attribute. Using this class you can add, remove or change value of the attribute.
 *
 * This operation is needed, because root elements can't be changed through
 * @link module:engine/model/operation/attributeoperation~AttributeOperation}.
 * It is because {@link module:engine/model/operation/attributeoperation~AttributeOperation}
 * requires a range to change and root element can't
 * be a part of range because every {@link module:engine/model/position~Position} has to be inside a root.
 * {@link module:engine/model/position~Position} can't be created before a root element.
 */
export default class RootAttributeOperation<O = any, N = any> extends Operation {
    /**
     * Creates an operation that changes, removes or adds attributes on root element.
     */
    constructor(root: RootElement, key: string, oldValue: O, newValue: N, baseVersion: number | null);

    /**
     * Root element to change.
     */
    readonly root: RootElement;

    /**
     * Key of an attribute to change or remove.
     */
    readonly key: string;

    /**
     * Old value of the attribute with given key or `null` if adding a new attribute.
     */
    readonly oldValue: O;

    /**
     * New value to set for the attribute. If `null`, then the operation just removes the attribute.
     */
    readonly newValue: N;

    readonly type: 'addRootAttribute' | 'removeRootAttribute' | 'changeRootAttribute';

    /**
     * Creates and returns an operation that has the same parameters as this operation.
     */
    clone(): RootAttributeOperation;

    /**
     * See {@link module:engine/model/operation/operation~Operation#getReversed `Operation#getReversed()`}.
     */
    getReversed(): RootAttributeOperation;

    toJSON(): {
        type: 'addRootAttribute' | 'removeRootAttribute' | 'changeRootAttribute';
        newValue: N;
        oldValue: O;
        baseVersion: number | null;
        root: ReturnType<RootElement['toJSON']>;
        key: string;
    };

    static readonly className: 'RootAttributeOperation';

    /**
     * Creates RootAttributeOperation object from deserilized object, i.e. from parsed JSON string.
     */
    static fromJSON(
        json: {
            root: string;
            key: string;
            oldValue: unknown;
            newValue: unknown;
            baseVersion: number | null;
        },
        document: Document,
    ): RootAttributeOperation;
}
