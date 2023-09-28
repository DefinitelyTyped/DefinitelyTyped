import UniformNode from './UniformNode.js';
import Node from './Node.js';

export default class ArrayUniformNode extends UniformNode {
    isArrayUniformNode: true;
    nodes: Node[];
    constructor(nodes?: Node[]);
}
