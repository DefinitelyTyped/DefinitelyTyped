import { Node } from "three/webgpu";

declare class HemisphereLightDataNode extends Node {
    maxCount: number;

    constructor(maxCount?: number);
}

export default HemisphereLightDataNode;
