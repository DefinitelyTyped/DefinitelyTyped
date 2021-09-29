export class SkyBox extends RenderNode {
    static createDefault(RESOURCES_URL: any): SkyBox;
    params: any;
    vertexPositionBuffer: any;
    texture: any;
    init(): void;
    frame(): void;
    _createBuffers(): void;
}
import { RenderNode } from "./RenderNode.js";
