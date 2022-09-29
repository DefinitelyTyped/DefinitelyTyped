import { NodeTypeOption } from './constants';
import Node from './Node';

export default class TempNode extends Node {
    isTempNode: true;

    constructor(type: NodeTypeOption | null);
}
