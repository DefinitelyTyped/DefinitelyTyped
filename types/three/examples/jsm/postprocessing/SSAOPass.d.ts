import { Camera, DataTexture, MeshNormalMaterial, Scene, ShaderMaterial, Vector3, WebGLRenderTarget } from "three";

import { Pass } from "./Pass.js";

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

    static OUTPUT: typeof SSAOPassOUTPUT;

    dipose(): void;
}
