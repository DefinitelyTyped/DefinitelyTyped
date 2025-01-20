import { ShaderMaterial } from "three";

import { FullScreenQuad, Pass } from "./Pass.js";

export class OutputPass extends Pass {
    constructor();
    uniforms: object;
    material: ShaderMaterial;
    fsQuad: FullScreenQuad;
}
