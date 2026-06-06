import { Camera, Material, Object3D, Vector3, WebGPURenderer } from "three/webgpu";

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
    renderer: WebGPURenderer;
    resolution: number;

    constructor(renderer: WebGPURenderer, resolution?: number);

    addObjectsToLightMap(objects: Object3D[]): void;

    update(camera: Camera, blendWindow?: number, blurEdges?: boolean): void;

    showDebugLightmap(visible: boolean, position?: Vector3 | null): void;
}

export { ProgressiveLightMap };
