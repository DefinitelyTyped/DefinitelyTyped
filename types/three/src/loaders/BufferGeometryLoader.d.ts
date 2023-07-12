import { Loader } from './Loader.js';
import { LoadingManager } from './LoadingManager.js';
import { BufferGeometry } from './../core/BufferGeometry.js';
import { InstancedBufferGeometry } from '../core/InstancedBufferGeometry.js';

export class BufferGeometryLoader extends Loader {
    constructor(manager?: LoadingManager);

    load(
        url: string,
        onLoad: (bufferGeometry: InstancedBufferGeometry | BufferGeometry) => void,
        onProgress?: (request: ProgressEvent) => void,
        onError?: (event: ErrorEvent) => void,
    ): void;
    loadAsync(
        url: string,
        onProgress?: (event: ProgressEvent) => void,
    ): Promise<InstancedBufferGeometry | BufferGeometry>;
    parse(json: any): InstancedBufferGeometry | BufferGeometry;
}
