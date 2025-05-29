import { BufferAttribute, TypedArray } from "../../core/BufferAttribute.js";
import { InterleavedBuffer } from "../../core/InterleavedBuffer.js";
import BufferAttributeNode from "../accessors/BufferAttributeNode.js";
import Node from "./Node.js";
import NodeAttribute from "./NodeAttribute.js";
import NodeCode from "./NodeCode.js";
import NodeUniform from "./NodeUniform.js";
import NodeVar from "./NodeVar.js";
import NodeVarying from "./NodeVarying.js";
import StructType from "./StructType.js";
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
    structType?: StructType | undefined;
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
/**
 * This utility class is used in {@link NodeBuilder} as an internal
 * cache data structure for node data.
 */
declare class NodeCache {
    id: number;
    nodesData: WeakMap<Node | TypedArray | InterleavedBuffer | BufferAttribute, NodeData | BufferAttributeData>;
    parent: NodeCache | null;
    /**
     * Constructs a new node cache.
     *
     * @param {?NodeCache} parent - A reference to a parent cache.
     */
    constructor(parent?: NodeCache | null);
    /**
     * Returns the data for the given node.
     *
     * @param {Node} node - The node.
     * @return {?Object} The data for the node.
     */
    getData(node: Node): NodeData | undefined;
    getData(node: TypedArray | InterleavedBuffer | BufferAttribute): BufferAttributeData | undefined;
    /**
     * Sets the data for a given node.
     *
     * @param {Node} node - The node.
     * @param {Object} data - The data that should be cached.
     */
    setData(node: Node, data: NodeData): void;
    setData(node: TypedArray | InterleavedBuffer | BufferAttribute, data: BufferAttributeData): void;
}
export default NodeCache;
