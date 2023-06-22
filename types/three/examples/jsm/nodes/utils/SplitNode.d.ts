import { SwizzleOption } from '../core/constants';
import Node from '../core/Node';

/** swizzle node */
export default class SplitNode extends Node {
    node: Node;
    components: string;

    /**
     *
     * @param node the input node
     * @param components swizzle like string, default = "x"
     */
    constructor(node: Node, components?: SwizzleOption);
    getVectorLength(): number;
}
