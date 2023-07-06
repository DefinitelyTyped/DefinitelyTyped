import { NodeTypeOption } from '../core/constants';
import TempNode from '../core/TempNode';

export default class ExpressionNode extends TempNode {
    snipped: string; /* sic */
    constructor(snipped?: string, nodeType?: NodeTypeOption);
}
