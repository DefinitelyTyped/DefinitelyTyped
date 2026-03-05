import Node from "../core/Node.js";
import TempNode from "../core/TempNode.js";

interface RotateNodeInterface<TNodeType> {
    positionNode: Node<TNodeType>;
    rotationNode: Node<"vec3"> | Node<"float">;
}

declare const RotateNode: {
    new(positionNode: Node<"vec2">, rotationNode: Node<"float"> | number): RotateNode<"vec2">;
    new(positionNode: Node<"vec3">, rotationNode: Node<"vec3">): RotateNode<"vec3">;
};

type RotateNode<TNodeType> = RotateNodeInterface<TNodeType> & TempNode<TNodeType>;

export default RotateNode;

interface Rotate {
    (positionNode: Node<"vec2">, rotationNode: Node<"float"> | number): RotateNode<"vec2">;
    (positionNode: Node<"vec3">, rotationNode: Node<"vec3">): RotateNode<"vec3">;
}

export const rotate: Rotate;
