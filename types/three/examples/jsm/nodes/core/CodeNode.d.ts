import { NodeTypeOption } from './constants';
import Node from './Node';
import NodeBuilder from './NodeBuilder';

export interface CodeNodeInclude {
    build(): void;
}

export default class CodeNode extends Node {
    isCodeNode: true;
    code: string;
    constructor(code: string, nodeType?: NodeTypeOption);

    setIncludes(includes: CodeNodeInclude[]): this;
    getIncludes(builder: NodeBuilder): CodeNodeInclude[];
}
