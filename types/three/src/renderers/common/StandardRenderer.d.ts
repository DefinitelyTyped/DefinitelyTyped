import Backend from "./Backend.js";
import Renderer, { RendererParameters } from "./Renderer.js";

export interface StandardRendererParameters extends RendererParameters {}

declare class StandardRenderer extends Renderer {
    readonly isStandardRenderer: true;

    constructor(backend: Backend, parameters?: StandardRendererParameters);
}

export default StandardRenderer;
