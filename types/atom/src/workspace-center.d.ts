import { Disposable, Pane, PaneItemObservedEvent, TextEditor, TextEditorObservedEvent } from '../index';

// https://github.com/atom/atom/blob/master/src/workspace-center.js
/** The central container for the editor window capable of holding items. */
export interface WorkspaceCenter {
    // Event Subscription
    /**
     *  Invoke the given callback with all current and future text editors in the
     *  workspace center.
     */
    observeTextEditors(callback: (editor: TextEditor) => void): Disposable;

    /**
     *  Invoke the given callback with all current and future panes items in the
     *  workspace center.
     */
    observePaneItems(callback: (item: object) => void): Disposable;

    /** Invoke the given callback when the active pane item changes. */
    onDidChangeActivePaneItem(callback: (item: object) => void): Disposable;

    /** Invoke the given callback when the active pane item stops changing. */
    onDidStopChangingActivePaneItem(callback: (item: object) => void): Disposable;

    /**
     *  Invoke the given callback with the current active pane item and with all future
     *  active pane items in the workspace center.
     */
    observeActivePaneItem(callback: (item: object) => void): Disposable;

    /** Invoke the given callback when a pane is added to the workspace center. */
    onDidAddPane(callback: (event: { pane: Pane }) => void): Disposable;

    /** Invoke the given callback before a pane is destroyed in the workspace center. */
    onWillDestroyPane(callback: (event: { pane: Pane }) => void): Disposable;

    /** Invoke the given callback when a pane is destroyed in the workspace center. */
    onDidDestroyPane(callback: (event: { pane: Pane }) => void): Disposable;

    /** Invoke the given callback with all current and future panes in the workspace center. */
    observePanes(callback: (pane: Pane) => void): Disposable;

    /** Invoke the given callback when the active pane changes. */
    onDidChangeActivePane(callback: (pane: Pane) => void): Disposable;

    /**
     *  Invoke the given callback with the current active pane and when the active pane
     *  changes.
     */
    observeActivePane(callback: (pane: Pane) => void): Disposable;

    /** Invoke the given callback when a pane item is added to the workspace center. */
    onDidAddPaneItem(callback: (event: PaneItemObservedEvent) => void): Disposable;

    /**
     *  Invoke the given callback when a pane item is about to be destroyed, before the user
     *  is prompted to save it.
     *  @param callback The function to be called before pane items are destroyed.
     *      If this function returns a Promise, then the item will not be destroyed
     *      until the promise resolves.
     */
    onWillDestroyPaneItem(callback: (event: PaneItemObservedEvent) => void | Promise<void>): Disposable;

    /** Invoke the given callback when a pane item is destroyed. */
    onDidDestroyPaneItem(callback: (event: PaneItemObservedEvent) => void): Disposable;

    /** Invoke the given callback when a text editor is added to the workspace center. */
    onDidAddTextEditor(callback: (event: TextEditorObservedEvent) => void): Disposable;

    // Pane Items
    /** Get all pane items in the workspace center. */
    getPaneItems(): object[];

    /** Get the active Pane's active item. */
    getActivePaneItem(): object | undefined;

    /** Get all text editors in the workspace center. */
    getTextEditors(): TextEditor[];

    /** Get the active item if it is an TextEditor. */
    getActiveTextEditor(): TextEditor | undefined;

    /** Save all pane items. */
    saveAll(): void;

    // Panes
    /** Get all panes in the workspace center. */
    getPanes(): Pane[];

    /** Get the active Pane. */
    getActivePane(): Pane;

    /** Make the next pane active. */
    activateNextPane(): void;

    /** Make the previous pane active. */
    activatePreviousPane(): void;

    /** Retrieve the Pane associated with the given URI. */
    paneForURI(uri: string): Pane | undefined;

    /** Retrieve the Pane associated with the given item. */
    paneForItem(item: object): Pane | undefined;

    /** Destroy (close) the active pane. */
    destroyActivePane(): void;
}
