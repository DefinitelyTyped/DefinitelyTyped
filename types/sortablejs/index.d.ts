// Type definitions for Sortable.js 1.3
// Project: https://github.com/RubaXa/Sortable
// Definitions by: Maw-Fox <https://github.com/Maw-Fox>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

export = Sortable;

declare class Sortable {
    public options: Sortable.Options;
    public el: HTMLElement;

    /**
     * Sortable's main constructor.
     * @param {HTMLElement} element Any variety of HTMLElement.
     * @param {Sortable.Options} options Sortable options object.
     */
    constructor(element: HTMLElement, options: Sortable.Options);

    static active: Sortable;
    static utils: Sortable.Utils;

    /**
     * Creation of new instances.
     * @param {HTMLElement} element Any variety of HTMLElement.
     * @param {Sortable.Options} options Sortable options object.
     * @returns {Sortable}
     */
    static create(element: HTMLElement, options: Sortable.Options): Sortable;

    /**
     * Options getter/setter
     * @param {string} name a Sortable.Options property.
     * @param {*} [value] a Value.
     * @returns {*}
     */
    option<K extends keyof Sortable.Options>(name: K, value: Sortable.Options[K]): void;
    option<K extends keyof Sortable.Options>(name: K): Sortable.Options[K];

    /**
     * For each element in the set, get the first element that matches the selector by testing the element itself and traversing up through its ancestors in the DOM tree.
     * @param {string|HTMLElement} element an HTMLElement or selector string.
     * @param   {String}       [selector]  default: `options.draggable`
     * @returns {HTMLElement}
     */
    closest(element: HTMLElement, selector?: string): HTMLElement | null;

    /**
     * Sorts the elements according to the array.
     * @param {string[]} order an array of strings to sort.
     */
    sort(order: string[]): void;

    /**
     * Saving and restoring of the sort.
     */
    save(): void;

    /**
     * Removes the sortable functionality completely.
     */
    destroy(): void;

    /**
     * Serializes the sortable's item data-id's (dataIdAttr option) into an array of string.
     * @returns {string[]}
     */
    toArray(): string[];
}

declare namespace Sortable {
    export interface SortableEvent extends Event {
        clone: HTMLElement;
        from: HTMLElement;
        item: HTMLElement;
        newIndex: number | undefined;
        oldIndex: number | undefined;
        target: HTMLElement;
        to: HTMLElement;
    }

    export interface MoveEvent extends Event {
        dragged: HTMLElement;
        draggedRect: DOMRect;
        from: HTMLElement;
        related: HTMLElement;
        relatedRect: DOMRect;
        to: HTMLElement;
        willInsertAfter?: boolean;
    }

    export interface GroupOptions {
        name: string;
        pull?: boolean | 'clone' | ((to: Sortable, from: Sortable) => boolean | string);
        put?: boolean | string | string[] | ((to: Sortable) => boolean);
        revertClone?: boolean;
    }

    export interface Options {
        animation?: number;
        chosenClass?: string;
        dataIdAttr?: string;
        delay?: number;
        disabled?: boolean;
        dragClass?: string;
        draggable?: string;
        dragoverBubble?: boolean;
        dropBubble?: boolean;
        fallbackClass?: string;
        fallbackOnBody?: boolean;
        fallbackTolerance?: number;
        fallbackOffset?: { x: number, y: number };
        filter?: string | ((this: Sortable, event: Event | TouchEvent, target: HTMLElement, sortable: Sortable) => boolean);
        forceFallback?: boolean;
        ghostClass?: string;
        group?: string | GroupOptions;
        handle?: string;
        ignore?: string;
        preventOnFilter?: boolean;
        scroll?: boolean;
        scrollSensitivity?: number;
        scrollSpeed?: number;
        sort?: boolean;
        store?: {
            get: (sortable: Sortable) => string[];
            set: (sortable: Sortable) => void;
        };
        setData?: (dataTransfer: DataTransfer, draggedElement: HTMLElement) => void;
        onStart?: (event: SortableEvent) => void;
        onEnd?: (event: SortableEvent) => void;
        onAdd?: (event: SortableEvent) => void;
        onUpdate?: (event: SortableEvent) => void;
        onSort?: (event: SortableEvent) => void;
        onRemove?: (event: SortableEvent) => void;
        onFilter?: (event: SortableEvent) => void;
        onMove?: (event: MoveEvent) => boolean;
    }

    interface Utils {
        /**
         * Attach an event handler function
         * @param {HTMLElement} element an HTMLElement.
         * @param {string} event an Event context.
         * @param {Function} fn
         */
        on(element: HTMLElement, event: string, fn: EventListenerOrEventListenerObject): void;

        /**
         * Remove an event handler function
         * @param {HTMLElement} element an HTMLElement.
         * @param {string} event an Event context.
         * @param {Function} fn a callback.
         */
        off(element: HTMLElement, event: string, fn: EventListenerOrEventListenerObject): void;

        /**
         * Get the values of all the CSS properties.
         * @param {HTMLElement} element an HTMLElement.
         * @returns {Object}
         */
        css(element: HTMLElement): CSSStyleDeclaration;

        /**
         * Get the value of style properties.
         * @param {HTMLElement} element an HTMLElement.
         * @param {string} prop a property key.
         * @returns {*}
         */
        css<K extends keyof CSSStyleDeclaration>(element: HTMLElement, prop: K): CSSStyleDeclaration[K];

        /**
         * Set one CSS property.
         * @param {HTMLElement} element an HTMLElement.
         * @param {string} prop a property key.
         * @param {string} value a property value.
         */
        css<K extends keyof CSSStyleDeclaration>(element: HTMLElement, prop: K, value: CSSStyleDeclaration[K]): void;

        /**
         * Set CSS properties.
         * @param {HTMLElement} element an HTMLElement.
         * @param {Object} props a properties object.
         */
        css(element: HTMLElement, props: any): void;

        /**
         * Get elements by tag name.
         * @param {HTMLElement} context an HTMLElement.
         * @param {string} tagName A tag name.
         * @param {function} [iterator] An iterator.
         * @returns {HTMLElement[]}
         */
        find(context: HTMLElement, tagName: string, iterator?: (value: HTMLElement, index: number) => void): NodeListOf<HTMLElement>;

        /**
         * Takes a function and returns a new one that will always have a particular context.
         * @param {HTMLElement} context an HTMLElement.
         * @param {function} fn a function.
         * @returns {function}
         */
        bind(context: HTMLElement, fn: () => any): () => any;

        /**
         * Check the current matched set of elements against a selector.
         * @param {HTMLElement} element an HTMLElement.
         * @param {string} selector an element selector.
         * @returns {boolean}
         */
        is(element: HTMLElement, selector: string): boolean;

        /**
         * For each element in the set, get the first element that matches the selector by testing the element itself and traversing up through its ancestors in the DOM tree.
         * @param {HTMLElement} element an HTMLElement.
         * @param {string} selector an element seletor.
         * @param {HTMLElement} [context] a specific element's context.
         * @returns {HTMLElement}
         */
        closest(element: HTMLElement, selector: string, context?: HTMLElement): HTMLElement | null;

        /**
         * Add or remove one classes from each element
         * @param {HTMLElement} element an HTMLElement.
         * @param {string} name a class name.
         * @param {boolean} state a class's state.
         */
        toggleClass(element: HTMLElement, name: string, state: boolean): void;
    }

    interface DOMRect {
        bottom: number;
        height: number;
        left: number;
        right: number;
        top: number;
        width: number;
        x: number;
        y: number;
    }
}
