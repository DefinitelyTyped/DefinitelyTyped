import Document from '../document';
import Range from '../range';
import Operation from './operation';

/**
 * Operation to change nodes' attribute.
 *
 * Using this class you can add, remove or change value of the attribute.
 */
export default class AttributeOperation<
    O extends string | number | boolean | undefined = any,
    N extends string | number | boolean | undefined = any,
> extends Operation {
    static readonly className: 'AttributeOperation';

    /**
     * Creates an operation that changes, removes or adds attributes.
     *
     * If only `newValue` is set, attribute will be added on a node. Note that all nodes in operation's range must not
     * have an attribute with the same key as the added attribute.
     *
     * If only `oldValue` is set, then attribute with given key will be removed. Note that all nodes in operation's range
     * must have an attribute with that key added.
     *
     * If both `newValue` and `oldValue` are set, then the operation will change the attribute value. Note that all nodes in
     * operation's ranges must already have an attribute with given key and `oldValue` as value
     */
    constructor(range: Range, key: string, oldValue: O, newValue: N, baseVersion: number | null);

    /**
     * Range on which operation should be applied.
     */
    readonly range: Range;

    /**
     * Key of an attribute to change or remove.
     */
    readonly key: string;

    /**
     * Old value of the attribute with given key or `null`, if attribute was not set before.
     */
    readonly oldValue: O extends undefined ? null : O;

    /**
     * New value of the attribute with given key or `null`, if operation should remove attribute.
     */
    readonly newValue: N extends undefined ? null : N;

    readonly type: 'addAttribute' | 'removeAttribute' | 'changeAttribute';

    /**
     * Creates and returns an operation that has the same parameters as this operation.
     */
    clone(): AttributeOperation<O, N>;

    /**
     * See {@link module:engine/model/operation/operation~Operation#getReversed `Operation#getReversed()`}.
     */
    getReversed(): AttributeOperation<O, N>;

    toJSON(): ReturnType<Operation['toJSON']> & {
        key: string;
        newValue: N extends undefined ? null : N;
        oldValue: O extends undefined ? null : O;
        range: ReturnType<Range['toJSON']>;
    };

    /**
     * Creates `AttributeOperation` object from deserilized object, i.e. from parsed JSON string.
     */
    static fromJSON(
        json: {
            baseVersion: number | null;
            range: ReturnType<Range['toJSON']>;
            key: string;
            newValue: string | boolean | number | null;
            oldValue: string | boolean | number | null;
        },
        document: Document,
    ): AttributeOperation;
}
