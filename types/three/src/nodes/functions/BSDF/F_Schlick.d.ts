import Node from "../../core/Node.js";
import OperatorNode from "../../math/OperatorNode.js";

declare const F_Schlick: (args: { f0: Node; f90: Node; dotVH: Node }) => OperatorNode;

export default F_Schlick;
