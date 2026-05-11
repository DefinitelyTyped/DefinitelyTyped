import UniformGroupNode from "./UniformGroupNode.js";
import UniformNode from "./UniformNode.js";

/**
 * {@link NodeBuilder} is going to create instances of this class during the build process
 * of nodes. They represent the final shader uniforms that are going to be generated
 * by the builder. A dictionary of node uniforms is maintained in {@link NodeBuilder#uniforms}
 * for this purpose.
 */
declare class NodeUniform<TNodeType, TValue> {
    /**
     * Constructs a new node uniform.
     *
     * @param {string} name - The name of the uniform.
     * @param {string} type - The type of the uniform.
     * @param {UniformNode} node - An reference to the node.
     */
    constructor(name: string, type: string, node: UniformNode<TNodeType, TValue>);
    /**
     * This flag can be used for type testing.
     *
     * @type {boolean}
     * @readonly
     * @default true
     */
    readonly isNodeUniform: boolean;
    /**
     * The name of the uniform.
     *
     * @type {string}
     */
    name: string;
    /**
     * The type of the uniform.
     *
     * @type {string}
     */
    type: string;
    /**
     * An reference to the node.
     *
     * @type {UniformNode}
     */
    node: UniformNode<TNodeType, TValue>;
    set value(val: TValue);
    /**
     * The value of the uniform node.
     *
     * @type {any}
     */
    get value(): TValue;
    /**
     * The id of the uniform node.
     *
     * @type {number}
     */
    get id(): number;
    /**
     * The uniform node's group.
     *
     * @type {UniformGroupNode}
     */
    get groupNode(): UniformGroupNode;
}

export default NodeUniform;
