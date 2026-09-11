import Node from "../../core/Node.js";
import OperatorNode from "../../math/OperatorNode.js";

declare const EnvironmentBRDF: (
    args: { dotNV: Node; specularColor: Node; specularF90: Node; roughness: Node },
) => OperatorNode;

export default EnvironmentBRDF;
