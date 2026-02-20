import Node from "./Node.js";

declare class InspectorNode extends Node {
    constructor(node: Node, name?: string, callback?: (node: Node) => Node);
}

export default InspectorNode;

export function inspector<T extends Node>(node: T, name?: string, callback?: (node: T) => Node): T;

declare module "./Node.js" {
    interface NodeElements {
        toInspector: (name?: string, callback?: (node: this) => Node) => this;
    }
}
