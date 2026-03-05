/**
 * A binding represents the connection between a resource (like a texture, sampler
 * or uniform buffer) and the resource definition in a shader stage.
 *
 * This module is an abstract base class for all concrete bindings types.
 *
 * @abstract
 * @private
 */
declare class Binding {
    /**
     * Constructs a new binding.
     *
     * @param {string} [name=''] - The binding's name.
     */
    constructor(name?: string);
    /**
     * The binding's name.
     *
     * @type {string}
     */
    name: string;
    /**
     * A bitmask that defines in what shader stages the
     * binding's resource is accessible.
     *
     * @type {number}
     */
    visibility: number;
    /**
     * Makes sure binding's resource is visible for the given shader stage.
     *
     * @param {number} visibility - The shader stage.
     */
    setVisibility(visibility: number): void;
    /**
     * The shader stages in which the binding's resource is visible.
     *
     * @return {number} The visibility bitmask.
     */
    getVisibility(): number;
    /**
     * Clones the binding.
     *
     * @return {Binding} The cloned binding.
     */
    clone(): Binding;
}

export default Binding;
