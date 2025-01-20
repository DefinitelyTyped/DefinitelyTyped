import Node from "./Node.js";
/**
 * {@link NodeBuilder} is going to create instances of this class during the build process
 * of nodes. They represent the final shader struct data that are going to be generated
 * by the builder. A dictionary of struct types is maintained in {@link NodeBuilder#structs}
 * for this purpose.
 */
declare class StructTypeNode extends Node {
    static get type(): string;
    name: string;
    types: string[];
    readonly isStructTypeNode: true;
    /**
     * Constructs a new struct type node.
     *
     * @param {String} name - The name of the struct.
     * @param {Array<String>} types - An array of types.
     */
    constructor(name: string, types: string[]);
    /**
     * Returns the member types.
     *
     * @return {Array<String>} The types.
     */
    getMemberTypes(): string[];
}
export default StructTypeNode;
