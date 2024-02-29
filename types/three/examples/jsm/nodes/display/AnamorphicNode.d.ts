import { Vector2 } from "three";
import Node from "../core/Node.js";
import TempNode from "../core/TempNode.js";
import { NodeRepresentation, ShaderNodeObject } from "../shadernode/ShaderNode.js";

export default class AnamorphicNode extends TempNode {
    textureNode: Node;
    thresholdNode: Node;
    scaleNode: Node;
    samples: number;
    resolution: Vector2;

    constructor(textureNode: Node, thresholdNode: Node, scaleNode: Node, samples: number);

    getTextureNode(): Node;

    setSize(width: number, height: number): void;
}

export const anamorphic: (
    node: Node,
    threshold?: NodeRepresentation,
    scale?: NodeRepresentation,
    samples?: NodeRepresentation,
) => ShaderNodeObject<AnamorphicNode>;

declare module "../shadernode/ShaderNode.js" {
    interface NodeElements {
        anamorphic: typeof anamorphic;
    }
}
