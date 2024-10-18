import { Color, ColorRepresentation, ShaderMaterial, ShaderMaterialParameters, Vector2 } from "three";

export interface LineMaterialParameters extends ShaderMaterialParameters {
    alphaToCoverage?: boolean | undefined;
    color?: ColorRepresentation | undefined;
    dashed?: boolean | undefined;
    dashScale?: number | undefined;
    dashSize?: number | undefined;
    dashOffset?: number | undefined;
    gapSize?: number | undefined;
    resolution?: Vector2 | undefined;
    worldUnits?: boolean | undefined;
}

/**
 * A material for drawing wireframe-style geometries.
 * Unlike {@link LineBasicMaterial}, it supports arbitrary line widths and allows using world units instead of screen
 * space units. This material is used with {@link LineSegments2} and {@link Line2}.
 *
 * Lines are always rendered with round caps and round joints.
 */
export class LineMaterial extends ShaderMaterial {
    readonly isLineMaterial: true;

    /**
     * @param parameters (optional) an object with one or more properties defining the material's appearance. Any
     * property of the material (including any property inherited from {@link ShaderMaterial}) can be passed in here.
     *
     * The exception is the property color, which can be passed in as a number or hexadecimal string and is `0xffffff`
     * (white) by default. Color.set( color ) is called internally.
     */
    constructor(parameters?: LineMaterialParameters);

    /**
     * {@link Color} of the material, by default set to white (0xffffff).
     */
    get color(): Color;
    set color(value: Color);

    /**
     * Whether the material's sizes (width, dash gaps) are in world units. Default is `false` (screen space units.)
     */
    get worldUnits(): boolean;
    set worldUnits(value: boolean);

    /**
     * Whether the line is dashed, or solid. Default is `false`.
     */
    get dashed(): boolean;
    set dashed(value: boolean);

    /**
     * The scale of the dashes and gaps. Default is `1`.
     */
    get dashScale(): number;
    set dashScale(value: number);

    /**
     * The size of the dash. Default is `1`.
     */
    get dashSize(): number;
    set dashSize(value: number);

    /**
     * Where in the dash cycle the dash starts. Default is `0`.
     */
    get dashOffset(): number;
    set dashOffset(value: number);

    /**
     * The size of the gap. Default is `1`.
     */
    get gapSize(): number;
    set gapSize(value: number);

    /**
     * The size of the viewport, in screen pixels. This must be kept updated to make screen-space rendering accurate.
     * The {@link LineSegments2.onBeforeRender} callback performs the update for visible objects. Default is `[1, 1]`.
     */
    get resolution(): Vector2;
    set resolution(value: Vector2);
}
