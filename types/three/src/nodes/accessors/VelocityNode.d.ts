import { Matrix4 } from "../../math/Matrix4.js";
import TempNode from "../core/TempNode.js";
import UniformNode from "../core/UniformNode.js";
import { ShaderNodeObject } from "../tsl/TSLCore.js";

declare class VelocityNode extends TempNode {
    previousProjectionMatrix: UniformNode<Matrix4>;
    previousModelViewMatrix: UniformNode<Matrix4>;

    constructor();
}

export default VelocityNode;

export const velocity: ShaderNodeObject<VelocityNode>;
