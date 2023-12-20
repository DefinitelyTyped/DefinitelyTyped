import { LoadingManager, CompressedTextureLoader, CompressedTexture, WebGLRenderer } from '../../../src/Three.js';
import WebGPURenderer from '../renderers/webgpu/WebGPURenderer.js';

export class KTX2Loader extends CompressedTextureLoader {
    constructor(manager?: LoadingManager);

    setTranscoderPath(path: string): KTX2Loader;
    setWorkerLimit(limit: number): KTX2Loader;
    detectSupport(renderer: WebGLRenderer | WebGPURenderer): KTX2Loader;
    dispose(): KTX2Loader;

    parse(
        buffer: ArrayBuffer,
        onLoad: (texture: CompressedTexture) => void,
        onError?: (event: ErrorEvent) => void,
    ): KTX2Loader;
}
