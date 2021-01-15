// Type definitions for @creativebulma/bulma-tagsinput 1.0
// Project: https://github.com/CreativeBulma/bulma-tagsinput
// Definitions by: Remco Haszing <https://github.com/remcohaszing>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

export interface BulmaTagsInputItem {
    value: string;
    text: string;
}

export interface BulmaTagsInputOptions {
    /**
     * When true, the same tag can be added multiple times.
     *
     * @default false
     */
    allowDuplicates?: boolean;

    /**
     * When true, duplicate tags value check is case sensitive.
     *
     * @default true
     */
    caseSensitive?: boolean;

    /**
     * When true, tags will be unselected when new tag is entered.
     *
     * @default false
     */
    clearSelectionOnTyping?: boolean;

    /**
     * When true, datalist will close automatically after an item have been selected.
     *
     * @default true
     */
    closeDropdownOnItemSelect?: boolean;

    /**
     * Multiple tags can be added at once. Delimiter is used to separate all tags.
     *
     * @default ",",
     */
    delimiter?: string;

    /**
     * When true, tags can be entered manually. This option is useful with select Tags inputs. Set
     * to false automatically when using on select element.
     *
     * @default true
     */
    freeInput?: boolean;

    /**
     * When true, if `allowDuplicates` option if false then the already existing tag will be
     * temporarly and visually identified as duplicate
     *
     * @default true
     */
    highlightDuplicate?: boolean;

    /**
     * When true, identified matches strings when searching is highlighted.
     *
     * @default true
     */
    highlightMatchesString?: boolean;

    /**
     * When adding objects as tags, you can set itemText to the name of the property of item to use
     * for a its tag's text. When this options is not set, the value of _itemValue_ will be used.
     */
    itemText?: string;

    /**
     * When adding objects as tags, itemValue must be set to the name of the property containing the
     * item's value.
     */
    itemValue?: string;

    /**
     * When set, no more than the given number of tags are allowed to add.
     */
    maxTags?: number;

    /**
     * Defines the maximum length of a single tag.
     */
    maxChars?: number;

    /**
     * Defines the minimum length of a single tag.
     *
     * @default 1
     */
    minChars?: number;

    /**
     * Empty dropdown label.
     *
     * @default "No results found"
     */
    noResultsLabel?: string;

    /**
     * TagsInput placeholder text if original input doesn't have one.
     *
     * @default undefined
     */
    placeholder?: string;

    /**
     * When true, tags are removable either using the associted delete button or _backspace_ and
     * _delete_ keys.
     *
     * @default true
     */
    removable?: boolean;

    /**
     * Defines the minimum length of input value before loading auto-complete.
     *
     * @default 1
     */
    searchMinChars?: number;

    /**
     * Defines on what dropdown item data do we search the entered value.
     *
     * @default "text"
     */
    searchOn?: 'value' | 'text';

    /**
     * When true, tags can be selected either by mouse click or using _left_ or _right_ arrow keys.
     *
     * @default true
     */
    selectable?: boolean;

    /**
     * Source of data proposed in dropdown (used for auto-complete).
     *
     * @default undefined
     */
    source?:
        | Array<string | BulmaTagsInputItem>
        | (() => Array<string | BulmaTagsInputItem>)
        | Promise<Array<string | BulmaTagsInputItem>>;

    /**
     * Classname applied to each tag.
     *
     * @default "is-rounded"
     */
    tagClass?: string;

    /**
     * When true, automatically removes all whitespace around tags.
     *
     * @default true
     */
    trim?: boolean;
}

export interface BulmaTagsInputEventMap {
    /**
     * Trigerred before adding new tag. The concerned item is passed as parameter. You can modify the item
     * before its treatment by returning the new item data or prevent tag to be added by returning false.
     */
    'before.add': string | BulmaTagsInputItem;

    /**
     * Triggered once a tag has been added. The added item and the related tag are passed in an object as
     * parameter.
     */
    'after.add': {
        item: string | BulmaTagsInputItem;
        tag: string;
    };

    /**
     * Triggered before removing a tag. The concerned item is passed as parameter. You can prevent
     * deletion by returning `false`.
     */
    'before.remove': string | BulmaTagsInputItem;

    /**
     * Triggered once a tag has been removed. The removed item is passed as parameter.
     */
    'after.remove': string | BulmaTagsInputItem;

    /**
     * Triggered before flushing items. Items array is passed as parameter.
     */
    'before.flush': Array<string | BulmaTagsInputItem>;

    /**
     * Triggered after flushing items.
     */
    'after.flush': Array<string | BulmaTagsInputItem>;

    /**
     * Triggered before selecting an item. The concerned item and related tag are passed in an
     * Object as parameter.
     */
    'before.select': {
        item: string | BulmaTagsInputItem;
        tag: string;
    };

    /**
     * Triggered once an item has been selected. The concerned item and related tag are passed in
     * an Object as parameter.
     */
    'after.select': {
        item: string | BulmaTagsInputItem;
        tag: string;
    };

    /**
     * Triggered before unselect an item. The concerned item and related tag are passed in an Object
     * as parameter.
     */
    'before.unselect': {
        item: string | BulmaTagsInputItem;
        tag: string;
    };

    /**
     * Triggered once an item has been unselected. The concerned item and related tag are passed in
     * an Object as parameter.
     */
    'after.unselect': {
        item: string | BulmaTagsInputItem;
        tag: string;
    };
}

export default class BulmaTagsInput {
    /**
     * @param selector query string returning a single Node or directly a Node
     */
    constructor(selector: string | HTMLInputElement, options?: BulmaTagsInputOptions);

    /**
     * DOM modifications will be observed to detect any new element responding to the given selector
     * to automatically instantiate BulmaTagsInput on them with the given option.
     *
     * @param selector selector can be a query string returning a single Node or a NodeList, directly
     * a Node or a NodeList
     */
    static attach(selector: string | HTMLInputElement, options?: BulmaTagsInputOptions): BulmaTagsInput;

    /**
     * Add given item to the component.
     *
     * @param item Item to add.
     *
     * You can provide multiple items at once by passing and Array of item or a string with multiple
     * value delimited by delimiter option (default: comma).
     */
    add(item: string | BulmaTagsInputItem | Array<string | BulmaTagsInputItem>): this;

    /**
     * Unselect the current selected tag.
     */
    clearSelection(): this;

    /**
     * Shortcut to removeAll method
     */
    flush(): this;

    /**
     * Sets focus on the input
     */
    focus(): this;

    /**
     * Check if given item is present
     *
     * @param item Item to find.
     */
    has(item: string | BulmaTagsInputItem): boolean;

    /**
     * Check if given value is present
     *
     * @param value Single value to find.
     */
    hasValue(value: string): boolean;

    /**
     * Check if given text is present
     *
     * @param text single Text to find in items.
     */
    hasText(value: string): boolean;

    /**
     * CGet index of given item
     *
     * @param item Item to find.
     */
    indexOf(item: string | BulmaTagsInputItem): number;

    /**
     * Get the internal input element
     */
    input: HTMLInputElement;

    /**
     * Get all added items
     */
    items: Array<string | BulmaTagsInputItem>;

    /**
     * Remove given items
     *
     * @param item Item to add
     *
     * You can provide multiple items at once by passing and Array of item or a string with multiple
     * value delimited by delimiter option (default: comma).
     */
    remove(item: string | BulmaTagsInputItem | Array<string | BulmaTagsInputItem>): this;

    /**
     * Remove all tags at once
     */
    removeAll(): this;

    /**
     * Remove item at given index.
     *
     * @param index Index of the item to remove.
     * @param clearSelection Should current selection be cleared
     */
    removeAtIndex(index: number, clearSelection: boolean): this;

    /**
     * Select given item
     *
     * @param item Item to add.
     *
     * You can provide multiple items at once by passing and Array of item or a string with multiple
     * value delimited by delimiter option (default: comma). If a list of items is passed then each
     * item will be selected one by one and at the end only the last existing item from the list will
     * be selected at the end.
     */
    select(item: string | BulmaTagsInputItem): this;

    /**
     * Select tag at given index
     *
     * @param index Index of the item to select.
     */
    selectAtIndex(index: number): this;

    /**
     * Get the current selected item
     */
    selected: string | BulmaTagsInputItem;

    /**
     * Get the current selected item index
     */
    selectedIndex: number;

    /**
     * Get component value
     */
    value: string | string[];

    // EventEmitter functions
    /**
     * Destroys EventEmitter
     */
    destroy(): void;

    /**
     * Count listeners registered for the provided eventName
     */
    listenerCount(eventName: string): number;

    /**
     * Subscribes on event eventName specified function
     *
     * @param eventName
     * @param listener
     */
    on<T extends keyof BulmaTagsInputEventMap>(eventName: T, listener: (item: BulmaTagsInputEventMap[T]) => any): void;

    /**
     * Subscribes on event name specified function to fire only once
     */
    once<T extends keyof BulmaTagsInputEventMap>(
        eventName: T,
        listener: (item: BulmaTagsInputEventMap[T]) => any,
    ): void;

    /**
     * Removes event with specified eventName.
     */
    off(eventName: string): void;
}
