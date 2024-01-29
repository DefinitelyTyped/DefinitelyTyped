import { WebGLRenderTarget, ShaderMaterial } from '../../../src/Three.js';

import { Pass, FullScreenQuad } from './Pass.js';

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
