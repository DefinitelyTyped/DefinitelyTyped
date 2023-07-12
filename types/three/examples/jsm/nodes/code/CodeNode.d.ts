import Node from '../core/Node.js';
import NodeBuilder from '../core/NodeBuilder.js';

export interface CodeNodeInclude {
    build(builder: NodeBuilder): void;
}

export default class CodeNode extends Node {
    isCodeNode: true;
    code: string;
    constructor(code?: string, includes?: CodeNodeInclude[]);

    setIncludes(includes: CodeNodeInclude[]): this;
    getIncludes(builder: NodeBuilder): CodeNodeInclude[];
}
