import { Scene, Camera, ColorRepresentation, ShaderMaterial, WebGLRenderTarget } from '../../../src/Three';

import { Pass, FullScreenQuad } from './Pass';

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
