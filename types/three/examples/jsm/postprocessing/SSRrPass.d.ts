import {
    AddEquation,
    Color,
    NormalBlending,
    DepthTexture,
    SrcAlphaFactor,
    OneMinusSrcAlphaFactor,
    MeshNormalMaterial,
    MeshBasicMaterial,
    NearestFilter,
    NoBlending,
    RGBAFormat,
    ShaderMaterial,
    UniformsUtils,
    UnsignedShortType,
    WebGLRenderTarget,
    HalfFloatType,
    MeshStandardMaterial,
    WebGLRenderer,
    Scene,
    Camera,
    Mesh,
    TextureEncoding,
    Material,
} from '../../../src/Three';
import { Pass } from './Pass';
import { SSRrShader, SSRrDepthShader } from '../shaders/SSRrShader';
import { CopyShader } from '../shaders/CopyShader';

export interface SSRrPassParams {
    renderer: WebGLRenderer;
    scene: Scene;
    camera: Camera;
    width?: number;
    height?: number;
    selects: Mesh[] | null;
    encoding: TextureEncoding;
    morphTargets?: boolean;
}

export class SSRrPass extends Pass {
    width: number;
    height: number;
    clear: boolean;

    renderer: WebGLRenderer;
    scene: Scene;
    camera: Camera;

    output: number;

    ior: number;
    maxDistance: number;
    surfDist: number;

    encoding: TextureEncoding;

    color: Color;

    seleects: Mesh[] | null;

    _specular: boolean;
    get specular(): boolean;
    set specular(spec: boolean);

    _fillHole: boolean;
    get fillHole(): boolean;
    set fillHole(spec: boolean);

    _infiniteThick: boolean;
    get infiniteThick(): boolean;
    set infiniteThick(spec: boolean);

    beautyRenderTarget: WebGLRenderTarget;
    specularRenderTarget: WebGLRenderTarget;
    normalSelectsRenderTarget: WebGLRenderTarget;
    refractiveRenderTarget: WebGLRenderTarget;
    ssrrRenderTarget: WebGLRenderTarget;

    ssrrMaterial: ShaderMaterial;

    normalMaterial: MeshNormalMaterial;
    refractiveOnMaterial: MeshBasicMaterial;
    refractiveOffMaterial: MeshBasicMaterial;
    specularMaterial: MeshStandardMaterial;

    depthRenderMaterial: ShaderMaterial;
    copyMaterial: ShaderMaterial;

    fsQuad: Pass.FullScreenQuad;

    originalClearColor: Color;

    constructor(params: SSRrPassParams);

    dispose: () => void;

    render: (renderer: WebGLRenderer, writeBuffer: WebGLRenderTarget) => void;

    renderPass: (
        renderer: WebGLRenderer,
        passMaterial: Material,
        renderTarget: WebGLRenderTarget,
        clearColor: Color | string | number,
        clearAlpha: Color | string | number,
    ) => void;

    renderOverride: (
        renderer: WebGLRenderer,
        passMaterial: Material,
        renderTarget: WebGLRenderTarget,
        clearColor: Color | string | number,
        clearAlpha: Color | string | number,
    ) => void;

    renderRefractive: (
        renderer: WebGLRenderer,
        passMaterial: Material,
        renderTarget: WebGLRenderTarget,
        clearColor: Color | string | number,
        clearAlpha: Color | string | number,
    ) => void;

    setSize: (width: number, height: number) => void;
}

export namespace SSRrPass {
    interface OUTPUT {
        Default: 0;
        SSRr: 1;
        Beauty: 3;
        Depth: 4;
        DepthSelects: 9;
        NormalSelects: 5;
        Refractive: 7;
        Specular: 8;
    }
}
