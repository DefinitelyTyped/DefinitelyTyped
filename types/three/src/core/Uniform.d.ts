/**
 * Uniforms are global GLSL variables.
 * They are passed to shader programs.
 * @example
 * When declaring a uniform of a {@link THREE.ShaderMaterial | ShaderMaterial}, it is declared by value or by object.
 * ```typescript
 * uniforms: {
 *     time: {
 *         value: 1.0
 *     },
 *     resolution: new Uniform(new Vector2())
 * };
 * ```
 * @see Example: {@link https://threejs.org/examples/#webgl_nodes_materials_instance_uniform | WebGL2 / nodes / materials / instance / uniform}
 * @see Example: {@link https://threejs.org/examples/#webgpu_instance_uniform| WebGPU / instance / uniform}
 * @see {@link https://threejs.org/docs/index.html#api/en/core/Uniform | Official Documentation}
 * @see {@link https://github.com/mrdoob/three.js/blob/master/src/core/Uniform.js | Source}
 */
export class Uniform<T = any> {
    /**
     * Create a new instance of {@link THREE.Uniform | Uniform}
     * @param value An object containing the value to set up the uniform. It's type must be one of the Uniform Types described above.
     */
    constructor(value: T);

    /**
     * Current value of the uniform.
     */
    value: T;

    /**
     * Returns a clone of this uniform.
     * @remarks
     * If the uniform's {@link value} property is an {@link Object | Object} with a `clone()` method, this is used,
     * otherwise the value is copied by assignment Array values are **shared** between cloned {@link THREE.UniformUniform | Uniform}s.
     */
    clone(): Uniform<T>;
}
