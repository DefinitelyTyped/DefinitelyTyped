import Node from "../core/Node.js";
import { NodeRepresentation, ShaderNodeObject } from "../tsl/TSLCore.js";

export const hash: (seed: NodeRepresentation) => ShaderNodeObject<Node>;
