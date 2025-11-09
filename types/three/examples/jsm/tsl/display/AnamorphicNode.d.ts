import { Node, TempNode, Vector2 } from "three/webgpu";

export default class AnamorphicNode extends TempNode {
    textureNode: Node;
    thresholdNode: Node;
    scaleNode: Node;
    samples: number;
    resolutionScale: number;

    constructor(textureNode: Node, thresholdNode: Node, scaleNode: Node, samples: number);

    getTextureNode(): Node;

    setSize(width: number, height: number): void;

    /**
     * @deprecated The "resolution" property has been renamed to "resolutionScale" and is now of type `number`.
     */
    get resolution(): Vector2;
    /**
     * @deprecated The "resolution" property has been renamed to "resolutionScale" and is now of type `number`.
     */
    set resolution(value: Vector2);
}

export const anamorphic: (
    node: Node,
    threshold?: Node,
    scale?: Node,
    samples?: Node | number,
) => AnamorphicNode;
