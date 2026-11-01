import {
    Box3,
    BufferGeometry,
    Camera,
    InstancedBufferGeometry,
    Mesh,
    NodeMaterial,
    Renderer,
    Sphere,
} from "three/webgpu";

export interface GaussianSplatOptions {
    autoSort?: boolean | undefined;
}

declare class GaussianSplat extends Mesh<InstancedBufferGeometry, NodeMaterial> {
    constructor(splatGeometry: BufferGeometry, options?: GaussianSplatOptions);

    readonly isGaussianSplat: true;

    splatGeometry: BufferGeometry;
    boundingBox: Box3 | null;
    boundingSphere: Sphere | null;
    autoSort: boolean;

    updateSphericalHarmonics(renderer: Renderer, camera: Camera): boolean;

    computeBoundingBox(): void;

    computeBoundingSphere(): void;

    updateSort(renderer: Renderer, camera: Camera): boolean;
}

export { GaussianSplat };
