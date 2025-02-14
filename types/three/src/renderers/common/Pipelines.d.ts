import ComputeNode from "../../nodes/gpgpu/ComputeNode.js";
import Backend from "./Backend.js";
import Binding from "./Binding.js";
import Bindings from "./Bindings.js";
import ComputePipeline from "./ComputePipeline.js";
import DataMap from "./DataMap.js";
import Nodes from "./nodes/Nodes.js";
import Pipeline from "./Pipeline.js";
import ProgrammableStage from "./ProgrammableStage.js";
import RenderObject from "./RenderObject.js";
import RenderPipeline from "./RenderPipeline.js";
interface ComputeNodeData {
    version: number;
    pipeline: ComputePipeline;
}
interface RenderObjectData {
    pipeline: RenderPipeline;
}
/**
 * This renderer module manages the pipelines of the renderer.
 *
 * @private
 * @augments DataMap
 */
declare class Pipelines extends DataMap<{
    computeNode: {
        key: ComputeNode;
        value: ComputeNodeData;
    };
    renderObject: {
        key: RenderObject;
        value: RenderObjectData;
    };
}> {
    backend: Backend;
    nodes: Nodes;
    bindings: Bindings | null;
    caches: Map<string, Pipeline>;
    programs: {
        vertex: Map<string, ProgrammableStage>;
        fragment: Map<string, ProgrammableStage>;
        compute: Map<string, ProgrammableStage>;
    };
    /**
     * Constructs a new pipeline management component.
     *
     * @param {Backend} backend - The renderer's backend.
     * @param {Nodes} nodes - Renderer component for managing nodes related logic.
     */
    constructor(backend: Backend, nodes: Nodes);
    /**
     * Returns a compute pipeline for the given compute node.
     *
     * @param {Node} computeNode - The compute node.
     * @param {Array<BindGroup>} bindings - The bindings.
     * @return {ComputePipeline} The compute pipeline.
     */
    getForCompute(computeNode: ComputeNode, bindings: Binding[]): ComputePipeline;
    /**
     * Returns a render pipeline for the given render object.
     *
     * @param {RenderObject} renderObject - The render object.
     * @param {Array<Promise>?} [promises=null] - An array of compilation promises which is only relevant in context of `Renderer.compileAsync()`.
     * @return {RenderPipeline} The render pipeline.
     */
    getForRender(renderObject: RenderObject, promises?: Promise<void>[] | null): RenderPipeline;
    /**
     * Deletes the pipeline for the given render object.
     *
     * @param {RenderObject} object - The render object.
     * @return {Object?} The deleted dictionary.
     */
    delete(object: ComputeNode | RenderObject): never;
    /**
     * Frees internal resources.
     */
    dispose(): void;
    /**
     * Updates the pipeline for the given render object.
     *
     * @param {RenderObject} renderObject - The render object.
     */
    updateForRender(renderObject: RenderObject): void;
    /**
     * Returns a compute pipeline for the given parameters.
     *
     * @private
     * @param {Node} computeNode - The compute node.
     * @param {ProgrammableStage} stageCompute - The programmable stage representing the compute shader.
     * @param {String} cacheKey - The cache key.
     * @param {Array<BindGroup>} bindings - The bindings.
     * @return {ComputePipeline} The compute pipeline.
     */
    _getComputePipeline(
        computeNode: ComputeNode,
        stageCompute: ProgrammableStage,
        cacheKey: string,
        bindings: Binding[],
    ): ComputePipeline;
    /**
     * Returns a render pipeline for the given parameters.
     *
     * @private
     * @param {RenderObject} renderObject - The render object.
     * @param {ProgrammableStage} stageVertex - The programmable stage representing the vertex shader.
     * @param {ProgrammableStage} stageFragment - The programmable stage representing the fragment shader.
     * @param {String} cacheKey - The cache key.
     * @param {Array<Promise>?} promises - An array of compilation promises which is only relevant in context of `Renderer.compileAsync()`.
     * @return {ComputePipeline} The compute pipeline.
     */
    _getRenderPipeline(
        renderObject: RenderObject,
        stageVertex: ProgrammableStage,
        stageFragment: ProgrammableStage,
        cacheKey: string,
        promises: Promise<void>[] | null,
    ): RenderPipeline;
    /**
     * Computes a cache key representing a compute pipeline.
     *
     * @private
     * @param {Node} computeNode - The compute node.
     * @param {ProgrammableStage} stageCompute - The programmable stage representing the compute shader.
     * @return {String} The cache key.
     */
    _getComputeCacheKey(computeNode: ComputeNode, stageCompute: ProgrammableStage): string;
    /**
     * Computes a cache key representing a render pipeline.
     *
     * @private
     * @param {RenderObject} renderObject - The render object.
     * @param {ProgrammableStage} stageVertex - The programmable stage representing the vertex shader.
     * @param {ProgrammableStage} stageFragment - The programmable stage representing the fragment shader.
     * @return {String} The cache key.
     */
    _getRenderCacheKey(
        renderObject: RenderObject,
        stageVertex: ProgrammableStage,
        stageFragment: ProgrammableStage,
    ): string;
    /**
     * Releases the given pipeline.
     *
     * @private
     * @param {Pipeline} pipeline - The pipeline to release.
     */
    _releasePipeline(pipeline: Pipeline): void;
    /**
     * Releases the shader program.
     *
     * @private
     * @param {Object} program - The shader program to release.
     */
    _releaseProgram(program: ProgrammableStage): void;
    /**
     * Returns `true` if the compute pipeline for the given compute node requires an update.
     *
     * @private
     * @param {Node} computeNode - The compute node.
     * @return {Boolean} Whether the compute pipeline for the given compute node requires an update or not.
     */
    _needsComputeUpdate(computeNode: ComputeNode): boolean;
    /**
     * Returns `true` if the render pipeline for the given render object requires an update.
     *
     * @private
     * @param {RenderObject} renderObject - The render object.
     * @return {Boolean} Whether the render object for the given render object requires an update or not.
     */
    _needsRenderUpdate(renderObject: RenderObject): true | void;
}
export default Pipelines;
