import { Vector2 } from "three";
import { Node, NodeRepresentation, ShaderNodeObject, TempNode, UniformNode } from "three/tsl";

declare class DotScreenNode extends TempNode {
    inputNode: Node;
    center: UniformNode<Vector2>;
    angle: UniformNode<number>;
    scale: UniformNode<number>;

    constructor(inputNode: Node, center?: Vector2, angle?: number, scale?: number);
}

export default DotScreenNode;

export const dotScreen: (
    node: NodeRepresentation,
    center?: Vector2,
    angle?: number,
    scale?: number,
) => ShaderNodeObject<DotScreenNode>;
