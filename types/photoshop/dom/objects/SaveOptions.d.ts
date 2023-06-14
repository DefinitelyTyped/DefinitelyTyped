import * as Constants from "../Constants";
import { SolidColor } from "./SolidColor";
/**
 * Options for saving a document in BMP format using the [[Document.saveAs]] method
 *
 * @targetfolder objects/saveoptions
 * @minVersion 22.5
 */
export declare class BMPSaveOptions {
    private _alphaChannels;
    private _depth;
    private _flipRowOrder;
    private _osType;
    private _rleCompression;
    /**
     * True to save the alpha channels.
     * @minVersion 22.5
     */
    get alphaChannels(): boolean;
    set alphaChannels(value: boolean);
    /**
     * The number of bits per channel.
     * @minVersion 22.5
     */
    get depth(): Constants.BMPDepthType;
    set depth(value: Constants.BMPDepthType);
    /**
     * True to write the image from top to bottom,
     * available only when osType is OperatingSystem.WINDOWS
     * @minVersion 22.5
     */
    get flipRowOrder(): boolean;
    set flipRowOrder(value: boolean);
    /**
     * The target OS.
     * @minVersion 22.5
     */
    get osType(): Constants.OperatingSystem;
    set osType(value: Constants.OperatingSystem);
    /**
     * True to use RLE compression
     * @minVersion 22.5
     */
    get rleCompression(): boolean;
    set rleCompression(value: boolean);
    /**
     * The class name of the referenced object: *"BMPSaveOptions"*.
     * @minVersion 22.5
     */
    get typename(): "BMPSaveOptions";
    /** @ignore */
    constructor();
}
/**
 * @targetfolder objects/saveoptions
 * @optionobject
 * @minVersion 22.5
 */
export declare class JPEGSaveOptions {
    private _quality;
    private _formatOptions;
    private _scans;
    private _color;
    private _matteColor;
    private _customMatte;
    private _embedColorProfile;
    /**
     * The image quality setting to use; affects file size and compression.
     *
     * @default 8
     * @range 0...12
     * @minVersion 22.5
     */
    get quality(): number;
    set quality(value: number);
    /**
     * The JPEG format option to use.
     * @default STANDARDBASELINE
     * @minVersion 22.5
     */
    get formatOptions(): Constants.JPEGFormatOptions;
    set formatOptions(value: Constants.JPEGFormatOptions);
    /**
     * The number of scans to incrementally display the image on the page.
     * formatOptions must be JPEGFormatOptions.PROGRESSIVE.
     * @default 3
     * @range 3...5
     * @minVersion 22.5
     */
    get scans(): number;
    set scans(value: number);
    /**
     * A custom color to use to fill anti-aliased edges adjacent to transparent areas of the image.
     * Mutually exclusive with 'matteColor'.
     * @minVersion 22.5
     */
    get color(): SolidColor;
    set color(value: SolidColor);
    /**
     * The color to use to fill anti-aliased edges adjacent to transparent areas of the image.
     * Mutually exclusive with 'color'.
     * @minVersion 22.5
     */
    get matteColor(): Constants.MatteColor;
    set matteColor(value: Constants.MatteColor);
    /**
     * Custom matting color; overrides matteColor
     * @minVersion 22.5
     */
    get customMatte(): SolidColor;
    set customMatte(value: SolidColor);
    /**
     * False to skip embedding the color profile in the document
     * @minVersion 22.5
     */
    get embedColorProfile(): boolean;
    set embedColorProfile(value: boolean);
    /**
     * The class name of the referenced object: *"JPEGSaveOptions"*.
     * @minVersion 22.5
     */
    get typename(): "JPEGSaveOptions";
    /** @ignore */
    constructor();
}
/**
 * @targetfolder objects/saveoptions
 * @optionobject
 * @minVersion 22.5
 */
export declare class GIFSaveOptions {
    private _colors;
    private _dither;
    private _ditherAmount;
    private _forced;
    private _interlaced;
    private _matte;
    private _palette;
    private _preserveExactColors;
    private _transparency;
    /**
     * The number of palette colors. Valid only when palette is:
     *
     * Palette.LOCALADAPTIVE, LOCALPERCEPTUAL, LOCALSELECTIVE, MACOSPALETTE, UNIFORM, WEBPALETTE; or WINDOWSPALETTE
     * @minVersion 22.5
     */
    get colors(): number;
    set colors(value: number);
    /**
     * The dither type.
     * @minVersion 22.5
     */
    get dither(): Constants.Dither;
    set dither(value: Constants.Dither);
    /**
     * The amount of dither.
     *
     * Valid only when dither = Dither.DIFFUSION.
     * @minVersion 22.5
     */
    get ditherAmount(): number;
    set ditherAmount(value: number);
    /**
     * The type of colors to force into the color palette.
     * @minVersion 22.5
     */
    get forced(): Constants.ForcedColors;
    set forced(value: Constants.ForcedColors);
    /**
     * True if rows should be interlaced.
     * @minVersion 22.5
     */
    get interlaced(): boolean;
    set interlaced(value: boolean);
    /**
     * The color to use to fill anti-aliased edges adjacent to transparent  areas of the image.
     *
     * When transparency is turned off for an image, the matte color is applied to transparent areas.
     * @minVersion 22.5
     */
    get matte(): Constants.MatteColor;
    set matte(value: Constants.MatteColor);
    /**
     * The type of palette to use.
     * @minVersion 22.5
     */
    get palette(): Constants.Palette;
    set palette(value: Constants.Palette);
    /**
     * True to protect colors in the image that contain entries in the color table from being dithered.
     *
     * Valid only when dither = DITHER.DIFFUSION
     * @minVersion 22.5
     */
    get preserveExactColors(): boolean;
    set preserveExactColors(value: boolean);
    /**
     * True to preserve transparent areas of the image during conversion to GIF format.
     * @minVersion 22.5
     */
    get transparency(): boolean;
    set transparency(value: boolean);
    /**
     * The class name of the referenced object: *"GIFSaveOptions"*.
     * @minVersion 22.5
     */
    get typename(): "GIFSaveOptions";
    /** @ignore */
    constructor();
}
/**
 * @targetfolder objects/saveoptions
 * @optionobject
 * @minVersion 22.5
 */
export declare class PNGSaveOptions {
    private _method;
    private _compression;
    private _interlaced;
    /** @ignore */
    constructor();
    /**
     * PNG File Size optimization method.
     * @minVersion 22.5
     */
    get method(): Constants.PNGMethod;
    set method(value: Constants.PNGMethod);
    /**
     * The compression value to be used when method = PNGMethod.QUICK
     *
     * @range 0...9
     * @default 6
     * @minVersion 22.5
     */
    get compression(): number;
    set compression(value: number);
    /**
     * True to interlace rows when method = PNGMethod.QUICK
     *
     * @default false
     * @minVersion 22.5
     */
    get interlaced(): boolean;
    set interlaced(value: boolean);
    /**
     * The class name of the referenced object: *"PNGSaveOptions"*.
     * @minVersion 22.5
     */
    get typename(): "PNGSaveOptions";
}
/**
 * @targetfolder objects/saveoptions
 * @optionobject
 * @minVersion 22.5
 */
export declare class PhotoshopSaveOptions {
    private _alphaChannels;
    private _annotations;
    private _embedColorProfile;
    private _layers;
    private _spotColor;
    private _maximizeCompatibility;
    /**
     * True to save the alpha channels.
     * @minVersion 22.5
     */
    get alphaChannels(): boolean;
    set alphaChannels(value: boolean);
    /**
     * True to save the annotations.
     * @minVersion 22.5
     */
    get annotations(): boolean;
    set annotations(value: boolean);
    /**
     * True to embed the color profiles in the document.
     * @minVersion 22.5
     */
    get embedColorProfile(): boolean;
    set embedColorProfile(value: boolean);
    /**
     * True to preserve the layers.
     * @minVersion 22.5
     */
    get layers(): boolean;
    set layers(value: boolean);
    /**
     * True to save the spot colors.
     * @minVersion 22.5
     */
    get spotColor(): boolean;
    set spotColor(value: boolean);
    /**
     * Maximize Compatibility with older versions
     * @minVersion 22.5
     */
    get maximizeCompatibility(): boolean;
    set maximizeCompatibility(value: boolean);
    /**
     * The class name of the referenced object: *"PhotoshopSaveOptions"*.
     * @minVersion 22.5
     */
    get typename(): "PhotoshopSaveOptions";
    /** @ignore */
    constructor();
}
