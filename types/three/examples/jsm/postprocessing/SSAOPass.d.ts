import {
    Camera,
    Color,
    ColorRepresentation,
    DataTexture,
    Material,
    MeshNormalMaterial,
    Scene,
    ShaderMaterial,
    Vector3,
    WebGLRenderer,
    WebGLRenderTarget,
} from "three";

import { FullScreenQuad, Pass } from "./Pass.js";

export enum SSAOPassOUTPUT {
    Default,
    SSAO,
    Blur,
    Depth,
    Normal,
}

export class SSAOPass extends Pass {
    constructor(scene: Scene, camera: Camera, width?: number, height?: number, kernelSize?: number);
    scene: Scene;
    camera: Camera;
    width: number;
    height: number;
    clear: boolean;
    kernelRadius: number;
    kernel: Vector3[];
    noiseTexture: DataTexture;
    output: SSAOPassOUTPUT;
    minDistance: number;
    maxDistance: number;
    normalRenderTarget: WebGLRenderTarget;
    ssaoRenderTarget: WebGLRenderTarget;
    blurRenderTarget: WebGLRenderTarget;
    ssaoMaterial: ShaderMaterial;
    normalMaterial: MeshNormalMaterial;
    blurMaterial: ShaderMaterial;
    depthRenderMaterial: ShaderMaterial;
    copyMaterial: ShaderMaterial;
    fsQuad: FullScreenQuad;
    originalClearColor: Color;

    static OUTPUT: typeof SSAOPassOUTPUT;

    dipose(): void;
    generateSampleKernel(kernelSize: number): Vector3[];
    generateRandomKernelRotations(): void;
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
