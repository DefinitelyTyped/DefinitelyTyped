import { Scene, Camera, ShaderMaterial, WebGLRenderTarget, MeshDepthMaterial, Color } from '../../../src/Three.js';

import { Pass, FullScreenQuad } from './Pass.js';

export interface BokehPassParamters {
    focus?: number;
    aspect?: number;
    aperture?: number;
    maxblur?: number;
}

export class BokehPass extends Pass {
    constructor(scene: Scene, camera: Camera, params: BokehPassParamters);
    scene: Scene;
    camera: Camera;
    renderTargetColor: WebGLRenderTarget;
    renderTargetDepth: WebGLRenderTarget;
    materialDepth: MeshDepthMaterial;
    materialBokeh: ShaderMaterial;
    uniforms: object;
    fsQuad: FullScreenQuad;
    oldClearColor: Color;
}
