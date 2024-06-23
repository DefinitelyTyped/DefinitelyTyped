import NodeVar from "./NodeVar.js";
declare class NodeVarying extends NodeVar {
    needsInterpolation: boolean;
    readonly isNodeVarying: true;
    constructor(name: string, type: string | null);
}
export default NodeVarying;
