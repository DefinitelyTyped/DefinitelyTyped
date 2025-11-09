import Node from "../core/Node.js";
import { ShaderNodeObject } from "../tsl/TSLCore.js";

export const TBNViewMatrix: ShaderNodeObject<Node>;

export const parallaxDirection: ShaderNodeObject<Node>;
export const parallaxUV: (uv: ShaderNodeObject<Node>, scale: Node) => ShaderNodeObject<Node>;

export const bentNormalView: ShaderNodeObject<Node>;
