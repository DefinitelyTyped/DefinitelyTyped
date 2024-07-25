import TextureNode from "../accessors/TextureNode.js";
import Node from "../core/Node.js";
import TempNode from "../core/TempNode.js";
import UniformNode from "../core/UniformNode.js";
import { NodeRepresentation, ShaderNodeObject } from "../shadernode/ShaderNode.js";

declare class TransitionNode extends TempNode {
    textureNodeA: TextureNode;
    textureNodeB: TextureNode;
    mixTextureNode: TextureNode;

    mixRatioNode: Node;
    thresholdNode: Node;
    useTextureNode: Node;

    constructor(
        textureNodeA: TextureNode,
        textureNodeB: TextureNode,
        mixTextureNode: TextureNode,
        mixRatioNode: Node,
        thresholdNode: Node,
        useTextureNode: Node,
    );
}

export const transition: (
    node: NodeRepresentation,
    nodeB: NodeRepresentation,
    mixTexture: NodeRepresentation,
    mixRatio: UniformNode<number>,
    threshold: UniformNode<number>,
    useTexture: UniformNode<number>,
) => ShaderNodeObject<TransitionNode>;

declare module "../shadernode/ShaderNode.js" {
    interface NodeElements {
        transition: typeof transition;
    }
}

export default TransitionNode;
