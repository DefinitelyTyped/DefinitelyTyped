import { CoordinateSystem, HalfFloatType, UnsignedByteType } from "../../constants.js";
import Backend, { BackendParameters } from "../common/Backend.js";

interface GPUDevice {}

interface GPUCanvasContext {}

export interface WebGPUBackendParameters extends BackendParameters {
    alpha?: boolean | undefined;
    requiredLimits?: Record<string, number> | undefined;
    trackTimestamp?: boolean | undefined;
    device?: GPUDevice | undefined;
    powerPreference?:
        | "low-power"
        | "high-performance"
        | undefined;
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
