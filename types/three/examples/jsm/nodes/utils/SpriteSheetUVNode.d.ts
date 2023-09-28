import Node from '../core/Node.js';

export default class SpriteSheetUVNode extends Node {
    countNode: Node;
    uvNode: Node;
    frameNode: Node;

    constructor(countNode: Node, uvNode?: Node, frameNode?: Node);
}
