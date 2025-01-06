import ComputeNode from "../../nodes/gpgpu/ComputeNode.js";
import Attributes from "./Attributes.js";
import Backend from "./Backend.js";
import BindGroup from "./BindGroup.js";
import DataMap from "./DataMap.js";
import Info from "./Info.js";
import Nodes from "./nodes/Nodes.js";
import Pipelines from "./Pipelines.js";
import RenderObject from "./RenderObject.js";
import Textures from "./Textures.js";
interface BindGroupData {
    bindGroup?: BindGroup | undefined;
}
/**
 * This renderer module manages the bindings of the renderer.
 *
 * @private
 * @augments DataMap
 */
declare class Bindings extends DataMap<{
    /**
     * Constructs a new bindings management component.
     *
     * @param {Backend} backend - The renderer's backend.
     * @param {Nodes} nodes - Renderer component for managing nodes related logic.
     * @param {Textures} textures - Renderer component for managing textures.
     * @param {Attributes} attributes - Renderer component for managing attributes.
     * @param {Pipelines} pipelines - Renderer component for managing pipelines.
     * @param {Info} info - Renderer component for managing metrics and monitoring data.
     */
    bindGroup: {
        key: BindGroup;
        value: BindGroupData;
    };
}> {
    backend: Backend;
    textures: Textures;
    pipelines: Pipelines;
    attributes: Attributes;
    nodes: Nodes;
    info: Info;
    constructor(
        backend: Backend,
        nodes: Nodes,
        textures: Textures,
        attributes: Attributes,
        pipelines: Pipelines,
        info: Info,
    );
    /**
     * Returns the bind groups for the given render object.
     *
     * @param {RenderObject} renderObject - The render object.
     * @return {Array<BindGroup>} The bind groups.
     */
    getForRender(renderObject: RenderObject): BindGroup[];
    /**
     * Returns the bind groups for the given compute node.
     *
     * @param {Node} computeNode - The compute node.
     * @return {Array<BindGroup>} The bind groups.
     */
    getForCompute(computeNode: ComputeNode): BindGroup[];
    /**
     * Updates the bindings for the given compute node.
     *
     * @param {Node} computeNode - The compute node.
     */
    updateForCompute(computeNode: ComputeNode): void;
    /**
     * Updates the bindings for the given render object.
     *
     * @param {RenderObject} renderObject - The render object.
     */
    updateForRender(renderObject: RenderObject): void;
    /**
     * Updates the given array of bindings.
     *
     * @param {Array<BindGroup>} bindings - The bind groups.
     */
    _updateBindings(bindings: BindGroup[]): void;
    /**
     * Initializes the given bind group.
     *
     * @param {BindGroup} bindGroup - The bind group to initialize.
     */
    _init(bindGroup: BindGroup): void;
    /**
     * Updates the given bind group.
     *
     * @param {BindGroup} bindGroup - The bind group to update.
     * @param {Array<BindGroup>} bindings - The bind groups.
     */
    _update(bindGroup: BindGroup, bindings: BindGroup[]): void;
}
export default Bindings;
