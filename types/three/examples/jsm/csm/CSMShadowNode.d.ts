import { Camera, DirectionalLightShadow, Light, Object3D } from "three";
import { Node } from "three/tsl";
import { CSMFrustum } from "./CSMFrustum.js";

export type CSMShadowNodeMode = "uniform" | "logarithmic" | "practical" | "custom";

export interface CSMShadowNodeData {
    cascades?: number | undefined;
    maxFar?: number | undefined;
    mode?: CSMShadowNodeMode | undefined;
    lightMargin?: number | undefined;
    customSplitsCallback?:
        | ((cascades: number, cameraNear: number, cameraFar: number, breaks: number[]) => void)
        | undefined;
}

declare class LwLight extends Object3D {
    target: Object3D;
    shadow?: DirectionalLightShadow;

    constructor();
}

declare class CSMShadowNode extends Node {
    light: Light;
    camera: Camera | null;
    cascades: number;
    maxFar: number;
    mode: CSMShadowNodeMode;
    lightMargin: number;
    customSplitsCallback: (cascades: number, cameraNear: number, cameraFar: number, breaks: number[]) => void;

    fade: boolean;

    breaks: number[];
    mainFrustum: CSMFrustum | null;
    frustums: CSMFrustum[];

    lights: LwLight[];

    constructor(light: Light, data?: CSMShadowNodeData);

    updateFrustums(): void;
}

export { CSMShadowNode };
