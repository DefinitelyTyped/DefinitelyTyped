import { UniformGroupNode } from "../../../nodes/Nodes.js";
import UniformsGroup from "../UniformsGroup.js";
/**
 * A special form of uniforms group that represents
 * the individual uniforms as node-based uniforms.
 *
 * @private
 * @augments UniformsGroup
 */
declare class NodeUniformsGroup extends UniformsGroup {
    id: number;
    groupNode: UniformGroupNode;
    readonly isNodeUniformsGroup: true;
    /**
     * Constructs a new node-based uniforms group.
     *
     * @param {string} name - The group's name.
     * @param {UniformGroupNode} groupNode - The uniform group node.
     */
    constructor(name: string, groupNode: UniformGroupNode);
}
export default NodeUniformsGroup;
