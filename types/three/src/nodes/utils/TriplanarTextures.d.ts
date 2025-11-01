import Node from "../core/Node.js";

export const triplanarTextures: (
    textureXNode: Node,
    textureYNode?: Node | null,
    textureZNode?: Node | null,
    scaleNode?: Node,
    positionNode?: Node,
    normalNode?: Node,
) => Node;

export const triplanarTexture: (
    textureXNode: Node,
    textureYNode?: Node | null,
    textureZNode?: Node | null,
    scaleNode?: Node,
    positionNode?: Node,
    normalNode?: Node,
) => Node;
