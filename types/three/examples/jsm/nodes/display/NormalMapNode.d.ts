import TempNode from '../core/TempNode';
import { NormalMapTypes } from '../../../../src/Three';
import Node from '../core/Node';

export default class NormalMapNode extends TempNode {
    node: Node;
    scaleNode: Node | null;

    normalMapType: NormalMapTypes;

    constructor(node: Node, scaleNode?: Node | null);
}
