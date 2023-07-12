import NodeMaterial from './NodeMaterial.js';
import { ShaderMaterialParameters } from '../../../../src/Three.js';
import { NodeBuilder } from '../Nodes.js';
import Node from '../core/Node.js';

export default class SpriteNodeMaterial extends NodeMaterial {
    isSpriteNodeMaterial: true;

    colorNode: Node | null;
    opacityNode: Node | null;

    alphaTestNode: Node | null;

    lightNode: Node | null;

    positionNode: Node | null;
    rotationNode: Node | null;
    scaleNode: Node | null;

    constructor(parameters?: ShaderMaterialParameters);
    generatePosition(builder: NodeBuilder): void;
    copy(source: SpriteNodeMaterial): this;
}
