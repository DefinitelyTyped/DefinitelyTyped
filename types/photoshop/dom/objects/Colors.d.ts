/**
 * Defines a CMYK color, used in [[SolidColor]] object.
 *
 *  ***Fixes in Photoshop 24.2:***
 * - *Getter now will return number instead of `undefined`*
 * - *Value used in setter is now respected when passed to Photoshop*
 *
 * @targetfolder colors
 * @minVersion 23.0
 */
export declare class CMYKColor {
    /**
     * The black color value, as percentage.
     * @default 0
     * @range 0.0..100.0
     * @minVersion 23.0
     */
    get black(): number;
    set black(b: number);
    /**
     * The cyan color value, as percentage.
     * @default 0
     * @range 0.0..100.0
     * @minVersion 23.0
     */
    get cyan(): number;
    set cyan(c: number);
    /**
     * The magenta color value, as percentage.
     * @default 0
     * @range 0.0..100.0
     * @minVersion 23.0
     */
    get magenta(): number;
    set magenta(m: number);
    /**
     * The yellow color value, as percentage.
     * @default 0
     * @range 0.0..100.0
     *
     * @minVersion 23.0
     */
    get yellow(): number;
    set yellow(y: number);
    /**
     * The class name of the referenced object: *"CMYKColor"*.
     * @minVersion 23.0
     */
    get typename(): "CMYKColor";
}
/**
 * Defines a grayscale color, used in [[SolidColor]] object.
 *
 * @targetfolder colors
 * @minVersion 23.0
 */
export declare class GrayColor {
    /**
     * The gray value.
     *
     * @default 0
     * @range 0..100
     * @minVersion 23.0
     */
    get gray(): number;
    set gray(g: number);
    /**
     * The class name of the referenced object: *"GrayColor"*.
     * @minVersion 23.0
     */
    get typename(): "GrayColor";
}
/**
 * Defines an HSB color, used in [[SolidColor]] object.
 *
 * @targetfolder colors
 * @minVersion 23.0
 */
export declare class HSBColor {
    /**
     * The brightness value.
     *
     * @default 100
     * @range 0..100
     * @minVersion 23.0
     */
    get brightness(): number;
    set brightness(b: number);
    /**
     * The hue value.
     *
     * @default 360
     * @range 0..360
     * @minVersion 23.0
     */
    get hue(): number;
    set hue(h: number);
    /**
     * The saturation value.
     *
     * @default 0
     * @range 0..100
     * @minVersion 23.0
     */
    get saturation(): number;
    set saturation(s: number);
    /**
     * The class name of the referenced object: *"HSBColor"*.
     * @minVersion 23.0
     */
    get typename(): "HSBColor";
}
/**
 * Defines a L<sup>\*</sup>a<sup>\*</sup>b<sup>\*</sup> color, used in [[SolidColor]] object.
 *
 * @targetfolder colors
 * @minVersion 23.0
 */
export declare class LabColor {
    /**
     * The a-value.
     *
     * @default 0
     * @range -128..127
     * @minVersion 23.0
     */
    get a(): number;
    set a(a: number);
    /**
     * The b-value.
     *
     * @default 0
     * @range -128..127
     * @minVersion 23.0
     */
    get b(): number;
    set b(b: number);
    /**
     * The L-value.
     *
     * @default 100
     * @range 0..100
     * @minVersion 23.0
     */
    get l(): number;
    set l(l: number);
    /**
     * The class name of the referenced object: *"LabColor"*.
     * @minVersion 23.0
     */
    get typename(): "LabColor";
}
/**
 * Defines an RGB color, used in [[SolidColor]] object.
 *
 * Please note: RGB with 32 bits per channels is not currently supported. Color values will be rounded to the nearest
 * range valid for RGB with 16 bits per channel.
 *
 * @targetfolder colors
 * @minVersion 23.0
 */
export declare class RGBColor {
    /**
     * The blue color value.
     *
     * @default 255
     * @range 0..255
     * @minVersion 23.0
     */
    get blue(): number;
    set blue(b: number);
    /**
     * The green color value.
     *
     * @default 255
     * @range 0..255
     * @minVersion 23.0
     */
    get green(): number;
    set green(g: number);
    /**
     * The red color value.
     *
     * @default 255
     * @range 0..255
     * @minVersion 23.0
     */
    get red(): number;
    set red(r: number);
    /**
     * The hexadecimal representation of the color.
     *
     * Ex. returns *FF9801*, but accepts *#ff9801* or *FF9801*.
     *
     * @default "FFFFFF"
     * @minVersion 23.0
     */
    get hexValue(): string;
    set hexValue(value: string);
    /**
     * The class name of the referenced object: *"RGBColor"*.
     * @minVersion 23.0
     */
    get typename(): "RGBColor";
}
/**
 * Represents a missing color, used in [[SolidColor]] object.
 *
 * @targetfolder colors
 * @minVersion 23.0
 */
export declare class NoColor {
    /**
     * The class name of the referenced object: *"NoColor"*.
     * @minVersion 23.0
     */
    get typename(): "NoColor";
}
