import NodeMaterialObserver from "../../../materials/nodes/manager/NodeMaterialObserver.js";
import Node from "../../../nodes/core/Node.js";
import NodeAttribute from "../../../nodes/core/NodeAttribute.js";
import BindGroup from "../BindGroup.js";

/**
 * This module represents the state of a node builder after it was
 * used to build the nodes for a render object. The state holds the
 * results of the build for further processing in the renderer.
 *
 * Render objects with identical cache keys share the same node builder state.
 *
 * @private
 */
declare class NodeBuilderState {
    /**
     * Constructs a new node builder state.
     *
     * @param {string} vertexShader - The native vertex shader code.
     * @param {string} fragmentShader - The native fragment shader code.
     * @param {string} computeShader - The native compute shader code.
     * @param {Array<NodeAttribute>} nodeAttributes - An array of node attributes.
     * @param {Array<BindGroup>} bindings - An array of bind groups.
     * @param {Array<Node>} updateNodes - An array of nodes that implement their `update()` method.
     * @param {Array<Node>} updateBeforeNodes - An array of nodes that implement their `updateBefore()` method.
     * @param {Array<Node>} updateAfterNodes - An array of nodes that implement their `updateAfter()` method.
     * @param {NodeMaterialObserver} observer - A node material observer.
     * @param {Array<Object>} transforms - An array with transform attribute objects. Only relevant when using compute shaders with WebGL 2.
     */
    constructor(
        vertexShader: string,
        fragmentShader: string,
        computeShader: string,
        nodeAttributes: NodeAttribute[],
        bindings: BindGroup[],
        updateNodes: Node[],
        updateBeforeNodes: Node[],
        updateAfterNodes: Node[],
        observer: NodeMaterialObserver,
        transforms?: unknown[],
    );
    /**
     * The native vertex shader code.
     *
     * @type {string}
     */
    vertexShader: string;
    /**
     * The native fragment shader code.
     *
     * @type {string}
     */
    fragmentShader: string;
    /**
     * The native compute shader code.
     *
     * @type {string}
     */
    computeShader: string;
    /**
     * An array with transform attribute objects.
     * Only relevant when using compute shaders with WebGL 2.
     *
     * @type {Array<Object>}
     */
    transforms: unknown[];
    /**
     * An array of node attributes representing
     * the attributes of the shaders.
     *
     * @type {Array<NodeAttribute>}
     */
    nodeAttributes: NodeAttribute[];
    /**
     * An array of bind groups representing the uniform or storage
     * buffers, texture or samplers of the shader.
     *
     * @type {Array<BindGroup>}
     */
    bindings: BindGroup[];
    /**
     * An array of nodes that implement their `update()` method.
     *
     * @type {Array<Node>}
     */
    updateNodes: Node[];
    /**
     * An array of nodes that implement their `updateBefore()` method.
     *
     * @type {Array<Node>}
     */
    updateBeforeNodes: Node[];
    /**
     * An array of nodes that implement their `updateAfter()` method.
     *
     * @type {Array<Node>}
     */
    updateAfterNodes: Node[];
    /**
     * A node material observer.
     *
     * @type {NodeMaterialObserver}
     */
    observer: NodeMaterialObserver;
    /**
     * How often this state is used by render objects.
     *
     * @type {number}
     */
    usedTimes: number;
    /**
     * This method is used to create a array of bind groups based
     * on the existing bind groups of this state. Shared groups are
     * not cloned.
     *
     * @return {Array<BindGroup>} A array of bind groups.
     */
    createBindings(): BindGroup[];
}

export default NodeBuilderState;
