import { Camera, Node, RenderTarget, TempNode, TextureNode, UniformNode } from "three/webgpu";

export type DenoiseMode = "diffuse" | "specular";

export type DenoiseAlphaSource = "raylength" | "ao" | "none";

export interface RecurrentDenoiseNodeOptions {
    depth?: Node<"float"> | Node<"vec4"> | null | undefined;
    normal?: Node<"vec3"> | Node<"vec4"> | null | undefined;
    metalRoughness?: Node<"vec2"> | null | undefined;
    diffuse?: Node<"vec4"> | null | undefined;
    raw?: Node<"vec4"> | null | undefined;
    mode?: DenoiseMode | undefined;
    accumulate?: boolean | undefined;
}

/**
 * Post processing node for denoising temporally-accumulated screen-space effects
 * such as SSGI (ambient occlusion / indirect diffuse) and SSR (specular reflections).
 *
 * The denoising kernel is selected at construction time via `mode`:
 * `'diffuse'` (SSGI) or `'specular'` (SSR). The kernel uses a fixed 8-sample Vogel disk.
 *
 * @augments TempNode
 * @three_import import { recurrentDenoise } from 'three/addons/tsl/display/RecurrentDenoiseNode.js';
 */
declare class RecurrentDenoiseNode extends TempNode<"vec4"> {
    readonly isRecurrentDenoiseNode: boolean;
    camera: Camera;

    /**
     * Denoising kernel type.
     *
     * @type {DenoiseMode}
     */
    mode: DenoiseMode;

    /**
     * When `true`, apply temporal blending after spatial denoising. When `false`, output spatially
     * filtered colour only (alpha is passed through from the input temporal pass).
     *
     * @type {boolean}
     */
    accumulate: boolean;

    textureNode: Node<"vec4">;
    depthNode: Node<"float"> | Node<"vec4"> | null;
    normalNode: Node<"vec3"> | Node<"vec4"> | null;
    rawNode: TextureNode | null;
    roughnessMetalnessNode: Node<"vec2"> | null;
    diffuseNode: Node<"vec4"> | null;

    lumaPhi: UniformNode<"float", number>;
    depthPhi: UniformNode<"float", number>;
    normalPhi: UniformNode<"float", number>;
    radius: UniformNode<"float", number>;
    alphaPhi: UniformNode<"float", number>;
    roughnessPhi: UniformNode<"float", number>;
    diffusePhi: UniformNode<"float", number>;
    adapt: UniformNode<"float", number>;
    smoothDisocclusions: UniformNode<"bool", boolean>;
    strength: UniformNode<"float", number>;
    maxFrames: UniformNode<"float", number>;

    /**
     * Which channel of the raw texture drives alpha-based edge stopping.
     * `'raylength'` — alpha encodes SSR ray length; `'ao'` — alpha encodes AO factor;
     * `'none'` — skip alpha-based edge stopping.
     *
     * @type {DenoiseAlphaSource}
     * @default 'raylength'
     */
    alphaSource: DenoiseAlphaSource;

    flickerSuppression: UniformNode<"float", number>;
    adaptiveTrust: UniformNode<"float", number>;

    constructor(inputTexture: Node<"vec4">, camera: Camera, options?: RecurrentDenoiseNodeOptions);

    getRenderTarget(): RenderTarget;
}

export default RecurrentDenoiseNode;

export const recurrentDenoise: (
    inputTexture: Node<"vec4">,
    camera: Camera,
    options?: RecurrentDenoiseNodeOptions,
) => RecurrentDenoiseNode;
