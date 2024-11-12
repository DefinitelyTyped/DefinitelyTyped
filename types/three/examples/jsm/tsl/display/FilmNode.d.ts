import { Node, NodeRepresentation, ShaderNodeObject, TempNode } from "three/tsl";

declare class FilmNode extends TempNode {
    inputNode: Node;
    intensityNode: Node | null;
    uvNode: Node | null;

    constructor(inputNode: Node, intensityNode?: Node | null, uvNode?: Node | null);
}

export default FilmNode;

export const film: (
    inputNode: NodeRepresentation,
    intensityNode?: NodeRepresentation | null,
    uvNode?: NodeRepresentation | null,
) => ShaderNodeObject<FilmNode>;
