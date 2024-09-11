import TextureNode from "../accessors/TextureNode.js";
import Node from "../core/Node.js";
import TempNode from "../core/TempNode.js";
import UniformNode from "../core/UniformNode.js";
import { NodeRepresentation, ShaderNodeObject } from "../tsl/TSLCore.js";

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
