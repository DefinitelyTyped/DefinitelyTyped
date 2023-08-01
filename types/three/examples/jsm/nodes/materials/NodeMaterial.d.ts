import { Material, ShaderMaterial } from '../../../../src/Three.js';
import NodeBuilder from '../core/NodeBuilder.js';
import Node from '../core/Node.js';
import { LightingModelNode } from '../lighting/LightingContextNode.js';

export default class NodeMaterial extends ShaderMaterial {
    isNodeMaterial: true;

    type: string;

    lights: true;
    normals: true;

    lightsNode: Node | null;
    envNode: Node | null;

    colorNode: Node | null;
    normalNode: Node | null;
    opacityNode: Node | null;
    backdropNode: Node | null;
    backdropAlphaNode: Node | null;
    alphaTestNode: Node | null;

    positionNode: Node | null;

    constructor();

    build(builder: NodeBuilder): void;
    customProgramCacheKey(): string;
    generatePosition(builder: NodeBuilder): void;
    generateDiffuseColor(builder: NodeBuilder): void;
    generateLight(
        builder: NodeBuilder,
        lights: { diffuseColorNode: Node; lightingModelNode: LightingModelNode; lightsNode?: Node },
    ): void;
    generateOutput(builder: NodeBuilder, lights: { diffuseColorNode: Node; outgoingLightNode: Node }): void;
    static fromMaterial(m: Material): NodeMaterial;
}
