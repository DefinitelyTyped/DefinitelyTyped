import Node from "../core/Node.js";
import { NodeRepresentation, ShaderNodeObject } from "../tsl/TSLCore.js";

export const oscSine: (timeNode?: NodeRepresentation) => ShaderNodeObject<Node>;
export const oscSquare: (timeNode?: NodeRepresentation) => ShaderNodeObject<Node>;
export const oscTriangle: (timeNode?: NodeRepresentation) => ShaderNodeObject<Node>;
export const oscSawtooth: (timeNode?: NodeRepresentation) => ShaderNodeObject<Node>;
