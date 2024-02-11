import Node from "../../core/Node.js";
import OperatorNode from "../../math/OperatorNode.js";
import { ShaderNodeObject } from "../../shadernode/ShaderNode.js";

declare const BRDF_Sheen: (args: { lightDirection: Node }) => ShaderNodeObject<OperatorNode>;

export default BRDF_Sheen;
