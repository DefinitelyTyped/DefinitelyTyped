import Node from "../../nodes/core/Node.js";
import NodeBuilder from "../../nodes/core/NodeBuilder.js";
import { MapColorPropertiesToColorRepresentations } from "../Material.js";
import { MeshPhysicalMaterialParameters, MeshPhysicalMaterialProperties } from "../MeshPhysicalMaterial.js";
import MeshStandardNodeMaterial, { MeshStandardNodeMaterialNodeProperties } from "./MeshStandardNodeMaterial.js";

export interface MeshPhysicalNodeMaterialNodeProperties extends MeshStandardNodeMaterialNodeProperties {
    /**
     * The clearcoat of physical materials is by default inferred from the `clearcoat`
     * and `clearcoatMap` properties. This node property allows to overwrite the default
     * and define the clearcoat with a node instead.
     *
     * If you don't want to overwrite the clearcoat but modify the existing
     * value instead, use {@link materialClearcoat}.
     *
     * @default null
     */
    clearcoatNode: Node | null;
    /**
     * The clearcoat roughness of physical materials is by default inferred from the `clearcoatRoughness`
     * and `clearcoatRoughnessMap` properties. This node property allows to overwrite the default
     * and define the clearcoat roughness with a node instead.
     *
     * If you don't want to overwrite the clearcoat roughness but modify the existing
     * value instead, use {@link materialClearcoatRoughness}.
     *
     * @default null
     */
    clearcoatRoughnessNode: Node | null;
    /**
     * The clearcoat normal of physical materials is by default inferred from the `clearcoatNormalMap`
     * property. This node property allows to overwrite the default
     * and define the clearcoat normal with a node instead.
     *
     * If you don't want to overwrite the clearcoat normal but modify the existing
     * value instead, use {@link materialClearcoatNormal}.
     *
     * @default null
     */
    clearcoatNormalNode: Node | null;
    /**
     * The sheen of physical materials is by default inferred from the `sheen`, `sheenColor`
     * and `sheenColorMap` properties. This node property allows to overwrite the default
     * and define the sheen with a node instead.
     *
     * If you don't want to overwrite the sheen but modify the existing
     * value instead, use {@link materialSheen}.
     *
     * @default null
     */
    sheenNode: Node | null;
    /**
     * The sheen roughness of physical materials is by default inferred from the `sheenRoughness` and
     * `sheenRoughnessMap` properties. This node property allows to overwrite the default
     * and define the sheen roughness with a node instead.
     *
     * If you don't want to overwrite the sheen roughness but modify the existing
     * value instead, use {@link materialSheenRoughness}.
     *
     * @default null
     */
    sheenRoughnessNode: Node | null;
    /**
     * The iridescence of physical materials is by default inferred from the `iridescence`
     * property. This node property allows to overwrite the default
     * and define the iridescence with a node instead.
     *
     * If you don't want to overwrite the iridescence but modify the existing
     * value instead, use {@link materialIridescence}.
     *
     * @default null
     */
    iridescenceNode: Node | null;
    /**
     * The iridescence IOR of physical materials is by default inferred from the `iridescenceIOR`
     * property. This node property allows to overwrite the default
     * and define the iridescence IOR with a node instead.
     *
     * If you don't want to overwrite the iridescence IOR but modify the existing
     * value instead, use {@link materialIridescenceIOR}.
     *
     * @default null
     */
    iridescenceIORNode: Node | null;
    /**
     * The iridescence thickness of physical materials is by default inferred from the `iridescenceThicknessRange`
     * and `iridescenceThicknessMap` properties. This node property allows to overwrite the default
     * and define the iridescence thickness with a node instead.
     *
     * If you don't want to overwrite the iridescence thickness but modify the existing
     * value instead, use {@link materialIridescenceThickness}.
     *
     * @default null
     */
    iridescenceThicknessNode: Node | null;
    /**
     * The specular intensity of physical materials is by default inferred from the `specularIntensity`
     * and `specularIntensityMap` properties. This node property allows to overwrite the default
     * and define the specular intensity with a node instead.
     *
     * If you don't want to overwrite the specular intensity but modify the existing
     * value instead, use {@link materialSpecularIntensity}.
     *
     * @default null
     */
    specularIntensityNode: Node | null;
    /**
     * The specular color of physical materials is by default inferred from the `specularColor`
     * and `specularColorMap` properties. This node property allows to overwrite the default
     * and define the specular color with a node instead.
     *
     * If you don't want to overwrite the specular color but modify the existing
     * value instead, use {@link materialSpecularColor}.
     *
     * @default null
     */
    specularColorNode: Node | null;
    /**
     * The ior of physical materials is by default inferred from the `ior`
     * property. This node property allows to overwrite the default
     * and define the ior with a node instead.
     *
     * If you don't want to overwrite the ior but modify the existing
     * value instead, use {@link materialIOR}.
     *
     * @default null
     */
    iorNode: Node | null;
    /**
     * The transmission of physical materials is by default inferred from the `transmission` and
     * `transmissionMap` properties. This node property allows to overwrite the default
     * and define the transmission with a node instead.
     *
     * If you don't want to overwrite the transmission but modify the existing
     * value instead, use {@link materialTransmission}.
     *
     * @default null
     */
    transmissionNode: Node | null;
    /**
     * The thickness of physical materials is by default inferred from the `thickness` and
     * `thicknessMap` properties. This node property allows to overwrite the default
     * and define the thickness with a node instead.
     *
     * If you don't want to overwrite the thickness but modify the existing
     * value instead, use {@link materialThickness}.
     *
     * @default null
     */
    thicknessNode: Node | null;
    /**
     * The attenuation distance of physical materials is by default inferred from the
     * `attenuationDistance` property. This node property allows to overwrite the default
     * and define the attenuation distance with a node instead.
     *
     * If you don't want to overwrite the attenuation distance but modify the existing
     * value instead, use {@link materialAttenuationDistance}.
     *
     * @default null
     */
    attenuationDistanceNode: Node | null;
    /**
     * The attenuation color of physical materials is by default inferred from the
     * `attenuationColor` property. This node property allows to overwrite the default
     * and define the attenuation color with a node instead.
     *
     * If you don't want to overwrite the attenuation color but modify the existing
     * value instead, use {@link materialAttenuationColor}.
     *
     * @default null
     */
    attenuationColorNode: Node | null;
    /**
     * The dispersion of physical materials is by default inferred from the
     * `dispersion` property. This node property allows to overwrite the default
     * and define the dispersion with a node instead.
     *
     * If you don't want to overwrite the dispersion but modify the existing
     * value instead, use {@link materialDispersion}.
     *
     * @default null
     */
    dispersionNode: Node | null;
    /**
     * The anisotropy of physical materials is by default inferred from the
     * `anisotropy` property. This node property allows to overwrite the default
     * and define the anisotropy with a node instead.
     *
     * If you don't want to overwrite the anisotropy but modify the existing
     * value instead, use {@link materialAnisotropy}.
     *
     * @default null
     */
    anisotropyNode: Node | null;
}

// eslint-disable-next-line @typescript-eslint/no-empty-interface
export interface MeshPhysicalNodeMaterialParameters
    extends
        Partial<MapColorPropertiesToColorRepresentations<MeshPhysicalNodeMaterialNodeProperties>>,
        MeshPhysicalMaterialParameters
{}

/**
 * Node material version of {@link MeshPhysicalMaterial}.
 */
declare class MeshPhysicalNodeMaterial extends MeshStandardNodeMaterial {
    constructor(parameters?: MeshPhysicalNodeMaterialParameters);
    /**
     * This flag can be used for type testing.
     *
     * @default true
     */
    readonly isMeshPhysicalNodeMaterial: boolean;
    /**
     * Whether the lighting model should use clearcoat or not.
     *
     * @default true
     */
    get useClearcoat(): boolean;
    /**
     * Whether the lighting model should use iridescence or not.
     *
     * @default true
     */
    get useIridescence(): boolean;
    /**
     * Whether the lighting model should use sheen or not.
     *
     * @default true
     */
    get useSheen(): boolean;
    /**
     * Whether the lighting model should use anisotropy or not.
     *
     * @default true
     */
    get useAnisotropy(): boolean;
    /**
     * Whether the lighting model should use transmission or not.
     *
     * @default true
     */
    get useTransmission(): boolean;
    /**
     * Whether the lighting model should use dispersion or not.
     *
     * @default true
     */
    get useDispersion(): boolean;
    /**
     * Setups the physical specific node variables.
     *
     * @param {NodeBuilder} builder - The current node builder.
     */
    setupVariants(builder: NodeBuilder): void;
    /**
     * Setups the clearcoat normal node.
     *
     * @return {Node<vec3>} The clearcoat normal.
     */
    setupClearcoatNormal(): Node;
}

// eslint-disable-next-line @typescript-eslint/no-empty-interface
interface MeshPhysicalNodeMaterial extends MeshPhysicalNodeMaterialNodeProperties, MeshPhysicalMaterialProperties {}

export default MeshPhysicalNodeMaterial;
