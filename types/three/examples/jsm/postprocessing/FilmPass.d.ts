import { ShaderMaterial } from "../../../src/Three.js";

import { FullScreenQuad, Pass } from "./Pass.js";

export class FilmPass extends Pass {
    constructor(intensity?: number, grayscale?: boolean);
    uniforms: object;
    material: ShaderMaterial;
    fsQuad: FullScreenQuad;
}
