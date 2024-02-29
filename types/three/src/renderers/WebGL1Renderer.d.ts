import { WebGLRenderer, WebGLRendererParameters } from "./WebGLRenderer.js";

export class WebGL1Renderer extends WebGLRenderer {
    constructor(parameters?: WebGLRendererParameters);
    readonly isWebGL1Renderer: true;
}
