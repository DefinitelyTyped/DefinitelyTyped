import { Data3DTexture, DataTexture } from "three";
import { ShaderPass } from "./ShaderPass.js";

export interface LUTPassParameters {
    lut?: DataTexture | Data3DTexture;
    intensity?: number;
}

export class LUTPass extends ShaderPass {
    lut?: DataTexture | Data3DTexture;
    intensity?: number;
    constructor(params: LUTPassParameters);
}
