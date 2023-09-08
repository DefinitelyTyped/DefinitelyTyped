import { Loader, LoadingManager, Object3D } from '../../../src/Three.js';

export class Rhino3dmLoader extends Loader<Object3D> {
    constructor(manager?: LoadingManager);

    parse(data: ArrayBufferLike, onLoad: (object: Object3D) => void, onError?: (event: ErrorEvent) => void): void;
    setLibraryPath(path: string): Rhino3dmLoader;
    setWorkerLimit(workerLimit: number): Rhino3dmLoader;
    dispose(): Rhino3dmLoader;
}
