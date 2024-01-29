import { Scene, Camera, ColorRepresentation, ShaderMaterial, WebGLRenderTarget } from '../../../src/Three.js';

import { Pass, FullScreenQuad } from './Pass.js';

export class SSAARenderPass extends Pass {
    constructor(scene: Scene, camera: Camera, clearColor?: ColorRepresentation, clearAlpha?: number);
    scene: Scene;
    camera: Camera;
    sampleLevel: number;
    unbiased: boolean;
    clearColor: ColorRepresentation;
    clearAlpha: number;
    copyUniforms: object;
    copyMaterial: ShaderMaterial;
    fsQuad: FullScreenQuad;
    sampleRenderTarget: undefined | WebGLRenderTarget;
}
