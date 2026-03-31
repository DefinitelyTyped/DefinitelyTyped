import Node from "../core/Node.js";
import NodeBuilder from "../core/NodeBuilder.js";

export interface CodeNodeInclude {
    build(builder: NodeBuilder): void;
}

export default class CodeNode extends Node {
    isCodeNode: true;
    code: string;
    language: string;

    constructor(code?: string, includes?: CodeNodeInclude[], language?: string);

    setIncludes(includes: CodeNodeInclude[]): this;
    getIncludes(builder: NodeBuilder): CodeNodeInclude[];
}

export const code: (code: string, includes?: CodeNodeInclude[], language?: string) => CodeNode;
export const js: (src: string, includes?: CodeNodeInclude[]) => CodeNode;
export const wgsl: (src: string, includes?: CodeNodeInclude[]) => CodeNode;
export const glsl: (src: string, includes?: CodeNodeInclude[]) => CodeNode;
