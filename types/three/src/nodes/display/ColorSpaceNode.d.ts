import { LinearSRGBColorSpace, SRGBColorSpace } from "../../constants.js";
import Node from "../core/Node.js";
import NodeBuilder from "../core/NodeBuilder.js";
import TempNode from "../core/TempNode.js";
import { ShaderNodeObject } from "../tsl/TSLCore.js";

export type WorkingOrOutputColorSpace = "WorkingColorSpace" | "OutputColorSpace";

export type ColorSpaceMethod = "LinearTosRGB" | "sRGBToLinear" | "LinearToLinear" | "sRGBTosRGB";

export function getColorSpaceMethod(
    source: typeof LinearSRGBColorSpace | typeof SRGBColorSpace,
    target: typeof LinearSRGBColorSpace | typeof SRGBColorSpace,
): ColorSpaceMethod;

export default class ColorSpaceNode extends TempNode {
    colorNode: Node;
    source: string;
    target: string;

    constructor(
        colorNode: Node,
        source: string,
        target: string,
    );

    resolveColorSpace(nodeBuilder: NodeBuilder, colorSpace: WorkingOrOutputColorSpace): string;
}

export const workingToColorSpace: (
    node: Node,
    targetColorSpace: string,
) => ShaderNodeObject<ColorSpaceNode>;
export const colorSpaceToWorking: (
    node: Node,
    sourceColorSpace: string,
) => ShaderNodeObject<ColorSpaceNode>;

export const convertColorSpace: (
    node: Node,
    sourceColorSpace: string,
    targetColorSpace: string,
) => ShaderNodeObject<ColorSpaceNode>;

declare module "../tsl/TSLCore.js" {
    interface NodeElements {
        workingToColorSpace: typeof workingToColorSpace;
        colorSpaceToWorking: typeof colorSpaceToWorking;
    }
}
