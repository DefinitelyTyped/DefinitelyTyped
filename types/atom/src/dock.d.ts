import { Disposable, Pane, PaneItemObservedEvent } from '../index';

/** A container at the edges of the editor window capable of holding items. */
export interface Dock {
    // Methods
    /** Show the dock and focus its active Pane. */
    activate(): void;

    /** Show the dock without focusing it. */
    show(): void;

    /**
     *  Hide the dock and activate the WorkspaceCenter if the dock was was previously
     *  focused.
     */
    hide(): void;

    /**
     *  Toggle the dock's visibility without changing the Workspace's active pane
     *  container.
     */
    toggle(): void;

    /** Check if the dock is visible. */
    isVisible(): boolean;

    // Event Subscription
    /** Invoke the given callback when the visibility of the dock changes. */
    onDidChangeVisible(callback: (visible: boolean) => void): Disposable;

    /**
     *  Invoke the given callback with the current and all future visibilities of
     *  the dock.
     */
    observeVisible(callback: (visible: boolean) => void): Disposable;

    /** Invoke the given callback with all current and future panes items in the dock. */
    observePaneItems(callback: (item: object) => void): Disposable;

    /**
     *  Invoke the given callback when the active pane item changes.
     *
     *  Because observers are invoked synchronously, it's important not to perform any
     *  expensive operations via this method. Consider ::onDidStopChangingActivePaneItem
     *  to delay operations until after changes stop occurring.
     */
    onDidChangeActivePaneItem(callback: (item: object) => void): Disposable;

    /** Invoke the given callback when the active pane item stops changing. */
    onDidStopChangingActivePaneItem(callback: (item: object) => void): Disposable;

    /**
     *  Invoke the given callback with the current active pane item and with all future
     *  active pane items in the dock.
     */
    observeActivePaneItem(callback: (item: object) => void): Disposable;

    /** Invoke the given callback when a pane is added to the dock. */
    onDidAddPane(callback: (event: { pane: Pane }) => void): Disposable;

    /** Invoke the given callback before a pane is destroyed in the dock. */
    onWillDestroyPane(callback: (event: { pane: Pane }) => void): Disposable;

    /** Invoke the given callback when a pane is destroyed in the dock. */
    onDidDestroyPane(callback: (event: { pane: Pane }) => void): Disposable;

    /** Invoke the given callback with all current and future panes in the dock. */
    observePanes(callback: (pane: Pane) => void): Disposable;

    /** Invoke the given callback when the active pane changes. */
    onDidChangeActivePane(callback: (pane: Pane) => void): Disposable;

    /**
     *  Invoke the given callback with the current active pane and when the active
     *  pane changes.
     */
    observeActivePane(callback: (pane: Pane) => void): Disposable;

    /** Invoke the given callback when a pane item is added to the dock. */
    onDidAddPaneItem(callback: (event: PaneItemObservedEvent) => void): Disposable;

    /**
     *  Invoke the given callback when a pane item is about to be destroyed, before the user is
     *  prompted to save it.
     *  @param callback The function to be called before pane items are destroyed.
     *      If this function returns a Promise, then the item will not be destroyed
     *      until the promise resolves.
     */
    onWillDestroyPaneItem(callback: (event: PaneItemObservedEvent) => void | Promise<void>): Disposable;

    /** Invoke the given callback when a pane item is destroyed. */
    onDidDestroyPaneItem(callback: (event: PaneItemObservedEvent) => void): Disposable;

    /**
     *  Invoke the given callback when the hovered state of the dock changes.
     *  @param hovered Is the dock now hovered?
     */
    onDidChangeHovered(callback: (hovered: boolean) => void): Disposable;

    // Pane Items
    /** Get all pane items in the dock. */
    getPaneItems(): object[];

    /** Get the active Pane's active item. */
    getActivePaneItem(): object;

    // Panes
    /** Returns an Array of Panes. */
    getPanes(): Pane[];

    /** Get the active Pane. */
    getActivePane(): Pane;

    /** Make the next pane active. */
    activateNextPane(): boolean;

    /** Make the previous pane active. */
    activatePreviousPane(): boolean;
}
