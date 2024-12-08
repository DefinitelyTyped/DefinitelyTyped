import Node from "../core/Node.js";
import { NodeRepresentation, ShaderNodeObject } from "../tsl/TSLCore.js";

export const Discard: (conditional?: NodeRepresentation) => ShaderNodeObject<Node>;
export const Return: () => ShaderNodeObject<Node>;

declare module "../tsl/TSLCore.js" {
    interface NodeElements {
        discard: typeof Discard;
    }
}
