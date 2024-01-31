import NodeMaterial from './NodeMaterial.js';
import { ShaderMaterialParameters } from '../../../../src/Three.js';

export default class MeshBasicNodeMaterial extends NodeMaterial {
    readonly isMeshBasicNodeMaterial: true;

    constructor(parameters?: ShaderMaterialParameters);
}
