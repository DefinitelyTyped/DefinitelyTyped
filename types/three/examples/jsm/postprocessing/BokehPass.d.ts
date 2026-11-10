import { Camera, Scene, ShaderMaterial } from "three";

import { Pass } from "./Pass.js";

export interface BokehPassParameters {
    focus?: number;
    aspect?: number;
    aperture?: number;
    maxblur?: number;
}

export class BokehPass extends Pass {
    constructor(scene: Scene, camera: Camera, params: BokehPassParameters);
    scene: Scene;
    camera: Camera;
    materialBokeh: ShaderMaterial;
    uniforms: object;
}
