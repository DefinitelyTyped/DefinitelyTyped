import TempNode from '../core/TempNode.js';
import Node from '../core/Node.js';

export type ColorSpaceNodeMethod =
    | typeof ColorSpaceNode.LINEAR_TO_LINEAR
    | typeof ColorSpaceNode.LINEAR_TO_sRGB
    | typeof ColorSpaceNode.sRGB_TO_LINEAR;

export default class ColorSpaceNode extends TempNode {
    static LINEAR_TO_LINEAR: 'LinearToLinear';
    static LINEAR_TO_sRGB: 'LinearTosRGB';
    static sRGB_TO_LINEAR: 'sRGBToLinear';

    method: ColorSpaceNodeMethod;
    node: Node;

    constructor(method: ColorSpaceNodeMethod | null, node: Node);
}
