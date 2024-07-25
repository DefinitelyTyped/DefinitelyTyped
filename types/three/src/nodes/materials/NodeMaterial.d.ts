import { LineBasicMaterial } from "../../materials/LineBasicMaterial.js";
import { Material, MaterialParameters } from "../../materials/Material.js";
import { MeshBasicMaterial } from "../../materials/MeshBasicMaterial.js";
import { MeshMatcapMaterial } from "../../materials/MeshMatcapMaterial.js";
import { MeshNormalMaterial } from "../../materials/MeshNormalMaterial.js";
import { MeshPhongMaterial } from "../../materials/MeshPhongMaterial.js";
import { MeshPhysicalMaterial } from "../../materials/MeshPhysicalMaterial.js";
import { MeshStandardMaterial } from "../../materials/MeshStandardMaterial.js";
import { MeshToonMaterial } from "../../materials/MeshToonMaterial.js";
import { PointsMaterial } from "../../materials/PointsMaterial.js";
import { ShadowMaterial } from "../../materials/ShadowMaterial.js";
import { SpriteMaterial } from "../../materials/SpriteMaterial.js";
import ClippingNode from "../accessors/ClippingNode.js";
import LightingModel from "../core/LightingModel.js";
import MRTNode from "../core/MRTNode.js";
import Node from "../core/Node.js";
import NodeBuilder from "../core/NodeBuilder.js";
import LightsNode from "../lighting/LightsNode.js";
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

    lightsNode?: LightsNode | null | undefined;
    envNode?: Node | null | undefined;
    aoNode?: Node | null | undefined;

    colorNode?: Node | null | undefined;
    normalNode?: Node | null | undefined;
    opacityNode?: Node | null | undefined;
    backdropNode?: Node | null | undefined;
    backdropAlphaNode?: Node | null | undefined;
    alphaTestNode?: Node | null | undefined;

    positionNode?: Node | null | undefined;

    depthNode?: Node | null | undefined;
    shadowNode?: Node | null | undefined;

    outputNode?: Node | null | undefined;

    fragmentNode?: Node | null | undefined;
    vertexNode?: Node | null | undefined;
}

export default class NodeMaterial extends Material {
    readonly isNodeMaterial: true;

    fog: boolean;
    lights: boolean;
    normals: boolean;

    lightsNode: LightsNode | null;
    envNode: Node | null;
    aoNode: Node | null;

    colorNode: Node | null;
    normalNode: Node | null;
    opacityNode: Node | null;
    backdropNode: Node | null;
    backdropAlphaNode: Node | null;
    alphaTestNode: Node | null;

    positionNode: Node | null;

    depthNode: Node | null;
    shadowNode: Node | null;
    shadowPositionNode: Node | null;

    outputNode: Node | null;
    mrtNode: MRTNode | null;

    fragmentNode: Node | null;
    vertexNode: Node | null;

    constructor();

    build(builder: NodeBuilder): void;
    setup(builder: NodeBuilder): void;
    setupClipping(builder: NodeBuilder): ClippingNode | null;
    setupDepth(builder: NodeBuilder): void;
    setupPosition(builder: NodeBuilder): Node;
    setupDiffuseColor(builder: NodeBuilder): void;
    setupVariants(builder: NodeBuilder): void;
    setupNormal(builder: NodeBuilder): void;
    setupEnvironment(builder: NodeBuilder): Node | null;
    setupLightMap(builder: NodeBuilder): Node | null;
    setupLights(builder: NodeBuilder): LightsNode;
    setupOutgoingLight(): Node;
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

export function addNodeMaterial(type: string, nodeMaterial: typeof NodeMaterial): void;
export function createNodeMaterialFromType(type: string): NodeMaterial;
