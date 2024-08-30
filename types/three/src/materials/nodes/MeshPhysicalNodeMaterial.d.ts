import { Color } from "../../math/Color.js";
import { Vector2 } from "../../math/Vector2.js";
import Node from "../../nodes/core/Node.js";
import { ShaderNodeObject } from "../../nodes/tsl/TSLCore.js";
import { Texture } from "../../textures/Texture.js";
import { MeshPhysicalMaterialParameters } from "../MeshPhysicalMaterial.js";
import MeshStandardNodeMaterial, { MeshStandardNodeMaterialParameters } from "./MeshStandardNodeMaterial.js";

export interface MeshPhysicalNodeMaterialParameters
    extends MeshStandardNodeMaterialParameters, MeshPhysicalMaterialParameters
{
}

export default class MeshPhysicalNodeMaterial extends MeshStandardNodeMaterial {
    readonly isMeshPhysicalNodeMaterial: true;

    clearcoatNode: Node | null;
    clearcoatRoughnessNode: Node | null;
    clearcoatNormalNode: Node | null;

    sheenNode: Node | null;
    sheenRoughnessNode: Node | null;

    iridescenceNode: Node | null;
    iridescenceIORNode: Node | null;
    iridescenceThicknessNode: Node | null;

    iorNode: Node | null;

    specularIntensityNode: Node | null;
    specularColorNode: Node | null;

    transmissionNode: Node | null;
    thicknessNode: Node | null;
    attenuationDistanceNode: Node | null;
    attenuationColorNode: Node | null;
    dispersionNode: Node | null;

    anisotropyNode: Node | null;

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

    setupClearcoatNormal(): ShaderNodeObject<Node>;
}
