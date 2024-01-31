import { ShaderMaterialParameters } from '../../../../src/Three.js';
import NodeMaterial from './NodeMaterial.js';
import Node from '../core/Node.js';

export default class MeshPhongNodeMaterial extends NodeMaterial {
    readonly isMeshPhongNodeMaterial: true;

    shininessNode: Node | null;
    specularNode: Node | null;

    constructor(parameters?: ShaderMaterialParameters);
}
