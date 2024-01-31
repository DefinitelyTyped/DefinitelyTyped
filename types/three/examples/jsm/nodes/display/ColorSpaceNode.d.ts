import { ColorSpace } from "../../../../src/Three.js";
import Node from "../core/Node.js";
import TempNode from "../core/TempNode.js";
import { NodeRepresentation, ShaderNodeObject } from "../shadernode/ShaderNode.js";

export type ColorSpaceNodeMethod =
    | typeof ColorSpaceNode.LINEAR_TO_LINEAR
    | typeof ColorSpaceNode.LINEAR_TO_sRGB
    | typeof ColorSpaceNode.sRGB_TO_LINEAR;

export default class ColorSpaceNode extends TempNode {
    static LINEAR_TO_LINEAR: "LinearToLinear";
    static LINEAR_TO_sRGB: "LinearTosRGB";
    static sRGB_TO_LINEAR: "sRGBToLinear";

    method: ColorSpaceNodeMethod;
    node: Node;

    constructor(method: ColorSpaceNodeMethod | null, node: Node);
}

export const linearToColorSpace: (node: NodeRepresentation, colorSpace: ColorSpace) => ShaderNodeObject<ColorSpaceNode>;
export const colorSpaceToLinear: (node: NodeRepresentation, colorSpace: ColorSpace) => ShaderNodeObject<ColorSpaceNode>;

export const linearTosRGB: (node: NodeRepresentation) => ShaderNodeObject<ColorSpaceNode>;
export const sRGBToLinear: (node: NodeRepresentation) => ShaderNodeObject<ColorSpaceNode>;

declare module "../shadernode/ShaderNode.js" {
    interface NodeElements {
        linearTosRGB: typeof linearTosRGB;
        sRGBToLinear: typeof sRGBToLinear;
        linearToColorSpace: typeof linearToColorSpace;
        colorSpaceToLinear: typeof colorSpaceToLinear;
    }
}
