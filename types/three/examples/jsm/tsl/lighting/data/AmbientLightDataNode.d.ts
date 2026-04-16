import { Color, Node, UniformNode } from "three/webgpu";

declare class AmbientLightDataNode extends Node {
    colorNode: UniformNode<"color", Color>;

    constructor();
}

export default AmbientLightDataNode;
