import StandardRenderer, { StandardRendererParameters } from "../common/StandardRenderer.js";
import { WebGPUBackendParameters } from "./WebGPUBackend.js";

export interface WebGPURendererParameters extends StandardRendererParameters, WebGPUBackendParameters {
    forceWebGL?: boolean | undefined;
}

export default class WebGPURenderer extends StandardRenderer {
    constructor(parameters?: WebGPURendererParameters);
}
