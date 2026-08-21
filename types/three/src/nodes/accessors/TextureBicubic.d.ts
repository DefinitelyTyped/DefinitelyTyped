import Node from "../core/Node.js";
import TextureNode from "./TextureNode.js";

export const textureBicubicLevel: (textureNode: Node, lodNode: Node) => TextureNode;

export const textureBicubic: (textureNode: Node, strength: Node) => TextureNode;
