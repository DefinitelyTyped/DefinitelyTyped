import NodeBuilder from "../../../nodes/core/NodeBuilder.js";
import Renderer from "../../../renderers/common/Renderer.js";

/**
 * This class is used by {@link WebGPURenderer} as management component.
 * It's primary purpose is to determine whether render objects require a
 * refresh right before they are going to be rendered or not.
 */
declare class NodeMaterialObserver {
    /**
     * Constructs a new node material observer.
     *
     * @param {NodeBuilder} builder - The node builder.
     */
    constructor(builder: NodeBuilder);
    /**
     * Whether the material uses node objects or not.
     *
     * @type {boolean}
     */
    hasNode: boolean;
    /**
     * Whether the node builder's 3D object is animated or not.
     *
     * @type {boolean}
     */
    hasAnimation: boolean;
    /**
     * A list of all possible material uniforms
     *
     * @type {Array<string>}
     */
    refreshUniforms: string[];
    /**
     * Holds the current render ID from the node frame.
     *
     * @type {number}
     * @default 0
     */
    renderId: number;
    /**
     * Returns `true` if the current rendering produces motion vectors.
     *
     * @param {Renderer} renderer - The renderer.
     * @return {boolean} Whether the current rendering produces motion vectors or not.
     */
    needsVelocity(renderer: Renderer): boolean;
    /**
     * Returns `true` if the node builder's material uses
     * node properties.
     *
     * @param {NodeBuilder} builder - The current node builder.
     * @return {boolean} Whether the node builder's material uses node properties or not.
     */
    containsNode(builder: NodeBuilder): boolean;
}

export default NodeMaterialObserver;
