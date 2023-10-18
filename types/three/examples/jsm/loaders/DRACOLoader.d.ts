import { Loader, LoadingManager, BufferGeometry } from '../../../src/Three.js';

export class DRACOLoader extends Loader<BufferGeometry> {
    constructor(manager?: LoadingManager);

    setDecoderPath(path: string): DRACOLoader;
    setDecoderConfig(config: object): DRACOLoader;
    setWorkerLimit(workerLimit: number): DRACOLoader;

    load(
        url: string,
        onLoad?: (data: BufferGeometry) => void,
        onProgress?: (event: ProgressEvent) => void,
        onError?: (err: unknown) => void,
    ): void;

    preload(): DRACOLoader;
    dispose(): DRACOLoader;
}
