import NodeMaterial from './NodeMaterial.js';
import { ShaderMaterialParameters } from '../../../../src/Three.js';

export default class LineBasicNodeMaterial extends NodeMaterial {
    readonly isLineBasicNodeMaterial: true;

    constructor(parameters?: ShaderMaterialParameters);
}
