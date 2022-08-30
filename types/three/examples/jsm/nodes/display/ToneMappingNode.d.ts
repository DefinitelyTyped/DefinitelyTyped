import TempNode from '../core/TempNode';
import Node from '../core/Node';
import { ToneMapping } from '../../../../src/Three';

// exposure only
export const LinearToneMappingNode: Node;

export default class ToneMappingNode extends TempNode {
    toneMapping: ToneMapping;
    exposureNode: Node;
    colorNode: Node | null;

    constructor(toneMapping: ToneMapping, exposureNode?: Node, colorNode?: Node | null);
}
