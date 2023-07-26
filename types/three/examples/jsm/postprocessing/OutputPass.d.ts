import { ShaderMaterial } from '../../../src/Three.js';
import { ToneMapping } from '../../../src/constants.js';

import { Pass, FullScreenQuad } from './Pass.js';

export class OutputPass extends Pass {
    constructor(toneMapping?: ToneMapping, toneMappingExposure?: number);
    uniforms: object;
    material: ShaderMaterial;
    fsQuad: FullScreenQuad;
    toneMapping: ToneMapping;
    toneMappingExposure: number;
}
