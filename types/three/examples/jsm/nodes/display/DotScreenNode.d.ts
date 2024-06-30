import { Vector2 } from "three";
import TextureNode from "../accessors/TextureNode.js";
import Node from "../core/Node.js";
import TempNode from "../core/TempNode.js";
import UniformNode from "../core/UniformNode.js";
import { NodeRepresentation, ShaderNodeObject } from "../shadernode/ShaderNode.js";

export default class DotScreenNode extends TempNode {
    colorNode: Node;
    center: UniformNode<Vector2>;
    angle: UniformNode<number>;
    scale: UniformNode<number>;

    constructor(colorNode: Node, center?: Vector2, angle?: number, scale?: number);

    getTextureNode(): ShaderNodeObject<TextureNode>;

    setSize(width: number, height: number): void;
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
