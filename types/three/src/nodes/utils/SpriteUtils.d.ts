import Node from "../core/Node.js";
import { ShaderNodeObject } from "../tsl/TSLCore.js";

export const billboarding: (
    args?: { position?: Node | null; horizontal?: boolean; vertical?: boolean },
) => ShaderNodeObject<Node>;
