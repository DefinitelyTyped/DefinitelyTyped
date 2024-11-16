import { Color, ColorRepresentation } from "../math/Color.js";
import { Vector2 } from "../math/Vector2.js";
import { Texture } from "../textures/Texture.js";
import { MeshStandardMaterial, MeshStandardMaterialParameters } from "./MeshStandardMaterial.js";

export interface MeshPhysicalMaterialParameters extends MeshStandardMaterialParameters {
    anisotropyRotation?: number | undefined;
    anisotropyMap?: Texture | null | undefined;

    clearcoatMap?: Texture | null | undefined;
    clearcoatRoughness?: number | undefined;
    clearcoatRoughnessMap?: Texture | null | undefined;
    clearcoatNormalScale?: Vector2 | undefined;
    clearcoatNormalMap?: Texture | null | undefined;

    ior?: number | undefined;

    reflectivity?: number | undefined;

    iridescenceMap?: Texture | null | undefined;
    iridescenceIOR?: number | undefined;
    iridescenceThicknessRange?: [number, number] | undefined;
    iridescenceThicknessMap?: Texture | null | undefined;

    sheenColor?: ColorRepresentation | undefined;
    sheenColorMap?: Texture | null | undefined;
    sheenRoughness?: number | undefined;
    sheenRoughnessMap?: Texture | null | undefined;

    transmissionMap?: Texture | null | undefined;

    thickness?: number | undefined;
    thicknessMap?: Texture | null | undefined;
    attenuationDistance?: number | undefined;
    attenuationColor?: ColorRepresentation | undefined;

    specularIntensity?: number | undefined;
    specularIntensityMap?: Texture | null | undefined;
    specularColor?: ColorRepresentation | undefined;
    specularColorMap?: Texture | null | undefined;

    anisotropy?: number | undefined;
    clearcoat?: number | undefined;
    iridescence?: number | undefined;
    dispersion?: number | undefined;
    sheen?: number | undefined;
    transmission?: number | undefined;
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
     * @default { 'STANDARD': '', 'PHYSICAL': '' }
     */
    defines: { [key: string]: any };

    /**
     * @default 0
     */
    anisotropyRotation?: number;

    /**
     * @default null
     */
    anisotropyMap?: Texture | null;

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
     * @default 1.5
     */
    ior: number;

    /**
     * @default 0.5
     */
    get reflectivity(): number;
    set reflectivity(reflectivity: number);

    /**
     * @default null
     */
    iridescenceMap: Texture | null;

    /**
     * @default 1.3
     */
    iridescenceIOR: number;

    /**
     * @default [100, 400]
     */
    iridescenceThicknessRange: [number, number];

    /**
     * @default null
     */
    iridescenceThicknessMap: Texture | null;

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
     * @default null
     */
    specularIntensityMap: Texture | null;

    /**
     * @default Color(1, 1, 1)
     */
    specularColor: Color;

    /**
     * @default null
     */
    specularColorMap: Texture | null;

    /**
     * @default 0
     */
    get anisotropy(): number;
    set anisotropy(value: number);

    /**
     * @default 0
     */
    get clearcoat(): number;
    set clearcoat(value: number);

    /**
     * @default 0
     */
    get iridescence(): number;
    set iridescence(value: number);

    /**
     * @default 0
     */
    get dispersion(): number;
    set dispersion(value: number);

    /**
     * @default 0.0
     */
    get sheen(): number;
    set sheen(value: number);

    /**
     * @default 0
     */
    get transmission(): number;
    set transmission(value: number);
}
