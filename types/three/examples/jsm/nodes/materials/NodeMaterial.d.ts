import {
    LineBasicMaterial,
    Material,
    MeshBasicMaterial,
    MeshPhysicalMaterial,
    MeshStandardMaterial,
    PointsMaterial,
    ShaderMaterial,
    SpriteMaterial,
} from '../../../../src/Three.js';
import NodeBuilder from '../core/NodeBuilder.js';
import Node from '../core/Node.js';
import { LightingModelNode } from '../lighting/LightingContextNode.js';
import LineBasicNodeMaterial from './LineBasicNodeMaterial.js';
import MeshBasicNodeMaterial from './MeshBasicNodeMaterial.js';
import MeshPhysicalNodeMaterial from './MeshPhysicalNodeMaterial.js';
import MeshStandardNodeMaterial from './MeshStandardNodeMaterial.js';
import PointsNodeMaterial from './PointsNodeMaterial.js';
import SpriteNodeMaterial from './SpriteNodeMaterial.js';

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

    static fromMaterial(material: LineBasicMaterial): LineBasicNodeMaterial;
    static fromMaterial(material: MeshBasicMaterial): MeshBasicNodeMaterial;
    static fromMaterial(material: MeshPhysicalMaterial): MeshPhysicalNodeMaterial;
    static fromMaterial(material: MeshStandardMaterial): MeshStandardNodeMaterial;
    static fromMaterial(material: PointsMaterial): PointsNodeMaterial;
    static fromMaterial(material: SpriteMaterial): SpriteNodeMaterial;
    static fromMaterial(material: NodeMaterial): NodeMaterial;
    static fromMaterial(material: Material): NodeMaterial;
}
