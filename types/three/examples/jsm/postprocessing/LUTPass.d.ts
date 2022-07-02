import { DataTexture, Data3DTexture } from '../../../src/Three';
import { ShaderPass } from './ShaderPass';

export interface LUTPassParameters {
    lut?: DataTexture | Data3DTexture;
    intensity?: number;
}

export class LUTPass extends ShaderPass {
    lut?: DataTexture | Data3DTexture;
    intensity?: number;
    constructor(params: LUTPassParameters);
}
