import { Node, TempNode, TextureNode, UniformNode } from "three/webgpu";

declare class Lut3DNode extends TempNode {
    inputNode: Node;
    lutNode: TextureNode;
    size: UniformNode<"float", number>;
    intensityNode: Node<"float">;

    constructor(inputNode: Node, lutNode: TextureNode, size: number, intensityNode: Node);
}

export default Lut3DNode;

export const lut3D: (
    node: Node,
    lut: Node,
    size: number,
    intensity: Node,
) => Lut3DNode;
