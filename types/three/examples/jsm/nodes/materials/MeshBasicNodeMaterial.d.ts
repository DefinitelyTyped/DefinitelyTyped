import NodeMaterial from './NodeMaterial';
import { ShaderMaterialParameters } from '../../../../src/Three';

export default class MeshBasicNodeMaterial extends NodeMaterial {
    isMeshBasicNodeMaterial: true;
    lights: true;

    constructor(paramters?: ShaderMaterialParameters);
    copy(source: MeshBasicNodeMaterial): this;
}
