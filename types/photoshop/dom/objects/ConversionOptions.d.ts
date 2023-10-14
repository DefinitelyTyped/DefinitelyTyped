import * as Constants from "../Constants";
/**
 * Options for converting an image to bitmap mode, using [[Document.changeMode]] with `ChangeMode.BITMAP`.
 *
 * @targetfolder objects/conversionoptions
 * @optionobject
 */
export declare class BitmapConversionOptions {
    private _angle;
    private _frequency;
    private _method;
    private _patternName;
    private _resolution;
    private _shape;
    /**
     * The angle (in degrees) at which to orient individual dots. See shape property below.
     * Valid only when the method property is set to `BitmapConversionType.HALFTONESCREEN`.
     *
     * @default -
     * @range -180...180
     * @minVersion 23.0
     */
    get angle(): number;
    set angle(value: number);
    /**
     * The number of dots (per inch) to use.
     * Valid only when the method property is set to `BitmapConversionType.HALFTONESCREEN`.
     *
     * @default -
     * @range 1.0..999.99
     * @minVersion 23.0
     */
    get frequency(): number;
    set frequency(value: number);
    /**
     * The conversion method.
     *
     * @default DIFFUSIONDITHER
     * @range -
     * @minVersion 23.0
     */
    get method(): Constants.BitmapConversionType;
    set method(value: Constants.BitmapConversionType);
    /**
     * The name of the pattern to use.
     * Valid only when the method property is set to BitmapConversionType.CUSTOMPATTERN.
     *
     * @default
     * @range -
     * @minVersion 23.0
     */
    get patternName(): string;
    set patternName(value: string);
    /**
     * The output resolution (in pixels per inch).
     *
     * @default 72
     * @range -
     * @minVersion 23.0
     */
    get resolution(): number;
    set resolution(value: number);
    /**
     * The dot shape.
     * Valid only when the method property is set to BitmapConversionType.HALFTONESCREEN.
     *
     * @default -
     * @range -
     * @minVersion 23.0
     */
    get shape(): Constants.BitmapHalfToneType;
    set shape(value: Constants.BitmapHalfToneType);
    /**
     * The class name of the referenced object: *"BitmapConversionOptions"*.
     * @minVersion 23.0
     */
    get typename(): "BitmapConversionOptions";
    /** @ignore */
    constructor();
}
/**
 * Options for converting an RGB image to an indexed color model using [[Document.changeMode]]
 *
 * @targetfolder objects/conversionoptions
 * @optionobject
 * @minVersion 23.0
 */
export declare class IndexedConversionOptions {
    private _colors;
    private _dither;
    private _ditherAmount;
    private _forced;
    private _matte;
    private _palette;
    private _preserveExactColors;
    private _transparency;
    /**
     * The number of palette colors.
     *
     * Valid only with palette types: LOCALADAPTIVE, LOCALPERCEPTUAL,
     * LOCALSELECTIVE, MACOSPALETTE, UNIFORM, WEBPALETTE, or WINDOWSPALETTE.
     *
     * @minVersion 23.0
     */
    get colors(): number;
    set colors(value: number);
    /**
     * The type of dithering to be done.
     *
     * @minVersion 23.0
     */
    get dither(): Constants.Dither;
    set dither(value: Constants.Dither);
    /**
     * The amount of dithering to be done.
     *
     * Valid only when dither typ is DIFFUSION.
     * @minVersion 23.0
     */
    get ditherAmount(): number;
    set ditherAmount(value: number);
    /**
     * The set of colors to force into the color palette.
     *
     * @minVersion 23.0
     */
    get forced(): Constants.ForcedColors;
    set forced(value: Constants.ForcedColors);
    /**
     * The color to use to fill anti-aliased edges adjacent to transparent areas of the image.
     *
     * When transparency is false, the matte color is applied to transparent areas.
     *
     * @default WHITE
     * @minVersion 23.0
     */
    get matte(): Constants.MatteColor;
    set matte(value: Constants.MatteColor);
    /**
     * The palette type.
     *
     * @minVersion 23.0
     */
    get palette(): Constants.Palette;
    set palette(value: Constants.Palette);
    /**
     * When true, the image colors matching entries in the color table will not be dithered.
     *
     * @minVersion 23.0
     */
    get preserveExactColors(): boolean;
    set preserveExactColors(value: boolean);
    /**
     * When true, transparent areas of the image are preserved during conversion to GIF format.
     *
     * @minVersion 23.0
     */
    get transparency(): boolean;
    set transparency(value: boolean);
    /**
     * The class name of the referenced object: *"IndexedConversionOptions"*.
     *
     * @minVersion 23.0
     */
    get typename(): "IndexedConversionOptions";
    /** @ignore */
    constructor();
}
