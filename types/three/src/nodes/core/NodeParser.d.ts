import NodeFunction from "./NodeFunction.js";

/**
 * Base class for node parsers. A derived parser must be implemented
 * for each supported native shader language.
 */
declare abstract class NodeParser {
    /**
     * The method parses the given native code an returns a node function.
     *
     * @abstract
     * @param {string} source - The native shader code.
     * @return {NodeFunction} A node function.
     */
    abstract parseFunction(source: string): NodeFunction;
}

export default NodeParser;
