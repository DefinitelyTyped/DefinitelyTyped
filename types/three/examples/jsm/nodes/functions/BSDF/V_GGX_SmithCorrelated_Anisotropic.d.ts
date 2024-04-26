import Node from "../../core/Node.js";
import MathNode from "../../math/MathNode";
import { ShaderNodeObject } from "../../shadernode/ShaderNode.js";

declare const V_GGX_SmithCorrelated: (inputs: {
    alphaT: Node;
    alphaB: Node;
    dotTV: Node;
    dotBV: Node;
    dotTL: Node;
    dotBL: Node;
    dotNV: Node;
    dotNL: Node;
}) => ShaderNodeObject<MathNode>;

export default V_GGX_SmithCorrelated;
