import { ShaderMaterial, Vector2 } from "three";

import { Pass } from "./Pass.js";

export class DotScreenPass extends Pass {
    constructor(center?: Vector2, angle?: number, scale?: number);
    uniforms: object;
    material: ShaderMaterial;
}
