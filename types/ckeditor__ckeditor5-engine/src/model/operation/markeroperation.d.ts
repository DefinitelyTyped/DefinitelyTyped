import MarkerCollection from '../markercollection';
import Range from '../range';
import Operation from './operation';
import Document from '../document';

export default class MarkerOperation extends Operation {
    constructor(
        name: string,
        oldRange: Range | null,
        newRange: Range,
        markers: MarkerCollection,
        affectsData: boolean,
        baseVersion: number | null,
    );

    /**
     * Marker name.
     */
    readonly name: string;

    /**
     * Marker range before the change.
     */
    readonly oldRange: Range | null;

    /**
     * Marker range after the change.
     */
    readonly newRange: Range | null;

    /**
     * Specifies whether the marker operation affects the data produced by the data pipeline
     * (is persisted in the editor's data).
     */
    readonly affectsData: boolean;

    readonly type: 'marker';

    /**
     * Creates and returns an operation that has the same parameters as this operation.
     */
    clone(): MarkerOperation;

    /**
     * See {@link module:engine/model/operation/operation~Operation#getReversed `Operation#getReversed()`}.
     */
    getReversed(): MarkerOperation;

    toJSON(): ReturnType<Operation['toJSON']> & {
        oldRange?: ReturnType<Range['toJSON']> | null;
        newRange?: ReturnType<Range['toJSON']> | null;
        type: 'marker';
        affectsData: boolean;
        name: string;
    };

    static readonly className: 'MarkerOperation';

    /**
     * Creates `MarkerOperation` object from deserialized object, i.e. from parsed JSON string.
     */
    static fromJSON(
        json: {
            name: string;
            oldRange?: ReturnType<Range['toJSON']>;
            newRange?: ReturnType<Range['toJSON']>;
            affectsData: boolean;
            baseVersion: number | null;
        },
        document: Document,
    ): MarkerOperation;
}
