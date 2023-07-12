import { Texture, ShaderMaterial } from '../../../src/Three.js';

import { Pass, FullScreenQuad } from './Pass.js';

export class TexturePass extends Pass {
    constructor(map: Texture, opacity?: number);
    map: Texture;
    opacity: number;
    uniforms: object;
    material: ShaderMaterial;
    fsQuad: FullScreenQuad;
}
