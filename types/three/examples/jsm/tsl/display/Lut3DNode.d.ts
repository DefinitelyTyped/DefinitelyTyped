import { Node, TextureNode, UniformNode } from "three/webgpu";

declare class Lut3DNode extends Node {
    inputNode: Node;
    lutNode: TextureNode;
    size: UniformNode<"float">;
    intensityNode: Node<"float">;

    constructor(inputNode: Node, lutNode: TextureNode, size: number, intensityNode: Node);
}

export default Lut3DNode;

export const lut3D: (
    node: Node,
    lut: TextureNode,
    size: number,
    intensity: Node<"float"> | number,
) => Lut3DNode;
