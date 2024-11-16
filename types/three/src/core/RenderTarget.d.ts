import {
    MagnificationTextureFilter,
    MinificationTextureFilter,
    PixelFormatGPU,
    TextureDataType,
    Wrapping,
} from "../constants.js";
import { Vector4 } from "../math/Vector4.js";
import { DepthTexture } from "../textures/DepthTexture.js";
import { Texture } from "../textures/Texture.js";
import { EventDispatcher } from "./EventDispatcher.js";

export interface RenderTargetOptions {
    wrapS?: Wrapping | undefined;
    wrapT?: Wrapping | undefined;
    magFilter?: MagnificationTextureFilter | undefined;
    minFilter?: MinificationTextureFilter | undefined;
    generateMipmaps?: boolean | undefined; // true
    format?: number | undefined; // RGBAFormat
    type?: TextureDataType | undefined; // UnsignedByteType
    anisotropy?: number | undefined; // 1
    colorSpace?: string | undefined;
    internalFormat?: PixelFormatGPU | null | undefined; // null
    depthBuffer?: boolean | undefined; // true
    stencilBuffer?: boolean | undefined; // false
    resolveDepthBuffer?: boolean | undefined; // true
    resolveStencilBuffer?: boolean | undefined; // true
    depthTexture?: DepthTexture | null | undefined; // null
    /**
     * Defines the count of MSAA samples. Can only be used with WebGL 2. Default is **0**.
     * @default 0
     */
    samples?: number | undefined;
    count?: number | undefined;
}

export class RenderTarget<TTexture extends Texture | Texture[] = Texture> extends EventDispatcher<{ dispose: {} }> {
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
     * Defines whether the depth buffer should be resolved when rendering into a multisampled render target.
     * @default true
     */
    resolveDepthBuffer: boolean;

    /**
     * Defines whether the stencil buffer should be resolved when rendering into a multisampled render target.
     * This property has no effect when {@link .resolveDepthBuffer} is set to `false`.
     * @default true
     */
    resolveStencilBuffer: boolean;

    /**
     * @default null
     */
    depthTexture: DepthTexture | null;

    /**
     * Defines the count of MSAA samples. Can only be used with WebGL 2. Default is **0**.
     * @default 0
     */
    samples: number;

    constructor(width?: number, height?: number, options?: RenderTargetOptions);

    get texture(): TTexture;
    set texture(value: TTexture);

    setSize(width: number, height: number, depth?: number): void;
    clone(): this;
    copy(source: RenderTarget): this;
    dispose(): void;
}
