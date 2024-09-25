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
declare class Bindings extends DataMap<{
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
    getForRender(renderObject: RenderObject): BindGroup[];
    getForCompute(computeNode: ComputeNode): BindGroup[];
    updateForCompute(computeNode: ComputeNode): void;
    updateForRender(renderObject: RenderObject): void;
    _updateBindings(bindings: BindGroup[]): void;
    _init(bindGroup: BindGroup): void;
    _update(bindGroup: BindGroup, bindings: BindGroup[]): void;
}
export default Bindings;
