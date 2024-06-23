import * as Constants from "../Constants";
import { Layer } from "../Layer";
import { SolidColor } from "../objects/SolidColor";
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
 * and passed to [[Document.createLayer]].
 * As a type, `TextLayerCreateOptions` can be used in Typescript development.
 *
 * ```javascript
 * const options = { name: "myTextLayer", contents: "Hello, World!", fontSize: 24, position: {x: 200, y: 300} };
 * await require('photoshop').app.activeDocument.createLayer(options);
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
     * Insertion coordinates of the newly created text layer, in pixels
     * @default document center.
     * @minVersion 24.2
     */
    position?: {
        x: number;
        y: number;
    };
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
export declare type LayerCreateOptions = PixelLayerCreateOptions | GroupLayerCreateOptions;
export {};
