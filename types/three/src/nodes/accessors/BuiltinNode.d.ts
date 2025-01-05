import Node from "../core/Node.js";
import { ShaderNodeObject } from "../tsl/TSLCore.js";

declare class BuiltinNode extends Node {
    name: string;

    readonly isBuiltinNode: true;

    constructor(name: string);
}

export default BuiltinNode;

export const builtin: (name: string) => ShaderNodeObject<BuiltinNode>;
