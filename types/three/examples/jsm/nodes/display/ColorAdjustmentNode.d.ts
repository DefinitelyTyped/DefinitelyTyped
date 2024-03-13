import TempNode from "../core/TempNode.js";
import MathNode from "../math/MathNode.js";
import { NodeRepresentation, ShaderNodeObject } from "../shadernode/ShaderNode.js";

export type ColorAdjustmentMethod =
    | typeof ColorAdjustmentNode.SATURATION
    | typeof ColorAdjustmentNode.VIBRANCE
    | typeof ColorAdjustmentNode.HUE;

export default class ColorAdjustmentNode extends TempNode {
    static SATURATION: "saturation";
    static VIBRANCE: "vibrance";
    static HUE: "hue";

    method: ColorAdjustmentMethod;

    colorNode: Node;
    adjustmentNode: Node;

    constructor(method: ColorAdjustmentMethod, colorNode: Node, adjustmentNode?: Node);
}

export const saturation: (
    colorNode: NodeRepresentation,
    adjustmentNode?: NodeRepresentation,
) => ShaderNodeObject<ColorAdjustmentNode>;
export const vibrance: (
    colorNode: NodeRepresentation,
    adjustmentNode?: NodeRepresentation,
) => ShaderNodeObject<ColorAdjustmentNode>;
export const hue: (
    colorNode: NodeRepresentation,
    adjustmentNode?: NodeRepresentation,
) => ShaderNodeObject<ColorAdjustmentNode>;

export const lumaCoeffs: ShaderNodeObject<MathNode>;
export const luminance: (a: NodeRepresentation, b: NodeRepresentation) => ShaderNodeObject<MathNode>;

export const threshold: (color: NodeRepresentation, thershold: NodeRepresentation) => ShaderNodeObject<MathNode>;

declare module "../shadernode/ShaderNode.js" {
    interface NodeElements {
        saturation: typeof saturation;
        vibrance: typeof vibrance;
        hue: typeof hue;
        threshold: typeof threshold;
    }
}
