import Node from "../core/Node.js";
import { ShaderNodeObject } from "../tsl/TSLCore.js";

export const viewportSafeUV: (uv?: Node | null) => ShaderNodeObject<Node>;
