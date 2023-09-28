import { ShaderMaterial } from '../../../src/Three.js';

import { Pass, FullScreenQuad } from './Pass.js';

export class FilmPass extends Pass {
    constructor(intensity?: number, grayscale?: boolean);
    uniforms: object;
    material: ShaderMaterial;
    fsQuad: FullScreenQuad;
}
