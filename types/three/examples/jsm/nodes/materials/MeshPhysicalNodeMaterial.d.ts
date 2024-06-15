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

    iorNode: ShaderNodeObject<Node> | null;

    specularIntensityNode: ShaderNodeObject<Node> | null;
    specularColorNode: ShaderNodeObject<Node> | null;

    transmissionNode: ShaderNodeObject<Node> | null;
    thicknessNode: ShaderNodeObject<Node> | null;
    attenuationDistanceNode: ShaderNodeObject<Node> | null;
    attenuationColorNode: ShaderNodeObject<Node> | null;
    dispersionNode: ShaderNodeObject<Node> | null;

    anisotropyNode: ShaderNodeObject<Node> | null;

    // Properties from MeshPhysicalMaterial
    readonly isMeshPhysicalMaterial: true;
    anisotropyRotation: number;
    anisotropyMap: Texture | null;
    clearcoatMap: Texture | null;
    clearcoatRoughness: number;
    clearcoatRoughnessMap: Texture | null;
    clearcoatNormalScale: Vector2;
    clearcoatNormalMap: Texture | null;
    ior: number;
    get reflectivity(): number;
    set reflectivity(reflectivity: number);
    iridescenceMap: Texture | null;
    iridescenceIOR: number;
    iridescenceThicknessRange: [number, number];
    iridescenceThicknessMap: Texture | null;
    sheenColor: Color;
    sheenColorMap: Texture | null;
    sheenRoughness: number;
    sheenRoughnessMap: Texture | null;
    transmissionMap: Texture | null;
    thickness: number;
    thicknessMap: Texture | null;
    attenuationDistance: number;
    attenuationColor: Color;
    specularIntensity: number;
    specularIntensityMap: Texture | null;
    specularColor: Color;
    specularColorMap: Texture | null;
    get anisotropy(): number;
    set anisotropy(value: number);
    get clearcoat(): number;
    set clearcoat(value: number);
    get iridescence(): number;
    set iridescence(value: number);
    get dispersion(): number;
    set dispersion(value: number);
    get sheen(): number;
    set sheen(value: number);
    get transmission(): number;
    set transmission(value: number);

    constructor(parameters?: MeshPhysicalNodeMaterialParameters);

    get useClearcoat(): boolean;
    get useIridescence(): boolean;
    get useSheen(): boolean;
    get useAnisotropy(): boolean;
    get useTransmission(): boolean;
    get useDispersion(): boolean;
}
