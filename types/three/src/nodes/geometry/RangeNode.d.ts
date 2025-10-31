import { Color } from "../../math/Color.js";
import { Vector2 } from "../../math/Vector2.js";
import { Vector3 } from "../../math/Vector3.js";
import { Vector4 } from "../../math/Vector4.js";
import Node from "../core/Node.js";
import NodeBuilder from "../core/NodeBuilder.js";

export default class RangeNode extends Node {
    minNode: Node;
    maxNode: Node;

    constructor(minNode: Node, maxNode: Node);

    getVectorLength(builder: NodeBuilder): number;
}

export const range: (
    minNode: Node | number | Color | Vector2 | Vector3 | Vector4,
    maxNode: Node | number | Color | Vector2 | Vector3 | Vector4,
) => RangeNode;
