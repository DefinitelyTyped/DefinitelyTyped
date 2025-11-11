import Node from "../../core/Node.js";
import OperatorNode from "../../math/OperatorNode.js";

declare const BRDF_Lambert: (args: { diffuseColor: Node }) => OperatorNode;

export default BRDF_Lambert;
