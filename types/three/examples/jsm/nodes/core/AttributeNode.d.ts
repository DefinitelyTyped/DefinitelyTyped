import { TempNode } from './TempNode';
import { NodeBuilder } from './NodeBuilder';

export class AttributeNode extends TempNode {
    constructor(name: string, type?: string);

    name: string;
    nodeType: string;

    getAttributeType(builder: NodeBuilder): string;
    getType(builder: NodeBuilder): string;
    copy(source: AttributeNode): this;
}
