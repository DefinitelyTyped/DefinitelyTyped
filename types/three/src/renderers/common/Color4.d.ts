import { Color, ColorRepresentation } from "../../math/Color.js";
/**
 * A four-component version of {@link Color} which is internally
 * used by the renderer to represents clear color with alpha as
 * one object.
 *
 * @private
 * @augments Color
 */
declare class Color4 extends Color {
    a: number;
    /**
     * Constructs a new four-component color.
     * You can also pass a single THREE.Color, hex or
     * string argument to this constructor.
     *
     * @param {Number|String} [r=1] - The red value.
     * @param {Number} [g=1] - The green value.
     * @param {Number} [b=1] - The blue value.
     * @param {Number} [a=1] - The alpha value.
     */
    constructor(color?: ColorRepresentation);
    constructor(r: number, g: number, b: number, a?: number);
    /**
     * Overwrites the default to honor alpha.
     * You can also pass a single THREE.Color, hex or
     * string argument to this method.
     *
     * @param {Number|String} r - The red value.
     * @param {Number} g - The green value.
     * @param {Number} b - The blue value.
     * @param {Number} [a=1] - The alpha value.
     * @return {Color4} A reference to this object.
     */
    set(...args: [color: ColorRepresentation] | [r: number, g: number, b: number, a?: number]): this;
    /**
     * Overwrites the default to honor alpha.
     *
     * @param {Color4} color - The color to copy.
     * @return {Color4} A reference to this object.
     */
    copy(color: Color): this;
    /**
     * Overwrites the default to honor alpha.
     *
     * @return {Color4} The cloned color.
     */
    clone(): this;
}
export default Color4;
