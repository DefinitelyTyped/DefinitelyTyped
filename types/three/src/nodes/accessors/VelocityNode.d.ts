import { Matrix4 } from "../../math/Matrix4.js";
import Node from "../core/Node.js";
import UniformNode from "../core/UniformNode.js";

declare class VelocityNode extends Node {
    projectionMatrix: Matrix4 | null;

    previousModelWorldMatrix: UniformNode<"mat4">;
    currentProjectionMatrix: UniformNode<"mat4">;
    previousProjectionMatrix: UniformNode<"mat4">;
    previousCameraViewMatrix: UniformNode<"mat4">;

    constructor();

    setProjectionMatrix(projectionMatrix: Matrix4 | null): void;
}

export default VelocityNode;

export const velocity: VelocityNode;
