import {
    Mesh,
    ShaderMaterial,
    WebGLRenderTarget,
    BufferGeometry,
    WebGLRenderer,
    Scene,
    Camera,
    IUniform,
} from '../../../src/Three';

export interface ReflectorShader {
    defines: {
        isDistanceAttenuation: boolean;
        isFresnel: boolean;
    };
    uniforms: {
        [key: string]: IUniform;
    };
    vertexShader: string;
    fragmentShader: string;
}

export interface ReflectorOptions {
    clipBias?: number;
    textureWidth?: number;
    textureHeight?: number;
    color?: number;
    useDepthTexture?: boolean;
    shader?: ReflectorShader;
}

export class Reflector<TGeometry extends BufferGeometry = BufferGeometry> extends Mesh<TGeometry> {
    type: 'Reflector';
    options: ReflectorOptions;

    static ReflectorShader: ReflectorShader;

    needsUpdate: boolean;
    maxDistance: number;
    opacity: number;

    get isDistanceAttenuation(): boolean;
    set isDistanceAttenuation(val: boolean);
    get isFresnel(): boolean;
    set isFresnel(val: boolean);

    material: ShaderMaterial;

    renderTarget: WebGLRenderTarget;

    constructor(geometry: TGeometry, options: ReflectorOptions);

    doRender: (renderer: WebGLRenderer, scene: Scene, camera: Camera) => void;

    getRenderTarget: () => WebGLRenderTarget;
}
