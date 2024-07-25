import Node from "../core/Node.js";
import TempNode from "../core/TempNode.js";
import { NodeRepresentation, ShaderNodeObject } from "../shadernode/ShaderNode.js";

declare class FilmNode extends TempNode {
    inputNode: Node;
    intensityNode: Node | null;
    uvNode: Node | null;

    constructor(inputNode: Node, intensityNode?: Node | null, uvNode?: Node | null);
}

export const film: (
    inputNode: NodeRepresentation,
    intensityNode?: NodeRepresentation | null,
    uvNode?: NodeRepresentation | null,
) => ShaderNodeObject<FilmNode>;

declare module "../shadernode/ShaderNode.js" {
    interface NodeElements {
        film: typeof film;
    }
}

export default FilmNode;
