import NodeFunction from "../../../nodes/core/NodeFunction.js";

export default class WGSLNodeFunction extends NodeFunction {
    constructor(source: string);
    getCode(name?: string): string;
}
