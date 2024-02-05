import { CubeTexture } from "../textures/CubeTexture.js";
import { Texture } from "../textures/Texture.js";
import { WebGLRenderer } from "./WebGLRenderer.js";
import { WebGLRenderTarget, WebGLRenderTargetOptions } from "./WebGLRenderTarget.js";

export class WebGLCubeRenderTarget extends WebGLRenderTarget {
    constructor(size?: number, options?: WebGLRenderTargetOptions);

    texture: CubeTexture;

    fromEquirectangularTexture(renderer: WebGLRenderer, texture: Texture): this;

    clear(renderer: WebGLRenderer, color: boolean, depth: boolean, stencil: boolean): void;
}
