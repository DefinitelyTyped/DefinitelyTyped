import { ShaderMaterialParameters } from '../../../../src/Three';
import Node from '../core/Node';
import NodeMaterial from './NodeMaterial';

export default class MeshStandardNodeMaterial extends NodeMaterial {
    isMeshStandardNodeMaterial: true;

    colorNode: Node | null;
    opacityNode: Node | null;
    alphaTestNode: Node | null;
    normalNode: Node | null;
    emissiveNode: Node | null;

    metalnessNode: Node | null;
    roughnessNode: Node | null;

    clearcoatNode: Node | null;
    clearcoatRoughnessNode: Node | null;

    envNode: Node | null;

    lightsNode: Node | null;
    positionNode: Node | null;

    constructor(paramters?: ShaderMaterialParameters);
    copy(source: MeshStandardNodeMaterial): this;
}
