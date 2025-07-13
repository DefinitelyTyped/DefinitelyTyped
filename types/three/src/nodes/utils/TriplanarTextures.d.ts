import Node from "../core/Node.js";
import { ShaderNodeObject } from "../tsl/TSLCore.js";

export const triplanarTextures: (
    textureXNode: Node,
    textureYNode?: Node | null,
    textureZNode?: Node | null,
    scaleNode?: Node,
    positionNode?: Node,
    normalNode?: Node,
) => ShaderNodeObject<Node>;

export const triplanarTexture: (
    textureXNode: Node,
    textureYNode?: Node | null,
    textureZNode?: Node | null,
    scaleNode?: Node,
    positionNode?: Node,
    normalNode?: Node,
) => ShaderNodeObject<Node>;
