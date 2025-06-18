import Node from "../../core/Node.js";
import { NodeRepresentation, ShaderNodeObject } from "../../tsl/TSLCore.js";

declare const getAlphaHashThreshold: (position: NodeRepresentation) => ShaderNodeObject<Node>;

export default getAlphaHashThreshold;
