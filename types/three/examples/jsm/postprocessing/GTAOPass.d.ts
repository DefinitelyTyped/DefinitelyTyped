import {
    Box3,
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
} from "../../../src/Three.js";

import { FullScreenQuad, Pass } from "./Pass.js";

export class GTAOPass extends Pass {
    width: number;
    height: number;
    clear: boolean;
    camera: Camera;
    scene: Scene;
    output: number;
    blendIntensity: number;

    pdRings: number;
    pdRadiusExponent: number;
    pdSamples: number;

    gtaoNoiseTexture: DataTexture;
    pdNoiseTexture: DataTexture;

    gtaoRenderTarget: WebGLRenderTarget;
    pdRenderTarget: WebGLRenderTarget;

    gtaoMaterial: ShaderMaterial;

    normalMaterial: MeshNormalMaterial;

    pdMaterial: ShaderMaterial;

    depthRenderMaterial: ShaderMaterial;

    copyMaterial: ShaderMaterial;

    blendMaterial: ShaderMaterial;

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

    get gtaoMap(): Texture;

    setGBuffer(depthTexture?: DepthTexture | undefined, normalTexture?: Texture | undefined): void;

    setSceneClipBox(box: Box3): void;

    updateGtaoMaterial(parameters: {
        radius?: number | undefined;
        distanceExponent?: number | undefined;
        thickness?: number | undefined;
        distanceFallOff?: number | undefined;
        scale?: number | undefined;
        samples?: number | undefined;
        screenSpaceRadius?: boolean | undefined;
    }): void;

    updatePdMaterial(parameters: {
        lumaPhi?: number | undefined;
        depthPhi?: number | undefined;
        normalPhi?: number | undefined;
        radius?: number | undefined;
        radiusExponent?: number | undefined;
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
        Off: -1;
        Default: 0;
        Diffuse: 1;
        Depth: 2;
        Normal: 3;
        AO: 4;
        Denoise: 5;
    };
}
