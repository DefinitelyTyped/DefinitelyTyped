import { ToneMapping } from "../../constants.js";
import Node from "../core/Node.js";

declare class RenderOutputNode extends Node<"vec4"> {
    colorNode: Node;
    outputColorSpace: string | null;
    premultipliedAlpha: boolean;

    readonly isRenderOutput: true;

    constructor(colorNode: Node, toneMapping?: ToneMapping | null, outputColorSpace?: string | null);
}

export default RenderOutputNode;

export const renderOutput: (
    color: Node,
    toneMapping?: ToneMapping | null,
    outputColorSpace?: string | null,
) => RenderOutputNode;

declare module "../core/Node.js" {
    interface NodeElements {
        renderOutput: (
            toneMapping?: ToneMapping | null,
            outputColorSpace?: string | null,
        ) => RenderOutputNode;
    }
}
