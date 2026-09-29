import * as Constants from "../Constants";
import { Layer } from "../Layer";
import { Bounds } from "../objects/Bounds";
import { SolidColor } from "../objects/SolidColor";
import { Position } from "./GeneralTypes";
interface LayerCreateOptionsBase {
    /**
     * Name of the newly created layer. If no value is provided,
     * then a name will be generated following the template, "Layer #".
     * @default -
     * @minVersion 22.5
     */
    name?: string;
    /**
     * Whether to use previous layer to create clipping mask.
     *
     * @default false
     * @minVersion 22.5
     */
    group?: boolean;
    /**
     * Label color of the newly created layer or group.
     * @default NONE
     * @minVersion 22.5
     */
    color?: Constants.LabelColors;
    /**
     * Opacity of the newly created layer or group.
     *
     * @default 100
     * @minVersion 22.5
     */
    opacity?: number;
    /**
     * Deprecated, please use `blendMode` above as it will override this value.
     *
     * @default NORMAL
     * @minVersion 22.5
     * @deprecated
     */
    mode?: Constants.BlendMode;
    /**
     * Blend mode of the newly created layer or group.
     * @default NORMAL
     * @minVersion 22.5
     */
    blendMode?: Constants.BlendMode;
}
/**
 * An object literal can be constructed with any of the following properties and passed to [[Document.createLayer]].
 * As a type, `PixelLayerCreateOptions` can be used in Typescript development.
 *
 * ```javascript
 * const options = { name: "myLayer", opacity: 80, blendMode: constants.BlendMode.COLORDODGE };
 * await require('photoshop').app.activeDocument.createLayer(options);
 * ```
 *
 * @targetfolder objects/createoptions
 * @optionobject
 * @minVersion 22.5
 */
export interface PixelLayerCreateOptions extends LayerCreateOptionsBase {
    /**
     * Whether to fill the layer with a neutral color when applying Blend Mode.
     *
     * @default false
     * @minVersion 22.5
     */
    fillNeutral?: boolean;
}
/**
 * An object literal can be constructed with any of the following properties
 * and passed to [[Document.createTextLayer]].
 * As a type, `TextLayerCreateOptions` can be used in Typescript development.
 *
 * Note: When using the `position` option, keep in mind that the top-left corner
 * of the text layer will vary based on the properties.
 * When using the Text Tool, the click sets the bottom-left corner of the layer.
 * The `position` option here uses that bottom-left corner.
 * A value of `{x: 0, y: 0`}` will likely result in the new layer not appearing "on the canvas"
 * since it landed just above at y of 0.
 * For this reason, the default position is the center of the document.
 *
 * When using the `bounds` option, a paragraph (block) text layer will be created
 * instead of a point text layer. The `position` and `bounds` options are mutually
 * exclusive.
 *
 * ```javascript
 * // Create a point text layer
 * const options = {
 *   name: "myTextLayer",
 *   contents: "Hello, World!",
 *   fontSize: 24,
 *   position: {x: 200, y: 300}
 * };
 * await require('photoshop').app.activeDocument.createTextLayer(options);
 *
 * // Create a paragraph text layer
 * const paragraphOptions = {
 *   name: "myParagraphText",
 *   contents: "If I don't put enough words here, the text will not wrap within the specified bounds.",
 *   fontSize: 12,
 *   bounds: {left: 100, top: 100, right: 400, bottom: 300}
 * };
 * await require('photoshop').app.activeDocument.createTextLayer(paragraphOptions);
 * ```
 *
 * @targetfolder objects/createoptions
 * @optionobject
 * @minVersion 24.2
 */
export interface TextLayerCreateOptions extends LayerCreateOptionsBase {
    /**
     * Text content of the newly created text layer.
     * @default "Lorem Ipsum"
     * @minVersion 24.2
     */
    contents?: string;
    /**
     * Anchor point in pixels for the bottom left corner of a point text layer.
     * Mutually exclusive with `bounds`.
     * @default document center
     * @minVersion 24.2
     */
    position?: Position;
    /**
     * Anchor point for the upper left corner of a paragraph text layer.
     * `bounds` must be provided to create paragraph text.
     * Mutually exclusive with `position`.
     * @default N/A
     * @minVersion 27.4
     */
    bounds?: Bounds;
    /**
     * Text color of the newly created text layer.
     * @default black
     * @minVersion 24.2
     */
    textColor?: SolidColor;
    /**
     * Font size of the newly created text layer in pixels.
     * @default 12px
     * @minVersion 24.2
     */
    fontSize?: number;
    /**
     * Font PostScript name of the newly created text layer.
     * @default "MyriadPro-Regular"
     * @minVersion 24.2
     */
    fontName?: string;
}
/**
 * An object literal can be constructed with any of the following properties
 * and passed to [[Document.createLayerGroup]].
 * As a type, `GroupLayerCreateOptions` can be used in Typescript development.
 *
 * ```javascript
 * const options = { name: "myGroup", opacity: 50 };
 * await require('photoshop').app.activeDocument.createLayerGroup(options);
 * ```
 *
 * @targetfolder objects/createoptions
 * @optionobject
 * @minVersion 22.5
 */
export interface GroupLayerCreateOptions extends LayerCreateOptionsBase {
    /**
     * Name of the newly created layer group. If no value is provided,
     * then a name will be generated following the template, "Group #".
     * @minVersion 22.5
     */
    name?: string;
    /**
     * Layer(s) to populate the newly created group.
     * @minVersion 22.5
     */
    fromLayers?: Layer | Layer[];
}
/**
 * The options passed to [[Document.createLayer]] may take any of the following forms:
 * - PixelLayerCreateOptions
 * - GroupLayerCreateOptions
 * @minVersion 22.5
 */
export declare type LayerCreateOptions = PixelLayerCreateOptions | GroupLayerCreateOptions | TextLayerCreateOptions;
export {};
