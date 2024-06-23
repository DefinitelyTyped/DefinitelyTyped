import Node from "./Node.js";
declare class StructTypeNode extends Node {
    types: string[];
    readonly isStructTypeNode: true;
    constructor(types: string[]);
    getMemberTypes(): string[];
}
export default StructTypeNode;
