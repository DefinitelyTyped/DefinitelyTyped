import { Node } from "three/webgpu";

declare class DirectionalLightDataNode extends Node {
    maxCount: number;

    constructor(maxCount?: number);
}

export default DirectionalLightDataNode;
