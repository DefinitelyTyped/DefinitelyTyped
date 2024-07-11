import Node from "../../core/Node.js";
import OperatorNode from "../../math/OperatorNode.js";
import { ShaderNodeObject } from "../../shadernode/ShaderNode.js";

declare const F_Schlick: (args: { f0: Node; f90: Node; dotVH: Node }) => ShaderNodeObject<OperatorNode>;

export default F_Schlick;
