import { ShaderMaterial, WebGLRenderTarget } from "../../../src/Three.js";

import { FullScreenQuad, Pass } from "./Pass.js";

export class BloomPass extends Pass {
    constructor(strength?: number, kernelSize?: number, sigma?: number);
    renderTargetX: WebGLRenderTarget;
    renderTargetY: WebGLRenderTarget;
    copyUniforms: object;
    materialCopy: ShaderMaterial;
    convolutionUniforms: object;
    materialConvolution: ShaderMaterial;
    fsQuad: FullScreenQuad;
}
