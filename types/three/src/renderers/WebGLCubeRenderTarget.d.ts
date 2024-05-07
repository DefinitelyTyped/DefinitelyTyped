import { RenderTargetOptions } from "../core/RenderTarget.js";
import { CubeTexture } from "../textures/CubeTexture.js";
import { Texture } from "../textures/Texture.js";
import { WebGLRenderer } from "./WebGLRenderer.js";
import { WebGLRenderTarget } from "./WebGLRenderTarget.js";

export class WebGLCubeRenderTarget extends WebGLRenderTarget {
    constructor(size?: number, options?: RenderTargetOptions);

    textures: CubeTexture[];

    get texture(): CubeTexture;
    set texture(value: CubeTexture);

    fromEquirectangularTexture(renderer: WebGLRenderer, texture: Texture): this;

    clear(renderer: WebGLRenderer, color: boolean, depth: boolean, stencil: boolean): void;
}
