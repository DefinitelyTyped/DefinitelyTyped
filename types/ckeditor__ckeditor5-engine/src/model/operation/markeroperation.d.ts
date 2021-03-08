import Operation from "./operation";
import Range from "../range";
import MarkerCollection from "../markercollection";
import Document from "../document";

export default class MarkerOperation extends Operation {
    constructor(
        name: string,
        oldRange: Range,
        newRange: Range,
        markers: MarkerCollection,
        affectsData: boolean,
        baseVersion: number | null,
    );
    readonly type: string;
    /**
     * Creates and returns an operation that has the same parameters as this operation.
     */
    clone(): MarkerOperation;
    /**
     * See {@link module:engine/model/operation/operation~Operation#getReversed `Operation#getReversed()`}.
     */
    getReversed(): MarkerOperation;
    toJSON(): this;
    static get className(): string;
    /**
     * Creates `MarkerOperation` object from deserialized object, i.e. from parsed JSON string.
     */
    static fromJSON(json: Record<string, unknown>, document: Document): MarkerOperation;
}
