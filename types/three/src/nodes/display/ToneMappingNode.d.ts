import { ToneMapping } from "../../constants.js";
import RendererReferenceNode from "../accessors/RendererReferenceNode.js";
import Node from "../core/Node.js";
import TempNode from "../core/TempNode.js";

declare class ToneMappingNode extends TempNode<"vec3"> {
    exposureNode: Node;
    colorNode: Node | null;

    constructor(toneMapping: ToneMapping, exposureNode?: Node, colorNode?: Node | null);
}

export default ToneMappingNode;

export const toneMapping: (
    mapping: ToneMapping,
    exposure: Node | number,
    color?: Node,
) => ToneMappingNode;
export const toneMappingExposure: RendererReferenceNode;

declare module "../core/Node.js" {
    interface NodeElements {
        toneMapping: (
            mapping?: ToneMapping,
            exposure?: Node | number,
        ) => ToneMappingNode;
    }
}
