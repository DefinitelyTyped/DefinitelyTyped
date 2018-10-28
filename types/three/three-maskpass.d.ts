import { Camera, Scene, WebGLRenderTarget, WebGLRenderer } from "./three-core";
import { Pass } from "./three-effectcomposer";

export class MaskPass extends Pass {
    constructor(scene: Scene, camera: Camera);
    scene: Scene;
    camera: Camera;
    clear: true;
    needsSwap: false;
    inverse: boolean;
}

export class ClearMaskPass extends Pass {
    needsSwap: false;
}
