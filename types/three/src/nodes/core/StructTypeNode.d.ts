import Node from "./Node.js";
declare class StructTypeNode extends Node {
    static get type(): string;
    types: string[];
    readonly isStructTypeNode: true;
    constructor(types: string[]);
    getMemberTypes(): string[];
}
export default StructTypeNode;
