import { RenderTarget, RenderTargetOptions } from "./RenderTarget.js";

declare class RenderTargetArray extends RenderTarget {
    readonly isRenderTargetArray: true;

    constructor(width?: number, height?: number, depth?: number, options?: RenderTargetOptions);
}

export { RenderTargetArray };
