import {
    Camera,
    Color,
    Mesh,
    MeshBasicMaterial,
    MeshNormalMaterial,
    Scene,
    ShaderMaterial,
    WebGLRenderer,
    WebGLRenderTarget,
} from "three";
import { ReflectorForSSRPass } from "../objects/ReflectorForSSRPass.js";
import { FullScreenQuad, Pass } from "./Pass.js";

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

declare class SSRPass extends Pass {
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

    get resolutionScale(): number;
    set resolutionScale(value: number);
}

export { SSRPass };
