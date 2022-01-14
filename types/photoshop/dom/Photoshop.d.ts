import { Document } from "./Document";
import { Layer } from "./Layer";
import { ActionSet, Action } from "./Actions";
import * as Constants from "./Constants";
import { SolidColor } from "./objects/SolidColor";
import { Documents } from "./collections/Documents";
import { TextFonts } from "./collections/TextFonts";
import { Tool } from "./objects/Tool";
import { DocumentCreateOptions } from "./objects/CreateOptions";
/**
 * The top level application object, root of the Photoshop DOM
 *
 * ```
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
     * Allows for polyfills into the Application object
     */
    Photoshop: typeof Photoshop;
    /**
     * The class name of the referenced Photoshop object
     */
    get typename(): string;
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
     * The dialog mode for the application, which controls what types of
     * dialogs should be displayed when your plugin is interacting with Photoshop.
     */
    get displayDialogs(): Constants.DialogModes;
    set displayDialogs(mode: Constants.DialogModes);
    /**
     * The current active document
     */
    get activeDocument(): Document;
    /**
     * Set the current active document to the provided Document
     */
    set activeDocument(doc: Document);
    /**
     * Current selected tool. For now, the Tool class is an object with
     * only an `id` field. In the future, we aim to provide tools with their own classes
     */
    get currentTool(): Tool;
    /**
     * Returns the action tree shown in Actions panel, as an array of ActionSets, each containing actions
     */
    get actionTree(): ActionSet[];
    /**
     * A list of the documents currently open
     */
    get documents(): Documents;
    /**
     * The default foreground color (used to paint, fill, and stroke selections)
     */
    get foregroundColor(): SolidColor;
    set foregroundColor(color: SolidColor);
    /**
     * The default background color and color style for documents.
     */
    get backgroundColor(): SolidColor;
    /**
     * The fonts installed on this system.
     */
    get fonts(): TextFonts;
    /**
     * Shows an alert in Photoshop with the given message
     */
    showAlert(message: string): Promise<void>;
    /**
     * At the heart of all our APIs is batchPlay. It is the evolution of executeAction. It accepts
     * ActionDescriptors deserialized from JS objects, and can play multiple descriptors sequentially
     * without updating the UI. This API is subject to change and may be accessible in other ways in the future.
     *
     */
    batchPlay(commands: any, options: any): Promise<import("./CoreModules").ActionDescriptor[]>;
    /**
     * Brings application to focus, useful when your script ends, or requires an input
     */
    bringToFront(): void;
    /**
     * Opens the specified document and returns it's model
     *
     * > (0.4.0) Please note that this API now requires you to provide a UXPFileEntry
     *
     * @async
     *
     * ```javascript
     * // Open a file given entry
     * let entry = await require('uxp').storage.localFileSystem.getFileForOpening()
     * const document = await app.open(entry);
     *
     * // Show open file dialog
     * const document = await app.open();
     * ```
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
     * @param options @DocumentCreateOptions
     *
     * @async
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
     */
    createDocument(options?: DocumentCreateOptions): Promise<Document | null>;
}
/** @ignore */
declare const app: Photoshop;
export default app;
