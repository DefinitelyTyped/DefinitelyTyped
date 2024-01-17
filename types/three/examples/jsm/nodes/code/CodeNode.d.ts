import Node from '../core/Node.js';
import NodeBuilder from '../core/NodeBuilder.js';
import { NodeTypeOption } from '../core/constants.js';
import { ShaderNodeObject } from '../shadernode/ShaderNode.js';

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

export const code: (code: string, nodeType?: NodeTypeOption) => ShaderNodeObject<CodeNode>;
