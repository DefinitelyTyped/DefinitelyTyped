import { Color, ColorRepresentation } from "../math/Color.js";
import { Vector2 } from "../math/Vector2.js";
import { Texture } from "../textures/Texture.js";
import { MeshStandardMaterial, MeshStandardMaterialParameters } from "./MeshStandardMaterial.js";

export interface MeshPhysicalMaterialParameters extends MeshStandardMaterialParameters {
    clearcoat?: number | undefined;
    clearcoatMap?: Texture | null | undefined;
    clearcoatRoughness?: number | undefined;
    clearcoatRoughnessMap?: Texture | null | undefined;
    clearcoatNormalScale?: Vector2 | undefined;
    clearcoatNormalMap?: Texture | null | undefined;

    reflectivity?: number | undefined;
    ior?: number | undefined;

    sheen?: number | undefined;
    sheenColor?: ColorRepresentation | undefined;
    sheenColorMap?: Texture | null | undefined;
    sheenRoughness?: number | undefined;
    sheenRoughnessMap?: Texture | null | undefined;

    transmission?: number | undefined;
    transmissionMap?: Texture | null | undefined;

    thickness?: number | undefined;
    thicknessMap?: Texture | null | undefined;

    attenuationDistance?: number | undefined;
    attenuationColor?: ColorRepresentation | undefined;

    specularIntensity?: number | undefined;
    specularColor?: ColorRepresentation | undefined;
    specularIntensityMap?: Texture | null | undefined;
    specularColorMap?: Texture | null | undefined;

    iridescenceMap?: Texture | null | undefined;
    iridescenceIOR?: number | undefined;
    iridescence?: number | undefined;
    iridescenceThicknessRange?: [number, number] | undefined;
    iridescenceThicknessMap?: Texture | null | undefined;

    anisotropy?: number | undefined;
    anisotropyRotation?: number | undefined;
    anisotropyMap?: Texture | null | undefined;
}

export class MeshPhysicalMaterial extends MeshStandardMaterial {
    constructor(parameters?: MeshPhysicalMaterialParameters);

    /**
     * Read-only flag to check if a given object is of type {@link MeshPhysicalMaterial}.
     * @remarks This is a _constant_ value
     * @defaultValue `true`
     */
    readonly isMeshPhysicalMaterial: true;

    /**
     * @default 'MeshPhysicalMaterial'
     */
    type: string;

    /**
     * @default { 'STANDARD': '', 'PHYSICAL': '' }
     */
    defines: { [key: string]: any };

    /**
     * @default 0
     */
    clearcoat: number;

    /**
     * @default null
     */
    clearcoatMap: Texture | null;

    /**
     * @default 0
     */
    clearcoatRoughness: number;

    /**
     * @default null
     */
    clearcoatRoughnessMap: Texture | null;

    /**
     * @default new THREE.Vector2( 1, 1 )
     */
    clearcoatNormalScale: Vector2;

    /**
     * @default null
     */
    clearcoatNormalMap: Texture | null;

    /**
     * @default 0.5
     */
    reflectivity: number;

    /**
     * @default 1.5
     */
    ior: number;

    /**
     * @default 0.0
     */
    sheen: number;

    /**
     * @default Color( 0x000000 )
     */
    sheenColor: Color;

    /**
     * @default null
     */
    sheenColorMap: Texture | null;

    /**
     * @default 1.0
     */
    sheenRoughness: number;

    /**
     * @default null
     */
    sheenRoughnessMap: Texture | null;

    /**
     * @default 0
     */
    transmission: number;

    /**
     * @default null
     */
    transmissionMap: Texture | null;

    /**
     * @default 0.01
     */
    thickness: number;

    /**
     * @default null
     */
    thicknessMap: Texture | null;

    /**
     * @default 0.0
     */
    attenuationDistance: number;

    /**
     * @default Color( 1, 1, 1 )
     */
    attenuationColor: Color;

    /**
     * @default 1.0
     */
    specularIntensity: number;

    /**
     * @default Color(1, 1, 1)
     */
    specularColor: Color;

    /**
     * @default null
     */
    specularIntensityMap: Texture | null;

    /**
     * @default null
     */
    specularColorMap: Texture | null;

    /**
     * @default null
     */
    iridescenceMap: Texture | null;

    /**
     * @default 1.3
     */
    iridescenceIOR: number;

    /**
     * @default 0
     */
    iridescence: number;

    /**
     * @default [100, 400]
     */
    iridescenceThicknessRange: [number, number];

    /**
     * @default null
     */
    iridescenceThicknessMap: Texture | null;

    /**
     * @default 0
     */
    anisotropy?: number;

    /**
     * @default 0
     */
    anisotropyRotation?: number;

    /**
     * @default null
     */
    anisotropyMap?: Texture | null;
}
