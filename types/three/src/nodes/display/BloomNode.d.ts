import TextureNode from "../accessors/TextureNode.js";
import Node from "../core/Node.js";
import TempNode from "../core/TempNode.js";
import UniformNode from "../core/UniformNode.js";
import { NodeRepresentation, ShaderNodeObject } from "../tsl/TSLCore.js";

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
