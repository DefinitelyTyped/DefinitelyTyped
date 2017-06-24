// Type definitions for extended-listbox 3.0.x
// Project: https://github.com/code-chris/extended-listbox
// Definitions by: Christian Kotzbauer <https://github.com/code-chris>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 2.3

interface ListboxItem {
    /** display text */
    text?: string;

    /** unique identifier, if not set it will be generated */
    id?: string;

    /** index position from the item in the list; only used for manual addItem api calls */
    index?: number;

    /** determines if the item should be clickable */
    disabled?: boolean;

    /** determines if the item is selected */
    selected?: boolean;

    /** determines if the item has childItems */
    groupHeader?: boolean;

    /** display text or id of the parent; only used for manual addItem api calls */
    parentGroupId?: string;

    /** list of childItems */
    childItems?: ListboxItem[];
}

interface ListboxSearchBarButtonOptions {
    /** determines if the button is visible */
    visible?: boolean;

    /** css class for the i-tag of the button */
    icon?: string;

    /** callback for button click */
    onClick?: () => void;
}

interface ListBoxOptions {
    /** determines if the searchBar is visible */
    searchBar?: boolean;

    /** watermark (placeholder) for the searchBar */
    searchBarWatermark?: string;

    /** settings for the searchBar button */
    searchBarButton?: ListboxSearchBarButtonOptions;

    /** determines if multiple items can be selected */
    multiple?: boolean;

    /** function which returns a array of items */
    getItems?: () => (string|ListboxItem)[];

    /** callback for selection changes */
    onValueChanged?: (event: ListboxEvent) => void;

    /** callback for searchBar text changes */
    onFilterChanged?: (event: ListboxEvent) => void;

    /** callback for item changes (item added, item removed, item order) */
    onItemsChanged?: (event: ListboxEvent) => void;

    /** callback for enter keyPress event on an item */
    onItemEnterPressed?: (event: ListboxEvent) => void;

    /** callback for doubleClick event on an item */
    onItemDoubleClicked?: (event: ListboxEvent) => void;
}

interface ListboxEvent {
    /** unique event name */
    eventName: string;

    /** target object for which event is triggered */
    target: JQuery;

    /** any object */
    args: any;
}

interface ExtendedListboxInstance {
    /** DOM element of the listbox root */
    target: JQuery;

    /** Adds a new item to the list */
    addItem(item: string|ListboxItem): string;

    /** Adds new items to the list */
    addItems(item: (string|ListboxItem)[]): string[];

    /** Removes a item from the list */
    removeItem(identifier: string): void;

    /** Removes items from the list */
    removeItems(identifiers: string[]): void;

    /** Reverts all changes from the DOM */
    destroy(): void;

    /** Resets the selection state of all items */
    clearSelection(): void;

    /** Returns a item object for the given id or display text */
    getItem(identifier: string): ListboxItem;

    /** Returns all item objects */
    getItems(): ListboxItem[];

    /** Returns all ListboxItem's which are selected */
    getSelection(): ListboxItem[];

    /** Decreases the index of the matching item by one */
    moveItemUp(identifier: string): number;

    /** Increases the index of the matching item by one */
    moveItemDown(identifier: string): number;

    /** Moves item to the bottom of the list */
    moveItemToBottom(identifier: string): number;

    /** Moves item to the top of the list */
    moveItemToTop(identifier: string): number;

    /** Enables or disables the whole list and all childs */
    enable(state: boolean): void;

    /** callback for selection changes */
    onValueChanged(callback: (event: ListboxEvent) => void): void;

    /** callback for item changes (item added, item removed, item order) */
    onItemsChanged(callback: (event: ListboxEvent) => void): void;

    /** callback for searchBar text changes */
    onFilterChanged(callback: (event: ListboxEvent) => void): void;

    /** callback for enter keyPress event on an item */
    onItemEnterPressed(callback: (event: ListboxEvent) => void): void;

    /** callback for doubleClick event on an item */
    onItemDoubleClicked(callback: (event: ListboxEvent) => void): void;
}

interface JQuery {
    /** constructs a new instance of Listbox on the given DOM item or returns existing */
    listbox(): ExtendedListboxInstance|ExtendedListboxInstance[];

    /** constructs a new instance of Listbox on the given DOM item */
    listbox(options: ListBoxOptions): ExtendedListboxInstance|ExtendedListboxInstance[];
}
