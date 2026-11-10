import { ShaderMaterial } from "three";

import { Pass } from "./Pass.js";

export class FilmPass extends Pass {
    constructor(intensity?: number, grayscale?: boolean);
    uniforms: object;
    material: ShaderMaterial;
}
