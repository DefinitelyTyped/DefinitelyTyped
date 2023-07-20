import { Data3DTexture, Mesh, Loader, LoadingManager } from '../../../src/Three.js';

export interface Chunk {
    palette: number[];
    size: { x: number; y: number; z: number };
    data: Uint8Array;
}

export class VOXLoader extends Loader {
    constructor(manager?: LoadingManager);

    load(
        url: string,
        onLoad: (chunks: Chunk[]) => void,
        onProgress?: (event: ProgressEvent) => void,
        onError?: (event: ErrorEvent) => void,
    ): void;
    loadAsync(url: string, onProgress?: (event: ProgressEvent) => void): Promise<Chunk[]>;
    parse(data: ArrayBuffer): object[];
}

export class VOXMesh extends Mesh {
    constructor(chunk: Chunk);
}

export class VOXData3DTexture extends Data3DTexture {
    constructor(chunk: Chunk);
}
