import {
    Camera,
    Material,
    Mesh,
    MeshBasicMaterial,
    MeshPhongMaterial,
    Object3D,
    PlaneGeometry,
    Scene,
    Texture,
    Vector3,
    WebGLRenderer,
    WebGLRenderTarget,
} from "three";

export interface UVBoxes {
    w: number;
    h: number;
    index: number;
}

export interface LightMapContainers {
    basicMat: Material | Material[];
    object: Object3D;
}

declare class ProgressiveLightMap {
    renderer: WebGLRenderer;
    res: number;
    lightMapContainers: LightMapContainers[];
    scene: Scene;
    buffer1Active: boolean;
    firstUpdate: boolean;
    warned: boolean;
    labelMesh: Mesh<PlaneGeometry, MeshBasicMaterial> | null;
    blurringPlane: Mesh<PlaneGeometry, MeshBasicMaterial> | null;

    progressiveLightMap1: WebGLRenderTarget;
    progressiveLightMap2: WebGLRenderTarget;

    uvMat: MeshPhongMaterial;

    uv_boxes?: UVBoxes[];

    constructor(renderer: WebGLRenderer, res?: number);

    addObjectsToLightMap(objects: Object3D[]): void;

    update(camera: Camera, blendWindow?: number, blurEdges?: boolean): void;

    showDebugLightmap(visible: boolean, position?: Vector3): void;

    private _initializeBlurPlane(res: number, lightMap?: Texture | null): void;

    dispose(): void;
}

export { ProgressiveLightMap };
