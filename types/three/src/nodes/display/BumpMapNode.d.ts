import TempNode from "../core/TempNode.js";
import { NodeRepresentation, ShaderNodeObject } from "../tsl/TSLCore.js";

declare class BumpMapNode extends TempNode {
    textureNode: Node;
    scaleNode: Node | null;

    constructor(textureNode: Node, scaleNode?: Node | null);
}

export default BumpMapNode;

export const bumpMap: (
    textureNode: NodeRepresentation,
    scaleNode?: NodeRepresentation | null,
) => ShaderNodeObject<BumpMapNode>;
