import Renderer, { RendererParameters } from "../common/Renderer.js";
import { WebGPUBackendParameters } from "./WebGPUBackend.js";

export interface WebGPURendererParameters extends RendererParameters, WebGPUBackendParameters {
    forceWebGL?: boolean | undefined;
}

declare class WebGPURenderer extends Renderer {
    readonly isWebGPURenderer: true;

    constructor(parameters?: WebGPURendererParameters);
}

export default WebGPURenderer;
