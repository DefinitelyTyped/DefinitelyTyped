import Node from '../core/Node';
import NodeBuilder from '../core/NodeBuilder';

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
