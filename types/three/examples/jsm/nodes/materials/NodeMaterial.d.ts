import {
    LineBasicMaterial,
    Material,
    MeshBasicMaterial,
    MeshPhongMaterial,
    MeshPhysicalMaterial,
    MeshStandardMaterial,
    PointsMaterial,
    ShaderMaterial,
    SpriteMaterial,
} from "../../../../src/Three.js";
import LightingModel from "../core/LightingModel.js";
import Node from "../core/Node.js";
import NodeBuilder from "../core/NodeBuilder.js";
import LightsNode from "../lighting/LightsNode.js";
import LineBasicNodeMaterial from "./LineBasicNodeMaterial.js";
import MeshBasicNodeMaterial from "./MeshBasicNodeMaterial.js";
import MeshPhongNodeMaterial from "./MeshPhongNodeMaterial.js";
import MeshPhysicalNodeMaterial from "./MeshPhysicalNodeMaterial.js";
import MeshStandardNodeMaterial from "./MeshStandardNodeMaterial.js";
import PointsNodeMaterial from "./PointsNodeMaterial.js";
import SpriteNodeMaterial from "./SpriteNodeMaterial.js";

export default class NodeMaterial extends ShaderMaterial {
    readonly isNodeMaterial: true;

    normals: boolean;

    colorSpaced: boolean;

    lightsNode: LightsNode | null;
    envNode: Node | null;

    colorNode: Node | null;
    normalNode: Node | null;
    opacityNode: Node | null;
    backdropNode: Node | null;
    backdropAlphaNode: Node | null;
    alphaTestNode: Node | null;

    positionNode: Node | null;

    depthNode: Node | null;
    shadowNode: Node | null;

    outputNode: Node | null;

    fragmentNode: Node | null;
    vertexNode: Node | null;

    constructor();

    build(builder: NodeBuilder): void;
    setup(builder: NodeBuilder): void;
    setupDepth(builder: NodeBuilder): void;
    setupPosition(builder: NodeBuilder): Node;
    setupDiffuseColor(builder: NodeBuilder): void;
    setupVariants(builder: NodeBuilder): void;
    setupNormal(builder: NodeBuilder): void;
    getEnvNode(builder: NodeBuilder): Node | null;
    setupLights(builder: NodeBuilder): LightsNode;
    setupLightingModel(builder: NodeBuilder): LightingModel;
    setupLighting(builder: NodeBuilder): Node;
    setupOutput(builder: NodeBuilder, outputNode: Node): Node;

    setDefaultValues(material: Material): void;

    static fromMaterial(material: LineBasicMaterial): LineBasicNodeMaterial;
    static fromMaterial(material: MeshBasicMaterial): MeshBasicNodeMaterial;
    static fromMaterial(material: MeshPhongMaterial): MeshPhongNodeMaterial;
    static fromMaterial(material: MeshPhysicalMaterial): MeshPhysicalNodeMaterial;
    static fromMaterial(material: MeshStandardMaterial): MeshStandardNodeMaterial;
    static fromMaterial(material: PointsMaterial): PointsNodeMaterial;
    static fromMaterial(material: SpriteMaterial): SpriteNodeMaterial;
    static fromMaterial(material: NodeMaterial): NodeMaterial;
    static fromMaterial(material: Material): NodeMaterial;
}
