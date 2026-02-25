import { Matrix4 } from "../../math/Matrix4.js";
import TempNode from "../core/TempNode.js";
import UniformNode from "../core/UniformNode.js";

declare class VelocityNode extends TempNode {
    projectionMatrix: Matrix4 | null;

    previousModelWorldMatrix: UniformNode<"mat4", Matrix4>;
    previousProjectionMatrix: UniformNode<"mat4", Matrix4>;
    previousCameraViewMatrix: UniformNode<"mat4", Matrix4>;

    constructor();

    setProjectionMatrix(projectionMatrix: Matrix4 | null): void;
}

export default VelocityNode;

export const velocity: VelocityNode;
