import * as Colors from './Colors';
/**
 * Represents a color, and allows for mapping into all available Photoshop color models.
 *
 * When a property is accessed (either via read or write), the current color model
 * of the SolidColor objects gets set to the space of the accessor. Photoshop internally
 * converts the color across these color spaces using the Color Settings set by the user.
 *
 * For example, to set the foreground color to red:
 *
 * ```javascript
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
 * const c = new SolidColor();
 * console.log(c.model); // By default, this will be ColorModel.RGB
 *
 * c.cmyk.cyan = 50; // Photoshop will convert the color to CMYK using Edit > Color Settings data
 * console.log(c.model); // Now, the model will be ColorModel.CMYK
 *
 * c.rgb.green = 128; // Model will change back to ColorModel.RGB
 * ```
 */
export declare class SolidColor {
    /**
     * The color's representation in RGB color space.
     */
    get rgb(): Colors.RGBColor;
    set rgb(c: Colors.RGBColor);
    /**
     * The color's representation in CMYK color space.
     */
    get cmyk(): Colors.CMYKColor;
    set cmyk(c: Colors.CMYKColor);
    /**
     * The color's representation in HSB color space.
     */
    get hsb(): Colors.HSBColor;
    set hsb(c: Colors.HSBColor);
    /**
     * The color's representation in LAB color space.
     */
    get lab(): Colors.LabColor;
    set lab(c: Colors.LabColor);
    /**
     * The color's representation in grayscale.
     */
    get gray(): Colors.GrayColor;
    set gray(c: Colors.GrayColor);
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
     */
    isEqual(color: SolidColor): boolean;
}
