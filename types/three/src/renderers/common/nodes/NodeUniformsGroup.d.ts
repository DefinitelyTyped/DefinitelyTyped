import { UniformGroupNode, UniformNode } from "../../../nodes/Nodes.js";
import UniformsGroup from "../UniformsGroup.js";
declare class NodeUniformsGroup extends UniformsGroup {
    id: number;
    groupNode: UniformGroupNode;
    readonly isNodeUniformsGroup: true;
    constructor(name: string, groupNode: UniformGroupNode);
    getNodes(): UniformNode<unknown>[];
}
export default NodeUniformsGroup;
