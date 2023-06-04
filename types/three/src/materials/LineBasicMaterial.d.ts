import { Color, ColorRepresentation } from '../math/Color';
import { MaterialParameters, Material } from './Material';
import { Texture } from '../textures/Texture';

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
