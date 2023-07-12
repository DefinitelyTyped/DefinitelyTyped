import TempNode from '../core/TempNode.js';
import Node from '../core/Node.js';
import { ToneMapping } from '../../../../src/Three.js';

// exposure only
export const LinearToneMappingNode: Node;

export default class ToneMappingNode extends TempNode {
    toneMapping: ToneMapping;
    exposureNode: Node;
    colorNode: Node | null;

    constructor(toneMapping: ToneMapping, exposureNode?: Node, colorNode?: Node | null);
}
