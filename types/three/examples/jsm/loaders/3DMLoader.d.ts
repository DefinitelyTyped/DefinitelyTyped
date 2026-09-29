import { Loader, LoadingManager, Object3D } from "three";

export class Rhino3dmLoader extends Loader<Object3D> {
    constructor(manager?: LoadingManager);

    parse(data: ArrayBufferLike, onLoad: (object: Object3D) => void, onError?: (event: ErrorEvent) => void): void;
    parseAsync(data: ArrayBufferLike): Promise<Object3D>;
    setLibraryPath(path: string): Rhino3dmLoader;
    setWorkerLimit(workerLimit: number): Rhino3dmLoader;
    setSubdivisionLevel(level: number): Rhino3dmLoader;
    dispose(): Rhino3dmLoader;
}
