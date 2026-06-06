import { Channel } from "../Channel";
import { CalculationsBlendMode, CalculationsChannel, CalculationsLayer, CalculationsResult } from "../Constants";
import { Document } from "../Document";
import { Layer } from "../Layer";
/**
 * Type for the Layer choice in [[CalculationsSource]]
 * @targetfolder objects/options
 * @optionobject
 * @minVersion 24.5
 */
declare type CalculationsLayerType = Layer | CalculationsLayer.MERGED;
/**
 * Type for the Channel choice in [[CalculationsSource]]
 * @targetfolder objects/options
 * @optionobject
 * @minVersion 24.5
 */
export declare type CalculationsChannelType =
    | Channel
    | CalculationsChannel.GRAY
    | CalculationsChannel.TRANSPARENCY
    | CalculationsChannel.SELECTION;
/**
 * Reference for sources (source1, source2, mask) to be used in [[CalculationsOptions]].
 * @targetfolder objects/options
 * @optionobject
 * @minVersion 24.5
 */
export interface CalculationsSource {
    /**
     * The document used as a source
     * @minVersion 24.5
     */
    document: Document;
    /**
     * Either a layer or the pseudo-layer that represents the merged result of all layers,
     * the constant Constants.CalculationsLayer.MERGED.
     * @minVersion 24.5
     */
    layer: CalculationsLayerType;
    /**
     * The channel used as a source: either a Channel instance or
     * one of the Constants.CalculationsChannel values.
     * @minVersion 24.5
     */
    channel: CalculationsChannelType;
    /**
     * Whether to invert the source or not
     * @default false
     * @minVersion 24.5
     */
    invert?: boolean;
}
/**
 * An object literal can be constructed with the following properties
 * and passed to [[Document.calculations]].
 * As a type, `CalculationsOptions` can be used in Typescript development.
 *
 * ```javascript
 * const options = {
 *     source1: {
 *         document: doc,
 *         layer: doc.layers[0],
 *         channel: CalculationsChannel.GRAY
 *         invert: true
 *     },
 *     source2: {
 *         document: doc,
 *         layer: CalculationsLayer.MERGED,
 *         channel: doc.channels[2]
 *     },
 *     blending: CalculationsBlendMode.DARKEN,
 *     opacity: 50,
 *     result: CalculationsResult.NEWCHANNEL
 * };
 * await require('photoshop').app.activeDocument.calculations(options);
 *
 * ```
 *
 * @targetfolder objects/options
 * @optionobject
 * @minVersion 24.5
 */
export interface CalculationsOptions {
    /**
     * The "Source 1" reference to be used in the Calculations operation. "Source 1" will be rendered above "Source 2"
     * @minVersion 24.5
     */
    source1: CalculationsSource;
    /**
     * The "Source 2" reference to be used in the Calculations operation
     * @minVersion 24.5
     */
    source2: CalculationsSource;
    /**
     * The blend mode used to merge "Source 1" and "Source 2" together. "Source 1" will be rendered above "Source 2"
     * @default MULTIPLY
     * @minVersion 24.5
     */
    blending?: CalculationsBlendMode;
    /**
     * The opacity used for "Source 1" when merged with "Source 2".
     * @range 0..100
     * @default 100
     * @minVersion 24.5
     */
    opacity?: number;
    /**
     * The Mask reference to be used in the Calculations operation
     * @minVersion 24.5
     */
    mask?: CalculationsSource;
    /**
     * Where to output the result of the Calculations operation
     * @minVersion 24.5
     */
    result: CalculationsResult;
}
export {};
