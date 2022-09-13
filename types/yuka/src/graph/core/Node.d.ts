/**
 * Base class for graph nodes.
 */
export class Node {
    /**
     * The unique index of this node. The default value *-1* means invalid index.
     * @default -1
     */
    index: number;

    /**
     * Constructs a new node.
     *
     * @param [index=-1] - The unique index of this node.
     */
    constructor(index?: number);

    /**
     * Transforms this instance into a JSON object.
     */
    toJSON(): { [s: string]: any };

    /**
     * Restores this instance from the given JSON object.
     *
     * @param json - The JSON object.
     */
    fromJSON(json: { [s: string]: any }): this;
}
