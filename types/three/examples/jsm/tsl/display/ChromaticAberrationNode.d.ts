import { ShaderNodeObject } from "three/tsl";
import { Node, TempNode, Vector2 } from "three/webgpu";

declare class ChromaticAberrationNode extends TempNode {
    textureNode: Node;
    strengthNode: Node;
    centerNode: Node;
    scaleNode: Node;

    constructor(textureNode: Node, strengthNode: Node, centerNode: Node, scaleNode: Node);
}

export default ChromaticAberrationNode;

export const chromaticAberration: (
    node: Node,
    strength?: Node,
    center?: Node | Vector2 | null,
    scale?: Node,
) => ShaderNodeObject<ChromaticAberrationNode>;
