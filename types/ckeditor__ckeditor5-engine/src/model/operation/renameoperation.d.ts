import Document from '../document';
import Position from '../position';
import Operation from './operation';

/**
 * Operation to change element's name.
 *
 * Using this class you can change element's name.
 */
export default class RenameOperation extends Operation {
    /**
     * Creates an operation that changes element's name.
     */
    constructor(position: Position, oldName: string, newName: string, baseVersion: number | null);

    /**
     * Position before an element to change.
     */
    position: Position;

    /**
     * Current name of the element.
     */
    readonly oldName: string;

    /**
     * New name for the element.
     */
    readonly newName: string;

    readonly type: 'rename';

    /**
     * Creates and returns an operation that has the same parameters as this operation.
     */
    clone(): RenameOperation;

    /**
     * See {@link module:engine/model/operation/operation~Operation#getReversed `Operation#getReversed()`}.
     */
    getReversed(): RenameOperation;

    toJSON(): {
        type: 'rename';
        newName: string;
        oldName: string;
        position: ReturnType<Position['toJSON']>;
        baseVersion: number | null;
    };

    static readonly className: 'RenameOperation';

    /**
     * Creates `RenameOperation` object from deserialized object, i.e. from parsed JSON string.
     */

    static fromJSON(
        json: {
            position: ReturnType<Position['toJSON']>;
            oldName: string;
            newName: string;
            baseVersion: number | null;
        },
        document: Document,
    ): RenameOperation;
}
