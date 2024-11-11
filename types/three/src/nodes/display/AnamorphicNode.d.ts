import { Vector2 } from "../../math/Vector2.js";
import Node from "../core/Node.js";
import TempNode from "../core/TempNode.js";
import { NodeRepresentation, ShaderNodeObject } from "../tsl/TSLCore.js";

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
