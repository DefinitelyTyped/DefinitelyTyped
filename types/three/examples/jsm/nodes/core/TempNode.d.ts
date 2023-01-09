import { NodeTypeOption } from './constants';
import Node from './Node';
import NodeBuilder from './NodeBuilder';

export default class TempNode extends Node {
    isTempNode: true;

    constructor(type: NodeTypeOption | null);

    hasDependencies(builder: NodeBuilder): void;
}
