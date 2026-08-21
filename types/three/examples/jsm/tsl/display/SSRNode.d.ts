import { Camera, Node, RenderTarget, TempNode, Texture, TextureNode, UniformNode } from "three/webgpu";

export interface SSRNodeOptions {
    /**
     * - When `false`, traces a single mirror reflection and softens roughness with a blur pass (first-generation SSR). When `true`, varies the reflection direction per pixel with stochastic GGX rays (second-generation SSR); higher quality on rough/glossy surfaces but noisier, so it expects a temporal/spatial denoiser downstream.
     */
    stochastic?: boolean | undefined;
    /**
     * - Per-pixel metalness. Drives GGX reflection sampling and, with `reflectNonMetals=false`, the non-metal early-out.
     */
    metalnessNode?: Node<"float"> | undefined;
    /**
     * - Per-pixel roughness. Drives GGX sampling and the blur mip selection.
     */
    roughnessNode?: Node<"float"> | undefined;
    /**
     * - Only used when `stochastic=false`. When `false`, non-metallic surfaces are discarded for a noticeable performance gain; set `true` to also reflect dielectrics (e.g. marble, polished wood, plastic).
     */
    reflectNonMetals?: boolean | undefined;
    /**
     * - Equirectangular HDR environment map with CPU-side `image.data` (e.g. from RGBELoader). Not compatible with PMREM / `scene.environment` cubemaps.
     */
    environmentNode?: Texture | undefined;
    /**
     * - When `true`, precomputes env-luminance CDF tables and uses MIS for environment misses. Build-time only.
     */
    envImportanceSampling?: boolean | undefined;
    /**
     * - Scene diffuse / base color. Defaults to `vec3(1)` in the shader when omitted.
     */
    diffuseNode?: Node<"vec4"> | undefined;
    /**
     * - Sub-step binary-search refinement of detected hits. Compile-time constant (baked into the shader at construction).
     */
    binaryRefine?: boolean | undefined;
    /**
     * - Camera the scene is rendered with. Inferred from the color pass when omitted.
     */
    camera?: Camera | undefined;
}

/**
 * Post processing node for computing screen space reflections (SSR).
 *
 * Reference: {@link https://lettier.github.io/3d-game-shaders-for-beginners/screen-space-reflection.html}
 *
 * @augments TempNode
 * @three_import import { ssr } from 'three/addons/tsl/display/SSRNode.js';
 */
declare class SSRNode extends TempNode<"vec4"> {
    /**
     * Constructs a new SSR node.
     *
     * @param {Node<vec4>} colorNode - The node that represents the beauty pass.
     * @param {Node<float>} depthNode - A node that represents the beauty pass's depth.
     * @param {Node<vec3>} normalNode - A node that represents the beauty pass's normals.
     * @param {SSRNodeOptions} [options] - Optional inputs for material and environment data.
     */
    constructor(
        colorNode: Node<"vec4">,
        depthNode: Node<"float"> | Node<"vec4">,
        normalNode: Node<"vec3">,
        options?: SSRNodeOptions,
    );
    /**
     * When `true`, the reflection direction is varied per pixel with stochastic GGX rays
     * (second-generation SSR). When `false`, a single mirror reflection is traced and
     * roughness is softened with a blur pass (first-generation SSR).
     *
     * @type {boolean}
     */
    stochastic: boolean;
    /**
     * When `true`, env-luminance CDF tables are built and MIS is used for environment misses.
     * Fixed at construction time.
     *
     * @type {boolean}
     */
    envImportanceSampling: boolean;
    /**
     * The node that represents the beauty pass.
     *
     * @type {Node<vec4>}
     */
    colorNode: Node<"vec4">;
    /**
     * A node that represents the scene's diffuse color (typically the MRT `diffuseColor` attachment).
     * When `null`, the shader uses `vec3(1)`.
     *
     * @type {?Node<vec4>}
     */
    diffuseNode: Node<"vec4"> | null;
    /**
     * A node that represents the beauty pass's depth.
     *
     * @type {Node<float>}
     */
    depthNode: Node<"float"> | Node<"vec4">;
    /**
     * A node that represents the beauty pass's normals.
     *
     * @type {Node<vec3>}
     */
    normalNode: Node<"vec3">;
    /**
     * Per-pixel metalness, used to drive the GGX reflection sampling and the non-metal
     * early-out. When `null`, the shader treats surfaces as non-metallic.
     *
     * @type {?Node<float>}
     */
    metalnessNode: Node<"float"> | null;
    /**
     * Per-pixel roughness, used to drive the GGX reflection sampling and the blur mip
     * selection. When `null`, the shader treats surfaces as fully smooth.
     *
     * @type {?Node<float>}
     */
    roughnessNode: Node<"float"> | null;
    /**
     * The resolution scale. Valid values are in the range
     * `[0,1]`. `1` means best quality but also results in
     * more computational overhead. Setting to `0.5` means
     * the effect is computed in half-resolution.
     *
     * @type {number}
     * @default 1
     */
    resolutionScale: number;
    /**
     * Controls how far a fragment can reflect. Increasing this value result in more
     * computational overhead but also increases the reflection distance.
     *
     * @type {UniformNode<float>}
     */
    maxDistance: UniformNode<"float", number>;
    /**
     * Controls the cutoff between what counts as a possible reflection hit and what does not.
     *
     * @type {UniformNode<float>}
     */
    thickness: UniformNode<"float", number>;
    /**
     * A multiplier for the overall reflection intensity. `1` leaves the
     * reflections unchanged, lower values dim them and higher values boost them.
     *
     * @type {UniformNode<float>}
     * @default 1
     */
    intensity: UniformNode<"float", number>;
    /**
     * Screen-edge fade width, in UV units. As a screen-space hit approaches a screen
     * border, the reflection is faded over this distance — either toward the environment
     * reflection ({@link SSRNode#screenEdgeFadeBlack} `false`) or to zero intensity
     * (`true`). `0` disables it.
     *
     * @type {UniformNode<float>}
     * @default 0.2
     */
    screenEdgeFade: UniformNode<"float", number>;
    /**
     * Absolute env luminance cap. HDR env samples above this are scaled down (hue preserved).
     *
     * @type {UniformNode<float>}
     * @default 10
     */
    maxLuminance: UniformNode<"float", number>;
    /**
     * This parameter controls how detailed the raymarching process works.
     * The value ranges is `[0,1]` where `1` means best quality (the maximum number
     * of raymarching iterations/samples) and `0` means no samples at all.
     *
     * A quality of `0.5` is usually sufficient for most use cases. Try to keep
     * this parameter as low as possible. Larger values result in noticeable more
     * overhead.
     *
     * @type {UniformNode<float>}
     */
    quality: UniformNode<"float", number>;
    /**
     * Mirror bias for the stochastic GGX sampling. Concentrates the reflected rays toward
     * the lobe's narrow (near-mirror) core, trading a small amount of bias for less noise.
     * `0` samples the full VNDF lobe; values toward `1` tighten the cone. Range `[0,1]`.
     *
     * @type {UniformNode<float>}
     * @default 0.5
     */
    mirrorBias: UniformNode<"float", number>;
    /**
     * HDR environment map for screen-space misses.
     *
     * @type {?Texture}
     */
    environmentNode: Texture | null;
    /**
     * A node that represents the history texture for multi-bounce reflections.
     *
     * @type {?Texture}
     */
    historyTexture: Texture | null;
    /**
     * A node that represents the velocity texture for reprojection.
     *
     * @type {?Node<vec2>}
     */
    velocityTexture: Node<"vec2"> | Node<"vec4"> | null;
    /**
     * The camera the scene is rendered with.
     *
     * @type {Camera}
     */
    camera: Camera;
    /**
     * Intensity multiplier applied to environment-map reflections on screen-space
     * misses and at screen edges. Defaults to π to match the former hardcoded multiplier.
     *
     * @type {UniformNode<float>}
     * @default Math.PI
     */
    environmentIntensity: UniformNode<"float", number>;
    /**
     * Non-linear step distribution exponent (compile-time constant). See the backing
     * field for details. Assigning a new value recompiles the SSR material.
     *
     * @type {number}
     */
    get stepExponent(): number;
    set stepExponent(value: number);
    /**
     * Blur kernel size (compile-time constant). Assigning a new value recompiles the
     * blur material.
     *
     * @type {number}
     */
    get blurQuality(): number;
    set blurQuality(value: number);
    /**
     * Whether SSR fades to black near screen borders (compile-time constant). Assigning
     * a new value recompiles the SSR material.
     *
     * @type {boolean}
     */
    get screenEdgeFadeBlack(): boolean;
    set screenEdgeFadeBlack(value: boolean);
    /**
     * Whether sub-step binary-search hit refinement is enabled (compile-time constant).
     * Assigning a new value rebuilds the SSR material.
     *
     * @type {boolean}
     */
    get binaryRefine(): boolean;
    set binaryRefine(value: boolean);
    /**
     * Whether dielectrics are reflected in the non-stochastic path (compile-time constant).
     * Assigning a new value rebuilds the SSR material.
     *
     * @type {boolean}
     */
    get reflectNonMetals(): boolean;
    set reflectNonMetals(value: boolean);
    /**
     * Returns the result of the effect as a texture node.
     *
     * @return {PassTextureNode} A texture node that represents the result of the effect.
     */
    getTextureNode(): TextureNode;
    /**
     * Sets the size of the effect.
     *
     * @param {number} width - The width of the effect.
     * @param {number} height - The height of the effect.
     */
    setSize(width: number, height: number): void;
    /**
     * Wires the feedback inputs for multi-bounce reflections: the previous frame's
     * denoised result (`history`) and the velocity buffer used to reproject it
     * (`velocity`). `history` accepts the producing node (e.g. a
     * {@link RecurrentDenoiseNode}) — its output render target is used — or a raw
     * texture. Pass `null` for both to disable multi-bounce.
     *
     * @param {Texture} history
     * @param {Node<vec2>} velocity
     */
    setHistory(
        history: Texture | { getRenderTarget(): { texture: Texture } },
        velocity: Node<"vec2"> | Node<"vec4">,
    ): void;
    /**
     * Sets the environment map for importance-sampled env lighting when
     * screen-space rays miss. Call this whenever the scene's env map changes.
     *
     * Uses {@link ImportanceSampledEnvironment} (CDF + MIS adapted from
     * [three-gpu-pathtracer](https://github.com/gkjohnson/three-gpu-pathtracer)).
     *
     * @param {Texture|null} hdr - The equirectangular HDR environment map, or null to disable.
     * @see {@link https://github.com/gkjohnson/three-gpu-pathtracer}
     */
    setEnvMap(hdr: Texture | null): void;
    /**
     * Intensity multiplier for the importance-sampled env contribution.
     * Only available after {@link setEnvMap} has been called.
     *
     * @type {?UniformNode<float>}
     */
    get envMapIntensity(): UniformNode<"float", number> | null;
    getRenderTarget(): RenderTarget;
}

export default SSRNode;

export function ssr(
    colorNode: Node<"vec4">,
    depthNode: Node<"float"> | Node<"vec4">,
    normalNode: Node<"vec3">,
    options?: SSRNodeOptions,
): SSRNode;
