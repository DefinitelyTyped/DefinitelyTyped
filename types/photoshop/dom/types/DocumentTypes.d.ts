import * as Constants from "../Constants";
import { SolidColor } from "../objects/SolidColor";
/**
 * An object literal can be constructed with any of the following properties
 * and passed to [[Photoshop.createDocument]].
 * As a type, `DocumentCreateOptions` can be used in Typescript development.
 *
 * ```javascript
 * const options = { name: "Web mockup", preset: "Web Large" };
 * require('photoshop').app.createDocument(options);
 * ```
 *
 * @targetfolder objects/createoptions
 * @optionobject
 * @minVersion 22.5
 */
export interface DocumentCreateOptions {
    /**
     * The name to give the new document.
     * @minVersion 22.5
     */
    name?: string;
    /**
     * Preset.
     * @minVersion 22.5
     */
    preset?: string;
    /**
     * JSON Preset, requires JSONified string.
     * @minVersion 22.5
     */
    presetJSON?: string;
    /**
     * ImageMode class.
     * @minVersion 22.5
     */
    mode?: Constants.NewDocumentMode;
    /**
     * Width of image in pixels.
     * @minVersion 22.5
     */
    width?: number;
    /**
     * Height of image in pixels.
     * @minVersion 22.5
     */
    height?: number;
    /**
     * Resolution of image.
     * @minVersion 22.5
     */
    resolution?: number;
    /**
     * Fill color of the document.
     * @minVersion 22.5
     */
    fill?: Constants.DocumentFill;
    /**
     * Custom fill color of the document.
     * @minVersion 23.0
     */
    fillColor?: SolidColor;
    /**
     * Bit depth
     * @minVersion 22.5
     * @default 8
     * @range [8,16,32]
     */
    depth?: number;
    /**
     * Pixel Scale Factor.
     * @minVersion 22.5
     */
    pixelScaleFactor?: number;
    /**
     * Color Profile using profile name.
     * @minVersion 22.5
     */
    profile?: string;
}
