import { ShaderMaterial } from '../../../src/Three.js';

import { Pass, FullScreenQuad } from './Pass.js';

export class OutputPass extends Pass {
    constructor();
    uniforms: object;
    material: ShaderMaterial;
    fsQuad: FullScreenQuad;
}
