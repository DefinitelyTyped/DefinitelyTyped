import { LinearSRGBColorSpace, SRGBColorSpace } from "../../constants.js";
import Node from "../core/Node.js";
import NodeBuilder from "../core/NodeBuilder.js";
import TempNode from "../core/TempNode.js";

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
) => ColorSpaceNode;
export const colorSpaceToWorking: (
    node: Node,
    sourceColorSpace: string,
) => ColorSpaceNode;

export const convertColorSpace: (
    node: Node,
    sourceColorSpace: string,
    targetColorSpace: string,
) => ColorSpaceNode;

declare module "../core/Node.js" {
    interface NodeElements {
        workingToColorSpace: (
            targetColorSpace: string,
        ) => ColorSpaceNode;

        colorSpaceToWorking: (
            sourceColorSpace: string,
        ) => ColorSpaceNode;
    }
}
