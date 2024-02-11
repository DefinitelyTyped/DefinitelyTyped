import { IUniform, ShaderMaterial } from "../../../src/Three.js";

import { FullScreenQuad, Pass } from "./Pass.js";

export interface HalftonePassParameters {
    shape?: number;
    radius?: number;
    rotateR?: number;
    rotateB?: number;
    rotateG?: number;
    scatter?: number;
    blending?: number;
    blendingMode?: number;
    greyscale?: boolean;
    disable?: boolean;
}

export class HalftonePass extends Pass {
    constructor(width: number, height: number, params: HalftonePassParameters);
    uniforms: {
        tDiffuse: IUniform;
        shape: IUniform<number>;
        radius: IUniform<number>;
        rotateR: IUniform<number>;
        rotateG: IUniform<number>;
        rotateB: IUniform<number>;
        scatter: IUniform<number>;
        width: IUniform<number>;
        height: IUniform<number>;
        blending: IUniform<number>;
        blendingMode: IUniform<number>;
        greyscale: IUniform<boolean>;
        disable: IUniform<boolean>;
    };
    material: ShaderMaterial;
    fsQuad: FullScreenQuad;
}
