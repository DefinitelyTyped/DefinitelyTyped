import NodeFunction from "./NodeFunction.js";
declare abstract class NodeParser {
    abstract parseFunction(source: string): NodeFunction;
}
export default NodeParser;
