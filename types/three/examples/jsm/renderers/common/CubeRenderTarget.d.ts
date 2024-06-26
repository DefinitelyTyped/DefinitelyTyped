import { RenderTargetOptions, Texture, WebGLCubeRenderTarget, WebGLRenderer } from "three";
declare class CubeRenderTarget extends WebGLCubeRenderTarget {
    readonly isCubeRenderTarget: true;
    constructor(size?: number, options?: RenderTargetOptions);
    fromEquirectangularTexture(renderer: WebGLRenderer, texture: Texture): this;
}
export default CubeRenderTarget;
