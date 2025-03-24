import { RenderTarget, RenderTargetOptions } from "./RenderTarget.js";

declare class RenderTarget3D extends RenderTarget {
    readonly isRenderTarget3D: true;

    constructor(width?: number, height?: number, depth?: number, options?: RenderTargetOptions);
}

export { RenderTarget3D };
