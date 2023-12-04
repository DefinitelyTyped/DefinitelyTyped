import { Color, ColorRepresentation } from '../math/Color.js';
import { Texture } from '../textures/Texture.js';
import { MaterialParameters, Material } from './Material.js';
import { Combine } from '../constants.js';
/**
 * parameters is an object with one or more properties defining the material's appearance.
 */
export interface MeshBasicMaterialParameters extends MaterialParameters {
    color?: ColorRepresentation | undefined;
    opacity?: number | undefined;
    map?: Texture | null | undefined;
    lightMap?: Texture | null;
    lightMapIntensity?: number | undefined;
    aoMap?: Texture | null | undefined;
    aoMapIntensity?: number | undefined;
    specularMap?: Texture | null | undefined;
    alphaMap?: Texture | null | undefined;
    fog?: boolean | undefined;
    envMap?: Texture | null | undefined;
    combine?: Combine | undefined;
    reflectivity?: number | undefined;
    refractionRatio?: number | undefined;
    wireframe?: boolean | undefined;
    wireframeLinewidth?: number | undefined;
    wireframeLinecap?: string | undefined;
    wireframeLinejoin?: string | undefined;
}

export class MeshBasicMaterial extends Material {
    constructor(parameters?: MeshBasicMaterialParameters);

    /**
     * @default 'MeshBasicMaterial'
     */
    type: string;

    /**
     * @default new THREE.Color( 0xffffff )
     */
    color: Color;

    /**
     * @default null
     */
    map: Texture | null;

    /**
     * @default null
     */
    lightMap: Texture | null;

    /**
     * @default 1
     */
    lightMapIntensity: number;

    /**
     * @default null
     */
    aoMap: Texture | null;

    /**
     * @default 1
     */
    aoMapIntensity: number;

    /**
     * @default null
     */
    specularMap: Texture | null;

    /**
     * @default null
     */
    alphaMap: Texture | null;

    /**
     * @default null
     */
    envMap: Texture | null;

    /**
     * @default THREE.MultiplyOperation
     */
    combine: Combine;

    /**
     * @default 1
     */
    reflectivity: number;

    /**
     * @default 0.98
     */
    refractionRatio: number;

    /**
     * @default false
     */
    wireframe: boolean;

    /**
     * @default 1
     */
    wireframeLinewidth: number;

    /**
     * @default 'round'
     */
    wireframeLinecap: string;

    /**
     * @default 'round'
     */
    wireframeLinejoin: string;

    /**
     * Whether the material is affected by fog. Default is true.
     * @default fog
     */
    fog: boolean;

    setValues(parameters: MeshBasicMaterialParameters): void;
}
