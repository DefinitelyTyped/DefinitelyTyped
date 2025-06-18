import { Data3DTexture, DataTexture, WebGLRenderer, WebGLRenderTarget } from "three";
import { WebGPURenderer } from "three/webgpu";

export class KTX2Exporter {
    parse(renderer: WebGLRenderer | WebGPURenderer, rtt?: WebGLRenderTarget): Promise<Uint8Array>;
    parse(texture: Data3DTexture | DataTexture): Promise<Uint8Array>;
}
