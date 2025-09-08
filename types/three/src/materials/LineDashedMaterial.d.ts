import { LineBasicMaterial, LineBasicMaterialProperties } from "./LineBasicMaterial.js";
import { MapColorPropertiesToColorRepresentations } from "./Material.js";

export interface LineDashedMaterialProperties extends LineBasicMaterialProperties {
    /**
     * The scale of the dashed part of a line.
     *
     * @default 1
     */
    scale: number;
    /**
     * The size of the dash. This is both the gap with the stroke.
     *
     * @default 3
     */
    dashSize: number;
    /**
     * The size of the gap.
     *
     * @default 1
     */
    gapSize: number;
}

// eslint-disable-next-line @typescript-eslint/no-empty-interface
export interface LineDashedMaterialParameters
    extends Partial<MapColorPropertiesToColorRepresentations<LineDashedMaterialProperties>>
{}

/**
 * A material for rendering line primitives.
 *
 * Materials define the appearance of renderable 3D objects.
 *
 * ```js
 * const material = new THREE.LineDashedMaterial( {
 * 	color: 0xffffff,
 * 	scale: 1,
 * 	dashSize: 3,
 * 	gapSize: 1,
 * } );
 * ```
 */
export class LineDashedMaterial extends LineBasicMaterial {
    constructor(parameters?: LineDashedMaterialParameters);
    /**
     * This flag can be used for type testing.
     *
     * @default true
     */
    readonly isLineDashedMaterial: boolean;
    setValues(values?: LineDashedMaterialParameters): void;
}

// eslint-disable-next-line @typescript-eslint/no-empty-interface
export interface LineDashedMaterial extends LineDashedMaterialProperties {}
