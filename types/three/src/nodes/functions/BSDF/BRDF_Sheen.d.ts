import Node from "../../core/Node.js";
import OperatorNode from "../../math/OperatorNode.js";

declare const BRDF_Sheen: (args: { lightDirection: Node }) => OperatorNode;

export default BRDF_Sheen;
