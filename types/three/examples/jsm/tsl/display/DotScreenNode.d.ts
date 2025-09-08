import { ShaderNodeObject } from "three/tsl";
import { Node, TempNode, UniformNode, Vector2 } from "three/webgpu";

declare class DotScreenNode extends TempNode {
    inputNode: Node;
    center: UniformNode<Vector2>;
    angle: UniformNode<number>;
    scale: UniformNode<number>;

    constructor(inputNode: Node, center?: Vector2, angle?: number, scale?: number);
}

export default DotScreenNode;

export const dotScreen: (
    node: Node,
    center?: Vector2,
    angle?: number,
    scale?: number,
) => ShaderNodeObject<DotScreenNode>;
