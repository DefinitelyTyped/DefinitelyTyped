import { NodeTypeOption } from '../core/constants.js';
import TempNode from '../core/TempNode.js';

export default class ExpressionNode extends TempNode {
    snipped: string; /* sic */
    constructor(snipped?: string, nodeType?: NodeTypeOption);
}
