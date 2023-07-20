import { ShaderMaterial } from '../../../src/Three.js';

import { Pass, FullScreenQuad } from './Pass.js';

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
    uniforms: object;
    material: ShaderMaterial;
    fsQuad: FullScreenQuad;
}
