import { BufferAttribute, InterleavedBuffer, TypedArray } from "three";
import BufferAttributeNode from "../accessors/BufferAttributeNode.js";
import Node from "./Node.js";
import NodeAttribute from "./NodeAttribute.js";
import NodeCode from "./NodeCode.js";
import NodeUniform from "./NodeUniform.js";
import NodeVar from "./NodeVar.js";
import NodeVarying from "./NodeVarying.js";
export interface ShaderStageNodeData {
    properties?:
        | (
            & {
                outputNode: Node | null;
                initialized?: boolean | undefined;
            }
            & {
                [K in `node${string}`]?: Node | undefined;
            }
        )
        | undefined;
    bufferAttribute?: NodeAttribute | undefined;
    structType?: Node | undefined;
    uniform?: NodeUniform<unknown> | undefined;
    variable?: NodeVar | undefined;
    varying?: NodeVarying | undefined;
    code?: NodeCode | undefined;
    usageCount?: number | undefined;
    snippet?: string | undefined;
    propertyName?: string | undefined;
    propertySizeName?: string | undefined;
}
interface NodeData {
    vertex?: ShaderStageNodeData | undefined;
    fragment?: ShaderStageNodeData | undefined;
    compute?: ShaderStageNodeData | undefined;
    any?: ShaderStageNodeData | undefined;
}
interface BufferAttributeData {
    node: BufferAttributeNode;
}
declare class NodeCache {
    id: number;
    nodesData: WeakMap<Node | TypedArray | InterleavedBuffer | BufferAttribute, NodeData | BufferAttributeData>;
    parent: NodeCache | null;
    constructor(parent?: NodeCache | null);
    getData(node: Node): NodeData | undefined;
    getData(node: TypedArray | InterleavedBuffer | BufferAttribute): BufferAttributeData | undefined;
    setData(node: Node, data: NodeData): void;
    setData(node: TypedArray | InterleavedBuffer | BufferAttribute, data: BufferAttributeData): void;
}
export default NodeCache;
