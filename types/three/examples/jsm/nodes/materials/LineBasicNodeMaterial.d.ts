import NodeMaterial from './NodeMaterial';
import { ShaderMaterialParameters } from '../../../../src/Three';

export default class LineBasicNodeMaterial extends NodeMaterial {
    isLineBasicNodeMaterial: true;

    constructor(parameters?: ShaderMaterialParameters);
    copy(source: LineBasicNodeMaterial): this;
}
