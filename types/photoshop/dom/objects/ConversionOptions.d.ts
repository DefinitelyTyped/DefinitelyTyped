import * as Constants from "../Constants";
import { SolidColor } from "./SolidColor";
/**
 * Options for converting an image to bitmap mode, using [[Document.changeMode]] with `ChangeMode.BITMAP`.
 *
 * @targetfolder objects/conversionoptions
 * @optionobject
 */
export declare class BitmapConversionOptions {
    /**
     * The angle (in degrees) at which to orient individual dots. See [[shape]]
     *
     * Valid only when [[method]] is `BitmapConversionType.HALFTONESCREEN`.
     *
     * @range -180...180
     */
    angle: number;
    frequency: number;
    method: Constants.BitmapConversionType;
    patternName: string;
    resolution: number;
    shape: Constants.BitmapHalfToneType;
    readonly typename: string;
    /** @ignore */
    constructor();
}
/**
 * Options for converting an RGB image to an indexed color model using [[Document.changeMode]]
 *
 * @targetfolder objects/conversionoptions
 * @optionobject
 */
export declare class IndexedConversionOptions {
    colors: number;
    dither: Constants.Dither;
    ditherAmount: number;
    forced: Constants.ForcedColors;
    matte: Constants.MatteColor;
    palette: Constants.Palette;
    preserveExactColors: boolean;
    transparency: boolean;
    readonly typename: string;
    /** @ignore */
    constructor();
}
/**
 * Options for saving a document in BMP format using the [[Document.saveAs]] method
 *
 * @targetfolder objects/conversionoptions
 * @optionobject
 */
export declare class BMPSaveOptions {
    /** True to save the alpha channels */
    alphaChannels: boolean;
    /** The number of bits per channel */
    depth: Constants.BMPDepthType;
    /**
     * True to write the image from top to bottom,
     * available only when osType is OperatingSystem.WINDOWS
     */
    flipRowOrder: boolean;
    /** The target OS. */
    osType: Constants.OperatingSystem;
    /**
     * True to use RLE compression
     */
    rleCompression: boolean;
    /**
     * The class name of the referenced object
     * @default "BMPSaveOptions"
     */
    readonly typename: string;
    /** @ignore */
    constructor();
}
/**
 * @targetfolder objects/conversionoptions
 * @optionobject
 */
export declare class JPEGSaveOptions {
    /**
     * The image quality setting to use; affects file size and compression.
     *
     * @default 8
     * @range 0...12
     */
    quality: number;
    /**
     * The JPEG format option to use.
     * @default STANDARDBASELINE
     */
    formatOptions: Constants.JPEGFormatOptions;
    /**
     * The number of scans to incrementally display the image on the page.
     * formatOptions must be JPEGFormatOptions.PROGRESSIVE.
     * @default 3
     * @range 3...5
     */
    scans: number;
    /**
     * A custom color to use to fill anti-aliased edges adjacent to transparent areas of the image.
     * Mutually exclusive with 'matteColor'.
     */
    color: SolidColor;
    /**
     * The color to use to fill anti-aliased edges adjacent to transparent areas of the image.
     * Mutually exclusive with 'color'.
     */
    matteColor: Constants.MatteColor;
    /**
     * Custom matting color; overrides matteColor
     */
    customMatte: SolidColor;
    /**
     * False to skip embedding the color profile in the document
     */
    embedColorProfile: boolean;
    /**
     * The class name of the referenced object
     * @default "JPEGSaveOptions"
     */
    readonly typename: string;
    /** @ignore */
    constructor();
}
/**
 * @targetfolder objects/conversionoptions
 * @optionobject
 */
export declare class GIFSaveOptions {
    /**
     * The number of palette colors. Valid only when palette is:
     *
     * Palette.LOCALADAPTIVE, LOCALPERCEPTUAL, LOCALSELECTIVE, MACOSPALETTE, UNIFORM, WEBPALETTE; or WINDOWSPALETTE
     */
    colors: number;
    /** The dither type. */
    dither: Constants.Dither;
    /**
     * The amount of dither.
     *
     * Valid only when dither = Dither.DIFFUSION.
     */
    ditherAmount: number;
    /** The type of colors to force into the color palette. */
    forced: Constants.ForcedColors;
    /** True if rows should be interlaced/ */
    interlaced: boolean;
    /**
     * The color to use to fill anti-aliased edges adjacent to transparent  areas of the image.
     *
     * When transparency is turned off for an image, the matte color is applied to transparent areas.
     */
    matte: Constants.MatteColor;
    /**
     * The type of palette to use.
     */
    palette: Constants.Palette;
    /**
     * True to protect colors in the image that contain entries in the color table from being dithered.
     *
     * Valid only when dither = DITHER.DIFFUSION
     */
    preserveExactColors: boolean;
    /**
     * True to preserve transparent areas of the image during conversion to GIF format.
     */
    transparency: boolean;
    /**
     * The class name of the referenced object
     * @default "GIFSaveOptions"
     */
    readonly typename: string;
    /** @ignore */
    constructor();
}
/**
 * @targetfolder objects/conversionoptions
 * @optionobject
 */
export declare class PNGSaveOptions {
    /** @ignore */
    constructor();
    /**
     * PNG File Size optimization method.
     */
    method: Constants.PNGMethod;
    /**
     * The compression value to be used when method = PNGMethod.QUICK
     *
     * @range 0...9
     * @default 6
     */
    compression: number;
    /**
     * True to interlace rows when method = PNGMethod.QUICK
     *
     * @default false
     */
    interlaced: boolean;
    /**
     * The class name of the referenced object
     * @default "PNGSaveOptions"
     */
    readonly typename: string;
}
/**
 * @targetfolder objects/conversionoptions
 * @optionobject
 */
export declare class PhotoshopSaveOptions {
    /** @ignore */
    constructor();
    /** True to save the alpha channels */
    alphaChannels: boolean;
    /** True to save the annotations */
    annotations: boolean;
    /** True to embed the color profiles in the document */
    embedColorProfile: boolean;
    /** True to preserve the layers */
    layers: boolean;
    /** True to save the spot colors */
    spotColor: boolean;
    /**
     * Maximize Compatibility with older versions
     */
    maximizeCompatibility: boolean;
    /**
     * The class name of the referenced object
     * @default "PhotoshopSaveOptions"
     */
    readonly typename: string;
}
