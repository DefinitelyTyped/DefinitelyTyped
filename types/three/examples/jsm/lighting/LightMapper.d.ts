import { Light, Mesh, Node, Texture, WebGPURenderer } from "three/webgpu";

/**
 * Bakes indirect diffuse irradiance into a light map. The irradiance is defined by a
 * function that returns a TSL node for a world-space position and normal, so any
 * global illumination technique can be baked, e.g. a {@link LightProbeGrid} via
 * `lightProbeGridIrradiance()` or a prepared {@link VXGIVolume} via `vxgiIrradiance()`.
 *
 * Meshes need light map UVs in the `uv1` attribute, e.g. generated with {@link unwrapUVs}.
 * Each sample rasterizes the meshes in UV space with a sub-texel jitter and accumulates
 * the result. The function also receives the sample index, so stochastic sources like
 * `vxgiIrradiance()` can vary their samples and converge as they accumulate. Call
 * `update()` once per frame to bake progressively, or pass a sample count to bake at once.
 * Bake at most 256 samples, since samples accumulate in half float precision.
 * Keep the source geometry and GI data static while accumulating. Call `reset()`
 * after changing transforms or lighting. Atlas charts need at least three texels
 * of padding; the resolve fills two texels around covered surfaces.
 * Irradiance uses linear BT.709/sRGB primaries in lux.
 * Do not include material ambient occlusion, base color, or exposure in the source
 * irradiance. Material occlusion is applied once at runtime. Keep any contributions
 * included in the bake out of runtime diffuse lighting to avoid counting them twice.
 *
 * ```js
 * const lightMapper = new LightMapper( renderer, size, ( position, normal ) => lightProbeGridIrradiance( probes, position, normal ) );
 * lightMapper.addObjects( meshes );
 * lightMapper.update( 16 );
 *
 * material.lightMap = lightMapper.texture;
 * ```
 *
 * This class can only be used with {@link WebGPURenderer}.
 *
 * @three_import import { LightMapper } from 'three/addons/lighting/LightMapper.js';
 */
export class LightMapper {
    /**
     * Constructs a new light mapper.
     *
     * @param {WebGPURenderer} renderer - The renderer.
     * @param {number} size - The light map size in texels.
     * @param {function(Node<vec3>, Node<vec3>, Node<float>): Node<vec3>} irradianceNode - Returns the irradiance for a world-space position, normal and sample index.
     * @param {Object} [options] - Bake options.
     * @param {Array<Light>} [options.lights=[]] - Direct lights to include in the diffuse bake. Render their shadows in the source scene first and disable shadow updates during the UV bake.
     */
    constructor(
        renderer: WebGPURenderer,
        size: number,
        irradianceNode: (position: Node<"vec3">, normal: Node<"vec3">, sample: Node<"float">) => Node<"vec3">,
        { lights }?: {
            lights?: Light[] | undefined;
        },
    );
    /**
     * The renderer.
     *
     * @type {WebGPURenderer}
     */
    renderer: WebGPURenderer;
    /**
     * The source of indirect irradiance.
     *
     * @type {function(Node<vec3>, Node<vec3>, Node<float>): Node<vec3>}
     */
    irradianceNode: (position: Node<"vec3">, normal: Node<"vec3">, sample: Node<"float">) => Node<"vec3">;
    /**
     * The light map size in texels.
     *
     * @type {number}
     */
    size: number;
    /**
     * The number of accumulated samples.
     *
     * @type {number}
     * @readonly
     * @default 0
     */
    readonly samples: number;
    /**
     * The baked light map. It stores linear diffuse irradiance in lux, without baked
     * albedo, material ambient occlusion, or display exposure, and uses `uv1`.
     * Values are not divided by pi, matching the runtime light map input.
     *
     * @type {Texture}
     */
    texture: Texture;
    /**
     * Adds meshes to the light map. Their geometries must provide `uv1`.
     * Skinned and instanced meshes are not supported.
     *
     * @param {Array<Mesh>} objects - The meshes to add.
     */
    addObjects(objects: Array<Mesh>): void;
    /**
     * Accumulates samples into the light map.
     *
     * @param {number} [samples=1] - The number of samples to add.
     */
    update(samples?: number): void;
    /**
     * Discards the accumulated samples.
     */
    reset(): void;
    /**
     * Frees all internal resources.
     */
    dispose(): void;
}
