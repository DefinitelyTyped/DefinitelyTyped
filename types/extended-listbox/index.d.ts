// Type definitions for extended-listbox 4.0.x
// Project: https://github.com/code-chris/extended-listbox
// Definitions by: Christian Kotzbauer <https://github.com/code-chris>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

interface ListBoxItem {
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
    childItems?: (string | ListBoxItem)[];
}

interface ListBoxSearchBarButtonOptions {
    /** determines if the button is visible */
    visible?: boolean;

    /** css class for the i-tag of the button */
    icon?: string;

    /** callback for button click */
    onClick?: () => void;
}

interface ListBoxSettings {
    /** determines if the searchBar is visible */
    searchBar?: boolean;

    /** watermark (placeholder) for the searchBar */
    searchBarWatermark?: string;

    /** settings for the searchBar button */
    searchBarButton?: ListBoxSearchBarButtonOptions;

    /** function which returns a array of items */
    getItems?: () => (string | ListBoxItem)[];

    /** callback for selection changes */
    onValueChanged?: (event: ListBoxEvent) => void;

    /** callback for searchBar text changes */
    onFilterChanged?: (event: ListBoxEvent) => void;

    /** callback for item changes (item added, item removed, item order) */
    onItemsChanged?: (event: ListBoxEvent) => void;

    /** callback for enter keyPress event on an item */
    onItemEnterPressed?: (event: ListBoxEvent) => void;

    /** callback for doubleClick event on an item */
    onItemDoubleClicked?: (event: ListBoxEvent) => void;
}

interface ListBoxEvent {
    /** unique event name */
    eventName: string;

    /** target object for which event is triggered */
    target: Element;

    /** any object */
    args: any;
}

interface BaseListBox {
    /** Adds a new item to the list */
    addItem(item: string | ListBoxItem): string;

    /** Adds new items to the list */
    addItems(items: (string | ListBoxItem)[]): string[];

    /** Removes a item from the list */
    removeItem(identifier: string): void;

    /** Removes items from the list */
    removeItems(identifiers: string[]): void;

    /** Reverts all changes from the DOM */
    destroy(): void;

    /** Resets the selection state of all items */
    clearSelection(): void;

    /** Returns a item object for the given id or display text */
    getItem(identifier: string): ListBoxItem;

    /** Returns all item objects */
    getItems(): ListBoxItem[];

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

    /** Returns all ListBoxItem's which are selected */
    getSelection(): ListBoxItem[];
}

interface SingleSelectListBox extends BaseListBox {
}

interface MultiSelectListBox extends BaseListBox {
}

declare var SingleSelectListBox: {
    prototype: SingleSelectListBox;
    new(domElement: HTMLElement, options?: ListBoxSettings): SingleSelectListBox;
};

declare var MultiSelectListBox: {
    prototype: MultiSelectListBox;
    new(domElement: HTMLElement, options?: ListBoxSettings): MultiSelectListBox;
};
