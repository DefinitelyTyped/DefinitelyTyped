import Node from "../core/Node.js";
import { ShaderNodeObject } from "../tsl/TSLCore.js";

export const textureBicubicLevel: (textureNode: Node, lodNode: Node) => ShaderNodeObject<Node>;

export const textureBicubic: (textureNode: Node, strength: Node) => ShaderNodeObject<Node>;
