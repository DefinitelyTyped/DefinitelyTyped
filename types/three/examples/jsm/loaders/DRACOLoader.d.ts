import { BufferGeometry, Loader, LoadingManager } from "three";

interface DecoderPaths {
    js: string;
    wasm: string;
}

declare const DRACO_GLTF_CONFIG: DecoderPaths;

declare class DRACOLoader extends Loader<BufferGeometry> {
    constructor(manager?: LoadingManager);

    setDecoderPath(path: string | DecoderPaths): this;

    /**
     * @deprecated setDecoderConfig to has been deprecated and will be removed in r194.
     */
    setDecoderConfig(config: object): this;

    setWorkerLimit(workerLimit: number): this;

    load(
        url: string,
        onLoad?: (data: BufferGeometry) => void,
        onProgress?: (event: ProgressEvent) => void,
        onError?: (err: unknown) => void,
    ): void;

    parse(
        buffer: ArrayBuffer,
        onLoad?: (geometry: BufferGeometry) => void,
        onError?: (err: unknown) => void,
    ): void;

    preload(): this;
    dispose(): this;
}

export { DRACO_GLTF_CONFIG, DRACOLoader };
