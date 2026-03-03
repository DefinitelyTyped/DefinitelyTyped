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
    node: Node,
    nodeB: Node,
    mixTexture: Node,
    mixRatio: Node | number,
    threshold: Node | number,
    useTexture: Node | number,
) => TransitionNode;
