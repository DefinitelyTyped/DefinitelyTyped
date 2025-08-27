import { ToneMapping } from "../../constants.js";
import RendererReferenceNode from "../accessors/RendererReferenceNode.js";
import Node from "../core/Node.js";
import TempNode from "../core/TempNode.js";
import { ShaderNodeObject } from "../tsl/TSLCore.js";

declare class ToneMappingNode extends TempNode {
    toneMapping: ToneMapping;
    exposureNode: Node;
    colorNode: Node | null;

    constructor(toneMapping: ToneMapping, exposureNode?: Node, colorNode?: Node | null);
}

export default ToneMappingNode;

export const toneMapping: (
    mapping: ToneMapping,
    exposure: Node,
    color?: Node,
) => ShaderNodeObject<ToneMappingNode>;
export const toneMappingExposure: ShaderNodeObject<RendererReferenceNode>;

declare module "../tsl/TSLCore.js" {
    interface NodeElements {
        toneMapping: (
            color: Node,
            mapping?: ToneMapping,
            exposure?: Node,
        ) => ShaderNodeObject<ToneMappingNode>;
    }
}
