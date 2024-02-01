import { CoordinateSystem } from "../../../../src/Three.js";
import Backend, { BackendParameters } from "../common/Backend.js";

export interface WebGPUBackendParameters extends BackendParameters {
    alpha?: boolean | undefined;
    antialias?: boolean | undefined;
    sampleCount?: number | undefined;
    trackTimestamp?: boolean | undefined;
}

export default class WebGPUBackend extends Backend {
    readonly isWebGPUBackend: true;

    constructor(parameters?: WebGPUBackendParameters);

    get coordinateSystem(): CoordinateSystem;

    // utils public

    getMaxAnisotropy(): number;
}
