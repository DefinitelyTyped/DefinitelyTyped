import Node from "../core/Node.js";
import { ShaderNodeObject } from "../tsl/TSLCore.js";

export const oscSine: (timeNode?: Node) => ShaderNodeObject<Node>;
export const oscSquare: (timeNode?: Node) => ShaderNodeObject<Node>;
export const oscTriangle: (timeNode?: Node) => ShaderNodeObject<Node>;
export const oscSawtooth: (timeNode?: Node) => ShaderNodeObject<Node>;
