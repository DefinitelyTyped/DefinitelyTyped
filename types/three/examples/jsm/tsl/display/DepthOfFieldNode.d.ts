import { Node, NodeRepresentation, ShaderNodeObject, TempNode, TextureNode, UniformNode } from "three/tsl";

declare class DepthOfFieldNode extends TempNode {
    textureNode: TextureNode;
    viewZNode: Node;

    focus: UniformNode<number>;
    aperture: UniformNode<number>;
    maxblur: UniformNode<number>;

    constructor(textureNode: TextureNode, viewZNode: Node, focusNode: Node, apertureNode: Node, maxblurNode: Node);
}

export default DepthOfFieldNode;

export const dof: (
    node: NodeRepresentation,
    viewZNode: NodeRepresentation,
    focus?: NodeRepresentation,
    aperture?: NodeRepresentation,
    maxblur?: NodeRepresentation,
) => ShaderNodeObject<DepthOfFieldNode>;
