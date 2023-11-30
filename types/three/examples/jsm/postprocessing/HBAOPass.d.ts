import {
    Camera,
    Color,
    ColorRepresentation,
    DataTexture,
    DepthTexture,
    MeshNormalMaterial,
    Scene,
    ShaderMaterial,
    Texture,
    WebGLRenderer,
    WebGLRenderTarget,
} from '../../../src/Three.js';

import { FullScreenQuad, Pass } from './Pass.js';

export class HBAOPass extends Pass {
    width: number;
    height: number;
    clear: boolean;
    camera: Camera;
    scene: Scene;
    output: number;

    rings: number;
    samples: number;

    noiseTexture: DataTexture;

    hbaoRenderTarget: WebGLRenderTarget;
    pdRenderTarget: WebGLRenderTarget;

    hbaoMaterial: ShaderMaterial;

    normalMaterial: MeshNormalMaterial;

    pdMaterial: ShaderMaterial;

    depthRenderMaterial: ShaderMaterial;

    copyMaterial: ShaderMaterial;

    fsQuad: FullScreenQuad;

    originalClearColor: Color;

    depthTexture: DepthTexture;
    normalTexture: Texture;

    constructor(
        scene: Scene,
        camera: Camera,
        width?: number | undefined,
        height?: number | undefined,
        parameters?: { depthTexture?: DepthTexture | undefined; normalTexture?: Texture | undefined } | undefined,
    );

    setTextures(depthTexture?: DepthTexture | undefined, normalTexture?: Texture | undefined): void;

    updateHbaoMaterial(parameters: {
        radius?: number | undefined;
        distanceExponent?: number | undefined;
        bias?: number | undefined;
        samples?: number | undefined;
    }): void;

    updatePdMaterial(parameters: {
        lumaPhi?: number | undefined;
        depthPhi?: number | undefined;
        normalPhi?: number | undefined;
        radius?: number | undefined;
        rings?: number | undefined;
        samples?: number | undefined;
    }): void;

    renderPass(
        renderer: WebGLRenderer,
        passMaterial: ShaderMaterial,
        renderTarget: WebGLRenderTarget | null,
        clearColor?: ColorRepresentation | undefined,
        clearAlpha?: number | undefined,
    ): void;

    renderOverride(
        renderer: WebGLRenderer,
        overrideMaterial: MeshNormalMaterial,
        renderTarget: WebGLRenderTarget | null,
        clearColor?: ColorRepresentation | undefined,
        clearAlpha?: number | undefined,
    ): void;

    overrideVisibility(): void;

    restoreVisibility(): void;

    generateNoise(size?: number): DataTexture;

    static OUTPUT: {
        Default: 0;
        Diffuse: 1;
        Depth: 2;
        Normal: 3;
        HBAO: 4;
        Denoise: 5;
    };
}
