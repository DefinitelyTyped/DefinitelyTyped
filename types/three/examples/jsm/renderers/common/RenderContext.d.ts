import { DepthTexture, RenderTarget, Texture, Vector4 } from "three";
import ClippingContext from "./ClippingContext.js";
declare class RenderContext {
    id: number;
    color: boolean;
    clearColor: boolean;
    clearColorValue: {
        r: number;
        g: number;
        b: number;
        a: number;
    };
    depth: boolean;
    clearDepth: boolean;
    clearDepthValue: number;
    stencil: boolean;
    clearStencil: boolean;
    clearStencilValue: number;
    viewport: boolean;
    viewportValue: Vector4;
    scissor: boolean;
    scissorValue: Vector4;
    textures: Texture[] | null;
    depthTexture: DepthTexture | null;
    activeCubeFace: number;
    sampleCount: number;
    width: number;
    height: number;
    readonly isRenderContext: true;
    clippingContext?: ClippingContext | undefined;
    depthClearValue?: number | undefined;
    stencilClearValue?: number | undefined;
    renderTarget?: RenderTarget | undefined;
    activeMipmapLevel?: number | undefined;
    occlusionQueryCount?: number | undefined;
    constructor();
}
export default RenderContext;
