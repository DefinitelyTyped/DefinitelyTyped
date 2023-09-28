import { Loader, LoadingManager, BufferGeometry } from '../../../src/Three.js';

export class DRACOLoader extends Loader<BufferGeometry> {
    constructor(manager?: LoadingManager);

    setDecoderPath(path: string): DRACOLoader;
    setDecoderConfig(config: object): DRACOLoader;
    setWorkerLimit(workerLimit: number): DRACOLoader;
    preload(): DRACOLoader;
    dispose(): DRACOLoader;
}
