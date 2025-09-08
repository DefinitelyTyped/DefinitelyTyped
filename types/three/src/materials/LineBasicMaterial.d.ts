import { Color } from "../math/Color.js";
import { Texture } from "../textures/Texture.js";
import { MapColorPropertiesToColorRepresentations, Material, MaterialProperties } from "./Material.js";

export interface LineBasicMaterialProperties extends MaterialProperties {
    /**
     * Color of the material.
     *
     * @default (1,1,1)
     */
    color: Color;
    /**
     * Sets the color of the lines using data from a texture. The texture map
     * color is modulated by the diffuse `color`.
     *
     * @default null
     */
    map: Texture | null;
    /**
     * Controls line thickness or lines.
     *
     * Can only be used with {@link SVGRenderer}. WebGL and WebGPU
     * ignore this setting and always render line primitives with a
     * width of one pixel.
     *
     * @default 1
     */
    linewidth: number;
    /**
     * Defines appearance of line ends.
     *
     * Can only be used with {@link SVGRenderer}.
     *
     * @default 'round'
     */
    linecap: "butt" | "round" | "square";
    /**
     * Defines appearance of line joints.
     *
     * Can only be used with {@link SVGRenderer}.
     *
     * @default 'round'
     */
    linejoin: "round" | "bevel" | "miter";
    /**
     * Whether the material is affected by fog or not.
     *
     * @default true
     */
    fog: boolean;
}

// eslint-disable-next-line @typescript-eslint/no-empty-interface
export interface LineBasicMaterialParameters
    extends Partial<MapColorPropertiesToColorRepresentations<LineBasicMaterialProperties>>
{}

/**
 * A material for rendering line primitives.
 *
 * Materials define the appearance of renderable 3D objects.
 *
 * ```js
 * const material = new THREE.LineBasicMaterial( { color: 0xffffff } );
 * ```
 */
export class LineBasicMaterial extends Material {
    /**
     * Constructs a new line basic material.
     *
     * @param {Object} [parameters] - An object with one or more properties
     * defining the material's appearance. Any property of the material
     * (including any property from inherited materials) can be passed
     * in here. Color values can be passed any type of value accepted
     * by {@link Color#set}.
     */
    constructor(parameters?: LineBasicMaterialParameters);
    /**
     * This flag can be used for type testing.
     *
     * @default true
     */
    readonly isLineBasicMaterial: boolean;
    setValues(values?: LineBasicMaterialParameters): void;
}

// eslint-disable-next-line @typescript-eslint/no-empty-interface
export interface LineBasicMaterial extends LineBasicMaterialProperties {}
