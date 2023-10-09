import NodeMaterial from './NodeMaterial.js';
import { ShaderMaterialParameters } from '../../../../src/Three.js';

export default class MeshBasicNodeMaterial extends NodeMaterial {
    isMeshBasicNodeMaterial: true;
    lights: true;

    constructor(paramters?: ShaderMaterialParameters);
    copy(source: MeshBasicNodeMaterial): this;
}
