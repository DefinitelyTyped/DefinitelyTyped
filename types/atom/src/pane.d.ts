import { Disposable } from '../index';

/** A container for presenting content in the center of the workspace. */
export interface Pane {
    // Event Subscription
    /** Invoke the given callback when the pane resizes. */
    onDidChangeFlexScale(callback: (flexScale: number) => void): Disposable;

    /** Invoke the given callback with the current and future values of ::getFlexScale. */
    observeFlexScale(callback: (flexScale: number) => void): Disposable;

    /** Invoke the given callback when the pane is activated. */
    onDidActivate(callback: () => void): Disposable;

    /** Invoke the given callback before the pane is destroyed. */
    onWillDestroy(callback: () => void): Disposable;

    /** Invoke the given callback when the pane is destroyed. */
    onDidDestroy(callback: () => void): Disposable;

    /** Invoke the given callback when the value of the ::isActive property changes. */
    onDidChangeActive(callback: (active: boolean) => void): Disposable;

    /**
     *  Invoke the given callback with the current and future values of the ::isActive
     *  property.
     */
    observeActive(callback: (active: boolean) => void): Disposable;

    /** Invoke the given callback when an item is added to the pane. */
    onDidAddItem(callback: (event: PaneListItemShiftedEvent) => void): Disposable;

    /** Invoke the given callback when an item is removed from the pane. */
    onDidRemoveItem(callback: (event: PaneListItemShiftedEvent) => void): Disposable;

    /** Invoke the given callback before an item is removed from the pane. */
    onWillRemoveItem(callback: (event: PaneListItemShiftedEvent) => void): Disposable;

    /** Invoke the given callback when an item is moved within the pane. */
    onDidMoveItem(callback: (event: PaneItemMovedEvent) => void): Disposable;

    /** Invoke the given callback with all current and future items. */
    observeItems(callback: (item: object) => void): Disposable;

    /** Invoke the given callback when the value of ::getActiveItem changes. */
    onDidChangeActiveItem(callback: (activeItem: object) => void): Disposable;

    /**
     *  Invoke the given callback when ::activateNextRecentlyUsedItem has been called,
     *  either initiating or continuing a forward MRU traversal of pane items.
     */
    onChooseNextMRUItem(callback: (nextRecentlyUsedItem: object) => void): Disposable;

    /**
     *  Invoke the given callback when ::activatePreviousRecentlyUsedItem has been called,
     *  either initiating or continuing a reverse MRU traversal of pane items.
     */
    onChooseLastMRUItem(callback: (previousRecentlyUsedItem: object) => void): Disposable;

    /**
     *  Invoke the given callback when ::moveActiveItemToTopOfStack has been called,
     *  terminating an MRU traversal of pane items and moving the current active item
     *  to the top of the stack. Typically bound to a modifier (e.g. CTRL) key up event.
     */
    onDoneChoosingMRUItem(callback: () => void): Disposable;

    /** Invoke the given callback with the current and future values of ::getActiveItem. */
    observeActiveItem(callback: (activeItem: object) => void): Disposable;

    /** Invoke the given callback before items are destroyed. */
    onWillDestroyItem(callback: (event: PaneListItemShiftedEvent) => void): Disposable;

    // Items
    /** Get the items in this pane. */
    getItems(): object[];

    /** Get the active pane item in this pane. */
    getActiveItem(): object;

    /** Return the item at the given index. */
    itemAtIndex(index: number): object | undefined;

    /** Makes the next item active. */
    activateNextItem(): void;

    /** Makes the previous item active. */
    activatePreviousItem(): void;

    /** Move the active tab to the right. */
    moveItemRight(): void;

    /** Move the active tab to the left. */
    moveItemLeft(): void;

    /** Get the index of the active item. */
    getActiveItemIndex(): number;

    /** Activate the item at the given index. */
    activateItemAtIndex(index: number): void;

    /** Make the given item active, causing it to be displayed by the pane's view. */
    activateItem(item: object, options?: { pending: boolean }): void;

    /** Add the given item to the pane. */
    addItem(item: object, options?: { index?: number; pending?: boolean }): object;

    /** Add the given items to the pane. */
    addItems(items: object[], index?: number): object[];

    /** Move the given item to the given index. */
    moveItem(item: object, index: number): void;

    /** Move the given item to the given index on another pane. */
    moveItemToPane(item: object, pane: Pane, index: number): void;

    /** Destroy the active item and activate the next item. */
    destroyActiveItem(): Promise<boolean>;

    /** Destroy the given item. */
    destroyItem(item: object, force?: boolean): Promise<boolean>;

    /** Destroy all items. */
    destroyItems(): Promise<boolean[]>;

    /** Destroy all items except for the active item. */
    destroyInactiveItems(): Promise<boolean[]>;

    /** Save the active item. */
    saveActiveItem<T = void>(nextAction?: (error?: Error) => T): Promise<T> | undefined;

    /**
     *  Prompt the user for a location and save the active item with the path
     *  they select.
     */
    saveActiveItemAs<T = void>(nextAction?: (error?: Error) => T): Promise<T> | undefined;

    /** Save the given item. */
    saveItem<T = void>(item: object, nextAction?: (error?: Error) => T): Promise<T> | undefined;

    /**
     *  Prompt the user for a location and save the active item with the path
     *  they select.
     */
    saveItemAs<T = void>(item: object, nextAction?: (error?: Error) => T): Promise<T> | undefined;

    /** Save all items. */
    saveItems(): void;

    /** Return the first item that matches the given URI or undefined if none exists. */
    itemForURI(uri: string): object | undefined;

    /** Activate the first item that matches the given URI. */
    activateItemForURI(uri: string): boolean;

    // Lifecycle
    /** Determine whether the pane is active. */
    isActive(): boolean;

    /** Makes this pane the active pane, causing it to gain focus. */
    activate(): void;

    /** Close the pane and destroy all its items. */
    destroy(): void;

    /** Determine whether this pane has been destroyed. */
    isDestroyed(): boolean;

    // Splitting
    /** Create a new pane to the left of this pane. */
    splitLeft(params?: { items?: object[]; copyActiveItem?: boolean }): Pane;

    /** Create a new pane to the right of this pane. */
    splitRight(params?: { items?: object[]; copyActiveItem?: boolean }): Pane;

    /** Creates a new pane above the receiver. */
    splitUp(params?: { items?: object[]; copyActiveItem?: boolean }): Pane;

    /** Creates a new pane below the receiver. */
    splitDown(params?: { items?: object[]; copyActiveItem?: boolean }): Pane;
}

export interface PaneListItemShiftedEvent {
    /** The pane item that was added or removed. */
    item: object;

    /** A number indicating where the item is located. */
    index: number;
}

export interface PaneItemMovedEvent {
    /** The removed pane item. */
    item: object;

    /** A number indicating where the item was located. */
    oldIndex: number;

    /** A number indicating where the item is now located. */
    newIndex: number;
}

export interface PaneItemObservedEvent {
    item: object;
    pane: Pane;
    index: number;
}

export interface PaneItemOpenedEvent extends PaneItemObservedEvent {
    uri: string;
}
