import { Camera } from "../../cameras/Camera.js";
import { Light } from "../../lights/Light.js";
import { WebGLExtensions } from "./WebGLExtensions.js";

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
    probe: unknown[];
    directional: unknown[];
    directionalShadow: unknown[];
    directionalShadowMap: unknown[];
    directionalShadowMatrix: unknown[];
    spot: unknown[];
    spotShadow: unknown[];
    spotShadowMap: unknown[];
    spotShadowMatrix: unknown[];
    rectArea: unknown[];
    point: unknown[];
    pointShadow: unknown[];
    pointShadowMap: unknown[];
    pointShadowMatrix: unknown[];
    hemi: unknown[];
    numSpotLightShadowsWithMaps: number;
    numLightProbes: number;
}

export class WebGLLights {
    constructor(extensions: WebGLExtensions);

    state: WebGLLightsState;

    setup(lights: Light[]): void;
    setupView(lights: Light[], camera: Camera): void;
}
