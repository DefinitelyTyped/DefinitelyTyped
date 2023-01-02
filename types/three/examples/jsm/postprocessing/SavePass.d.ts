import { ShaderMaterial, WebGLRenderTarget } from '../../../src/Three';

import { Pass, FullScreenQuad } from './Pass';

export class SavePass extends Pass {
    constructor(renderTarget?: WebGLRenderTarget);
    textureID: string;
    renderTarget: WebGLRenderTarget;
    uniforms: object;
    material: ShaderMaterial;
    fsQuad: FullScreenQuad;
}
