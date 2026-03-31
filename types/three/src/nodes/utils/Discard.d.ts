import Node from "../core/Node.js";

export const Discard: (conditional?: Node) => Node;
export const Return: () => Node;

declare module "../core/Node.js" {
    interface NodeElements {
        discard: () => Node;
    }
}
