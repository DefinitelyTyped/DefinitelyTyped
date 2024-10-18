declare namespace _ {
    /**
     * Provides the RGB breakdown of a color.
     */
    interface RGB {
        /**
         * The red component, from 0 to 255
         */
        r: number;
        /**
         * The green component, from 0 to 255
         */
        g: number;
        /**
         * The blue component, from 0 to 255
         */
        b: number;
    }

    /**
     * Defines an available color.
     */
    interface ColorSpec {
        /**
         * A name for the color, e.g., 'red'
         */
        name?: string;
        /**
         * The hex-based color string, e.g., '#FF0'
         */
        source: string;
        /**
         * The {@link RGB} color values
         */
        rgb: RGB;
    }

    /**
     * Describes a matched color.
     */
    interface ColorMatch {
        /**
         * The name of the matched color, e.g., 'red'
         */
        name: string;
        /**
         * The hex-based color string, e.g., '#FF0'
         */
        value: string;
        /**
         * The {@link RGB} color values.
         */
        rgb: RGB;

        distance: number;
    }

    type NeedleColor = RGB | string;

    interface NearestColor<TReturnType extends ColorMatch | string> {
        (needle: NeedleColor, colors?: readonly ColorSpec[]): TReturnType | null;
    }

    const from: NearestColorFrom;

    interface NearestColorFrom {
        /**
         * Provides a matcher to find the nearest color based on the provided list of
         * available colors.
         *
         * @param availableColors An array of hex-based color
         *     strings, or an object mapping color *names* to hex values.
         * @return A function with the same behavior as {@link nearestColor}, but with the list of colors predefined.
         *
         * @example
         * ```js
         * const colors = {
         *   'maroon': '#800',
         *   'light yellow': { r: 255, g: 255, b: 51 },
         *   'pale blue': '#def',
         *   'white': 'fff'
         * };
         *
         * const bgColors = [
         *   '#eee',
         *   '#444'
         * ];
         *
         * const invalidColors = {
         *   'invalid': 'foo'
         * };
         *
         * const getColor = nearestColor.from(colors);
         * const getBGColor = getColor.from(bgColors);
         * const getAnyColor = nearestColor.from(colors).or(bgColors);
         *
         * getColor('ffe');
         * // => { name: 'white', value: 'fff', rgb: { r: 255, g: 255, b: 255 }, distance: 17}
         *
         * getColor('#f00');
         * // => { name: 'maroon', value: '#800', rgb: { r: 136, g: 0, b: 0 }, distance: 119}
         *
         * getColor('#ff0');
         * // => { name: 'light yellow', value: '#ffff33', rgb: { r: 255, g: 255, b: 51 }, distance: 51}
         *
         * getBGColor('#fff'); // => '#eee'
         * getBGColor('#000'); // => '#444'
         *
         * getAnyColor('#f00');
         * // => { name: 'maroon', value: '#800', rgb: { r: 136, g: 0, b: 0 }, distance: 119}
         *
         * getAnyColor('#888'); // => '#444'
         *
         * nearestColor.from(invalidColors); // => throws
         * ```
         */
        (availableColors: readonly string[]): NearestColor<string>;
        /**
         * Provides a matcher to find the nearest color based on the provided list of
         * available colors.
         *
         * @param availableColors An array of hex-based color
         *     strings, or an object mapping color *names* to hex values.
         * @return A function with the same behavior as {@link nearestColor}, but with the list of colors predefined.
         *
         * @example
         * ```js
         * const colors = {
         *   'maroon': '#800',
         *   'light yellow': { r: 255, g: 255, b: 51 },
         *   'pale blue': '#def',
         *   'white': 'fff'
         * };
         *
         * const bgColors = [
         *   '#eee',
         *   '#444'
         * ];
         *
         * const invalidColors = {
         *   'invalid': 'foo'
         * };
         *
         * const getColor = nearestColor.from(colors);
         * const getBGColor = getColor.from(bgColors);
         * const getAnyColor = nearestColor.from(colors).or(bgColors);
         *
         * getColor('ffe');
         * // => { name: 'white', value: 'fff', rgb: { r: 255, g: 255, b: 255 }, distance: 17}
         *
         * getColor('#f00');
         * // => { name: 'maroon', value: '#800', rgb: { r: 136, g: 0, b: 0 }, distance: 119}
         *
         * getColor('#ff0');
         * // => { name: 'light yellow', value: '#ffff33', rgb: { r: 255, g: 255, b: 51 }, distance: 51}
         *
         * getBGColor('#fff'); // => '#eee'
         * getBGColor('#000'); // => '#444'
         *
         * getAnyColor('#f00');
         * // => { name: 'maroon', value: '#800', rgb: { r: 136, g: 0, b: 0 }, distance: 119}
         *
         * getAnyColor('#888'); // => '#444'
         *
         * nearestColor.from(invalidColors); // => throws
         * ```
         */
        (availableColors: {
            [colorName: string]: string;
        }): NearestColor<ColorMatch>;
    }

    /**
     * A map from the names of standard CSS colors to their hex values.
     */
    const STANDARD_COLORS: { [colorName: string]: string };

    /**
     * Default colors. Comprises the colors of the rainbow (good ol' ROY G. BIV).
     * This list will be used for calls to {@nearestColor} that don't specify a list
     * of available colors to match.
     */
    const DEFAULT_COLORS: readonly ColorSpec[];

    const VERSION: string;
}

/**
 * Gets the nearest color, from the given list of {@link ColorSpec} objects
 * (which defaults to {@link DEFAULT_COLORS}).
 *
 * Probably you wouldn't call this method directly. Instead you'd get a custom
 * color matcher by calling {@link from}.
 *
 * @param needle Either an {@link RGB} color or a hex-based string representing one, e.g., '#FF0'
 * @param colors An optional list of available colors (defaults to {@link DEFAULT_COLORS})
 * @return If the colors in the provided list had names, then a {@link ColorMatch} object
 * with the name and (hex) value of the nearest color from the list. Otherwise, simply the hex value.
 *
 * @example
 * ```ts
 * nearestColor({ r: 200, g: 50, b: 50 }); // => '#f00'
 * nearestColor('#f11');                   // => '#f00'
 * nearestColor('#f88');                   // => '#f80'
 * nearestColor('#ffe');                   // => '#ff0'
 * nearestColor('#efe');                   // => '#ff0'
 * nearestColor('#abc');                   // => '#808'
 * nearestColor('red');                    // => '#f00'
 * nearestColor('foo');                    // => throws
 * ```
 */
declare const nearestColor: _.NearestColor<_.ColorMatch | string> & typeof _;

export = nearestColor;

export as namespace nearestColor;
