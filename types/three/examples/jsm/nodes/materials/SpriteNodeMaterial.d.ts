import NodeMaterial from './NodeMaterial';
import { ShaderMaterialParameters } from '../../../../src/Three';
import { NodeBuilder } from '../Nodes';
import Node from '../core/Node';

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
