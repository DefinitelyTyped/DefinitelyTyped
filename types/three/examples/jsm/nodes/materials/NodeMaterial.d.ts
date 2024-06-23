import {
    LineBasicMaterial,
    Material,
    MaterialParameters,
    MeshBasicMaterial,
    MeshMatcapMaterial,
    MeshNormalMaterial,
    MeshPhongMaterial,
    MeshPhysicalMaterial,
    MeshStandardMaterial,
    MeshToonMaterial,
    PointsMaterial,
    ShadowMaterial,
    SpriteMaterial,
} from "three";
import ClippingNode from "../accessors/ClippingNode.js";
import LightingModel from "../core/LightingModel.js";
import Node from "../core/Node.js";
import NodeBuilder from "../core/NodeBuilder.js";
import LightsNode from "../lighting/LightsNode.js";
import { ShaderNodeObject } from "../shadernode/ShaderNode.js";
import LineBasicNodeMaterial from "./LineBasicNodeMaterial.js";
import MeshBasicNodeMaterial from "./MeshBasicNodeMaterial.js";
import MeshMatcapNodeMaterial from "./MeshMatcapNodeMaterial.js";
import MeshNormalNodeMaterial from "./MeshNormalNodeMaterial.js";
import MeshPhongNodeMaterial from "./MeshPhongNodeMaterial.js";
import MeshPhysicalNodeMaterial from "./MeshPhysicalNodeMaterial.js";
import MeshStandardNodeMaterial from "./MeshStandardNodeMaterial.js";
import MeshToonNodeMaterial from "./MeshToonNodeMaterial.js";
import PointsNodeMaterial from "./PointsNodeMaterial.js";
import ShadowNodeMaterial from "./ShadowNodeMaterial.js";
import SpriteNodeMaterial from "./SpriteNodeMaterial.js";

export interface NodeMaterialParameters extends MaterialParameters {
    normals?: boolean | undefined;

    colorSpaced?: boolean | undefined;

    lightsNode?: ShaderNodeObject<LightsNode> | null | undefined;
    envNode?: ShaderNodeObject<Node> | null | undefined;
    aoNode?: ShaderNodeObject<Node> | null | undefined;

    colorNode?: ShaderNodeObject<Node> | null | undefined;
    normalNode?: ShaderNodeObject<Node> | null | undefined;
    opacityNode?: ShaderNodeObject<Node> | null | undefined;
    backdropNode?: ShaderNodeObject<Node> | null | undefined;
    backdropAlphaNode?: ShaderNodeObject<Node> | null | undefined;
    alphaTestNode?: ShaderNodeObject<Node> | null | undefined;

    positionNode?: ShaderNodeObject<Node> | null | undefined;

    depthNode?: ShaderNodeObject<Node> | null | undefined;
    shadowNode?: ShaderNodeObject<Node> | null | undefined;

    outputNode?: ShaderNodeObject<Node> | null | undefined;

    fragmentNode?: ShaderNodeObject<Node> | null | undefined;
    vertexNode?: ShaderNodeObject<Node> | null | undefined;
}

export default class NodeMaterial extends Material {
    readonly isNodeMaterial: true;

    normals: boolean;

    lightsNode: ShaderNodeObject<LightsNode> | null;
    envNode: ShaderNodeObject<Node> | null;
    aoNode: ShaderNodeObject<Node> | null;

    colorNode: ShaderNodeObject<Node> | null;
    normalNode: ShaderNodeObject<Node> | null;
    opacityNode: ShaderNodeObject<Node> | null;
    backdropNode: ShaderNodeObject<Node> | null;
    backdropAlphaNode: ShaderNodeObject<Node> | null;
    alphaTestNode: ShaderNodeObject<Node> | null;

    positionNode: ShaderNodeObject<Node> | null;

    depthNode: ShaderNodeObject<Node> | null;
    shadowNode: ShaderNodeObject<Node> | null;
    shadowPositionNode: ShaderNodeObject<Node> | null;

    outputNode: ShaderNodeObject<Node> | null;

    fragmentNode: ShaderNodeObject<Node> | null;
    vertexNode: ShaderNodeObject<Node> | null;

    constructor();

    build(builder: NodeBuilder): void;
    setup(builder: NodeBuilder): void;
    setupClipping(builder: NodeBuilder): ShaderNodeObject<ClippingNode> | null;
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
    static fromMaterial(material: MeshMatcapMaterial): MeshMatcapNodeMaterial;
    static fromMaterial(material: MeshNormalMaterial): MeshNormalNodeMaterial;
    static fromMaterial(material: MeshPhongMaterial): MeshPhongNodeMaterial;
    static fromMaterial(material: MeshPhysicalMaterial): MeshPhysicalNodeMaterial;
    static fromMaterial(material: MeshStandardMaterial): MeshStandardNodeMaterial;
    static fromMaterial(material: MeshToonMaterial): MeshToonNodeMaterial;
    static fromMaterial(material: PointsMaterial): PointsNodeMaterial;
    static fromMaterial(material: ShadowMaterial): ShadowNodeMaterial;
    static fromMaterial(material: SpriteMaterial): SpriteNodeMaterial;
    static fromMaterial(material: NodeMaterial): NodeMaterial;
    static fromMaterial(material: Material): NodeMaterial;
}
