import { Node } from "three/webgpu";

declare class DotScreenNode extends Node {
    inputNode: Node;
    angle: Node<"float">;
    scale: Node<"float">;

    constructor(inputNode: Node, angle?: Node<"float"> | number, scale?: Node<"float"> | number);
}

export default DotScreenNode;

export const dotScreen: (
    node: Node,
    angle?: Node<"float"> | number,
    scale?: Node<"float"> | number,
) => DotScreenNode;
