import { CoordinateSystem } from "../../constants.js";
import NodeBuilder from "../../nodes/core/NodeBuilder.js";
import Renderer from "./Renderer.js";
import RenderObject from "./RenderObject.js";

declare module "../../core/Object3D.js" {
    interface Object3D {
        // See https://github.com/mrdoob/three.js/pull/28683
        count?: number | undefined;
        // See https://github.com/mrdoob/three.js/pull/26335
        occlusionTest?: boolean | undefined;
    }
}

export interface BackendParameters {
    canvas?: HTMLCanvasElement | OffscreenCanvas | undefined;
}

export default abstract class Backend {
    renderer: Renderer | null;
    domElement: HTMLCanvasElement | OffscreenCanvas | null;

    constructor(parameters?: BackendParameters);

    init(renderer: Renderer): void;

    abstract get coordinateSystem(): CoordinateSystem;

    getDomElement(): HTMLCanvasElement | OffscreenCanvas;

    createNodeBuilder(renderObject: RenderObject, renderer: Renderer): NodeBuilder;
}
