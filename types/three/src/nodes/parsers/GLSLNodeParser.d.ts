import NodeParser from "../core/NodeParser.js";
import GLSLNodeFunction from "./GLSLNodeFunction.js";

declare class GLSLNodeParser extends NodeParser {
    parseFunction(source: string): GLSLNodeFunction;
}

export default GLSLNodeParser;
