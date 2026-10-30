import { Camera, Node, UniformNode } from "three/webgpu";

declare class DenoiseNode extends Node {
    textureNode: Node;
    depthNode: Node;
    normalNode: Node;

    noiseNode: Node;

    lumaPhi: UniformNode<"float">;
    depthPhi: UniformNode<"float">;
    normalPhi: UniformNode<"float">;
    radius: UniformNode<"float">;
    index: UniformNode<"float">;

    constructor(textureNode: Node, depthNode: Node, normalNode: Node, noiseNode: Node, camera: Camera);
}

export default DenoiseNode;

export const denoise: (
    node: Node,
    depthNode: Node,
    normalNode: Node,
    camera: Camera,
) => DenoiseNode;
