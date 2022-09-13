import Position from '../position';
import Operation from './operation';

/**
 * Operation to permanently remove node from detached root.
 * Note this operation is only a local operation and won't be send to the other clients.
 */
export default class DetachOperation extends Operation {
    /**
     * Creates an insert operation.
     */
    constructor(sourcePosition: Position, howMany: number);

    /**
     * Position before the first {@link module:engine/model/item~Item model item} to detach.
     */
    readonly sourcePosition: Position;

    /**
     * Offset size of moved range.
     */
    readonly howMany: number;

    readonly type: 'detach';

    toJSON(): ReturnType<Operation['toJSON']> & {
        sourcePosition: ReturnType<Position['toJSON']>;
        type: 'detach';
        howMany: number;
    };

    static readonly className: 'DetachOperation';
}
