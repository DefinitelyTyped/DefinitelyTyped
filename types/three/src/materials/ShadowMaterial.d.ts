import { Color, ColorRepresentation } from '../math/Color.js';
import { MaterialParameters, Material } from './Material.js';

export interface ShadowMaterialParameters extends MaterialParameters {
    color?: ColorRepresentation | undefined;
    fog?: boolean | undefined;
}

export class ShadowMaterial extends Material {
    constructor(parameters?: ShadowMaterialParameters);

    /**
     * Read-only flag to check if a given object is of type {@link ShadowMaterial}.
     * @remarks This is a _constant_ value
     * @defaultValue `true`
     */
    readonly isShadowMaterial: true;

    /**
     * @default 'ShadowMaterial'
     */
    type: string;

    /**
     * @default new THREE.Color( 0x000000 )
     */
    color: Color;

    /**
     * @default true
     */
    transparent: boolean;

    /**
     * Whether the material is affected by fog. Default is true.
     * @default fog
     */
    fog: boolean;
}
