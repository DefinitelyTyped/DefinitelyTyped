import { Node, UniformNode } from "three/webgpu";

declare class AmbientLightDataNode extends Node {
    colorNode: UniformNode<"color">;

    constructor();
}

export default AmbientLightDataNode;
