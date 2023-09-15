import {
    Color,
    MeshNormalMaterial,
    MeshBasicMaterial,
    ShaderMaterial,
    WebGLRenderTarget,
    Scene,
    WebGLRenderer,
    Camera,
    Mesh,
    Material,
    ColorRepresentation,
} from '../../../src/Three.js';
import { Pass, FullScreenQuad } from '../postprocessing/Pass.js';
import { ReflectorForSSRPass } from '../objects/ReflectorForSSRPass.js';

export interface SSRPassParams {
    renderer: WebGLRenderer;
    scene: Scene;
    camera: Camera;
    width?: number | undefined;
    height?: number | undefined;
    selects: Mesh[] | null;
    isPerspectiveCamera?: boolean | undefined;
    isBouncing?: boolean | undefined;
    groundReflector: ReflectorForSSRPass | null;
}

export class SSRPass extends Pass {
    width: number;
    height: number;
    clear: boolean;
    renderer: WebGLRenderer;
    scene: Scene;
    camera: Camera;
    groundReflector: ReflectorForSSRPass | null;
    opacity: number;
    output: number;
    maxDistance: number;
    thickness: number;
    tempColor: Color;

    get selects(): Mesh[] | null;
    set selects(val: Mesh[] | null);
    selective: boolean;
    get bouncing(): boolean;
    set bouncing(val: boolean);

    blur: boolean;

    get distanceAttenuation(): boolean;
    set distanceAttenuation(val: boolean);
    get fresnel(): boolean;
    set fresnel(val: boolean);
    get infiniteThick(): boolean;
    set infiniteThick(val: boolean);

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

    fsQuad: FullScreenQuad;

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
        clearColor: ColorRepresentation,
        clearAlpha: ColorRepresentation,
    ) => void;

    renderOverride: (
        renderer: WebGLRenderer,
        passMaterial: Material,
        renderTarget: WebGLRenderTarget,
        clearColor: ColorRepresentation,
        clearAlpha: ColorRepresentation,
    ) => void;

    renderMetalness: (
        renderer: WebGLRenderer,
        passMaterial: Material,
        renderTarget: WebGLRenderTarget,
        clearColor: ColorRepresentation,
        clearAlpha: ColorRepresentation,
    ) => void;
}
