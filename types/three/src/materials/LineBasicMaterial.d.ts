import { Color, ColorRepresentation } from '../math/Color.js';
import { MaterialParameters, Material } from './Material.js';
import { Texture } from '../textures/Texture.js';

export interface LineBasicMaterialParameters extends MaterialParameters {
    color?: ColorRepresentation | undefined;
    fog?: boolean | undefined;
    linewidth?: number | undefined;
    linecap?: string | undefined;
    linejoin?: string | undefined;
}

export class LineBasicMaterial extends Material {
    constructor(parameters?: LineBasicMaterialParameters);

    /**
     * Read-only flag to check if a given object is of type {@link LineBasicMaterial}.
     * @remarks This is a _constant_ value
     * @defaultValue `true`
     */
    readonly isLineBasicMaterial: true;

    /**
     * @default 'LineBasicMaterial'
     */
    type: string;

    /**
     * @default 0xffffff
     */
    color: Color;

    /**
     * Whether the material is affected by fog. Default is true.
     * @default true
     */
    fog: boolean;

    /**
     * @default 1
     */
    linewidth: number;

    /**
     * @default 'round'
     */
    linecap: string;

    /**
     * @default 'round'
     */
    linejoin: string;

    /**
     * Sets the color of the lines using data from a {@link Texture}.
     */
    map: Texture | null;

    setValues(parameters: LineBasicMaterialParameters): void;
}
