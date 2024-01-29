import { ShaderMaterialParameters } from '../../../../src/Three.js';
import Node from '../core/Node.js';
import NodeMaterial from './NodeMaterial.js';

export default class MeshStandardNodeMaterial extends NodeMaterial {
    isMeshStandardNodeMaterial: true;

    emissiveNode: Node | null;

    metalnessNode: Node | null;
    roughnessNode: Node | null;

    constructor(paramters?: ShaderMaterialParameters);
    copy(source: MeshStandardNodeMaterial): this;
}
