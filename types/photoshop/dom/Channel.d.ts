import { Document } from "./Document";
import { SolidColor } from "./objects/SolidColor";
import * as Constants from "./Constants";
/**
 * Represents a channel in a Photoshop document.
 * You can access instances of channels using one of these methods:
 *
 * ```javascript
 * // An array of composite channels in the document
 * const compositeChannels = app.activeDocument.compositeChannels
 *
 * // An array of active (selected) channels in the document
 * const activeChannels = app.activeDocument.activeChannels
 *
 * // Reference a document's Red channel
 * const redChannel = app.activeDocument.channels[0]
 * ```
 */
export declare abstract class Channel {
    /**
     * The containing document.
     */
    get parent(): Document;
    /**
     * The type or kind of the channel.
     */
    get kind(): Constants.ChannelType;
    set kind(kind: Constants.ChannelType);
    /**
     * The visibility of the channel
     */
    get visible(): boolean;
    set visible(visible: boolean);
    /**
     * Duplicates the channel to the parent document, or a target document
     * if specified.
     *
     * ```javascript
     * // duplicate the channel
     * await channel.duplicate()
     *
     * // duplicate to a different, compatible document
     * const newDoc = psApp.documents[1]
     * await channel.duplicate(newDoc)
     * ```
     * @param targetDocument if specified, duplicate to a different document target.
     *
     * @async
     */
    duplicate(targetDocument?: Document): Promise<void>;
    /**
     * The color of the channel.
     */
    abstract get name(): string;
    abstract set name(name: string);
    /**
     * A histogram containing the number of pixels at each color
     * intensity level for this channel. The array contains 256
     * members. The target channel must be visible.
     */
    abstract get histogram(): number[];
    /**
     * The color of the channel.
     */
    abstract get color(): SolidColor;
    abstract set color(color: SolidColor);
    /**
     * The opacity or solidity of the channel.
     */
    abstract get opacity(): number;
    abstract set opacity(opacity: number);
    /**
     * Deletes the channel.
     */
    abstract remove(): Promise<void>;
    /**
     * Merges a Spot Color channel into the component channels.
     */
    abstract merge(): Promise<void>;
}
