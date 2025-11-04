import Node from "../core/Node.js";

export const Discard: (conditional?: Node) => Node;
export const Return: () => Node;

declare module "../Nodes.js" {
    interface Node {
        discard: () => Node;
        discardAssign: () => this;
    }
}
