import { Node } from "three/webgpu";

declare class PointLightDataNode extends Node {
    maxCount: number;

    constructor(maxCount?: number);
}

export default PointLightDataNode;
