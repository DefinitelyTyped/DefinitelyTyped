import { Camera, ColorRepresentation, Scene, ShaderMaterial, WebGLRenderTarget } from "three";

import { FullScreenQuad, Pass } from "./Pass.js";

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
