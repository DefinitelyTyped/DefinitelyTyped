import Node from "../core/Node.js";

declare class FrontFacingNode extends Node<"bool"> {
    isFrontFacingNode: true;
    constructor();
}

export default FrontFacingNode;

export const frontFacing: FrontFacingNode;
export const faceDirection: Node;
export const directionToFaceDirection: (direction: Node) => Node;
