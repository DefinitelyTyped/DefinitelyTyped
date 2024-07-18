import { ShaderMaterial } from "three";

import { FullScreenQuad, Pass } from "./Pass.js";

export class FilmPass extends Pass {
    constructor(intensity?: number, grayscale?: boolean);
    uniforms: object;
    material: ShaderMaterial;
    fsQuad: FullScreenQuad;
}
