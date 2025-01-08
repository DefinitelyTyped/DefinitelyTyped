import {
    Camera,
    Color,
    ColorRepresentation,
    Material,
    MeshNormalMaterial,
    Scene,
    ShaderMaterial,
    Vector2,
    WebGLRenderer,
    WebGLRenderTarget,
} from "three";

import { FullScreenQuad, Pass } from "./Pass.js";

export enum OUTPUT {
    Default,
    SAO,
    Normal,
}

export interface SAOPassParams {
    output: OUTPUT;
    saoBias: number;
    saoIntensity: number;
    saoScale: number;
    saoKernelRadius: number;
    saoMinResolution: number;
    saoBlur: boolean;
    saoBlurRadius: number;
    saoBlurStdDev: number;
    saoBlurDepthCutoff: number;
}

export class SAOPass extends Pass {
    constructor(scene: Scene, camera: Camera, resolution?: Vector2);
    scene: Scene;
    camera: Camera;
    originalClearColor: Color;
    oldClearColor: Color;
    oldClearAlpha: number;
    resolution: Vector2;
    saoRenderTarget: WebGLRenderTarget;
    blurIntermediateRenderTarget: WebGLRenderTarget;
    normalRenderTarget: WebGLRenderTarget;
    normalMaterial: MeshNormalMaterial;
    saoMaterial: ShaderMaterial;
    vBlurMaterial: ShaderMaterial;
    hBlurMaterial: ShaderMaterial;
    materialCopy: ShaderMaterial;
    fsQuad: FullScreenQuad;
    params: SAOPassParams;

    static OUTPUT: typeof OUTPUT;

    renderPass(
        renderer: WebGLRenderer,
        passMaterial: Material,
        renderTarget: WebGLRenderTarget,
        clearColor?: ColorRepresentation,
        clearAlpha?: number,
    ): void;
    renderOverride(
        renderer: WebGLRenderer,
        overrideMaterial: Material,
        renderTarget: WebGLRenderTarget,
        clearColor?: ColorRepresentation,
        clearAlpha?: number,
    ): void;
}
