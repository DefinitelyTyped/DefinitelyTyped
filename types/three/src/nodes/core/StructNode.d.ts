import { ShaderNodeObject } from "../tsl/TSLCore.js";
import Node from "./Node.js";
import StructTypeNode, { MembersLayout } from "./StructTypeNode.js";

declare class StructNode extends Node {
    values: Node[];

    constructor(structLayoutNode: StructTypeNode, values: Node[]);
}

export default StructNode;

export interface Struct {
    (): ShaderNodeObject<StructNode>;
    (values: Node[]): ShaderNodeObject<StructNode>;
    (...values: Node[]): ShaderNodeObject<StructNode>;
    layout: StructTypeNode;
    isStruct: true;
}

export const struct: (membersLayout: MembersLayout, name?: string | null) => Struct;
