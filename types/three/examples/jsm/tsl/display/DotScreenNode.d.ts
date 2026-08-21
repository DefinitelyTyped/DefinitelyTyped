import { Node, TempNode, UniformNode } from "three/webgpu";

declare class DotScreenNode extends TempNode {
    inputNode: Node;
    angle: UniformNode<"float", number>;
    scale: UniformNode<"float", number>;

    constructor(inputNode: Node, angle?: number, scale?: number);
}

export default DotScreenNode;

export const dotScreen: (
    node: Node,
    angle?: number,
    scale?: number,
) => DotScreenNode;
