import Node from "../core/Node.js";
import { ShaderNodeObject } from "../tsl/TSLCore.js";

export const Discard: (conditional?: Node) => ShaderNodeObject<Node>;
export const Return: () => ShaderNodeObject<Node>;

declare module "../tsl/TSLCore.js" {
    interface NodeElements {
        discard: typeof Discard;
    }
}
