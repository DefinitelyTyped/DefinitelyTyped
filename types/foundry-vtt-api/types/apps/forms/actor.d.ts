declare interface ActorSheetData extends BaseEntitySheetData {
    actor: Actor;
    data: ActorData;
    items: Item[];
}

/**
 * The default Actor Sheet
 *
 * This Application is responsible for rendering an actor's attributes and allowing the actor to be edited.
 *
 * System modifications may elect to override this class to better suit their own game system by re-defining the value
 * ``CONFIG.Actor.sheetClass``.
 *
 * @param actor				The Actor instance being displayed within the sheet.
 * @param options			Additional options which modify the rendering of the Actor's sheet.
 * @param options.editable	Is the Actor editable? Default is true.
 */
declare class ActorSheet extends BaseEntitySheet {
    /**
     * If this Actor Sheet represents a synthetic Token actor, reference the active Token
     */
    token: Token;

    constructor(...args: any);

    /**
     * Default rendering and configuration options used for the ActorSheet and its subclasses.
     * See `Application.defaultOptions` and `FormApplication.defaultOptions` for more details.
     */
    static get defaultOptions(): FormApplicationOptions;

    /**
     * Define a unique and dynamic element ID for the rendered ActorSheet application
     */
    get id(): string;

    /**
     * The displayed window title for the sheet - the entity name by default
     */
    get title(): string;

    /**
     * A convenience reference to the Actor entity
     */
    get actor(): Actor;

    /**
     * Prepare data for rendering the Actor sheet
     * The prepared data object contains both the actor data as well as additional sheet options
     */
    getData(): ActorSheetData;

    /**
     * Extend the Header Button configuration for the ActorSheet to add Token configuration buttons
     * See Application._getHeaderButtons for documentation of the return Array structure.
     */
    protected _getHeaderButtons(): any[];

    /**
     * Remove references to an active Token when the sheet is closed
     * See Application.close for more detail
     */
    close(): Promise<void>;

    /**
     * Activate the default set of listeners for the Actor Sheet
     * These listeners handle basic stuff like form submission or updating images
     *
     * @param html	The rendered template ready to have listeners attached
     */
    protected activateListeners(html: JQuery | HTMLElement): void;

    /**
     * Handle requests to configure the prototype Token for the Actor
     */
    protected _onConfigureToken(event: Event | JQuery.Event): void;

    /**
     * Handle requests to configure the default sheet used by this Actor
     */
    protected _onConfigureSheet(event: Event | JQuery.Event): void;

    /**
     * Handle changing the actor profile image by opening a FilePicker
     */
    protected _onEditImage(event: Event | JQuery.Event): void;

    /**
     * Default handler for beginning a drag-drop workflow of an Owned Item on an Actor Sheet
     */
    protected _onDragItemStart(event: Event | JQuery.Event): boolean;

    /**
     * Allow the Actor sheet to be a displayed as a valid drop-zone
     */
    protected _onDragOver(event: Event | JQuery.Event): boolean;

    /**
     * Handle dropped data on the Actor sheet
     */
    protected _onDrop(event: Event | JQuery.Event): Promise<boolean | any>;

    /* -------------------------------------------- */
    /*  Owned Item Sorting
	/* -------------------------------------------- */

    /**
     * Handle a drop event for an existing Owned Item to sort that item
     */
    protected _onSortItem(event: Event | JQuery.Event, itemData: object): Promise<any>;

    protected _getSortSiblings(source: any): any;
}
