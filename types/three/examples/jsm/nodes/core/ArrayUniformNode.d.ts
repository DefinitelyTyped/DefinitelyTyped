import UniformNode from './UniformNode';
import Node from './Node';

export default class ArrayUniformNode extends UniformNode {
    isArrayUniformNode: true;
    nodes: Node[];
    constructor(nodes?: Node[]);
}
