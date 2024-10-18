import { ColorSpace, LinearSRGBColorSpace, SRGBColorSpace } from "../../constants.js";
import Node from "../core/Node.js";
import NodeBuilder from "../core/NodeBuilder.js";
import TempNode from "../core/TempNode.js";
import { NodeRepresentation, ShaderNodeObject } from "../tsl/TSLCore.js";

export type WorkingOrOutputColorSpace = "WorkingColorSpace" | "OutputColorSpace";

export type ColorSpaceMethod = "LinearTosRGB" | "sRGBToLinear" | "LinearToLinear" | "sRGBTosRGB";

export function getColorSpaceMethod(
    source: typeof LinearSRGBColorSpace | typeof SRGBColorSpace,
    target: typeof LinearSRGBColorSpace | typeof SRGBColorSpace,
): ColorSpaceMethod;

export default class ColorSpaceNode extends TempNode {
    colorNode: Node;
    source: WorkingOrOutputColorSpace | ColorSpace;
    target: WorkingOrOutputColorSpace | ColorSpace;

    constructor(
        colorNode: Node,
        source: WorkingOrOutputColorSpace | ColorSpace,
        target: WorkingOrOutputColorSpace | ColorSpace,
    );

    getColorSpace(nodeBuilder: NodeBuilder, colorSpace: WorkingOrOutputColorSpace): ColorSpace;
}

export const toOutputColorSpace: (
    node: NodeRepresentation,
) => ShaderNodeObject<ColorSpaceNode>;
export const toWorkingColorSpace: (
    node: NodeRepresentation,
) => ShaderNodeObject<ColorSpaceNode>;

export const workingToColorSpace: (
    node: NodeRepresentation,
    colorSpace: ColorSpace,
) => ShaderNodeObject<ColorSpaceNode>;
export const colorSpaceToWorking: (
    node: NodeRepresentation,
    colorSpace: ColorSpace,
) => ShaderNodeObject<ColorSpaceNode>;

declare module "../tsl/TSLCore.js" {
    interface NodeElements {
        toOutputColorSpace: typeof toOutputColorSpace;
        toWorkingColorSpace: typeof toWorkingColorSpace;

        workingToColorSpace: typeof workingToColorSpace;
        colorSpaceToWorking: typeof colorSpaceToWorking;
    }
}
