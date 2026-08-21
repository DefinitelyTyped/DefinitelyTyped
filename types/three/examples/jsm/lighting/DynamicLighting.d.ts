import { Lighting } from "three/webgpu";

export interface DynamicLightingOptions {
    maxDirectionalLights?: number | undefined;
    maxPointLights?: number | undefined;
    maxSpotLights?: number | undefined;
    maxHemisphereLights?: number | undefined;
}

export class DynamicLighting extends Lighting {
    options: DynamicLightingOptions;

    constructor(options?: DynamicLightingOptions);
}

export default DynamicLighting;
