import { ToneMapping } from "../../../constants.js";
import { Light } from "../../../lights/Light.js";
import { Material } from "../../../materials/Material.js";
import NodeMaterial from "../../../materials/nodes/NodeMaterial.js";
import Node from "../../../nodes/core/Node.js";
import { ColorSpaceMethod } from "../../../nodes/display/ColorSpaceNode.js";
import AnalyticLightNode from "../../../nodes/lighting/AnalyticLightNode.js";
import { NodeRepresentation, ShaderNodeObject } from "../../../nodes/tsl/TSLCore.js";
declare class NodeLibrary {
    lightNodes: WeakMap<{
        new(): Light;
    }, {
        new(light: Light): AnalyticLightNode<Light>;
    }>;
    materialNodes: Map<string, {
        new(): NodeMaterial;
    }>;
    toneMappingNodes: Map<
        ToneMapping,
        (color: NodeRepresentation, exposure: NodeRepresentation) => ShaderNodeObject<Node>
    >;
    colorSpaceNodes: Map<ColorSpaceMethod, (color: NodeRepresentation) => ShaderNodeObject<Node>>;
    constructor();
    fromMaterial(material: Material): Material | null;
    addColorSpace(
        colorSpaceNode: (color: NodeRepresentation) => ShaderNodeObject<Node>,
        colorSpace: ColorSpaceMethod,
    ): void;
    getColorSpaceFunction(colorSpace: ColorSpaceMethod): ((color: NodeRepresentation) => ShaderNodeObject<Node>) | null;
    addToneMapping(
        toneMappingNode: (color: NodeRepresentation, exposure: NodeRepresentation) => ShaderNodeObject<Node>,
        toneMapping: ToneMapping,
    ): void;
    getToneMappingFunction(
        toneMapping: ToneMapping,
    ): ((color: NodeRepresentation, exposure: NodeRepresentation) => ShaderNodeObject<Node>) | null;
    getMaterialNodeClass(materialType: string): (new() => NodeMaterial) | null;
    addMaterial(materialNodeClass: {
        new(): NodeMaterial;
    }, materialClass: {
        new(): Material;
    }): void;
    getLightNodeClass(light: Light): (new(light: Light) => AnalyticLightNode<Light>) | null;
    addLight<TLight extends Light>(lightNodeClass: {
        new(light: TLight): AnalyticLightNode<TLight>;
    }, lightClass: {
        new(): TLight;
    }): void;
    addType<TNodeClass, TType>(nodeClass: TNodeClass, type: TType, library: Map<TType, TNodeClass>): void;
    addClass<TNodeClass, TBaseClass extends object>(
        nodeClass: TNodeClass,
        baseClass: TBaseClass,
        library: WeakMap<TBaseClass, TNodeClass>,
    ): void;
}
export default NodeLibrary;
