import Node from './node';

export default class NodeList implements Iterable<Node> {
    [Symbol.iterator](): Iterator<Node>;
    readonly length: number;
    readonly maxOffset: number;

    constructor(nodes: Iterable<Node>);

    getNode(index: number): Node | null;
    getNodeIndex(node: Node): number | null;
    getNodeStartOffset(node: Node): number | null;
    indexToOffset(index: number): number;
    offsetToIndex(offset: number): number;
    toJSON(): Node[];
}
