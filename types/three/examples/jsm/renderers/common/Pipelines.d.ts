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
    constructor(backend: Backend, nodes: Nodes);
    getForCompute(computeNode: ComputeNode, bindings: Binding[]): ComputePipeline;
    getForRender(renderObject: RenderObject, promises?: Promise<void>[] | null): RenderPipeline;
    delete(object: ComputeNode | RenderObject): never;
    dispose(): void;
    updateForRender(renderObject: RenderObject): void;
    _getComputePipeline(
        computeNode: ComputeNode,
        stageCompute: ProgrammableStage,
        cacheKey: string,
        bindings: Binding[],
    ): ComputePipeline;
    _getRenderPipeline(
        renderObject: RenderObject,
        stageVertex: ProgrammableStage,
        stageFragment: ProgrammableStage,
        cacheKey: string,
        promises: Promise<void>[] | null,
    ): RenderPipeline;
    _getComputeCacheKey(computeNode: ComputeNode, stageCompute: ProgrammableStage): string;
    _getRenderCacheKey(
        renderObject: RenderObject,
        stageVertex: ProgrammableStage,
        stageFragment: ProgrammableStage,
    ): string;
    _releasePipeline(pipeline: Pipeline): void;
    _releaseProgram(program: ProgrammableStage): void;
    _needsComputeUpdate(computeNode: ComputeNode): boolean;
    _needsRenderUpdate(renderObject: RenderObject): true | void;
}
export default Pipelines;
