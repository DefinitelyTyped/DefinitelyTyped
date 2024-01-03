import UniformNode from './UniformNode.js';
import Node from './Node.js';

export default class ArrayUniformNode extends UniformNode<undefined> {
    isArrayUniformNode: true;
    nodes: Node[];
    constructor(nodes?: Node[]);
}
