import { WebGLExtensions } from './WebGLExtensions.js';
import { WebGLCapabilities } from './WebGLCapabilities.js';

export interface WebGLLightsState {
    version: number;

    hash: {
        directionalLength: number;
        pointLength: number;
        spotLength: number;
        rectAreaLength: number;
        hemiLength: number;

        numDirectionalShadows: number;
        numPointShadows: number;
        numSpotShadows: number;
        numSpotMaps: number;

        numLightProbes: number;
    };

    ambient: number[];
    probe: any[];
    directional: any[];
    directionalShadow: any[];
    directionalShadowMap: any[];
    directionalShadowMatrix: any[];
    spot: any[];
    spotShadow: any[];
    spotShadowMap: any[];
    spotShadowMatrix: any[];
    rectArea: any[];
    point: any[];
    pointShadow: any[];
    pointShadowMap: any[];
    pointShadowMatrix: any[];
    hemi: any[];
    numSpotLightShadowsWithMaps: number;
    numLightProbes: number;
}

export class WebGLLights {
    constructor(extensions: WebGLExtensions, capabilities: WebGLCapabilities);

    state: WebGLLightsState;

    get(light: any): any;
    setup(lights: any): void;
    setupView(lights: any, camera: any): void;
}
