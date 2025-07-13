import { ToneMapping } from "../../constants.js";
import Node from "../core/Node.js";
import TempNode from "../core/TempNode.js";
import { ShaderNodeObject } from "../tsl/TSLCore.js";

declare class RenderOutputNode extends TempNode {
    colorNode: Node;
    toneMapping: ToneMapping | null;
    outputColorSpace: string | null;

    readonly isRenderOutput: true;

    constructor(colorNode: Node, toneMapping?: ToneMapping | null, outputColorSpace?: string | null);
}

export default RenderOutputNode;

export const renderOutput: (
    color: Node,
    toneMapping?: ToneMapping | null,
    outputColorSpace?: string | null,
) => ShaderNodeObject<RenderOutputNode>;

declare module "../tsl/TSLCore.js" {
    interface NodeElements {
        renderOutput: typeof renderOutput;
    }
}
