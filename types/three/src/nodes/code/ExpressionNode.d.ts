import TempNode from "../core/TempNode.js";

export default class ExpressionNode extends TempNode {
    snipped: string;

    constructor(snipped?: string, nodeType?: string);
}

export const expression: (snipped: string, nodeType?: string) => ExpressionNode;
