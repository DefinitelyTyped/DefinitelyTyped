import { Color, MeshPhysicalMaterialParameters, Texture, Vector2 } from "three";

import Node from "../core/Node.js";
import { ShaderNodeObject } from "../shadernode/ShaderNode.js";
import MeshStandardNodeMaterial, { MeshStandardNodeMaterialParameters } from "./MeshStandardNodeMaterial.js";

export interface MeshPhysicalNodeMaterialParameters
    extends MeshStandardNodeMaterialParameters, MeshPhysicalMaterialParameters
{
}

export default class MeshPhysicalNodeMaterial extends MeshStandardNodeMaterial {
    readonly isMeshPhysicalNodeMaterial: true;

    clearcoatNode: ShaderNodeObject<Node> | null;
    clearcoatRoughnessNode: ShaderNodeObject<Node> | null;
    clearcoatNormalNode: ShaderNodeObject<Node> | null;

    sheenNode: ShaderNodeObject<Node> | null;
    sheenRoughnessNode: ShaderNodeObject<Node> | null;

    iridescenceNode: ShaderNodeObject<Node> | null;
    iridescenceIORNode: ShaderNodeObject<Node> | null;
    iridescenceThicknessNode: ShaderNodeObject<Node> | null;

    iorNode?: ShaderNodeObject<Node> | null;

    specularIntensityNode: ShaderNodeObject<Node> | null;
    specularColorNode: ShaderNodeObject<Node> | null;

    transmissionNode: ShaderNodeObject<Node> | null;
    thicknessNode: ShaderNodeObject<Node> | null;
    attenuationDistanceNode: ShaderNodeObject<Node> | null;
    attenuationColorNode: ShaderNodeObject<Node> | null;

    // Properties from MeshPhysicalMaterial
    readonly isMeshPhysicalMaterial: true;
    clearcoat: number;
    clearcoatMap: Texture | null;
    clearcoatRoughness: number;
    clearcoatRoughnessMap: Texture | null;
    clearcoatNormalScale: Vector2;
    clearcoatNormalMap: Texture | null;
    reflectivity: number;
    ior: number;
    sheen: number;
    sheenColor: Color;
    sheenColorMap: Texture | null;
    sheenRoughness: number;
    sheenRoughnessMap: Texture | null;
    transmission: number;
    transmissionMap: Texture | null;
    thickness: number;
    thicknessMap: Texture | null;
    attenuationDistance: number;
    attenuationColor: Color;
    specularIntensity: number;
    specularColor: Color;
    specularIntensityMap: Texture | null;
    specularColorMap: Texture | null;
    iridescenceMap: Texture | null;
    iridescenceIOR: number;
    iridescence: number;
    iridescenceThicknessRange: [number, number];
    iridescenceThicknessMap: Texture | null;
    anisotropy?: number;
    anisotropyRotation?: number;
    anisotropyMap?: Texture | null;

    constructor(parameters?: MeshPhysicalNodeMaterialParameters);
}
