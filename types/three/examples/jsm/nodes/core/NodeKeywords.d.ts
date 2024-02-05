import Node from "./Node.js";
import NodeBuilder from "./NodeBuilder.js";

export default class NodeKeywords {
    keywords: string[];
    nodes: Node[];
    keywordsCallback: { [name: string]: (name: string) => Node };

    getNode(name: string): Node;
    addKeyword(name: string, callback: (name: string) => Node): void;

    parse(code: string): Node[];
    include(builder: NodeBuilder, code: string): void;
}
