import { CoordinateSystem } from "three";
import Renderer from "./Renderer.js";

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
