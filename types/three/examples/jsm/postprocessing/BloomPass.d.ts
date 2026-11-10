import { ShaderMaterial } from "three";

import { Pass } from "./Pass.js";

export class BloomPass extends Pass {
    constructor(strength?: number, kernelSize?: number, sigma?: number);
    convolutionUniforms: object;
    materialConvolution: ShaderMaterial;
}
