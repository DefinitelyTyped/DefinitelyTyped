import Node from "./Node.js";
import UniformNode from "./UniformNode.js";

export default class ArrayUniformNode extends UniformNode<undefined> {
    isArrayUniformNode: true;
    nodes: Node[];
    constructor(nodes?: Node[]);
}
