import { CoordinateSystem } from "../../constants.js";
import Renderer from "./Renderer.js";

declare module "../../core/Object3D.js" {
    interface Object3D {
        // See https://github.com/mrdoob/three.js/pull/28683
        count?: number | undefined;
        // See https://github.com/mrdoob/three.js/pull/26335
        occlusionTest?: boolean | undefined;
        // https://github.com/mrdoob/three.js/pull/29386
        static?: boolean | undefined;
    }
}

export interface BackendParameters {
    canvas?: HTMLCanvasElement | undefined;
}

export default abstract class Backend {
    renderer: Renderer | null;
    domElement: HTMLCanvasElement | null;

    constructor(parameters?: BackendParameters);

    init(renderer: Renderer): void;

    abstract get coordinateSystem(): CoordinateSystem;

    getDomElement(): HTMLCanvasElement;
}
