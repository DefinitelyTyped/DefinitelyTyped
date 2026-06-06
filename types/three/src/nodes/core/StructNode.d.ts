import Node from "./Node.js";
import StructTypeNode, { MembersLayout } from "./StructTypeNode.js";

declare class StructNode extends Node {
    values: Node[];

    constructor(structLayoutNode: StructTypeNode, values: Node[]);
}

export default StructNode;

export interface Struct {
    (): StructNode;
    (values: Node[]): StructNode;
    (...values: Node[]): StructNode;
    layout: StructTypeNode;
    isStruct: true;
}

export const struct: (membersLayout: MembersLayout, name?: string | null) => Struct;
