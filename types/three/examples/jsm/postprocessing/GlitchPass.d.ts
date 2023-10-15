import { ShaderMaterial, DataTexture } from '../../../src/Three.js';

import { Pass, FullScreenQuad } from './Pass.js';

export class GlitchPass extends Pass {
    constructor(dt_size?: number);
    uniforms: object;
    material: ShaderMaterial;
    fsQuad: FullScreenQuad;
    goWild: boolean;
    curF: number;
    randX: number;

    generateTrigger(): void;
    generateHeightmap(dt_size: number): DataTexture;
}
