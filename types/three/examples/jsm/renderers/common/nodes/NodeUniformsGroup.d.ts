import UniformGroupNode from "../../../nodes/core/UniformGroupNode.js";
import UniformNode from "../../../nodes/core/UniformNode.js";
import UniformsGroup from "../UniformsGroup.js";
declare class NodeUniformsGroup extends UniformsGroup {
    id: number;
    groupNode: UniformGroupNode;
    readonly isNodeUniformsGroup: true;
    constructor(name: string, groupNode: UniformGroupNode);
    get shared(): boolean;
    getNodes(): UniformNode<unknown>[];
}
export default NodeUniformsGroup;
