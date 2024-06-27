import ComputeNode from "../../nodes/gpgpu/ComputeNode.js";
import Attributes from "./Attributes.js";
import Backend from "./Backend.js";
import Binding from "./Binding.js";
import DataMap from "./DataMap.js";
import Info from "./Info.js";
import Nodes from "./nodes/Nodes.js";
import Pipelines from "./Pipelines.js";
import RenderObject from "./RenderObject.js";
import Textures from "./Textures.js";
interface Data {
    bindings?: Binding[] | undefined;
}
declare class Bindings extends DataMap<{
    renderObject: {
        key: RenderObject;
        value: Data;
    };
    computeNode: {
        key: ComputeNode;
        value: Data;
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
    getForRender(renderObject: RenderObject): Binding[];
    getForCompute(computeNode: ComputeNode): Binding[];
    updateForCompute(computeNode: ComputeNode): void;
    updateForRender(renderObject: RenderObject): void;
    _init(bindings: Binding[]): void;
    _update(object: ComputeNode | RenderObject, bindings: Binding[]): void;
}
export default Bindings;
