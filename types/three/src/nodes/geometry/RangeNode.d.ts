import { Color } from "../../math/Color.js";
import { Vector2 } from "../../math/Vector2.js";
import { Vector3 } from "../../math/Vector3.js";
import { Vector4 } from "../../math/Vector4.js";
import Node from "../core/Node.js";
import NodeBuilder from "../core/NodeBuilder.js";

interface RangeNodeInterface<TNodeType> {
    minNode: Node<TNodeType>;
    maxNode: Node<TNodeType>;

    getVectorLength(builder: NodeBuilder): number;
}

declare const RangeNode: {
    new<TNodeType>(minNode: Node<TNodeType>, maxNode: Node<TNodeType>): RangeNode<TNodeType>;
};

type RangeNode<TNodeType> = RangeNodeInterface<TNodeType> & Node<TNodeType>;

export default RangeNode;

interface Range {
    (
        minNode: number,
        maxNode: number,
    ): RangeNode<"float">;
    (
        minNode: Vector2,
        maxNode: Vector2,
    ): RangeNode<"vec2">;
    (
        minNode: Vector3,
        maxNode: Vector3,
    ): RangeNode<"vec3">;
    (
        minNode: Vector4,
        maxNode: Vector4,
    ): RangeNode<"vec4">;
    (
        minNode: Color,
        maxNode: Color,
    ): RangeNode<"vec3">;
    (
        minNode: Node<"float">,
        maxNode: Node<"float">,
    ): RangeNode<"float">;
    (
        minNode: Node<"vec2">,
        maxNode: Node<"vec2">,
    ): RangeNode<"vec2">;
    (
        minNode: Node<"vec3">,
        maxNode: Node<"vec3">,
    ): RangeNode<"vec3">;
    (
        minNode: Node<"vec4">,
        maxNode: Node<"vec4">,
    ): RangeNode<"vec4">;
}

export const range: Range;
