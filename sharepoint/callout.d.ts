// Type definitions for SharePoint JSOM
// Project: https://github.com/gandjustas/sptypescript
// Definitions by: Stanislav Vyshchepan <http://blog.gandjustas.ru>, Andrey Markeev <http://markeev.com>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

declare class CalloutActionOptions {
    /** Text for the action link */
    text: string;
    tooltip: string;
    disabledTooltip: string;
    /** Callback that is executed when the action link is clicked.
        @param event Standard javascript event object
        @param action The action object */
    onClickCallback: (event: Event, action: CalloutAction) => any;
    /** Callback which returns if the action link is enabled */
    isEnabledCallback: (action: CalloutAction) => boolean;
    /** Callback which returns if the action link is visible */
    isVisibleCallback: (action: CalloutAction) => boolean;
    /** Submenu entries for the action. If defined, the action link click will popup the specified menu. */
    menuEntries: CalloutActionMenuEntry[];
}

/** Defines a callout action menu entry */
declare class CalloutActionMenuEntry {
    /** Creates a callout action menu entry
        @param text Text to be displayed as the menu item text
        @param onClickCallback Callback that will be fired when the item is clicked
        @param wzISrc Url of the icon
        @param wzIAlt Alternative text for the icon image
        @param wzISeq Sequence for the menu item
        @param wzDesc Description of the menu item */
    constructor(
        text: string,
        onClickCallback: (actionMenuEntry: CalloutActionMenuEntry, actionMenuEntryIndex: number) => void,
        wzISrc: string,
        wzIAlt: string,
        wzISeq: number,
        wzDesc: string);
}


declare class CalloutActionMenu {
    constructor(actionsId: any);
    addAction(action: CalloutAction): void;
    getActions(): CalloutAction[];
    render(): void;
    refreshActions(): void;
    calculateActionWidth(): void;
}


declare class CalloutAction {
    constructor(options: CalloutActionOptions);
    getText(): string;
    getToolTop(): string;
    getDisabledToolTip(): string;
    getOnClickCallback(event: any, action: CalloutAction): any;
    getIsDisabledCallback(action: CalloutAction): boolean;
    getIsVisibleCallback(action: CalloutAction): boolean;
    getIsMenu(): boolean;
    getMenuEntries(): CalloutActionMenuEntry[];
    render(): void;
    isEnabled(): boolean;
    isVisible(): boolean;
    set(options: CalloutActionOptions): void;
}

declare class Callout {
    /** Sets options for the callout. Not all options can be changed for the callout after its creation. */
    set(options: CalloutOptions): any;
    /** Adds event handler to the callout.
        @param eventName one of the following: "opened", "opening", "closing", "closed" */
    addEventCallback(eventName: string, callback: (callout: Callout) => void): void;
    /** Returns the launch point element of the callout. */
    getLaunchPoint(): HTMLElement;
    /** Returns the ID of the callout. */
    getID(): string;
    /** Returns the title of the callout. */
    getTitle(): string;
    /** Returns the contents of the callout. */
    getContent(): string;
    /** Returns the content element of the callout. */
    getContentElement(): HTMLElement;
    /** Returns the bounding element defined for the callout during its creation. */
    getBoundingBox(): HTMLElement;
    /** Returns the content width defined for the callout during its creation. */
    getContentWidth(): number;
    /** Returns the object that represents open behaivor defined for the callout during its creation. */
    getOpenOptions(): CalloutOpenOptions;
    /** Returns the beak orientation defined for the callout during its creation. */
    getBeakOrientation(): string;
    /** Returns the position algorithm function defined for the callout during its creation. */
    getPositionAlgorithm(): any;
    /** Specifies wherever callout is in "Opened" state */
    isOpen(): boolean;
    /** Specifies wherever callout is in "Opening" state */
    isOpening(): boolean;
    /** Specifies wherever callout is in "Opened" or "Opening" state */
    isOpenOrOpening(): boolean;
    /** Specifies wherever callout is in "Closing" state */
    isClosing(): boolean;
    /** Specifies wherever callout is in "Closed" state */
    isClosed(): boolean;
    /** Returns the callout actions menu */
    getActionMenu(): CalloutActionMenu;
    /** Adds a link to the actions panel in the bottom part of the callout window */
    addAction(action: CalloutAction): void;
    /** Re-renders the actions menu. Call after the actions menu is changed. */
    refreshActions(): void;
    /** Display the callout. Animation can be used only for IE9+ */
    open(useAnimation: boolean): void;
    /** Hide the callout. Animation can be used only for IE9+ */
    close(useAnimation: boolean): void;
    /** Display if hidden, hide if shown. */
    toggle(): void;
    /** Do not call this directly. Instead, use CalloutManager.remove */
    destroy(): void;
}

declare class CalloutOpenOptions {
    /** HTML event name, e.g. "click" */
    event: string;
    /** Callout will be closed on blur */
    closeCalloutOnBlur: boolean;
    /** Close button will be shown within the callout window */
    showCloseButton: boolean;
}

declare class CalloutOptions {
    /** Some unique id for the callout. */
    ID: string;
    /** Element on that the callout is shown. */
    launchPoint: HTMLElement;
    /** One of the following: "topBottom" (default) or "leftRight". */
    beakOrientation: string;
    /** String (HTML allowed) that represents contents of the callout window. */
    content: string;
    /** Title for the callout */
    title: string;
    /** HTML element that represents contents of the callout window. */
    contentElement: HTMLElement;
    /** If defined, callout will be inscribed into the bounding element. */
    boundingBox: HTMLElement;
    /** Content element's width in pixels. By default = 350. */
    contentWidth: number;
    /** Defines opening behavior */
    openOptions: CalloutOpenOptions;
    /** Fires after the callout is rendered but before it is positioned and shown */
    onOpeningCallback: (callout: Callout) => void;
    /** Fires right after the callout is shown */
    onOpenedCallback: (callout: Callout) => void;
    /** Fires right before the callout is closed */
    onClosingCallback: (callout: Callout) => void;
    /** Fires right after the callout is closed */
    onClosedCallback: (callout: Callout) => void;
    /** Sets the position of the callout during its opening phase. For an example of a position algorithm function, please explore defaultPositionAlgorithm function from the callout.debug.js file */
    positionAlgorithm: (callout: Callout) => void;
}


declare class CalloutManager {
    /** Creates a new callout */
    static createNew(options: CalloutOptions): Callout;
    /** Checks if callout with specified ID already exists. If it doesn't, creates it, otherwise returns the existing one. */
    static createNewIfNecessary(options: CalloutOptions): Callout;
    /** Detaches callout from the launch point and destroys it. */
    static remove(callout: Callout): void;
    /** Searches for a callout associated with the specified launch point. Throws error if not found. */
    static getFromLaunchPoint(launchPoint: HTMLElement): Callout;
    /** Searches for a callout associated with the specified launch point. Returns null if not found. */
    static getFromLaunchPointIfExists(launchPoint: HTMLElement): Callout;
    /** Gets the first launch point within the specified ancestor element, and returns true if the associated with it callout is opened or opening.
        If the launch point is not found or the callout is hidden, returns false. */
    static containsOneCalloutOpen(ancestor: HTMLElement): boolean;
    /** Finds the closest launch point based on the specified descendant element, and returns callout associated with the launch point. */
    static getFromCalloutDescendant(descendant: HTMLElement): Callout;
    /** Perform some action for each callout on the page. */
    static forEach(callback: (callout: Callout) => void): void;
    /** Closes all callouts on the page */
    static closeAll(): boolean;
    /** Returns true if at least one of the defined on page callouts is opened. */
    static isAtLeastOneCalloutOpen(): boolean;
    /** Returns true if at least one of the defined on page callouts is opened or opening. */
    static isAtLeastOneCalloutOn(): boolean;
}
