import { LoadingManager, Loader, CompressedTexture, WebGLRenderer } from '../../../src/Three.js';
import WebGPURenderer from '../renderers/webgpu/WebGPURenderer.js';

export class KTX2Loader extends Loader<CompressedTexture> {
    constructor(manager?: LoadingManager);

    setTranscoderPath(path: string): KTX2Loader;
    setWorkerLimit(limit: number): KTX2Loader;
    detectSupport(renderer: WebGLRenderer | WebGPURenderer): KTX2Loader;
    dispose(): KTX2Loader;
}
