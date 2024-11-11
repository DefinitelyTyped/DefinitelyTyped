import Node from "../../core/Node.js";
import MathNode from "../../math/MathNode.js";
import { ShaderNodeObject } from "../../tsl/TSLCore.js";

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
