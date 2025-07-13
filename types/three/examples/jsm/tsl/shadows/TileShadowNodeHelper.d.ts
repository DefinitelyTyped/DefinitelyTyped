import { Group } from "three/webgpu";
import { TileShadowNode } from "./TileShadowNode.js";

declare class TileShadowNodeHelper extends Group {
    constructor(tileShadowNode: TileShadowNode);

    init(): void;

    update(): void;

    dispose(): void;
}

export { TileShadowNodeHelper };
