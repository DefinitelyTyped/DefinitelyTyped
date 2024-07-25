import { Vector2 } from "../../math/Vector2.js";
import Node from "../core/Node.js";
import TempNode from "../core/TempNode.js";
import UniformNode from "../core/UniformNode.js";
import { NodeRepresentation, ShaderNodeObject } from "../shadernode/ShaderNode.js";

export default class DotScreenNode extends TempNode {
    inputNode: Node;
    center: UniformNode<Vector2>;
    angle: UniformNode<number>;
    scale: UniformNode<number>;

    constructor(inputNode: Node, center?: Vector2, angle?: number, scale?: number);
}

export const dotScreen: (
    node: NodeRepresentation,
    center?: Vector2,
    angle?: number,
    scale?: number,
) => ShaderNodeObject<DotScreenNode>;

declare module "../shadernode/ShaderNode.js" {
    interface NodeElements {
        dotScreen: typeof dotScreen;
    }
}
