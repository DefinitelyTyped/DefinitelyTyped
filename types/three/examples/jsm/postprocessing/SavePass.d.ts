import { ShaderMaterial, WebGLRenderTarget } from '../../../src/Three.js';

import { Pass, FullScreenQuad } from './Pass.js';

export class SavePass extends Pass {
    constructor(renderTarget?: WebGLRenderTarget);
    textureID: string;
    renderTarget: WebGLRenderTarget;
    uniforms: object;
    material: ShaderMaterial;
    fsQuad: FullScreenQuad;
}
