import Node from "../../core/Node.js";
import { ShaderNodeObject } from "../../tsl/TSLCore.js";

declare const getAlphaHashThreshold: (position: Node) => ShaderNodeObject<Node>;

export default getAlphaHashThreshold;
