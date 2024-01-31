import NodeMaterial from './NodeMaterial.js';
import { ShaderMaterialParameters } from '../../../../src/Three.js';
import { Node } from '../Nodes.js';

export default class PointsNodeMaterial extends NodeMaterial {
    readonly isPointsNodeMaterial: true;

    constructor(parameters?: ShaderMaterialParameters);
}
