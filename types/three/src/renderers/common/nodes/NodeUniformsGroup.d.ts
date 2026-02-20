import UniformGroupNode from "../../../nodes/core/UniformGroupNode.js";
import UniformsGroup from "../UniformsGroup.js";

/**
 * A special form of uniforms group that represents
 * the individual uniforms as node-based uniforms.
 *
 * @private
 * @augments UniformsGroup
 */
declare class NodeUniformsGroup extends UniformsGroup {
    /**
     * Constructs a new node-based uniforms group.
     *
     * @param {string} name - The group's name.
     * @param {UniformGroupNode} groupNode - The uniform group node.
     */
    constructor(name: string, groupNode: UniformGroupNode);
    /**
     * The group's ID.
     *
     * @type {number}
     */
    id: number;
    /**
     * The uniform group node.
     *
     * @type {UniformGroupNode}
     */
    groupNode: UniformGroupNode;
    /**
     * This flag can be used for type testing.
     *
     * @type {boolean}
     * @readonly
     * @default true
     */
    readonly isNodeUniformsGroup: boolean;
}

export default NodeUniformsGroup;
