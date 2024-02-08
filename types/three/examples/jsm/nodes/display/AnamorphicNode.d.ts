import { Vector2 } from "../../../../src/Three.js";
import TextureNode from "../accessors/TextureNode.js";
import Node from "../core/Node.js";
import TempNode from "../core/TempNode.js";
import { NodeRepresentation, ShaderNodeObject } from "../shadernode/ShaderNode.js";

export default class AnamorphicNode extends TempNode {
    textureNode: TextureNode;
    thresholdNode: Node;
    scaleNode: Node;
    samples: number;
    resolution: Vector2;

    constructor(textureNode: TextureNode, thresholdNode: Node, scaleNode: Node, samples: number);

    getTextureNode(): TextureNode;

    setSize(width: number, height: number): void;
}

export const anamorphic: (
    node: TextureNode,
    threshold?: NodeRepresentation,
    scale?: NodeRepresentation,
    samples?: NodeRepresentation,
) => ShaderNodeObject<AnamorphicNode>;

declare module "../shadernode/ShaderNode.js" {
    interface NodeElements {
        anamorphic: typeof anamorphic;
    }
}
