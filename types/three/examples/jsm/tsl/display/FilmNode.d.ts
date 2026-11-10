import { Node } from "three/webgpu";

declare class FilmNode extends Node {
    inputNode: Node;
    intensityNode: Node | null;
    uvNode: Node | null;

    constructor(inputNode: Node, intensityNode?: Node | null, uvNode?: Node | null);
}

export default FilmNode;

export const film: (
    inputNode: Node,
    intensityNode?: Node | null,
    uvNode?: Node | null,
) => FilmNode;
