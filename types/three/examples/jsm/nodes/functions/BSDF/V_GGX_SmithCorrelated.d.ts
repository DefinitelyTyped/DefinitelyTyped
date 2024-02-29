import Node from "../../core/Node.js";
import { ShaderNode } from "../../shadernode/ShaderNode.js";

declare const V_GGX_SmithCorrelated: ShaderNode<{ alpha: Node; dotNL: Node; dotNV: Node }>;

export default V_GGX_SmithCorrelated;
