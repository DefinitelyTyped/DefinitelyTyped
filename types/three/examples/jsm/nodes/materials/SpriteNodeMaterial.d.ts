import NodeMaterial from './NodeMaterial.js';
import { ShaderMaterialParameters } from '../../../../src/Three.js';
import { NodeBuilder } from '../Nodes.js';
import Node from '../core/Node.js';

export default class SpriteNodeMaterial extends NodeMaterial {
    isSpriteNodeMaterial: true;

    rotationNode: Node | null;
    scaleNode: Node | null;

    constructor(parameters?: ShaderMaterialParameters);
}
