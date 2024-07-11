import { Channel } from "../Channel";
import { ApplyImageBlendMode, ApplyImageChannel, ApplyImageLayer } from "../Constants";
import { Document } from "../Document";
import { Layer } from "../Layer";
/**
 * Type for the Layer choice in [[ApplyImageSource]].
 * Select [ApplyImageLayer.MERGED](../constants/#applyimagelayer) to use the pixels from a merged
 * or flattened version of the document.
 * @targetfolder objects/options
 * @optionobject
 * @minVersion 24.5
 */
export declare type ApplyImageLayerType = Layer | ApplyImageLayer.MERGED;
/**
 * Type for the Channel choice in [[ApplyImageSource]]
 * @targetfolder objects/options
 * @optionobject
 * @minVersion 24.5
 */
export declare type ApplyImageChannelType =
    | Channel
    | ApplyImageChannel.RGB
    | ApplyImageChannel.CMYK
    | ApplyImageChannel.LAB
    | ApplyImageChannel.SELECTION
    | ApplyImageChannel.TRANSPARENCY;
/**
 * Reference for sources to be used in Apply Image operations
 * @targetfolder objects/options
 * @optionobject
 * @minVersion 24.5
 */
export interface ApplyImageSource {
    /**
     * The document used as a source
     * @minVersion 24.5
     */
    document: Document;
    /**
     * The layer used as a source
     * @minVersion 24.5
     */
    layer: ApplyImageLayerType;
    /**
     * The channel used as a source
     * @minVersion 24.5
     */
    channel: ApplyImageChannelType;
    /**
     * Whether to invert the source or not
     * @minVersion 24.5
     * @default false
     */
    invert?: boolean;
}
/**
 * An object literal can be constructed with the following properties
 * and passed to [Layer.applyImage](/ps_reference/classes/layer/#applyimage).
 * As a type, `ApplyImageOptions` can be used in Typescript development.
 *
 * ```javascript
 * const options = {
 *     source: {
 *         document: require('photoshop').app.documents[0],
 *         layer: require('photoshop').app.documents[0].layers[1],
 *         channel: require('photoshop').app.documents[0].channels[2],
 *     },
 *     blending: require('photoshop').constants.ApplyImageBlendMode.SCREEN,
 * };
 * await require('photoshop').app.activeDocument.layers[0].applyImage(options);
 * ```
 *
 * @targetfolder objects/options
 * @optionobject
 * @minVersion 24.5
 */
export interface ApplyImageOptions {
    /**
     * The source reference to be used in the Apply Image operation.
     * @minVersion 24.5
     */
    source: ApplyImageSource;
    /**
     * The blend mode used to apply the source to the active layer.
     * @default MULTIPLY
     * @minVersion 24.5
     */
    blending?: ApplyImageBlendMode;
    /**
     * The opacity used while applying the source to the active layer.
     * @range 0..100
     * @default 100
     * @minVersion 24.5
     */
    opacity?: number;
    /**
     * Whether to preserve the original transparency of the active layer.
     * @default false
     * @minVersion 24.5
     */
    preserveTransparency?: boolean;
    /**
     * The Mask reference to be used in the Apply Image operation.
     * @minVersion 24.5
     */
    mask?: ApplyImageSource;
}
