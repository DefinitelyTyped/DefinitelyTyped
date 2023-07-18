import * as Constants from "../Constants";
import { SolidColor } from "./../objects/SolidColor";
/**
 * Options for saving a document in BMP format using the [[Document.saveAs]] method
 *
 * @targetfolder objects/saveoptions
 * @minVersion 22.5
 */
export interface BMPSaveOptions {
    /**
     * True to save the alpha channels.
     * @minVersion 22.5
     */
    alphaChannels: boolean;
    /**
     * The number of bits per channel.
     * @minVersion 22.5
     */
    depth: Constants.BMPDepthType;
    /**
     * True to write the image from top to bottom,
     * available only when osType is OperatingSystem.WINDOWS
     * @minVersion 22.5
     */
    flipRowOrder: boolean;
    /**
     * The target OS.
     * @minVersion 22.5
     */
    osType: Constants.OperatingSystem;
    /**
     * True to use RLE compression
     * @minVersion 22.5
     */
    rleCompression: boolean;
}
/**
 * @targetfolder objects/saveoptions
 * @optionobject
 * @minVersion 22.5
 */
export interface JPEGSaveOptions {
    /**
     * The image quality setting to use; affects file size and compression.
     *
     * @default 8
     * @range 0...12
     * @minVersion 22.5
     */
    quality: number;
    /**
     * The JPEG format option to use.
     * @default STANDARDBASELINE
     * @minVersion 22.5
     */
    formatOptions: Constants.JPEGFormatOptions;
    /**
     * The number of scans to incrementally display the image on the page.
     * formatOptions must be JPEGFormatOptions.PROGRESSIVE.
     * @default 3
     * @range 3...5
     * @minVersion 22.5
     */
    scans: number;
    /**
     * A custom color to use to fill anti-aliased edges adjacent to transparent areas of the image.
     * Mutually exclusive with 'matteColor'.
     * @minVersion 22.5
     */
    color: SolidColor;
    /**
     * The color to use to fill anti-aliased edges adjacent to transparent areas of the image.
     * Mutually exclusive with 'color'.
     * @minVersion 22.5
     */
    matteColor: Constants.MatteColor;
    /**
     * Custom matting color; overrides matteColor
     * @minVersion 22.5
     */
    customMatte: SolidColor;
    /**
     * False to skip embedding the color profile in the document
     * @minVersion 22.5
     */
    embedColorProfile: boolean;
}
/**
 * @targetfolder objects/saveoptions
 * @optionobject
 * @minVersion 22.5
 */
export interface GIFSaveOptions {
    /**
     * The number of palette colors. Valid only when palette is:
     *
     * Palette.LOCALADAPTIVE, LOCALPERCEPTUAL, LOCALSELECTIVE, MACOSPALETTE, UNIFORM, WEBPALETTE; or WINDOWSPALETTE
     * @minVersion 22.5
     */
    colors?: number;
    /**
     * The dither type.
     * @minVersion 22.5
     */
    dither?: Constants.Dither;
    /**
     * The amount of dither.
     *
     * Valid only when dither = Dither.DIFFUSION.
     * @minVersion 22.5
     */
    ditherAmount?: number;
    /**
     * The type of colors to force into the color palette.
     * @minVersion 22.5
     */
    forced?: Constants.ForcedColors;
    /**
     * True if rows should be interlaced.
     * @minVersion 22.5
     */
    interlaced?: boolean;
    /**
     * The color to use to fill anti-aliased edges adjacent to transparent  areas of the image.
     *
     * When transparency is turned off for an image, the matte color is applied to transparent areas.
     * @minVersion 22.5
     */
    matte?: Constants.MatteColor;
    /**
     * The type of palette to use.
     * @minVersion 22.5
     */
    palette?: Constants.Palette;
    /**
     * True to protect colors in the image that contain entries in the color table from being dithered.
     *
     * Valid only when dither = DITHER.DIFFUSION
     * @minVersion 22.5
     */
    preserveExactColors?: boolean;
    /**
     * True to preserve transparent areas of the image during conversion to GIF format.
     * @minVersion 22.5
     */
    transparency?: boolean;
}
/**
 * @targetfolder objects/saveoptions
 * @optionobject
 * @minVersion 22.5
 */
export interface PNGSaveOptions {
    /**
     * PNG File Size optimization method.
     * @minVersion 22.5
     */
    method?: Constants.PNGMethod;
    /**
     * The compression value to be used when method = PNGMethod.QUICK
     *
     * @range 0...9
     * @default 6
     * @minVersion 22.5
     */
    compression?: number;
    /**
     * True to interlace rows when method = PNGMethod.QUICK
     *
     * @default false
     * @minVersion 22.5
     */
    interlaced?: boolean;
    /**
     * Specifies whether to embed color profile into saved file
     * @minVersion 24.5
     */
    embedProfile?: Constants.EmbedColorProfile;
}
/**
 * @targetfolder objects/saveoptions
 * @optionobject
 * @minVersion 22.5
 */
export interface PhotoshopSaveOptions {
    /**
     * True to save the alpha channels.
     * @minVersion 22.5
     */
    alphaChannels: boolean;
    /**
     * True to save the annotations.
     * @minVersion 22.5
     */
    annotations: boolean;
    /**
     * True to embed the color profiles in the document.
     * @minVersion 22.5
     */
    embedColorProfile: boolean;
    /**
     * True to preserve the layers.
     * @minVersion 22.5
     */
    layers: boolean;
    /**
     * True to save the spot colors.
     * @minVersion 22.5
     */
    spotColor: boolean;
    /**
     * Maximize Compatibility with older versions
     * @minVersion 22.5
     */
    maximizeCompatibility: boolean;
}
