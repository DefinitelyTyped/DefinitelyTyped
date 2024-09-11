import { ColorSpace, ToneMapping } from "../../constants.js";
import Node from "../core/Node.js";
import TempNode from "../core/TempNode.js";
import { NodeRepresentation, ShaderNodeObject } from "../tsl/TSLCore.js";

declare class RenderOutputNode extends TempNode {
    colorNode: Node;
    toneMapping: ToneMapping | null;
    outputColorSpace: ColorSpace | null;

    readonly isRenderOutput: true;

    constructor(colorNode: Node, toneMapping?: ToneMapping | null, outputColorSpace?: ColorSpace | null);
}

export default RenderOutputNode;

export const renderOutput: (
    color: NodeRepresentation,
    toneMapping?: ToneMapping | null,
    outputColorSpace?: ColorSpace | null,
) => ShaderNodeObject<RenderOutputNode>;

declare module "../tsl/TSLCore.js" {
    interface NodeElements {
        renderOutput: typeof renderOutput;
    }
}
