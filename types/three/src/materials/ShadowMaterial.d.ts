import { Color, ColorRepresentation } from './../math/Color.js';
import { MaterialParameters, Material } from './Material.js';

export interface ShadowMaterialParameters extends MaterialParameters {
    color?: ColorRepresentation | undefined;
    fog?: boolean | undefined;
}

export class ShadowMaterial extends Material {
    constructor(parameters?: ShadowMaterialParameters);

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
