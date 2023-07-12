import { Vector4 } from '../math/Vector4.js';
import { Texture } from '../textures/Texture.js';
import { DepthTexture } from '../textures/DepthTexture.js';
import { EventDispatcher } from '../core/EventDispatcher.js';
import {
    Wrapping,
    TextureDataType,
    TextureEncoding,
    MinificationTextureFilter,
    MagnificationTextureFilter,
    ColorSpace,
} from '../constants.js';

export interface WebGLRenderTargetOptions {
    wrapS?: Wrapping | undefined;
    wrapT?: Wrapping | undefined;
    magFilter?: MagnificationTextureFilter | undefined;
    minFilter?: MinificationTextureFilter | undefined;
    generateMipmaps?: boolean | undefined; // true;
    format?: number | undefined; // RGBAFormat;
    type?: TextureDataType | undefined; // UnsignedByteType;
    anisotropy?: number | undefined; // 1;
    colorSpace?: ColorSpace | undefined;
    depthBuffer?: boolean | undefined; // true;
    stencilBuffer?: boolean | undefined; // false;
    depthTexture?: DepthTexture | undefined;
    /**
     * Defines the count of MSAA samples. Can only be used with WebGL 2. Default is **0**.
     * @default 0
     */
    samples?: number;
    /** @deprecated Use 'colorSpace' in three.js r152+. */
    encoding?: TextureEncoding | undefined;
}

export class WebGLRenderTarget<TTexture extends Texture | Texture[] = Texture> extends EventDispatcher {
    constructor(width?: number, height?: number, options?: WebGLRenderTargetOptions);

    readonly isWebGLRenderTarget: true;

    width: number;
    height: number;
    depth: number;

    scissor: Vector4;
    /**
     * @default false
     */
    scissorTest: boolean;
    viewport: Vector4;
    texture: TTexture;

    /**
     * @default true
     */
    depthBuffer: boolean;

    /**
     * @default true
     */
    stencilBuffer: boolean;

    /**
     * @default null
     */
    depthTexture: DepthTexture;

    /**
     * Defines the count of MSAA samples. Can only be used with WebGL 2. Default is **0**.
     * @default 0
     */
    samples: number;

    setSize(width: number, height: number, depth?: number): void;
    clone(): this;
    copy(source: WebGLRenderTarget): this;
    dispose(): void;
}
