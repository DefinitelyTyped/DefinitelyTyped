import { RenderTargetOptions } from "../../core/RenderTarget.js";
import { WebGLCubeRenderTarget } from "../../renderers/WebGLCubeRenderTarget.js";
import { Texture } from "../../textures/Texture.js";
import { WebGLRenderer } from "../WebGLRenderer.js";
declare class CubeRenderTarget extends WebGLCubeRenderTarget {
    readonly isCubeRenderTarget: true;
    constructor(size?: number, options?: RenderTargetOptions);
    fromEquirectangularTexture(renderer: WebGLRenderer, texture: Texture): this;
}
export default CubeRenderTarget;
