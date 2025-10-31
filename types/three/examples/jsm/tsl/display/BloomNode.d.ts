import { Node, TempNode, TextureNode, UniformNode } from "three/webgpu";

declare class BloomNode extends TempNode {
    inputNode: Node;
    strength: UniformNode<number>;
    radius: UniformNode<number>;
    threshold: UniformNode<number>;

    smoothWidth: UniformNode<number>;

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
