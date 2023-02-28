import { NodeTypeOption } from './constants';
import TempNode from './TempNode';

export default class ExpressionNode extends TempNode {
    snipped: string; /* sic */
    constructor(snipped?: string, nodeType?: NodeTypeOption);
}
