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
        DISTANCE_ATTENUATION: boolean;
        FRESNEL: boolean;
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
    type: 'ReflectorForSSRPass';
    options: ReflectorOptions;

    static ReflectorShader: ReflectorShader;

    needsUpdate: boolean;
    maxDistance: number;
    opacity: number;

    get distanceAttenuation(): boolean;
    set distanceAttenuation(val: boolean);
    get fresnel(): boolean;
    set fresnel(val: boolean);

    material: ShaderMaterial;

    renderTarget: WebGLRenderTarget;

    constructor(geometry: TGeometry, options: ReflectorOptions);

    doRender: (renderer: WebGLRenderer, scene: Scene, camera: Camera) => void;

    getRenderTarget: () => WebGLRenderTarget;
}
