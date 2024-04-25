import { ShaderNodeObject } from "../shadernode/ShaderNode.js";
import Node from "./Node.js";

export default class OutputStructNode extends Node {
    members: Node[];

    readonly isOutputStructNode: true;

    constructor(...members: Node[]);
}

export const outputStruct: (...members: Node[]) => ShaderNodeObject<OutputStructNode>;
