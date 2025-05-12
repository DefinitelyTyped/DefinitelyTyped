import Node from "../core/Node.js";
import { NodeRepresentation, ShaderNodeObject } from "../tsl/TSLCore.js";

export const textureBicubic: (textureNode: Node, lodNode?: NodeRepresentation) => ShaderNodeObject<Node>;
