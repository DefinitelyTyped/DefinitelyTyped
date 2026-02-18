import Binding from "./Binding.js";

/**
 * A bind group represents a collection of bindings and thus a collection
 * or resources. Bind groups are assigned to pipelines to provide them
 * with the required resources (like uniform buffers or textures).
 *
 * @private
 */
declare class BindGroup {
    /**
     * Constructs a new bind group.
     *
     * @param {string} name - The bind group's name.
     * @param {Array<Binding>} bindings - An array of bindings.
     * @param {number} index - The group index.
     */
    constructor(name?: string, bindings?: Binding[], index?: number);
    /**
     * The bind group's name.
     *
     * @type {string}
     */
    name: string;
    /**
     * An array of bindings.
     *
     * @type {Array<Binding>}
     */
    bindings: Binding[];
    /**
     * The group index.
     *
     * @type {number}
     */
    index: number;
    /**
     * The group's ID.
     *
     * @type {number}
     */
    id: number;
}

export default BindGroup;
