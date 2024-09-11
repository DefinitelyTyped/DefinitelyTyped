import { NodeRepresentation, ShaderNodeObject } from "../tsl/TSLCore.js";
import Node from "./Node.js";

export default class VarNode extends Node {
    node: Node;
    name: string | null;

    readonly isVarNode: true;

    constructor(node: Node, name?: string | null);
}

export const temp: (node: NodeRepresentation, name?: string | null) => ShaderNodeObject<VarNode>;

declare module "../tsl/TSLCore.js" {
    interface NodeElements {
        temp: typeof temp;
        toVar: typeof temp;
    }
}
