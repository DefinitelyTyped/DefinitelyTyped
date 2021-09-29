export class Axes extends RenderNode {
    size: any;
    axesBuffer: any;
    axesColorBuffer: any;
    init(): void;
    frame(): void;
    createAxisBuffer(gridSize: any): void;
    axisBuffer: any;
    axisColorBuffer: any;
}
import { RenderNode } from "./RenderNode.js";
