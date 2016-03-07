declare module goog {
    function require(name: 'goog.color.alpha'): typeof goog.color.alpha;
}

declare module goog.color.alpha {

    /**
     * Parses an alpha color out of a string.
     * @param {string} str Color in some format.
     * @return {{hex: string, type: string}} 'hex' is a string containing
     *     a hex representation of the color, and 'type' is a string
     *     containing the type of color format passed in ('hex', 'rgb', 'named').
     */
    function parse(str: string): {hex: string; type: string};

    /**
     * Converts a hex representation of a color to RGBA.
     * @param {string} hexColor Color to convert.
     * @return {string} string of the form 'rgba(R,G,B,A)' which can be used in
     *    styles.
     */
    function hexToRgbaStyle(hexColor: string): string;

    /**
     * Gets the hex color part of an alpha hex color. For example, from '#abcdef55'
     * return '#abcdef'.
     * @param {string} colorWithAlpha The alpha hex color to get the hex color from.
     * @return {string} The hex color where the alpha part has been stripped off.
     */
    function extractHexColor(colorWithAlpha: string): string;

    /**
     * Gets the alpha color part of an alpha hex color. For example, from
     * '#abcdef55' return '55'. The result is guaranteed to be two characters long.
     * @param {string} colorWithAlpha The alpha hex color to get the hex color from.
     * @return {string} The hex color where the alpha part has been stripped off.
     */
    function extractAlpha(colorWithAlpha: string): string;

    /**
     * Converts an 8-hex representation of a color to RGBA.
     * @param {string} hexColor Color to convert.
     * @return {!Array<number>} array containing [r, g, b, a].
     *     r, g, b are ints between 0
     *     and 255, and a is a value between 0 and 1.
     */
    function hexToRgba(hexColor: string): Array<number>;

    /**
     * Converts a color from RGBA to hex representation.
     * @param {number} r Amount of red, int between 0 and 255.
     * @param {number} g Amount of green, int between 0 and 255.
     * @param {number} b Amount of blue, int between 0 and 255.
     * @param {number} a Amount of alpha, float between 0 and 1.
     * @return {string} hex representation of the color.
     */
    function rgbaToHex(r: number, g: number, b: number, a: number): string;

    /**
     * Converts a color from HSLA to hex representation.
     * @param {number} h Amount of hue, int between 0 and 360.
     * @param {number} s Amount of saturation, int between 0 and 100.
     * @param {number} l Amount of lightness, int between 0 and 100.
     * @param {number} a Amount of alpha, float between 0 and 1.
     * @return {string} hex representation of the color.
     */
    function hslaToHex(h: number, s: number, l: number, a: number): string;

    /**
     * Converts a color from RGBA to hex representation.
     * @param {Array<number>} rgba Array of [r, g, b, a], with r, g, b in [0, 255]
     *     and a in [0, 1].
     * @return {string} hex representation of the color.
     */
    function rgbaArrayToHex(rgba: Array<number>): string;

    /**
     * Converts a color from RGBA to an RGBA style string.
     * @param {number} r Value of red, in [0, 255].
     * @param {number} g Value of green, in [0, 255].
     * @param {number} b Value of blue, in [0, 255].
     * @param {number} a Value of alpha, in [0, 1].
     * @return {string} An 'rgba(r,g,b,a)' string ready for use in a CSS rule.
     */
    function rgbaToRgbaStyle(r: number, g: number, b: number, a: number): string;

    /**
     * Converts a color from RGBA to an RGBA style string.
     * @param {(Array<number>|Float32Array)} rgba Array of [r, g, b, a],
     *     with r, g, b in [0, 255] and a in [0, 1].
     * @return {string} An 'rgba(r,g,b,a)' string ready for use in a CSS rule.
     */
    function rgbaArrayToRgbaStyle(rgba: Array<number>|Float32Array): string;

    /**
     * Converts a color from HSLA to hex representation.
     * @param {Array<number>} hsla Array of [h, s, l, a], where h is an integer in
     *     [0, 360], s and l are integers in [0, 100], and a is in [0, 1].
     * @return {string} hex representation of the color, such as '#af457eff'.
     */
    function hslaArrayToHex(hsla: Array<number>): string;

    /**
     * Converts a color from HSLA to an RGBA style string.
     * @param {Array<number>} hsla Array of [h, s, l, a], where h is and integer in
     *     [0, 360], s and l are integers in [0, 100], and a is in [0, 1].
     * @return {string} An 'rgba(r,g,b,a)' string ready for use in a CSS rule.
     */
    function hslaArrayToRgbaStyle(hsla: Array<number>): string;

    /**
     * Converts a color from HSLA to an RGBA style string.
     * @param {number} h Amount of hue, int between 0 and 360.
     * @param {number} s Amount of saturation, int between 0 and 100.
     * @param {number} l Amount of lightness, int between 0 and 100.
     * @param {number} a Amount of alpha, float between 0 and 1.
     * @return {string} An 'rgba(r,g,b,a)' string ready for use in a CSS rule.
     *     styles.
     */
    function hslaToRgbaStyle(h: number, s: number, l: number, a: number): string;

    /**
     * Converts a color from HSLA color space to RGBA color space.
     * @param {number} h Amount of hue, int between 0 and 360.
     * @param {number} s Amount of saturation, int between 0 and 100.
     * @param {number} l Amount of lightness, int between 0 and 100.
     * @param {number} a Amount of alpha, float between 0 and 1.
     * @return {!Array<number>} [r, g, b, a] values for the color, where r, g, b
     *     are integers in [0, 255] and a is a float in [0, 1].
     */
    function hslaToRgba(h: number, s: number, l: number, a: number): Array<number>;

    /**
     * Converts a color from RGBA color space to HSLA color space.
     * Modified from {@link http://en.wikipedia.org/wiki/HLS_color_space}.
     * @param {number} r Value of red, in [0, 255].
     * @param {number} g Value of green, in [0, 255].
     * @param {number} b Value of blue, in [0, 255].
     * @param {number} a Value of alpha, in [0, 255].
     * @return {!Array<number>} [h, s, l, a] values for the color, with h an int in
     *     [0, 360] and s, l and a in [0, 1].
     */
    function rgbaToHsla(r: number, g: number, b: number, a: number): Array<number>;

    /**
     * Converts a color from RGBA color space to HSLA color space.
     * @param {Array<number>} rgba [r, g, b, a] values for the color, each in
     *     [0, 255].
     * @return {!Array<number>} [h, s, l, a] values for the color, with h in
     *     [0, 360] and s, l and a in [0, 1].
     */
    function rgbaArrayToHsla(rgba: Array<number>): Array<number>;

    /**
     * Converts from h,s,v,a values to a hex string
     * @param {number} h Hue, in [0, 1].
     * @param {number} s Saturation, in [0, 1].
     * @param {number} v Value, in [0, 255].
     * @param {number} a Alpha, in [0, 1].
     * @return {string} hex representation of the color.
     */
    function hsvaToHex(h: number, s: number, v: number, a: number): string;

    /**
     * Converts from an HSVA array to a hex string
     * @param {Array<number>} hsva Array of [h, s, v, a] in
     *     [[0, 1], [0, 1], [0, 255], [0, 1]].
     * @return {string} hex representation of the color.
     */
    function hsvaArrayToHex(hsva: Array<number>): string;
}
