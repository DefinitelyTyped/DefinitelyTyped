import { TextureEncoding } from '../../../../src/Three';
import TempNode from '../core/TempNode';
import Node from '../core/Node';
export type ColorSpaceNodeMethod = typeof ColorSpaceNode.LINEAR_TO_LINEAR | typeof ColorSpaceNode.LINEAR_TO_SRGB;

export default class ColorSpaceNode extends TempNode {
    static LINEAR_TO_LINEAR: 'LinearToLinear';
    static LINEAR_TO_SRGB: 'LinearTosRGB';

    method: ColorSpaceNodeMethod;
    node: Node;

    constructor(method: ColorSpaceNodeMethod | null, node: Node);
    fromEncoding(encoding: TextureEncoding): this;
}
