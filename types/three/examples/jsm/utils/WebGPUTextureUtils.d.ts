import { Texture, WebGPURenderer } from "three/webgpu";

export function decompress(blitTexture: Texture, maxTextureSize?: number, renderer?: WebGPURenderer): Promise<Texture>;
