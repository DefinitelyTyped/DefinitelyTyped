import { ColorModel } from "../Constants";
import * as Colors from "./Colors";
/**
 * Represents a color, and allows for mapping into all available Photoshop color models.
 * Import SolidColor from the Photoshop's app object:
 *
 * ```javascript
 * const SolidColor = require("photoshop").app.SolidColor;
 * ```
 *
 * When a property is accessed (either via read or write), the current color model
 * of the SolidColor objects gets set to the space of the accessor. Photoshop internally
 * converts the color across these color spaces using the Color Settings set by the user.
 *
 * For example, to set the foreground color to red:
 *
 * ```javascript
 * const SolidColor = require("photoshop").app.SolidColor;
 * const red = new SolidColor();
 * red.rgb.red = 255;
 * red.rgb.green = 0;
 * red.rgb.blue = 0;
 *
 * app.foregroundColor = red;
 * ```
 *
 * To understand how color models change as you interact with a SolidColor object,
 * please see example below:
 *
 * ```javascript
 * const SolidColor = require("photoshop").app.SolidColor;
 * const c = new SolidColor();
 * console.log(c.base.typename); // By default, this will be "RGBColor"
 *
 * c.cmyk.cyan = 50; // Photoshop will convert the color to CMYK using Edit > Color Settings data
 * console.log(c.base.typename); // Now, the typename will be "CMYKColor"
 *
 * c.rgb.green = 128; // Typename will change back to "RGBColor"
 *
 * ```
 *
 * ***Fixes in Photoshop 24.2:***
 * - *Adds range validation for all color modes and its components so it should not be possible to enter invalid value.*
 *
 * @minVersion 23.0
 */
export declare class SolidColor {
    /**
     * The class name of the referenced object: *"SolidColor"*.
     * @minVersion 24.2
     */
    get typename(): "SolidColor";
    /**
     * The color's representation in RGB color space.
     *
     * @minVersion 23.0
     */
    get rgb(): Colors.RGBColor;
    set rgb(c: Colors.RGBColor);
    /**
     * The color's representation in CMYK color space.
     * @minVersion 23.0
     */
    get cmyk(): Colors.CMYKColor;
    set cmyk(c: Colors.CMYKColor);
    /**
     * The color's representation in HSB color space.
     * @minVersion 23.0
     */
    get hsb(): Colors.HSBColor;
    set hsb(c: Colors.HSBColor);
    /**
     * The color's representation in LAB color space.
     * @minVersion 23.0
     */
    get lab(): Colors.LabColor;
    set lab(c: Colors.LabColor);
    /**
     * The color's representation in grayscale.
     * @minVersion 23.0
     */
    get gray(): Colors.GrayColor;
    set gray(c: Colors.GrayColor);
    /**
     * The color's nearest match within the 216 web-safe colors.
     * @minVersion 23.0
     */
    get nearestWebColor(): Colors.RGBColor;
    /**
     * True if the SolidColor object is visually equivalent to the specified color.
     *
     * Both colors are converted to Lab colorspace,
     * and the sum of their normalized squared Euclidian
     * distance in each space is averaged across the three
     * then compared to a small constant (3.5e-6).
     *
     * Due to differences in coverage by various color spaces and clamping,
     * a color that is converted from RGB to CMYK and back may not be visually equal.
     * @minVersion 23.0
     */
    isEqual(color: SolidColor): boolean;
    /**
     * All colors default to pure white.
     *
     * ```
     * const SolidColor = require("photoshop").app.SolidColor;
     * const color = new SolidColor();
     * ```
     *
     * @param model Color model to start.
     * @minVersion 23.0
     */
    constructor(model?: ColorModel);
}
