import Layer from "../Layer";
import { ColorDescType as Color } from "../../util/colorTypes";
import * as Constants from "../Constants";
/**
 *
 * @targetfolder objects
 * @optionobject
 */
export declare class LayerCreateOptions {
    /**
     * Name of the newly created layer
     */
    name?: string;
    /**
     * Whether to use previous layer to create clipping mask
     *
     * @default false
     */
    group?: boolean;
    /**
     * Label color of the newly created layer
     * @options none red orange yellowColor green blue violet gray
     * @default none
     */
    color?: Constants.LabelColors;
    /**
     * Opacity of the newly created layer
     *
     * @default 100
     */
    opacity?: number;
    /**
     * Blend mode of the newly created layer
     * @options // TODO:
     * @default normal
     */
    mode?: Constants.BlendMode;
    /**
     * Whether to fill with neutral color when applying Blend Mode
     *
     * @default false
     */
    fillNeutral?: boolean;
    /**
     * The class name of the referenced object
     * @default "LayerCreateOptions"
     */
    readonly typename: string;
    /** @ignore */
    constructor();
}
/**
 *
 * @targetfolder objects
 * @optionobject
 */
export declare class GroupLayerCreateOptions {
    /**
     * Name of the newly created layer group
     */
    name?: string;
    /**
     * Label color of the newly created layer group
     * @options none red orange yellowColor green blue violet gray
     * @default none
     */
    color?: Constants.LabelColors;
    /**
     * Opacity of the newly created layer group
     *
     * @default 100
     */
    opacity?: number;
    /**
     * Blend mode of the newly created layer group
     * @options // TODO:
     * @default normal
     */
    mode?: Constants.BlendMode;
    /**
     * Layer(s) to populate the newly created group
     */
    fromLayers?: Layer | Layer[];
    /**
     * The class name of the referenced object
     * @default "GroupLayerCreateOptions"
     */
    readonly typename: string;
    /** @ignore */
    constructor();
}
/**
 * Options to pass into the createDocument API.
 * Provide `width`, `height`, `resolution`, `fill`, color `mode` parameters, or a saved `preset` name.
 *
 * @targetfolder objects
 * @optionobject
 */
export declare class DocumentCreateOptions {
    /** The name to give the new document */
    name?: string;
    /** Preset */
    preset?: string;
    /** JSON Preset, requires JSONified string */
    presetJSON?: string;
    /** ImageMode class */
    mode?: Constants.NewDocumentMode;
    /** Width of image in px */
    width?: number;
    /** Height of image in px */
    height?: number;
    /** Resolution of image  */
    resolution?: number;
    /** Fill color of the document */
    fill?: Constants.DocumentFill;
    /** Custom fill color of the document */
    fillColor?: Color;
    /** Depth */
    depth?: number;
    /** Pixel Scale Factor */
    pixelScaleFactor?: number;
    /** Color Profile using profile name */
    profile?: string;
    /**
     * The class name of the referenced object
     * @default "DocumentCreateOptions"
     */
    readonly typename: string;
    /** @ignore */
    constructor();
}
