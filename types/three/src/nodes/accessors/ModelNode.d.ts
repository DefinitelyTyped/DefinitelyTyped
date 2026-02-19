import { Matrix3 } from "../../math/Matrix3.js";
import { Matrix4 } from "../../math/Matrix4.js";
import Node from "../core/Node.js";
import { UniformNode } from "../Nodes.js";
import Object3DNode from "./Object3DNode.js";

/**
 * Similar to {@link Object3DNode} but the object comes from {@link NodeFrame}
 */
declare const ModelNode: {
    new(scope: typeof ModelNode.WORLD_MATRIX): ModelNode<"mat4">;
    new(scope: typeof ModelNode.POSITION): ModelNode<"vec3">;
    new(scope: typeof ModelNode.SCALE): ModelNode<"vec3">;
    new(scope: typeof ModelNode.VIEW_POSITION): ModelNode<"vec3">;
    new(scope: typeof ModelNode.DIRECTION): ModelNode<"vec3">;
    new(scope: typeof ModelNode.RADIUS): ModelNode<"float">;

    WORLD_MATRIX: "worldMatrix";
    POSITION: "position";
    SCALE: "scale";
    VIEW_POSITION: "viewPosition";
    DIRECTION: "direction";
    RADIUS: "radius";
};

type ModelNode<TNodeType> = Object3DNode<TNodeType>;

export default Object3DNode;

export const modelDirection: ModelNode<"vec3">;
export const modelWorldMatrix: ModelNode<"mat4">;
export const modelPosition: ModelNode<"vec3">;
export const modelScale: ModelNode<"vec3">;
export const modelViewPosition: ModelNode<"vec3">;
export const modelRadius: ModelNode<"float">;
export const modelNormalMatrix: UniformNode<"mat3", Matrix3>;
export const modelWorldMatrixInverse: UniformNode<"mat4", Matrix4>;

export const modelViewMatrix: Node<"mat4">;

// GPU Precision

export const mediumpModelViewMatrix: Node<"mat4">;

// CPU Precision

export const highpModelViewMatrix: Node<"mat4">;

export const highpModelNormalViewMatrix: Node<"mat3">;
