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
    name: string;
    visibility: number;
    /**
     * Constructs a new binding.
     *
     * @param {String} [name=''] - The binding's name.
     */
    constructor(name?: string);
    /**
     * Makes sure binding's resource is visible for the given shader stage.
     *
     * @param {Number} visibility - The shader stage.
     */
    setVisibility(visibility: number): void;
    /**
     * Clones the binding.
     *
     * @return {Binding} The cloned binding.
     */
    clone(): Binding & this;
}
export default Binding;
