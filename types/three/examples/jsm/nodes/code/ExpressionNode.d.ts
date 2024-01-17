import { NodeTypeOption } from '../core/constants.js';
import TempNode from '../core/TempNode.js';
import { ShaderNodeObject } from '../shadernode/ShaderNode.js';

export default class ExpressionNode extends TempNode {
    snipped: string; /* sic */
    constructor(snipped?: string, nodeType?: NodeTypeOption);
}

export const expression: (snipped?: string, nodeType?: NodeTypeOption) => ShaderNodeObject<ExpressionNode>;
