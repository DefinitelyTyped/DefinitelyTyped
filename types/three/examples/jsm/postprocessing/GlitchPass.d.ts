import { ShaderMaterial } from "three";

import { Pass } from "./Pass.js";

export class GlitchPass extends Pass {
    constructor(dt_size?: number);
    uniforms: object;
    material: ShaderMaterial;
    goWild: boolean;
}
