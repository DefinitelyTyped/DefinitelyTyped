declare namespace pc {

    /**
    * @name pc.Color
    * @class Representation of an RGBA color
    * @description Create a new Color object
    * @param {Number} [r] The value of the red component (0-1). If r is an array of length 3 or 4, the array will be used to populate all components.
    * @param {Number} [g] The value of the green component (0-1)
    * @param {Number} [b] The value of the blue component (0-1)
    * @param {Number} [a] The value of the alpha component (0-1)
    * @property {Number} r The red component of the color
    * @property {Number} g The green component of the color
    * @property {Number} b The blue component of the color
    * @property {Number} a The alpha component of the color
    */
    class Color {
        constructor(r?: number[] | number, g?: number, b?: number, a?: number)

        r: number;
        g: number;
        b: number;
        a: number;

        /**
        * @function
        * @name pc.Color#clone
        * @description Returns a clone of the specified color.
        * @returns {pc.Color} A duplicate color object
        */
        clone(): pc.Color;

        /**
         * @function
         * @name pc.Color#copy
         * @description Copies the contents of a source color to a destination color.
         * @param {pc.Color} rhs A color to copy to the specified color.
         * @returns {pc.Color} Self for chaining
         * @example
         * var src = new pc.Color(1, 0, 0, 1);
         * var dst = new pc.Color();
         *
         * dst.copy(src);
         *
         * console.log("The two colors are " + (dst.equals(src) ? "equal" : "different"));
         */
        copy(rhs: pc.Color): this;

        /**
         * @function
         * @name pc.Color#set
         * @description Assign values to the color components, including alpha
         * @param {Number} r The value for red (0-1)
         * @param {Number} g The value for blue (0-1)
         * @param {Number} b The value for green (0-1)
         * @param {Number} [a] The value for the alpha (0-1), defaults to 1
         * @returns {pc.Color} Self for chaining
         */
        set(r: number, g: number, b: number, a?: number): this;

        /**
         * @function
         * @name pc.Color#fromString
         * @description Set the values of the color from a string representation '#11223344' or '#112233'.
         * @param {String} hex A string representation in the format '#RRGGBBAA' or '#RRGGBB'. Where RR, GG, BB, AA are red, green, blue and alpha values.
         * This is the same format used in HTML/CSS.
         * @returns {pc.Color} Self for chaining
         */
        fromString(hex: string): this;

        /**
         * @function
         * @name pc.Color#toString
         * @description Converts the color to string form. The format is '#RRGGBBAA', where
         * RR, GG, BB, AA are the red, green, blue and alpha values. When the alpha value is not
         * included (the default), this is the same format as used in HTML/CSS.
         * @returns {String} The color in string form.
         * @example
         * var c = new pc.Color(1, 1, 1);
         * // Should output '#ffffffff'
         * console.log(c.toString());
         */
        toString(alpha: number): string;
    }
}
