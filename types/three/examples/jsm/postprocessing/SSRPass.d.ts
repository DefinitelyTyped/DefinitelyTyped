import {
    Color,
    MeshNormalMaterial,
    MeshBasicMaterial,
    ShaderMaterial,
    WebGLRenderTarget,
    Scene,
    WebGLRenderer,
    Camera,
    TextureEncoding,
    Mesh,
    Material,
} from '../../../src/Three';
import { Pass } from '../postprocessing/Pass';
import { Reflector } from '../objects/ReflectorForSSRPass';

export interface SSRPassParams {
    renderer: WebGLRenderer;
    scene: Scene;
    camera: Camera;
    width?: number;
    height?: number;
    selects: Mesh[] | null;
    encoding: TextureEncoding;
    isPerspectiveCamera?: boolean;
    isBouncing?: boolean;
    morphTargets?: boolean;
    groundReflector: Reflector | null;
}

export class SSRPass extends Pass {
    width: number;
    height: number;
    clear: boolean;
    renderer: WebGLRenderer;
    scene: Scene;
    camera: Camera;
    groundReflector: Reflector | null;
    opacity: number;
    output: number;
    maxDistance: number;
    surfDist: number;
    encoding: TextureEncoding;
    tempColor: Color;

    get selects(): Mesh[] | null;
    set selects(val: Mesh[] | null);
    selective: boolean;
    get isBouncing(): boolean;
    set isBouncing(val: boolean);

    blur: boolean;

    get isDistanceAttenuation(): boolean;
    set isDistanceAttenuation(val: boolean);
    get isFresnel(): boolean;
    set isFresnel(val: boolean);
    get isInfiniteThick(): boolean;
    set isInfiniteThick(val: boolean);

    thickTolerance: number;

    beautyRenderTarget: WebGLRenderTarget;
    prevRenderTarget: WebGLRenderTarget;
    normalRenderTarget: WebGLRenderTarget;
    metalnessRenderTarget: WebGLRenderTarget;
    ssrRenderTarget: WebGLRenderTarget;

    blurRenderTarget: WebGLRenderTarget;
    blurRenderTarget2: WebGLRenderTarget;

    ssrMaterial: ShaderMaterial;

    normalMaterial: MeshNormalMaterial;

    metalnessOnMaterial: MeshBasicMaterial;

    metalnessOffMaterial: MeshBasicMaterial;

    blurMaterial: ShaderMaterial;
    blurMaterial2: ShaderMaterial;

    depthRenderMaterial: ShaderMaterial;

    copyMaterial: ShaderMaterial;

    fsQuad: Pass.FullScreenQuad;

    originalClearColor: Color;

    static OUTPUT: {
        Default: 0;
        SSR: 1;
        Beauty: 3;
        Depth: 4;
        Normal: 5;
        Metalness: 7;
    };

    constructor(params: SSRPassParams);

    dispose: () => void;

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

    renderMetalness: (
        renderer: WebGLRenderer,
        passMaterial: Material,
        renderTarget: WebGLRenderTarget,
        clearColor: Color | string | number,
        clearAlpha: Color | string | number,
    ) => void;
}
