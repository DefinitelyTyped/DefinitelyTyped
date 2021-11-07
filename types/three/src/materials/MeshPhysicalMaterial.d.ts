import { Texture } from './../textures/Texture';
import { Vector2 } from './../math/Vector2';
import { MeshStandardMaterialParameters, MeshStandardMaterial } from './MeshStandardMaterial';
import { Color } from './../math/Color';

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
    sheenTint?: Color | undefined;
    sheenRoughness?: number | undefined;

    transmission?: number | undefined;
    transmissionMap?: Texture | null | undefined;
    attenuationDistance?: number | undefined;
    attenuationTint?: Color | undefined;

    specularIntensity?: number | undefined;
    specularTint?: Color | undefined;
    specularIntensityMap?: Texture | null | undefined;
    specularTintMap?: Texture | null | undefined;
}

export class MeshPhysicalMaterial extends MeshStandardMaterial {
    constructor(parameters?: MeshPhysicalMaterialParameters);

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
    sheenTint: Color;

    /**
     * @default 1.0
     */
    sheenRoughness: number;

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
    attenuationTint: Color;

    /**
     * @default 1.0
     */
    specularIntensity: number;

    /**
     * @default Color(1, 1, 1)
     */
    specularTint: Color;

    /**
     * @default null
     */
    specularIntensityMap: Texture | null;

    /**
     * @default null
     */
    specularTintMap: Texture | null;
}
