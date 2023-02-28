import NodeMaterial from './NodeMaterial';
import { ShaderMaterialParameters } from '../../../../src/Three';
import { Node } from '../Nodes';

export default class LineBasicNodeMaterial extends NodeMaterial {
    isLineBasicNodeMaterial: true;

    colorNode: Node | null;
    opacityNode: Node | null;
    alphaTestNode: Node | null;
    lightNode: Node | null;
    positionNode: Node | null;

    constructor(parameters?: ShaderMaterialParameters);
    copy(source: LineBasicNodeMaterial): this;
}
