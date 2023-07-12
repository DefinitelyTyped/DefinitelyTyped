import { DataTexture, Data3DTexture } from '../../../src/Three.js';
import { ShaderPass } from './ShaderPass.js';

export interface LUTPassParameters {
    lut?: DataTexture | Data3DTexture;
    intensity?: number;
}

export class LUTPass extends ShaderPass {
    lut?: DataTexture | Data3DTexture;
    intensity?: number;
    constructor(params: LUTPassParameters);
}
