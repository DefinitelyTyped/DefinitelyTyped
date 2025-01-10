import NodeLibrary from "../../common/nodes/NodeLibrary.js";
/**
 * This version of a node library represents the standard version
 * used in {@link WebGPURenderer}. It maps lights, tone mapping
 * techniques and materials to node-based implementations.
 *
 * @private
 * @augments NodeLibrary
 */
declare class StandardNodeLibrary extends NodeLibrary {
    /**
     * Constructs a new standard node library.
     */
    constructor();
}
export default StandardNodeLibrary;
