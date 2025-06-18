import { NodeRepresentation, ShaderNodeObject } from "three/tsl";
import { Node, TempNode, TextureNode, UniformNode } from "three/webgpu";

declare class BloomNode extends TempNode {
    inputNode: Node;
    strength: UniformNode<number>;
    radius: UniformNode<number>;
    threshold: UniformNode<number>;

    smoothWidth: UniformNode<number>;

    constructor(inputNode: Node, strength?: number, radius?: number, threshold?: number);

    getTexture(): ShaderNodeObject<TextureNode>;

    setSize(width: number, height: number): void;
}

export const bloom: (
    node: NodeRepresentation,
    strength?: number,
    radius?: number,
    threshold?: number,
) => ShaderNodeObject<BloomNode>;

export default BloomNode;
