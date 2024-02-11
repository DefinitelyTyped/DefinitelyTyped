import { Camera, Scene } from "../../../src/Three.js";

import { FullScreenQuad, Pass } from "./Pass.js";

export class MaskPass extends Pass {
    constructor(scene: Scene, camera: Camera);
    scene: Scene;
    camera: Camera;
    inverse: boolean;
}

export class ClearMaskPass extends Pass {
    constructor();
}
