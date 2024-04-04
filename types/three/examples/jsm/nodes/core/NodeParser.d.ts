import Node from "./Node.js";

export default abstract class NodeParser {
    abstract parseFunction(source: string): Node;
}
