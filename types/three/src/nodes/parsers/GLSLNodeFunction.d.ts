import NodeFunction from "../core/NodeFunction.js";

declare class GLSLNodeFunction extends NodeFunction {
    constructor(source: string);

    getCode(name?: string): string;
}

export default GLSLNodeFunction;
