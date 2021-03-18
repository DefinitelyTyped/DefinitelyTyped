import {
    CancellablePromise,
    Disposable,
    Dock,
    Pane,
    PaneItemObservedEvent,
    PaneItemOpenedEvent,
    Panel,
    TextEditor,
    TextEditorObservedEvent,
    ViewModel,
    WorkspaceCenter,
} from '../index';

/** Represents the state of the user interface for the entire window. */
export interface Workspace {
    // Event Subscription
    /**
     *  Invoke the given callback with all current and future text editors in
     *  the workspace.
     */
    observeTextEditors(callback: (editor: TextEditor) => void): Disposable;

    /**
     *  Invoke the given callback with all current and future panes items in the
     *  workspace.
     */
    observePaneItems(callback: (item: object) => void): Disposable;

    /** Invoke the given callback when the active pane item changes. */
    onDidChangeActivePaneItem(callback: (item: object) => void): Disposable;

    /** Invoke the given callback when the active pane item stops changing. */
    onDidStopChangingActivePaneItem(callback: (item: object) => void): Disposable;

    /**
     *  Invoke the given callback when a text editor becomes the active text editor and
     *  when there is no longer an active text editor.
     */
    onDidChangeActiveTextEditor(callback: (editor?: TextEditor) => void): Disposable;

    /**
     *  Invoke the given callback with the current active pane item and with all
     *  future active pane items in the workspace.
     */
    observeActivePaneItem(callback: (item: object) => void): Disposable;

    /**
     *  Invoke the given callback with the current active text editor (if any), with all
     *  future active text editors, and when there is no longer an active text editor.
     */
    observeActiveTextEditor(callback: (editor?: TextEditor) => void): Disposable;

    /**
     *  Invoke the given callback whenever an item is opened. Unlike ::onDidAddPaneItem,
     *  observers will be notified for items that are already present in the workspace
     *  when they are reopened.
     */
    onDidOpen(callback: (event: PaneItemOpenedEvent) => void): Disposable;

    /** Invoke the given callback when a pane is added to the workspace. */
    onDidAddPane(callback: (event: { pane: Pane }) => void): Disposable;

    /** Invoke the given callback before a pane is destroyed in the workspace. */
    onWillDestroyPane(callback: (event: { pane: Pane }) => void): Disposable;

    /** Invoke the given callback when a pane is destroyed in the workspace. */
    onDidDestroyPane(callback: (event: { pane: Pane }) => void): Disposable;

    /** Invoke the given callback with all current and future panes in the workspace. */
    observePanes(callback: (pane: Pane) => void): Disposable;

    /** Invoke the given callback when the active pane changes. */
    onDidChangeActivePane(callback: (pane: Pane) => void): Disposable;

    /**
     *  Invoke the given callback with the current active pane and when the
     *  active pane changes.
     */
    observeActivePane(callback: (pane: Pane) => void): Disposable;

    /** Invoke the given callback when a pane item is added to the workspace. */
    onDidAddPaneItem(callback: (event: PaneItemObservedEvent) => void): Disposable;

    /**
     *  Invoke the given callback when a pane item is about to be destroyed,
     *  before the user is prompted to save it.
     *  @param callback The function to be called before pane items are destroyed.
     *      If this function returns a Promise, then the item will not be destroyed
     *      until the promise resolves.
     */
    onWillDestroyPaneItem(callback: (event: PaneItemObservedEvent) => void | Promise<void>): Disposable;

    /** Invoke the given callback when a pane item is destroyed. */
    onDidDestroyPaneItem(callback: (event: PaneItemObservedEvent) => void): Disposable;

    /** Invoke the given callback when a text editor is added to the workspace. */
    onDidAddTextEditor(callback: (event: TextEditorObservedEvent) => void): Disposable;

    // Opening
    /**
     *  Opens the given URI in Atom asynchronously. If the URI is already open,
     *  the existing item for that URI will be activated. If no URI is given, or
     *  no registered opener can open the URI, a new empty TextEditor will be created.
     */
    open(uri: string, options?: WorkspaceOpenOptions): Promise<object>;
    /**
     *  Opens the given item in Atom asynchronously. If the item is already open,
     *  the existing item will be activated. If no item is given, a new empty TextEditor
     *  will be created.
     */
    open<T extends ViewModel = ViewModel>(item: T, options?: WorkspaceOpenOptions): Promise<T>;
    /**
     *  Opens the given URI in Atom asynchronously. If the URI is already open,
     *  the existing item for that URI will be activated. If no URI is given, or
     *  no registered opener can open the URI, a new empty TextEditor will be created.
     */
    open(): Promise<TextEditor>;

    /**
     *  Search the workspace for items matching the given URI and hide them.
     *  Returns a boolean indicating whether any items were found (and hidden).
     */
    hide(itemOrURI: object | string): boolean;

    /**
     *  Search the workspace for items matching the given URI. If any are found,
     *  hide them. Otherwise, open the URL.
     *  Returns a Promise that resolves when the item is shown or hidden.
     */
    toggle(itemOrURI: object | string): Promise<void>;

    /**
     *  Creates a new item that corresponds to the provided URI.
     *  If no URI is given, or no registered opener can open the URI, a new empty TextEditor
     *  will be created.
     */
    createItemForURI(uri: string): Promise<object | TextEditor>;

    /** Returns a boolean that is true if object is a TextEditor. */
    isTextEditor(object: object): object is TextEditor;

    /**
     *  Asynchronously reopens the last-closed item's URI if it hasn't already
     *  been reopened.
     */
    reopenItem(): Promise<object | undefined>;

    /** Register an opener for a URI. */
    addOpener(opener: (uri: string, options?: WorkspaceOpenOptions) => ViewModel | undefined): Disposable;

    /** Create a new text editor. */
    buildTextEditor(params: object): TextEditor;

    // Pane Items
    /** Get all pane items in the workspace. */
    getPaneItems(): object[];

    /** Get the active Pane's active item. */
    getActivePaneItem(): object;

    /** Get all text editors in the workspace. */
    getTextEditors(): TextEditor[];

    /** Get the workspace center's active item if it is a TextEditor. */
    getActiveTextEditor(): TextEditor | undefined;

    // Panes
    /** Get the most recently focused pane container. */
    getActivePaneContainer(): Dock | WorkspaceCenter;

    /** Get all panes in the workspace. */
    getPanes(): Pane[];

    /** Get the active Pane. */
    getActivePane(): Pane;

    /** Make the next pane active. */
    activateNextPane(): boolean;

    /** Make the previous pane active. */
    activatePreviousPane(): boolean;

    /** Get the first pane container that contains an item with the given URI. */
    paneContainerForURI(uri: string): Dock | WorkspaceCenter | undefined;

    /** Get the first pane container that contains the given item. */
    paneContainerForItem(item: object): Dock | WorkspaceCenter | undefined;

    /** Get the first Pane with an item for the given URI. */
    paneForURI(uri: string): Pane | undefined;

    /** Get the Pane containing the given item. */
    paneForItem(item: object): Pane | undefined;

    // Pane Locations
    /** Get the WorkspaceCenter at the center of the editor window. */
    getCenter(): WorkspaceCenter;

    /** Get the Dock to the left of the editor window. */
    getLeftDock(): Dock;

    /** Get the Dock to the right of the editor window. */
    getRightDock(): Dock;

    /** Get the Dock below the editor window. */
    getBottomDock(): Dock;

    /** Returns all Pane containers. */
    getPaneContainers(): [WorkspaceCenter, Dock, Dock, Dock];

    // Panels
    /** Get an Array of all the panel items at the bottom of the editor window. */
    getBottomPanels(): Panel[];

    /** Adds a panel item to the bottom of the editor window. */
    addBottomPanel<T>(options: { item: T; visible?: boolean; priority?: number }): Panel<T>;

    /** Get an Array of all the panel items to the left of the editor window. */
    getLeftPanels(): Panel[];

    /** Adds a panel item to the left of the editor window. */
    addLeftPanel<T>(options: { item: T; visible?: boolean; priority?: number }): Panel<T>;

    /** Get an Array of all the panel items to the right of the editor window. */
    getRightPanels(): Panel[];

    /** Adds a panel item to the right of the editor window. */
    addRightPanel<T>(options: { item: T; visible?: boolean; priority?: number }): Panel<T>;

    /** Get an Array of all the panel items at the top of the editor window. */
    getTopPanels(): Panel[];

    /** Adds a panel item to the top of the editor window above the tabs. */
    addTopPanel<T>(options: { item: T; visible?: boolean; priority?: number }): Panel<T>;

    /** Get an Array of all the panel items in the header. */
    getHeaderPanels(): Panel[];

    /** Adds a panel item to the header. */
    addHeaderPanel<T>(options: { item: T; visible?: boolean; priority?: number }): Panel<T>;

    /** Get an Array of all the panel items in the footer. */
    getFooterPanels(): Panel[];

    /** Adds a panel item to the footer. */
    addFooterPanel<T>(options: { item: T; visible?: boolean; priority?: number }): Panel<T>;

    /** Get an Array of all the modal panel items. */
    getModalPanels(): Panel[];

    /** Adds a panel item as a modal dialog. */
    addModalPanel<T>(options: {
        item: T;
        visible?: boolean;
        priority?: number;
        autoFocus?: boolean | FocusableHTMLElement;
    }): Panel<T>;

    /**
     *  Returns the Panel associated with the given item or null when the item
     *  has no panel.
     */
    panelForItem<T>(item: T): Panel<T> | null;

    // Searching and Replacing
    /** Performs a search across all files in the workspace. */
    scan(regex: RegExp, iterator: (result: ScandalResult) => void): CancellablePromise<string | null>;
    /** Performs a search across all files in the workspace. */
    scan(
        regex: RegExp,
        options: WorkspaceScanOptions,
        iterator: (result: ScandalResult) => void,
    ): CancellablePromise<string | null>;

    /** Performs a replace across all the specified files in the project. */
    replace(
        regex: RegExp,
        replacementText: string,
        filePaths: ReadonlyArray<string>,
        iterator: (result: { filePath: string | undefined; replacements: number }) => void,
    ): Promise<void>;
}

export interface WorkspaceOpenOptions {
    /** A number indicating which row to move the cursor to initially. Defaults to 0. */
    initialLine?: number;

    /** A number indicating which column to move the cursor to initially. Defaults to 0. */
    initialColumn?: number;

    /**
     *  Either 'left', 'right', 'up' or 'down'. If 'left', the item will be opened in
     *  leftmost pane of the current active pane's row. If 'right', the item will be
     *  opened in the rightmost pane of the current active pane's row. If only one pane
     *  exists in the row, a new pane will be created. If 'up', the item will be opened
     *  in topmost pane of the current active pane's column. If 'down', the item will be
     *  opened in the bottommost pane of the current active pane's column. If only one pane
     *  exists in the column, a new pane will be created.
     */
    split?: 'left' | 'right' | 'up' | 'down';

    /**
     *  A boolean indicating whether to call Pane::activate on containing pane.
     *  Defaults to true.
     */
    activatePane?: boolean;

    /**
     *  A boolean indicating whether to call Pane::activateItem on containing pane.
     *  Defaults to true.
     */
    activateItem?: boolean;

    /**
     *  A Boolean indicating whether or not the item should be opened in a pending state.
     *  Existing pending items in a pane are replaced with new pending items when they
     *  are opened.
     */
    pending?: boolean;

    /**
     *  A boolean. If true, the workspace will attempt to activate an existing item for
     *  the given URI on any pane. If false, only the active pane will be searched for
     *  an existing item for the same URI. Defaults to false.
     */
    searchAllPanes?: boolean;

    /**
     *  A String containing the name of the location in which this item should be opened.
     *  If omitted, Atom will fall back to the last location in which a user has placed
     *  an item with the same URI or, if this is a new URI, the default location specified
     *  by the item.
     *  NOTE: This option should almost always be omitted to honor user preference.
     */
    location?: 'left' | 'right' | 'bottom' | 'center';
}

export interface WorkspaceScanOptions {
    /** An array of glob patterns to search within. */
    paths?: ReadonlyArray<string>;

    /** A function to be periodically called with the number of paths searched. */
    onPathsSearched?(pathsSearched: number): void;

    /** The number of lines before the matched line to include in the results object. */
    leadingContextLineCount?: number;

    /** The number of lines after the matched line to include in the results object. */
    trailingContextLineCount?: number;
}

export interface ScandalResult {
    filePath: string;
    matches: Array<{
        matchText: string;
        lineText: string;
        lineTextOffset: number;
        range: [[number, number], [number, number]];
        leadingContextLines: string[];
        trailingContextLines: string[];
    }>;
}

/**
 *  The type used by the `focus-trap` library to target a specific DOM node.
 *
 *  A DOM node, a selector string (which will be passed to `document.querySelector()`
 *  to find the DOM node), or a function that returns a DOM node.
 */
export type FocusableHTMLElement = HTMLElement | string | { (): HTMLElement };
