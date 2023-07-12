import TempNode from '../core/TempNode.js';
import { NormalMapTypes } from '../../../../src/Three.js';
import Node from '../core/Node.js';

export default class NormalMapNode extends TempNode {
    node: Node;
    scaleNode: Node | null;

    normalMapType: NormalMapTypes;

    constructor(node: Node, scaleNode?: Node | null);
}
