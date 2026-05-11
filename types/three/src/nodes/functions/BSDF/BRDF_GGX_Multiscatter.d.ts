import Node from "../../core/Node.js";
import OperatorNode from "../../math/OperatorNode.js";

declare const BRDF_GGX_Multiscatter: (args: {
    lightDirection: Node;
    f0: Node;
    f90: Node;
    roughness: Node;
    f?: Node | undefined;
    USE_IRIDESCENCE?: Node | undefined;
    USE_ANISOTROPY?: Node | undefined;
}) => OperatorNode;

export default BRDF_GGX_Multiscatter;
