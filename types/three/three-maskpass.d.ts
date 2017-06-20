import { Camera, Scene, WebGLRenderTarget, WebGLRenderer } from "./three-core";

export class MaskPass {
    constructor(scene: Scene, camera: Camera);

    scene: Scene;
    camera: Camera;
    enabled: boolean;
    clear: boolean;
    needsSwap: boolean;
    inverse: boolean;

    render(renderer: WebGLRenderer, writeBuffer: WebGLRenderTarget, readBuffer: WebGLRenderTarget, delta: number): void;
}

export class ClearMaskPass {
    constructor();

    enabled: boolean;

    render(renderer: WebGLRenderer, writeBuffer: WebGLRenderTarget, readBuffer: WebGLRenderTarget, delta: number): void;
}
