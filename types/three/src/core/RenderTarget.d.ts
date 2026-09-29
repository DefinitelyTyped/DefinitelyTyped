import { Vector4 } from "../math/Vector4.js";
import { DepthTexture } from "../textures/DepthTexture.js";
import { Texture, TextureParameters } from "../textures/Texture.js";
import { EventDispatcher } from "./EventDispatcher.js";

export interface RenderTargetOptions extends TextureParameters {
    depthBuffer?: boolean | undefined; // true
    stencilBuffer?: boolean | undefined; // false
    resolveColorBuffer?: boolean | undefined; // true
    resolveDepthBuffer?: boolean | undefined; // true
    resolveStencilBuffer?: boolean | undefined; // true
    storeMultisampledColorBuffer?: boolean | undefined; // true
    storeMultisampledDepthBuffer?: boolean | undefined; // true
    storeMultisampledStencilBuffer?: boolean | undefined; // true
    depthTexture?: DepthTexture | null | undefined; // null
    /**
     * Defines the count of MSAA samples. Can only be used with WebGL 2. Default is **0**.
     * @default 0
     */
    samples?: number | undefined;
    count?: number | undefined;
    depth?: number | undefined;
    multiview?: boolean | undefined;
    useArrayDepthTexture?: boolean | undefined;
}

export interface RenderTargetEventMap {
    dispose: {};
}

export class RenderTarget<
    TTexture extends Texture | Texture[] = Texture,
    TEventMap extends RenderTargetEventMap = RenderTargetEventMap,
> extends EventDispatcher<TEventMap> {
    readonly isRenderTarget: true;

    width: number;
    height: number;
    depth: number;

    scissor: Vector4;
    /**
     * @default false
     */
    scissorTest: boolean;
    viewport: Vector4;
    textures: TTexture[];

    /**
     * @default true
     */
    depthBuffer: boolean;

    /**
     * @default false
     */
    stencilBuffer: boolean;

    /**
     * Whether to resolve the color buffer or not. When set to `false`, the color attachments do not receive the
     * resolved (single-sampled) output of a render pass and the render target's textures are left untouched. The
     * rendered content is then only accessible within the render pass itself.
     *
     * Only relevant for multisampled render targets.
     * @default true
     */
    resolveColorBuffer: boolean;

    /**
     * Whether to resolve the depth buffer or not. When set to `false`, the depth texture does not receive the resolved
     * depth output of a render pass which saves memory bandwidth. Use this setting when the depth data of a render pass
     * are not required afterwards.
     *
     * Only relevant for multisampled render targets in WebGL. WebGPU does not support depth resolves; sampling the
     * depth texture of a multisampled render target accesses the multisampled data directly, see
     * {@link RenderTarget#storeMultisampledDepthBuffer}.
     * @default true
     */
    resolveDepthBuffer: boolean;

    /**
     * Whether to resolve the stencil buffer or not. Analogous to {@link RenderTarget#resolveDepthBuffer} but for the
     * stencil aspect.
     * @default true
     */
    resolveStencilBuffer: boolean;

    /**
     * Whether to store the multisampled color buffer or not. When set to `false`, the multisampled data are discarded
     * at the end of a render pass, right after they have been resolved. This saves memory bandwidth, especially on
     * tile-based GPUs, and is the recommended setting for render targets that are fully redrawn each frame and whose
     * output is only accessed via the resolved textures (e.g. scene passes in post-processing chains).
     *
     * Must be kept `true` when the multisampled data are needed after the render pass ends, e.g. when rendering into
     * the target without clearing or when the scene contains transmissive objects which require a mid-pass framebuffer
     * copy.
     * @default true
     */
    storeMultisampledColorBuffer: boolean;

    /**
     * Whether to store the multisampled depth buffer or not. When set to `false`, the multisampled depth data are
     * discarded at the end of a render pass which saves memory bandwidth.
     *
     * Must be kept `true` in WebGPU when the depth texture of a multisampled render target is sampled (e.g. by
     * depth-based post-processing effects) since depth is read directly from the multisampled data.
     * @default true
     */
    storeMultisampledDepthBuffer: boolean;

    /**
     * Whether to store the multisampled stencil buffer or not. Analogous to
     * {@link RenderTarget#storeMultisampledDepthBuffer} but for the stencil aspect.
     * @default true
     */
    storeMultisampledStencilBuffer: boolean;

    /**
     * Defines the count of MSAA samples. Can only be used with WebGL 2. Default is **0**.
     * @default 0
     */
    samples: number;

    /**
     * Whether to this target is used in multiview rendering.
     *
     * @default false
     */
    multiview: boolean;

    /**
     * Whether to create the depth texture as an array texture for per-layer depth testing.
     * This is separate from multiview so layered render targets can use array depth without
     * the multiview extension.
     *
     * @type {boolean}
     * @default false
     */
    useArrayDepthTexture: boolean;

    constructor(width?: number, height?: number, options?: RenderTargetOptions);

    get texture(): TTexture;
    set texture(value: TTexture);

    set depthTexture(current: DepthTexture | null);
    get depthTexture(): DepthTexture | null;

    setSize(width: number, height: number, depth?: number): void;
    clone(): this;
    copy(source: RenderTarget): this;
    dispose(): void;
}
