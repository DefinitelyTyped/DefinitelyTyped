import TempNode from "../core/TempNode.js";
import { ShaderNodeObject } from "../shadernode/ShaderNode.js";

export default class ExpressionNode extends TempNode {
    snipped: string; /* sic */
    constructor(snipped?: string, nodeType?: string);
}

export const expression: (snipped?: string, nodeType?: string) => ShaderNodeObject<ExpressionNode>;
