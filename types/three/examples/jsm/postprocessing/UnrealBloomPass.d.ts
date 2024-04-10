import { Color, MeshBasicMaterial, ShaderMaterial, Vector2, Vector3, WebGLRenderTarget } from "three";

import { FullScreenQuad, Pass } from "./Pass.js";

export class UnrealBloomPass extends Pass {
    constructor(resolution: Vector2, strength: number, radius: number, threshold: number);
    resolution: Vector2;
    strength: number;
    radius: number;
    threshold: number;
    clearColor: Color;
    renderTargetsHorizontal: WebGLRenderTarget[];
    renderTargetsVertical: WebGLRenderTarget[];
    nMips: number;
    renderTargetBright: WebGLRenderTarget;
    highPassUniforms: object;
    materialHighPassFilter: ShaderMaterial;
    separableBlurMaterials: ShaderMaterial[];
    compositeMaterial: ShaderMaterial;
    bloomTintColors: Vector3[];
    copyUniforms: object;
    blendMaterial: ShaderMaterial;
    oldClearColor: Color;
    oldClearAlpha: number;
    basic: MeshBasicMaterial;
    fsQuad: FullScreenQuad;

    dispose(): void;
    getSeperableBlurMaterial(): ShaderMaterial;
    getCompositeMaterial(): ShaderMaterial;
}
