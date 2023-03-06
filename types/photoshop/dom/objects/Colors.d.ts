/**
 * Defines a CMYK color, used in [[SolidColor]] object.
 *
 * @targetfolder colors
 */
export declare class CMYKColor {
    /**
     * The black color value, as percentage.
     * @default
     * @range 0.0..100.0
     */
    get black(): number;
    set black(b: number);
    /**
     * The cyan color value, as percentage.
     * @default
     * @range 0.0..100.0
     */
    get cyan(): number;
    set cyan(c: number);
    /**
     * The magenta color value, as percentage.
     * @default
     * @range 0.0..100.0
     */
    get magenta(): number;
    set magenta(m: number);
    /**
     * The yellow color value, as percentage.
     * @default
     * @range 0.0..100.0
     */
    get yellow(): number;
    set yellow(y: number);
    get typename(): string;
}
/**
 * Defines a grayscale color, used in [[SolidColor]] object.
 *
 * @targetfolder colors
 */
export declare class GrayColor {
    /**
     * The gray value.
     *
     * @default 0
     * @range 0..100
     */
    get gray(): number;
    set gray(g: number);
    get typename(): string;
}
/**
 * Defines an HSB color, used in [[SolidColor]] object.
 *
 * @targetfolder colors
 */
export declare class HSBColor {
    /**
     * The brightness value.
     *
     * @default 100
     * @range 0..100
     */
    get brightness(): number;
    set brightness(b: number);
    /**
     * The hue value.
     *
     * @default 360
     * @range 0..360
     */
    get hue(): number;
    set hue(h: number);
    /**
     * The saturation value.
     *
     * @default 0
     * @range 0..100
     */
    get saturation(): number;
    set saturation(s: number);
    get typename(): string;
}
/**
 * Defines a L<sup>\*</sup>a<sup>\*</sup>b<sup>\*</sup> color, used in [[SolidColor]] object.
 *
 * @targetfolder colors
 */
export declare class LabColor {
    /**
     * The a-value.
     *
     * @default 0
     * @range -128..127
     */
    get a(): number;
    set a(a: number);
    /**
     * The b-value.
     *
     * @default 0
     * @range -128..127
     */
    get b(): number;
    set b(b: number);
    /**
     * The L-value.
     *
     * @default 100
     * @range 0..100
     */
    get l(): number;
    set l(l: number);
    get typename(): string;
}
/**
 * Defines an RGB color, used in [[SolidColor]] object.
 *
 * @targetfolder colors
 */
export declare class RGBColor {
    /**
     * The blue color value.
     *
     * @default 255
     * @range 0..255
     */
    get blue(): number;
    set blue(b: number);
    /**
     * The green color value.
     *
     * @default 255
     * @range 0..255
     */
    get green(): number;
    set green(g: number);
    /**
     * The red color value.
     *
     * @default 255
     * @range 0..255
     */
    get red(): number;
    set red(r: number);
    /**
     * The hexadecimal representation of the color in uppercase.
     */
    get hexValue(): string;
    set hexValue(value: string);
    get typename(): string;
}
/**
 * Represents a missing color, used in [[SolidColor]] object.
 *
 * @targetfolder colors
 */
export declare class NoColor {
    get typename(): string;
}
