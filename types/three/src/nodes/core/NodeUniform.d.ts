import UniformNode from "./UniformNode.js";
/**
 * {@link NodeBuilder} is going to create instances of this class during the build process
 * of nodes. They represent the final shader uniforms that are going to be generated
 * by the builder. A dictionary of node uniforms is maintained in {@link NodeBuilder#uniforms}
 * for this purpose.
 */
declare class NodeUniform<TValue> {
    readonly isNodeUniform: true;
    name: string;
    type: string | null;
    node: UniformNode<TValue>;
    needsUpdate: boolean | undefined;
    /**
     * Constructs a new node uniform.
     *
     * @param {String} name - The name of the uniform.
     * @param {String} type - The type of the uniform.
     * @param {UniformNode} node - An reference to the node.
     */
    constructor(name: string, type: string | null, node: UniformNode<TValue>);
    /**
     * The value of the uniform node.
     *
     * @type {Any}
     */
    get value(): TValue;
    set value(val: TValue);
    /**
     * The id of the uniform node.
     *
     * @type {Number}
     */
    get id(): number;
    /**
     * The uniform node's group.
     *
     * @type {UniformGroupNode}
     */
    get groupNode(): import("./UniformGroupNode.js").default;
}
export default NodeUniform;
