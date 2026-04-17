import { Node } from "three/webgpu";

declare class SpotLightDataNode extends Node {
    maxCount: number;

    constructor(maxCount?: number);
}

export default SpotLightDataNode;
