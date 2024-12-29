import { NodeRepresentation, ShaderNodeObject } from "three/tsl";
import { Node, TempNode, TextureNode, UniformNode } from "three/webgpu";

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

export default TransitionNode;

export const transition: (
    node: NodeRepresentation,
    nodeB: NodeRepresentation,
    mixTexture: NodeRepresentation,
    mixRatio: UniformNode<number>,
    threshold: UniformNode<number>,
    useTexture: UniformNode<number>,
) => ShaderNodeObject<TransitionNode>;
