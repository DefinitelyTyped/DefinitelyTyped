import NodeMaterial from './NodeMaterial';
import { ShaderMaterialParameters } from '../../../../src/Three';
import { Node } from '../Nodes';

export default class PointsNodeMaterial extends NodeMaterial {
    isPointsNodeMateria: true;
    colorNode: Node | null;
    opacityNode: Node | null;
    alphaTestNode: Node | null;
    lightNode: Node | null;
    sizeNode: Node | null;
    positionNode: Node | null;
    constructor(parameters?: ShaderMaterialParameters);
    copy(source: PointsNodeMaterial): this;
}
