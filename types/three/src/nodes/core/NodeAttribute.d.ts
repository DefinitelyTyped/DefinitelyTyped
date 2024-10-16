import Node from "./Node.js";
declare class NodeAttribute {
    readonly isNodeAttribute: true;
    name: string;
    type: string | null;
    node: Node | null;
    constructor(name: string, type: string | null, node?: Node | null);
}
export default NodeAttribute;
