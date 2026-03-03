import { Node, TempNode, TextureNode, UniformNode } from "three/webgpu";

declare class BloomNode extends TempNode<"vec4"> {
    inputNode: Node;
    strength: UniformNode<"float", number>;
    radius: UniformNode<"float", number>;
    threshold: UniformNode<"float", number>;

    smoothWidth: UniformNode<"float", number>;

    constructor(inputNode: Node, strength?: number, radius?: number, threshold?: number);

    getTexture(): TextureNode;

    setSize(width: number, height: number): void;
}

export const bloom: (
    node: Node,
    strength?: number,
    radius?: number,
    threshold?: number,
) => BloomNode;

export default BloomNode;
