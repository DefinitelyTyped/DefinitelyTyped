import { Camera, Color, MeshDepthMaterial, Scene, ShaderMaterial, WebGLRenderTarget } from "three";

import { FullScreenQuad, Pass } from "./Pass.js";

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
