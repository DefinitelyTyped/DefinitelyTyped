import ClippingNode from "../../nodes/accessors/ClippingNode.js";
import LightingModel from "../../nodes/core/LightingModel.js";
import MRTNode from "../../nodes/core/MRTNode.js";
import Node from "../../nodes/core/Node.js";
import NodeBuilder from "../../nodes/core/NodeBuilder.js";
import LightsNode from "../../nodes/lighting/LightsNode.js";
import { ShaderNodeObject } from "../../nodes/tsl/TSLCore.js";
import { Material, MaterialParameters } from "../Material.js";

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
    geometryNode?: Node | null | undefined;

    depthNode?: Node | null | undefined;
    shadowNode?: Node | null | undefined;

    outputNode?: Node | null | undefined;

    fragmentNode?: Node | null | undefined;
    vertexNode?: Node | null | undefined;
}

declare class NodeMaterial extends Material {
    static get type(): string;

    readonly isNodeMaterial: true;

    fog: boolean;
    lights: boolean;
    hardwareClipping: boolean;

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
    geometryNode: Node | null;

    depthNode: Node | null;
    shadowPositionNode: Node | null;
    receivedShadowNode: (() => Node) | null;
    castShadowNode: Node | null;

    outputNode: Node | null;
    mrtNode: MRTNode | null;

    fragmentNode: Node | null;
    vertexNode: Node | null;

    constructor();

    build(builder: NodeBuilder): void;
    setup(builder: NodeBuilder): void;
    setupClipping(builder: NodeBuilder): ClippingNode | null;
    setupHardwareClipping(builder: NodeBuilder): void;
    setupDepth(builder: NodeBuilder): void;
    setupPositionView(): Node;
    setupModelViewProjection(): Node;
    setupVertex(builder: NodeBuilder): Node;
    setupPosition(builder: NodeBuilder): Node;
    setupDiffuseColor(builder: NodeBuilder): void;
    setupVariants(builder: NodeBuilder): void;
    setupNormal(builder: NodeBuilder): ShaderNodeObject<Node>;
    setupEnvironment(builder: NodeBuilder): Node | null;
    setupLightMap(builder: NodeBuilder): Node | null;
    setupLights(builder: NodeBuilder): LightsNode;
    setupOutgoingLight(): Node;
    setupLightingModel(builder: NodeBuilder): LightingModel;
    setupLighting(builder: NodeBuilder): Node;
    setupFog(builder: NodeBuilder, outputNode: Node): Node;
    setupOutput(builder: NodeBuilder, outputNode: Node): Node;

    setDefaultValues(material: Material): void;
}

export default NodeMaterial;
