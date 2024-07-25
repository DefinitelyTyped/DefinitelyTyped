import NodeParser from "../../../nodes/core/NodeParser.js";
import WGSLNodeFunction from "./WGSLNodeFunction.js";

export default class WGSLNodeParser extends NodeParser {
    parseFunction(source: string): WGSLNodeFunction;
}
