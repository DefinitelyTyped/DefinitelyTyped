import { Channel } from "./Channel";
import { Channels } from "./collections/Channels";
import { ColorSamplers } from "./collections/ColorSamplers";
import { CountItems } from "./collections/CountItems";
import { Guides } from "./collections/Guides";
import { HistoryStates } from "./collections/HistoryStates";
import { LayerComps } from "./collections/LayerComps";
import { Layers } from "./collections/Layers";
import { PathItems } from "./collections/PathItems";
import * as Constants from "./Constants";
import { ExecutionContext } from "./CoreModules";
import { HistoryState } from "./HistoryState";
import { Layer } from "./Layer";
import { BMPSaveOptions, GIFSaveOptions, JPEGSaveOptions, PhotoshopSaveOptions, PNGSaveOptions } from "./Objects";
import { Bounds } from "./objects/Bounds";
import { NoColor } from "./objects/Colors";
import { BitmapConversionOptions, IndexedConversionOptions } from "./objects/ConversionOptions";
import { SolidColor } from "./objects/SolidColor";
import { Selection } from "./Selection";
import { CalculationsOptions } from "./types/CalculationsTypes";
import { GroupLayerCreateOptions, PixelLayerCreateOptions, TextLayerCreateOptions } from "./types/LayerTypes";
/**
 * Execution Context with the Document injected for modal execution within Document.suspendHistory
 * @ignore
 */
export interface SuspendHistoryContext extends ExecutionContext {
    document: Document;
}
/**
 * Represents a single Photoshop document that is currently open
 * You can access instances of documents using one of these methods:
 *
 * ```javascript
 * const app = require('photoshop').app;
 * const constants = require('photoshop').constants;
 *
 * // The currently active document from the Photoshop object
 * const currentDocument = app.activeDocument;
 *
 * // Choose one of the open documents from the Photoshop object
 * const secondDocument = app.documents[1];
 *
 * // You can also create an instance of a document via a UXP File entry
 * let fileEntry = require('uxp').storage.localFileSystem.getFileForOpening();
 * const newDocument = await app.open('/project.psd');
 * ```
 */
export declare class Document {
    /**
     * The class name of the referenced object: *"Document"*.
     * @minVersion 23.0
     */
    get typename(): "Document";
    /**
     * The internal ID of this document will remain valid as long as this document is open.
     * It can be used for batchPlay calls to refer to this document.
     * @minVersion 22.5
     */
    get id(): number;
    /**
     * True if the document has been saved since the last change.
     * @minVersion 23.0
     */
    get saved(): boolean;
    /**
     * The selected layers in the document.
     * @minVersion 22.5
     */
    get activeLayers(): Layers;
    /**
     * The artboards in the document
     * @minVersion 22.5
     */
    get artboards(): Layers;
    /**
     * The name of the document
     * @minVersion 23.0
     */
    get name(): string;
    /**
     * A histogram containing the number of pixels at each color
     * intensity level for the component channel. The array contains 256
     * members.
     *
     * Valid only when [[mode]] = `DocumentMode.{RGB,CMYK,INDEXEDCOLOR}`
     * @minVersion 23.0
     */
    get histogram(): number[];
    /**
     * The state of Quick Mask mode. If true, the app is in Quick Mask mode.
     * @minVersion 23.0
     */
    get quickMaskMode(): boolean;
    set quickMaskMode(qmMode: boolean);
    /**
     * The collection of Guides present in the document.
     * @minVersion 23.0
     */
    get guides(): Guides;
    /**
     * The collection of CountItems present in the document.
     * @minVersion 24.1
     */
    get countItems(): CountItems;
    /**
     * The collection of ColorSamplers present in the document.
     * @minVersion 24.0
     */
    get colorSamplers(): ColorSamplers;
    /**
     * The color mode. To change it, please use [[Document.changeMode]].
     * @minVersion 23.0
     */
    get mode(): Constants.DocumentMode;
    /**
     * The bits per color channel.
     * @minVersion 23.0
     */
    get bitsPerChannel(): Constants.BitsPerChannelType;
    set bitsPerChannel(bitDepth: Constants.BitsPerChannelType);
    /**
     * Check whether this a [Photoshop cloud document](https://helpx.adobe.com/photoshop/using/cloud-documents-faq.html).
     * @minVersion 23.0
     */
    get cloudDocument(): boolean;
    /**
     * Local directory for this cloud document.
     * @minVersion 23.0
     */
    get cloudWorkAreaDirectory(): string;
    /**
     * The layers in the document at the top level of the layer/group hierarchy.
     * @minVersion 22.5
     */
    get layers(): Layers;
    /**
     * The layer comps present in the document.
     * @minVersion 24.0
     */
    get layerComps(): LayerComps;
    /**
     * Background layer, if it exists.
     * @minVersion 22.5
     */
    get backgroundLayer(): Layer | null;
    /**
     * Full file system path to this document, or the identifier if it is a cloud document.
     * @minVersion 22.5
     */
    get path(): string;
    /**
     * The collection of paths in this document, as shown in the
     * Paths panel.
     * @minVersion 23.3
     */
    get pathItems(): PathItems;
    /**
     * History states of the document.
     * @minVersion 22.5
     */
    get historyStates(): HistoryStates;
    /**
     * Currently active history state of the document.
     * @minVersion 22.5
     */
    get activeHistoryState(): HistoryState;
    /**
     * Selects the given history state to be the active one.
     * @minVersion 22.5
     */
    set activeHistoryState(historyState: HistoryState);
    /**
     * The history state that history brush tool will use as its source.
     * @minVersion 22.5
     */
    get activeHistoryBrushSource(): HistoryState;
    set activeHistoryBrushSource(historyState: HistoryState);
    /**
     * Document title
     * @minVersion 22.5
     */
    get title(): string;
    /**
     * Document's resolution (in pixels per inch).
     * @minVersion 22.5
     */
    get resolution(): number;
    /**
     * Document's width in pixels.
     * @minVersion 22.5
     */
    get width(): number;
    /**
     * Document's height in pixels.
     * @minVersion 22.5
     */
    get height(): number;
    /**
     * The (custom) pixel aspect ratio to use.
     * @minVersion 22.5
     */
    get pixelAspectRatio(): number;
    set pixelAspectRatio(newValue: number);
    /**
     * Name of the color profile.
     *
     * Valid only when [[colorProfileType]] is `CUSTOM` or `WORKING`, returns "None" otherwise.
     * @minVersion 23.0
     */
    get colorProfileName(): string;
    set colorProfileName(profile: string);
    /**
     * Whether the document uses the working color profile, a custom profile, or no profile.
     * @minVersion 23.0
     */
    get colorProfileType(): Constants.ColorProfileType;
    set colorProfileType(type: Constants.ColorProfileType);
    /**
     * The object containing the document's currently active selection
     * @minVersion 25.0
     */
    readonly selection: Selection;
    /**
     * @ignore
     */
    constructor(id: number);
    /**
     * Closes the document, showing a prompt to save
     * unsaved changes if specified.
     *
     * @param saveDialogOptions By default, prompts a save dialog
     *                    if there are unsaved changes.
     *
     * @async
     * @minVersion 22.5
     */
    close(saveDialogOptions?: Constants.SaveOptions): Promise<void>;
    /**
     * Close the document, discarding all unsaved changes.
     * @minVersion 22.5
     */
    closeWithoutSaving(): void;
    /**
     * Crops the document to given bounds
     *
     * @async
     * @minVersion 23.0
     */
    crop(bounds: Bounds, angle?: number, width?: number, height?: number): Promise<void>;
    /**
     * Flatten all layers in the document.
     * @async
     * @minVersion 22.5
     */
    flatten(): Promise<void>;
    /**
     * Creates a duplicate of the document, making the duplicate active.
     *
     * The optional parameter `name` provides the name for the duplicated document.
     *
     * The optional parameter `mergeLayersOnly` indicates whether to only duplicate merged layers.
     * @minVersion 23.0
     */
    duplicate(name?: string, mergeLayersOnly?: boolean): Promise<Document>;
    /**
     * Merges all visible layers in the document into a single layer.
     * @async
     * @minVersion 23.0
     */
    mergeVisibleLayers(): Promise<void>;
    /**
     * Splits the document channels into separate, single-channel
     * documents.
     * @async
     * @minVersion 23.0
     */
    splitChannels(): Promise<Document[]>;
    /**
     * Expands the document to show clipped sections.
     * @async
     * @minVersion 23.0
     */
    revealAll(): Promise<void>;
    /**
     * Rasterizes all layers.
     * @async
     * @minVersion 23.0
     */
    rasterizeAllLayers(): Promise<void>;
    /**
     * Changes the color mode of the document.
     * @async
     * @minVersion 23.0
     */
    changeMode(mode: Constants.ChangeMode, options?: BitmapConversionOptions | IndexedConversionOptions): Promise<void>;
    /**
     * Changes the color profile.
     *
     * `destinationProfile` must be either a string that names the color mode,
     * or one of these below, meaning of the working color spaces or Lab color.
     *
     * `"Working RGB", "Working CMYK", "Working Gray", "Lab Color"`
     *
     * @async
     * @minVersion 23.0
     */
    convertProfile(
        destinationProfile: string,
        intent: Constants.Intent,
        blackPointCompensation?: boolean,
        dither?: boolean,
    ): Promise<void>;
    /**
     * Applies trapping to a CMYK document.
     *
     * Valid only when [[Document.mode]] is `Constants.DocumentMode.CMYK`
     *
     * @async
     * @minVersion 23.0
     */
    trap(width: number): Promise<void>;
    /**
     * Changes the size of the canvas, but does not change image size
     * To change the image size, see [[resizeImage]]
     *
     * ```javascript
     * // grow the canvas by 400px
     * let width = await document.width
     * let height = await document.height
     * await document.resizeCanvas(width + 400, height + 400)
     * ```
     * @param width Numeric value of new width in pixels
     * @param height Numeric value of new height in pixels
     * @param anchor Anchor point for resizing, by default will resize an equal amount on all sides.
     *
     * @async
     * @minVersion 23.0
     */
    resizeCanvas(width: number, height: number, anchor?: Constants.AnchorPosition): Promise<void>;
    /**
     * Changes the size of the image
     *
     * ```javascript
     * await document.resizeImage(800, 600)
     * ```
     * @param width Numeric value of new width in pixels
     * @param height Numeric value of new height in pixels
     * @param resolution Image resolution in pixels per inch (ppi)
     * @param resampleMethod Method used during image interpolation.
     * @param amount Numeric value that controls the amount of noise value when using preserve details 0..100
     *
     * @async
     * @minVersion 23.0
     */
    resizeImage(
        width?: number,
        height?: number,
        resolution?: number,
        resampleMethod?: Constants.ResampleMethod,
        amount?: number,
    ): Promise<void>;
    /**
     * Trims the transparent area around the image on the specified sides of the canvas
     * base on trimType
     *
     * @param trimType
     * @param top
     * @param left
     * @param bottom
     * @param right
     *
     * @async
     * @minVersion 23.0
     */
    trim(trimType: Constants.TrimType, top?: boolean, left?: boolean, bottom?: boolean, right?: boolean): Promise<void>;
    /**
     * Rotates the image clockwise in given angle, expanding canvas if necessary. (Previously rotateCanvas)
     * @param angle
     *
     * @async
     * @minVersion 23.0
     */
    rotate(angles: number): Promise<void>;
    /**
     * Pastes the contents of the clipboard into the document. If the optional argument is
     * set to true and a selection is active, the contents are pasted into the selection.
     * @param intoSelection
     *
     * @async
     * @minVersion 23.0
     */
    paste(intoSelection?: boolean): Promise<Layer | null>;
    /**
     * Performs a save of the document. The user will be presented with
     * a Save dialog if the file has yet to be saved on disk.
     *
     * ```javascript
     * // To save a document in the current location
     * document.save()
     *
     * // Shows the save dialog
     * unsavedDocument.save()
     * ```
     *
     * @async
     * @minVersion 23.0
     */
    save(): Promise<void>;
    /**
     * Save the document to a desired file type.
     *
     * For operations that require a UXP File token, use the
     * [UXP storage APIs](https://www.adobe.com/go/ps-api-uxp-filesystemprovider) to generate one.
     *
     * ```javascript
     * let entry = await require('uxp').storage.localFileSystem.getFileForSaving("target.psd");
     * document.saveAs.psd(entry);
     *
     * // Save as a Copy (High JPG quality)
     * document.saveAs.jpg(entryJpg, { quality: 12 }, true);
     *
     * // Save a PSB, with some options:
     * document.saveAs.psb(entryPsb, { embedColorProfile: true });
     * ```
     * @minVersion 23.0
     */
    saveAs: {
        /**
         * Save the document as a PSD file.
         * @param entry UXP File token generated from the UXP Storage APIs.
         * @param saveOptions PSD specific save options. See SaveOptions/PhotoshopSaveOptions.
         * @param asCopy Whether to save as a copy.
         * @minVersion 23.0
         */
        psd(entry: File, saveOptions?: PhotoshopSaveOptions, asCopy?: boolean): Promise<void>;
        /**
         * Save the document as a PSB file.
         * @param entry UXP File token generated from the UXP Storage APIs.
         * @param saveOptions PSD/PSB specific save options. See SaveOptions/PhotoshopSaveOptions.
         * @param asCopy Whether to save as a copy.
         * @minVersion 23.0
         */
        psb(entry: File, saveOptions?: PhotoshopSaveOptions, asCopy?: boolean): Promise<void>;
        /**
         * @TODO reenable when we get the green-light to script PSDC
         * Save the document into Cloud Documents (PSDC).
         * @param path String title or path (separated by slash '/') location to save to.
         * @param saveOptions PSD/PSB specific save options. See SaveOptions/PhotoshopSaveOptions.
         * @minVersion ?
         */
        /**
         * Save the document as a JPG file.
         * @param entry UXP File token generated from the UXP Storage APIs.
         * @param saveOptions JPEG specific save options. See SaveOptions/JPEGSaveOptions.
         * @param asCopy Whether to save as a copy.
         * @minVersion 23.0
         */
        jpg(entry: File, saveOptions?: JPEGSaveOptions, asCopy?: boolean): Promise<void>;
        /**
         * Save the document as a GIF file.
         * @param entry UXP File token generated from the UXP Storage APIs.
         * @param saveOptions GIF specific save options. See SaveOptions/GIFSaveOptions.
         * @param asCopy Whether to save as a copy.
         * @minVersion 23.0
         */
        gif(entry: File, saveOptions?: GIFSaveOptions, asCopy?: boolean): Promise<void>;
        /**
         * Save the document as a PNG file.
         * @param entry UXP File token generated from the UXP Storage APIs.
         * @param saveOptions PNG specific save options. See SaveOptions/PNGSaveOptions.
         * @param asCopy Whether to save as a copy.
         * @minVersion 23.0
         */
        png(entry: File, saveOptions?: PNGSaveOptions, asCopy?: boolean): Promise<void>;
        /**
         * Save the document as a BMP file.
         * @param entry UXP File token generated from the UXP Storage APIs.
         * @param saveOptions JPEG specific save options. See SaveOptions/BMPSaveOptions.
         * @param asCopy Whether to save as a copy.
         * @minVersion 23.0
         */
        bmp(entry: File, saveOptions?: BMPSaveOptions, asCopy?: boolean): Promise<void>;
    };
    /**
     * Duplicates given layer(s), creating all copies above the top most one in layer stack,
     * and returns the newly created layers.
     *
     * ```javascript
     * // duplicate some layers
     * const layerCopies = await document.duplicateLayers([layer1, layer3])
     * layerCopies.forEach((layer) => { layer.blendMode = 'multiply' })
     * // ...to another document
     * const finalDoc = await photoshop.open('~/path/to/collated/image.psd')
     * await document.duplicateLayers([logo1, textLayer1], finalDoc)
     * await finalDoc.close(SaveOptions.SAVECHANGES)
     * ```
     * @param layers
     * @param targetDocument if specified, duplicate to a different document target.
     *
     * @async
     * @minVersion 23.0
     */
    duplicateLayers(layers: Layer[], targetDocument?: Document): Promise<Layer[]>;
    /**
     * Links layers together if possible, and returns a list of linked layers.
     * @param layers array of layers to link together
     * @returns array of successfully linked layers
     * @minVersion 23.0
     */
    linkLayers(layers: Layer[]): Layer[];
    /**
     * Create a new layer.
     *
     * ```javascript
     * await doc.createLayer() // defaults to pixel layer
     * ```
     * @async
     * @minVersion 23.0
     */
    createLayer(): Promise<Layer | null>;
    /**
     * Create a new pixel layer.
     *
     * ```javascript
     * await doc.createLayer(
     *   Constants.LayerKind.NORMAL,
     *   { name: "myLayer", opacity: 80, blendMode: Constants.BlendMode.COLORDODGE })
     * ```
     * @async
     * @param kind The kind of layer to create [[Constants.LayerKind]].
     * @param options The options for creation, including general layer options and those specific to the layer kind.
     * @minVersion 23.0
     */
    createLayer(kind: Constants.LayerKind.NORMAL, options?: PixelLayerCreateOptions): Promise<Layer | null>;
    /**
     * Create a new layer group.
     *
     * ```javascript
     * await doc.createLayer( Constants.LayerKind.GROUP, { name: "myLayer", opacity: 80 })
     * ```
     * @async
     * @param kind The kind of layer to create [[Constants.LayerKind]].
     * @param options The options for creation, including general layer options and those specific to the layer kind.
     * @minVersion 24.1
     */
    createLayer(kind: Constants.LayerKind.GROUP, options?: GroupLayerCreateOptions): Promise<Layer | null>;
    /**
     * Create a pixel layer using options described by [[PixelLayerCreateOptions]].
     *
     * ```javascript
     * await doc.createPixelLayer()
     * await doc.createPixelLayer({ name: "myLayer", opacity: 80, fillNeutral: true })
     * ```
     * @async
     * @minVersion 24.1
     */
    createPixelLayer(options?: PixelLayerCreateOptions): Promise<Layer | null>;
    /**
     * Create a text layer using options described by [[TextLayerCreateOptions]].
     *
     * ```javascript
     * await doc.createTextLayer()
     * await doc.createTextLayer({ name: "myTextLayer", contents: "Hello, World!", fontSize: 32 })
     * ```
     * @async
     * @minVersion 24.2
     */
    createTextLayer(options?: TextLayerCreateOptions): Promise<Layer | null>;
    /**
     * Create a layer group using options described by [[GroupLayerCreateOptions]].
     *
     * ```javascript
     * const myEmptyGroup = await doc.createLayerGroup()
     * const myGroup = await doc.createLayerGroup({ name: "myLayer", opacity: 80, blendMode: "colorDodge" })
     * const nonEmptyGroup = await doc.createLayerGroup({ name: "group", fromLayers: [layer1, layer2] })
     * const selectedGroup = await doc.createLayerGroup({ name: "group", fromLayers: doc.activeLayers })
     * ```
     * @async
     * @minVersion 23.0
     */
    createLayerGroup(options?: GroupLayerCreateOptions): Promise<Layer | null>;
    /**
     * Create a layer group from existing layers.
     *
     * ```javascript
     * const layers = doc.layers
     * const group = await doc.groupLayers([layers[1], layers[2], layers[4]])
     * ```
     * @async
     * @minVersion 23.0
     */
    groupLayers(layers: Layer[]): Promise<Layer | null>;
    /**
     * Creates a single history state encapsulating everything that is done
     * in the callback, only for this document. All changes to the document should
     * be done in this callback.
     *
     * Note: If you make changes to any other document, those changes will
     * not be suspended in the same history state.
     *
     * The callback is passed in a SuspendHistoryContext object,
     * which contains the current document in a variable `document`.
     *
     * For more info and advanced context, see [`core.executeAsModal`](../media/executeAsModal)
     * API, for which this API is a simple wrapper for.
     *
     * ```javascript
     *    require("photoshop").app.activeDocument.suspendHistory(async (context) => {
     *        // context.document is the `app.activeDocument`
     *        context.document.activeLayers[0].name = "Changed name";
     *    });
     * ```
     * @minVersion 23.0
     */
    suspendHistory(callback: (e: SuspendHistoryContext) => void, historyStateName: string): Promise<void>;
    /**
     * Returns a SolidColor object sampled from the document at the given position.
     *
     * ```javascript
     * let col = await app.activeDocument.sampleColor({x: 100, y: 100});
     * console.log(col.rgb);
     * // {
     * //    red: 233,
     * //    green: 179,
     * //    blue: 135,
     * //    hexValue: "E9B387"
     * // }
     * ```
     *
     * @param position The point to sample `{x: number, y: number}`.
     * @param position.x The horizontal coordinate in pixels.
     * @param position.y The vertical coordinate in pixels.
     * @returns A [[SolidColor]] instance of the sampled pixel
     * @async
     * @minVersion 24.0
     */
    sampleColor(position: {
        x: number;
        y: number;
    }): Promise<NoColor | SolidColor>;
    /**
     * The Calculations command lets you blend two individual channels from one or more source images. You can then
     * apply the results to a new image or to a new channel or selection in the active image.
     *
     * Performs Image > Calculations on the document. See the [[CalculationsOptions]]
     * object for more info and examples.
     *
     * ```javascript
     * const doc = app.activeDocument;
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
     * doc.calculations(options);
     *
     * ```
     *
     * Known issue: currently calculations requires having exactly one unlocked pixel layer being selected otherwise
     * it won't work. In future there should not be any layer requirements since this cannot output into layer.
     * @param calculationsOptions Option object for the calculations.
     * @async
     * @minVersion 24.5
     */
    calculations(calculationsOptions: CalculationsOptions): Promise<Document | Channel | void>;
    /**
     * All channels in the document.
     * @minVersion 23.0
     */
    get channels(): Channels;
    /**
     * Component channels in the document. [(24.6)](/ps_reference/changelog#246-bug-fixes)
     * @minVersion 24.5
     */
    get componentChannels(): Channel[];
    /**
     * Deprecated since these channels are component not composite.
     * Use `compositeChannels` above.
     * @deprecated
     * @minVersion 23.0
     */
    get compositeChannels(): Channel[];
    /**
     * Currently active channels of the document. [(24.6)](/ps_reference/changelog#246-bug-fixes)
     * @minVersion 23.0
     */
    get activeChannels(): Channel[];
    set activeChannels(channels: Channel[]);
}
