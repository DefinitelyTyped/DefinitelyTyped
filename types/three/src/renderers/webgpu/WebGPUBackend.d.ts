/// <reference types="@webgpu/types" />

import { CoordinateSystem, HalfFloatType, UnsignedByteType } from "../../constants.js";
import Backend, { BackendParameters } from "../common/Backend.js";

export interface WebGPUBackendParameters extends BackendParameters {
    alpha?: boolean | undefined;
    compatibilityMode?: boolean | undefined;
    requiredLimits?: Record<string, GPUSize64> | undefined;
    trackTimestamp?: boolean | undefined;
    device?: GPUDevice | undefined;
    powerPreference?: GPUPowerPreference | undefined;
    context?: GPUCanvasContext | undefined;
    outputType?: typeof UnsignedByteType | typeof HalfFloatType | undefined;
}

export default class WebGPUBackend extends Backend {
    readonly isWebGPUBackend: true;

    constructor(parameters?: WebGPUBackendParameters);

    get coordinateSystem(): CoordinateSystem;

    // utils public

    getMaxAnisotropy(): number;
}
