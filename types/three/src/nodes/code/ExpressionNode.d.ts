import Node from "../core/Node.js";

export default class ExpressionNode extends Node {
    snipped: string;

    constructor(snipped?: string, nodeType?: string);
}

export const expression: (snipped: string, nodeType?: string) => ExpressionNode;
