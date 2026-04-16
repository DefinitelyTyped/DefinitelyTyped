import { LightsNode } from "three/webgpu";

export interface DynamicLightsNodeOptions {
    maxDirectionalLights?: number | undefined;
    maxPointLights?: number | undefined;
    maxSpotLights?: number | undefined;
    maxHemisphereLights?: number | undefined;
}

declare class DynamicLightsNode extends LightsNode {
    maxDirectionalLights: number;
    maxPointLights: number;
    maxSpotLights: number;
    maxHemisphereLights: number;

    constructor(options?: DynamicLightsNodeOptions);
}

export default DynamicLightsNode;

export const dynamicLights: (options?: DynamicLightsNodeOptions) => DynamicLightsNode;
