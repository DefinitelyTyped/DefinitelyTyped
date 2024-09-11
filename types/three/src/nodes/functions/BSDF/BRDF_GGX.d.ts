import Node from "../../core/Node.js";
import OperatorNode from "../../math/OperatorNode.js";
import { ShaderNodeObject } from "../../tsl/TSLCore.js";

declare const BRDF_GGX: (args: {
    lightDirection: Node;
    f0: Node;
    f90: Node;
    roughness: Node;
    f?: Node;
    USE_IRIDESCENCE?: Node;
    USE_ANISOTROPY?: Node;
}) => ShaderNodeObject<OperatorNode>;

export default BRDF_GGX;
