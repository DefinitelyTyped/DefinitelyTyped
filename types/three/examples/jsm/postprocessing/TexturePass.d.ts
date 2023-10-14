import { Texture, ShaderMaterial, IUniform } from '../../../src/Three.js';

import { Pass, FullScreenQuad } from './Pass.js';

export class TexturePass extends Pass {
    constructor(map?: Texture, opacity?: number);
    map: Texture | undefined;
    opacity: number;
    uniforms: Record<string, IUniform>;
    material: ShaderMaterial;
    fsQuad: FullScreenQuad;
}
