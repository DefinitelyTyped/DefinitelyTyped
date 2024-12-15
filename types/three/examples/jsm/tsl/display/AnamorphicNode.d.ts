import { NodeRepresentation, ShaderNodeObject } from "three/tsl";
import { Node, TempNode, Vector2 } from "three/webgpu";

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
