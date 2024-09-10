import Node from "../core/Node.js";
import { NodeRepresentation, ShaderNodeObject } from "../tsl/TSLCore.js";

export const viewportSafeUV: (uv?: NodeRepresentation | null) => ShaderNodeObject<Node>;
