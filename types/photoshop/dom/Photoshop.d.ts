import { Action, ActionSet } from "./Actions";
import { Documents } from "./collections/Documents";
import { TextFonts } from "./collections/TextFonts";
import { ColorSampler } from "./ColorSampler";
import * as Constants from "./Constants";
import { Document } from "./Document";
import { Guide } from "./Guide";
import { Layer } from "./Layer";
import { LayerComp } from "./LayerComp";
import { PathPointInfo } from "./objects/PathPointInfo";
import { SolidColor } from "./objects/SolidColor";
import { SubPathInfo } from "./objects/SubPathInfo";
import { Tool } from "./objects/Tool";
import { Preferences } from "./preferences/Preferences";
import { Selection } from "./Selection";
import { DocumentCreateOptions } from "./types/DocumentTypes";
/**
 * The top level application object, root of the Photoshop DOM
 *
 * ```javascript
 * const app = require('photoshop').app
 * ```
 *
 * From here you can access open documents, tools, UI elements and run commands or menu items.
 */
export declare class Photoshop {
    /**
     * @ignore
     */
    constructor();
    private currentDialogMode;
    /**
     * @ignore
     * Allows for polyfills into the Document class
     */
    Document: typeof Document;
    /**
     * @ignore
     * Allows for polyfills into the Layer class
     */
    Layer: typeof Layer;
    /**
     * @ignore
     * Allows for polyfills into the Action Set class
     */
    ActionSet: typeof ActionSet;
    /**
     * @ignore
     * Allows for polyfills into the Action class
     */
    Action: typeof Action;
    /**
     * @ignore
     * Allows for polyfills into the Guide class
     */
    Guide: typeof Guide;
    /**
     * @ignore
     * Allows for polyfills into the Application object
     */
    Photoshop: typeof Photoshop;
    /**
     * @ignore
     * Allows for polyfills into the LayerComp class
     */
    LayerComp: typeof LayerComp;
    /**
     * @ignore
     * Allows for polyfills into the Selection class
     */
    Selection: typeof Selection;
    /**
     * @ignore
     */
    PathPointInfo: typeof PathPointInfo;
    /**
     * @ignore
     */
    SubPathInfo: typeof SubPathInfo;
    /**
     * @ignore
     * Allows for polyfills into the Application object
     */
    ColorSampler: typeof ColorSampler;
    /**
     * The class name of the referenced object: *"Photoshop"*.
     * @minVersion 23.0
     */
    get typename(): "Photoshop";
    /**
     * @ignore
     * Disabled validation checks, use at your own risk!
     */
    set validation(enable: boolean);
    /**
     * @ignore
     * Exposes SolidColor class for constructing objects
     */
    SolidColor: typeof SolidColor;
    /**
     * Contains Photoshop preferences grouped into several categories similar to the Preferences dialog.
     * @minVersion 24.0
     */
    get preferences(): Preferences;
    /**
     * The dialog mode for the application, which controls what types of
     * dialogs should be displayed when your code is interacting with Photoshop.
     * @minVersion 23.0
     */
    get displayDialogs(): Constants.DialogModes;
    set displayDialogs(mode: Constants.DialogModes);
    /**
     * The current document that has the application's focus.
     * @minVersion 23.0
     */
    get activeDocument(): Document;
    /**
     * Set the current active document to the provided Document.
     * @minVersion 23.0
     */
    set activeDocument(doc: Document);
    /**
     * List of installed color profiles, for RGB and Gray modes.
     * @param colorMode Specify which color mode's profiles to list. (default: "RGB", options: "Gray")
     * @minVersion 24.1
     */
    getColorProfiles(colorMode?: string): string[];
    /**
     * Current selected tool. For now, the Tool class is an object with
     * only an `id` field. In the future, we aim to provide tools with their own classes.
     * @minVersion 23.0
     */
    get currentTool(): Tool;
    /**
     * Returns the action tree shown in Actions panel, as an array of ActionSets, each containing Actions.
     * @minVersion 23.0
     */
    get actionTree(): ActionSet[];
    /**
     * A list of the documents currently open.
     * @minVersion 23.0
     */
    get documents(): Documents;
    /**
     * The foreground color (used to paint, fill, and stroke selections). [(24.2)](/ps_reference/changelog#other-fixes)
     *
     * @minVersion 23.0
     */
    get foregroundColor(): SolidColor;
    set foregroundColor(color: SolidColor);
    /**
     * Convert the given value from one unit to another. Available units are:
     * Constants.Units.{CM, MM, INCHES, PIXELS, POINTS, PICAS}.
     * Use [[Document.resolution]] when converting from or to PIXELS.
     * For example, use this routine for converting a document's width from pixels to inches.
     *
     * ```javascript
     * // convert the current document's width to inches
     * const exportDoc = psApp.activeDocument;
     * let widthInInches = psApp.convertUnits(exportDoc.width,
     *                                        Constants.Units.PIXELS,
     *                                        Constant.Units.INCHES,
     *                                        exportDoc.resolution);
     *
     * ```
     * @param fromValue The value that is to be converted.
     * @param fromUnits The unit that the fromValue is in. Use [[Constants.Units]] for valid values.
     * @param toUnits The unit that the return value is in. Use [[Constants.Units]] for valid values.
     * @param resolution The pixels per inch value to use when converting to and from pixel values.
     * @minVersion 23.4
     */
    convertUnits(fromValue: number, fromUnits: Constants.Units, toUnits: Constants.Units, resolution?: number): number;
    /**
     * The background color and color style for documents. [(24.2)](/ps_reference/changelog#other-fixes)
     *
     * @minVersion 23.0
     */
    get backgroundColor(): SolidColor;
    set backgroundColor(color: SolidColor);
    /**
     * The fonts installed on this system.
     * @minVersion 23.0
     */
    get fonts(): TextFonts;
    /**
     * Shows an alert in Photoshop with the given message.
     * @minVersion 23.0
     */
    showAlert(message: string): Promise<void>;
    /**
     * At the heart of all our APIs is batchPlay. It is the evolution of executeAction. It accepts
     * ActionDescriptors deserialized from JS objects, and can play multiple descriptors sequentially
     * without updating the UI. This API is subject to change and may be accessible in other ways in the future.
     * @minVersion 23.0
     */
    batchPlay(commands: any, options: any): Promise<Array<import("./CoreModules").ActionDescriptor>>;
    /**
     * Brings application to focus, useful when your script ends, or requires an input.
     * @minVersion 23.0
     */
    bringToFront(): void;
    /**
     * Opens the specified document and returns the model
     *
     * > *Note that this API requires a
     * [UXPFileEntry](../../../uxp-api/reference-js/Modules/uxp/Persistent%20File%20Storage/File/)
     * object as its argument.
     *
     * ```javascript
     * // Open a file given entry
     * let entry = await require('uxp').storage.localFileSystem.getFileForOpening()
     * const document = await app.open(entry);
     *
     * // Show open file dialog
     * const document = await app.open();
     * ```
     * @async
     * @minVersion 23.0
     */
    open(entry?: File): Promise<Document>;
    /**
     * Create a new document.
     *
     * No options will create a document of 7 x 5 inches at 300 pixels per inch.
     * This is the same as the "Default Photoshop Size" preset.
     *
     * An object with a 'preset' string parameter can be used to specify any of
     * the other presets that come installed with Photoshop or created by users.
     *
     * An object with one or more parameters can also be supplied. Any parameter
     * missing will be set to the default of: width 2100 pixels, height 1500 pixels,
     * resolution 300 pixels per inch, mode: @RGBColorMode and a fill of white with
     * no transparency.
     *
     * ```javascript
     * // "Default Photoshop Size" 7x5 inches at 300ppi
     * let newDoc1 = await app.documents.add();
     * let newDoc2 = await app.documents.add({
     *    width: 800,
     *    height: 600,
     *    resolution: 300,
     *    mode: "RGBColorMode",
     *    fill: "transparent"
     * });
     * let newDoc3 = await app.documents.add({preset: "My Default Size 1"});
     * ```
     *
     * @param options @DocumentCreateOptions
     * @async
     * @minVersion 23.0
     */
    createDocument(options?: DocumentCreateOptions): Promise<Document | null>;
}
/** @ignore */
declare const app: Photoshop;
export default app;
