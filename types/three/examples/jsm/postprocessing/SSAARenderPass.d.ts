import { Camera, ColorRepresentation, Scene } from "three";

import { Pass } from "./Pass.js";

export class SSAARenderPass extends Pass {
    scene: Scene;
    camera: Camera;

    sampleLevel: number;
    unbiased: boolean;

    stencilBuffer: boolean;

    clearColor: ColorRepresentation;
    clearAlpha: number;

    constructor(scene: Scene, camera: Camera, clearColor?: ColorRepresentation, clearAlpha?: number);
}
