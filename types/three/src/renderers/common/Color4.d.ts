import { Color, ColorRepresentation } from "../../math/Color.js";

/**
 * A four-component version of {@link Color} which is internally
 * used by the renderer to represents clear color with alpha as
 * one object.
 *
 * @private
 */
declare class Color4 extends Color {
    /**
     * The alpha value.
     */
    a: number;

    /**
     * Constructs a new four-component color.
     * You can also pass a single THREE.Color, hex or
     * string argument to this constructor.
     *
     * @param r - The red value.
     * @param g - The green value.
     * @param b - The blue value.
     * @param a - The alpha value.
     */
    constructor(r?: ColorRepresentation, g?: number, b?: number, a?: number);

    /**
     * Overwrites the default to honor alpha.
     * You can also pass a single THREE.Color, hex or
     * string argument to this method.
     */
    set(...args: [color: ColorRepresentation] | [r: number, g: number, b: number, a?: number]): this;

    /**
     * Overwrites the default to honor alpha.
     *
     * @param color - The color to copy.
     * @return A reference to this object.
     */
    copy(color: Color4): this;

    /**
     * Overwrites the default to honor alpha.
     *
     * @return The cloned color.
     */
    clone(): this;

    [Symbol.iterator](): Generator<number, void>;
}

export default Color4;
