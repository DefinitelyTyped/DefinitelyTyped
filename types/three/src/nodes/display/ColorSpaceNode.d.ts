import { ColorSpace, LinearSRGBColorSpace, SRGBColorSpace } from "../../constants.js";
import Node from "../core/Node.js";
import TempNode from "../core/TempNode.js";
import { NodeRepresentation, ShaderNodeObject } from "../tsl/TSLCore.js";

export type ColorSpaceMethod = "LinearTosRGB" | "sRGBToLinear" | "LinearToLinear" | "sRGBTosRGB";

export const getColorSpaceMethod: (
    source: typeof LinearSRGBColorSpace | typeof SRGBColorSpace,
    target: typeof LinearSRGBColorSpace | typeof SRGBColorSpace,
) => ColorSpaceMethod;

export default class ColorSpaceNode extends TempNode {
    colorNode: Node;
    target: ColorSpace | null;
    source: ColorSpace | null;

    constructor(colorNode: Node, target?: ColorSpace | null, source?: ColorSpace | null);
}

export const toOutputColorSpace: (
    node: NodeRepresentation,
    colorSpace?: ColorSpace | null,
) => ShaderNodeObject<ColorSpaceNode>;
export const toWorkingColorSpace: (
    node: NodeRepresentation,
    colorSpace?: ColorSpace | null,
) => ShaderNodeObject<ColorSpaceNode>;

declare module "../tsl/TSLCore.js" {
    interface NodeElements {
        toOutputColorSpace: typeof toOutputColorSpace;
        toWorkingColorSpace: typeof toWorkingColorSpace;
    }
}
