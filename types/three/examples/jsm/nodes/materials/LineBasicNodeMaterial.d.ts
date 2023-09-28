import NodeMaterial from './NodeMaterial.js';
import { ShaderMaterialParameters } from '../../../../src/Three.js';

export default class LineBasicNodeMaterial extends NodeMaterial {
    isLineBasicNodeMaterial: true;

    constructor(parameters?: ShaderMaterialParameters);
    copy(source: LineBasicNodeMaterial): this;
}
