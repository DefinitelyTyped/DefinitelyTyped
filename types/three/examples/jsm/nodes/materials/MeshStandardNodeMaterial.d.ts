import { ShaderMaterialParameters } from '../../../../src/Three';
import Node from '../core/Node';
import NodeMaterial from './NodeMaterial';

export default class MeshStandardNodeMaterial extends NodeMaterial {
    isMeshStandardNodeMaterial: true;

    emissiveNode: Node | null;

    metalnessNode: Node | null;
    roughnessNode: Node | null;

    clearcoatNode: Node | null;
    clearcoatRoughnessNode: Node | null;

    constructor(paramters?: ShaderMaterialParameters);
    copy(source: MeshStandardNodeMaterial): this;
}
