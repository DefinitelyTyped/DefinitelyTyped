import { Data3DTexture, Loader, LoadingManager, Mesh } from "../../../src/Three.js";

export interface Chunk {
    palette: number[];
    size: { x: number; y: number; z: number };
    data: Uint8Array;
}

export class VOXLoader extends Loader<Chunk[]> {
    constructor(manager?: LoadingManager);

    parse(data: ArrayBuffer): object[];
}

export class VOXMesh extends Mesh {
    constructor(chunk: Chunk);
}

export class VOXData3DTexture extends Data3DTexture {
    constructor(chunk: Chunk);
}
