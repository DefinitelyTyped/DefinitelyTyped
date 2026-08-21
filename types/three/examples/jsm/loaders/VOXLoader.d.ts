import { BufferGeometry, Data3DTexture, Loader, LoadingManager, Mesh, MeshStandardMaterial, Object3D } from "three";

export interface Chunk {
    palette: number[];
    size: { x: number; y: number; z: number };
    data: Uint8Array;
}

export interface VOXLoaderResult {
    chunks: Chunk[];
    scene: Object3D;
}

declare class VOXLoader extends Loader<VOXLoaderResult> {
    constructor(manager?: LoadingManager);

    parse(data: ArrayBuffer): VOXLoaderResult;
}

declare function buildMesh(chunk: Chunk): Mesh<BufferGeometry, MeshStandardMaterial>;

declare function buildData3DTexture(chunk: Chunk): Data3DTexture;

/**
 * @deprecated Use buildMesh() instead.
 */
declare class VOXMesh extends Mesh {
    constructor(chunk: Chunk);
}

/**
 * @deprecated Use buildData3DTexture() instead.
 */
declare class VOXData3DTexture extends Data3DTexture {
    constructor(chunk: Chunk);
}

export { buildData3DTexture, buildMesh, VOXData3DTexture, VOXLoader, VOXMesh };
