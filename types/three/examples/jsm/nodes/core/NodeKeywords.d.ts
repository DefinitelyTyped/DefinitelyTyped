import Node from "./Node.js";
import NodeBuilder from "./NodeBuilder.js";
declare class NodeKeywords {
    keywords: string[];
    nodes: {
        [name: string]: Node;
    };
    keywordsCallback: {
        [name: string]: (name: string) => Node;
    };
    constructor();
    getNode(name: string): Node;
    addKeyword(name: string, callback: (name: string) => Node): this;
    parse(code: string): Node[];
    include(builder: NodeBuilder, code: string): void;
}
export default NodeKeywords;
