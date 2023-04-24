import { NodeTypeOption } from './constants';
import Node from './Node';
import NodeBuilder from './NodeBuilder';

export default class AttributeNode extends Node {
    constructor(attributeName: string, nodeType?: NodeTypeOption | null);
    setAttributeName(attributeName: string): this;
    getAttributeName(builder: NodeBuilder): string;
}
