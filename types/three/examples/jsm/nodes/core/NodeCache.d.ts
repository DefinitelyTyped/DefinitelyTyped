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
declare class NodeCache {
    id: number;
    nodesData: WeakMap<Node, NodeData>;
    constructor();
    getNodeData(node: Node): NodeData | undefined;
    setNodeData(node: Node, data: NodeData): void;
}
export default NodeCache;
