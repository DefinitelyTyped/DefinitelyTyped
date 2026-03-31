import Node from "../../core/Node.js";
import OperatorNode from "../../math/OperatorNode.js";

declare const V_GGX_SmithCorrelated: (inputs: {
    alpha: Node;
    dotNL: Node;
    dotNV: Node;
}) => OperatorNode;

export default V_GGX_SmithCorrelated;
