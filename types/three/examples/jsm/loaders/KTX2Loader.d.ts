import { CompressedTexture, Loader, LoadingManager, WebGLRenderer } from "three";
import Renderer from "../renderers/common/Renderer.js";
import WebGPURenderer from "../renderers/webgpu/WebGPURenderer.js";
import { WorkerPool } from "../utils/WorkerPool.js";

export interface KTX2LoaderWorkerConfig {
    astcSupported: boolean;
    etc1Supported: boolean;
    etc2Supported: boolean;
    dxtSupported: boolean;
    bptcSupported: boolean;
    pvrtcSupported: boolean;
}

export class KTX2Loader extends Loader<CompressedTexture> {
    transcoderPath: string;
    transcoderBinary: ArrayBuffer | null;
    transcoderPending: Promise<void> | null;

    workerPool: WorkerPool;
    workerSourceURL: string;
    workerConfig: KTX2LoaderWorkerConfig;

    constructor(manager?: LoadingManager);

    /**
     * The WASM transcoder and JS wrapper are available from the examples/jsm/libs/basis directory.
     * @param path Path to folder containing the WASM transcoder and JS wrapper.
     */
    setTranscoderPath(path: string): this;

    /**
     * Sets the maximum number of web workers to be allocated by this instance.
     * @param limit Maximum number of workers. Default is '4'.
     */
    setWorkerLimit(limit: number): this;

    detectSupportAsync(renderer: Renderer): Promise<this>;

    /**
     * Detects hardware support for available compressed texture formats, to determine the output format for the
     * transcoder. Must be called before loading a texture.
     * @param renderer A renderer instance.
     */
    detectSupport(renderer: WebGLRenderer | WebGPURenderer): this;

    /**
     * Disposes the loader object, de-allocating any Web Workers created.
     */
    dispose(): this;
}
