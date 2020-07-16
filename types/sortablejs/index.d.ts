// Type definitions for Sortable.js 1.10
// Project: https://github.com/RubaXa/Sortable
// Definitions by: Maw-Fox <https://github.com/Maw-Fox>
//                 Maarten Staa <https://github.com/maartenstaa>
//                 Wayne Van Son <https://github.com/waynevanson>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 2.1
import {
    AutoScrollOptions,
    MultiDragOptions,
    OnSpillOptions,
    SwapOptions,
    AutoScrollPlugin,
    MultiDragPlugin,
    OnSpillPlugin,
    SwapPlugin,
    SortablePlugin,
} from './plugins';

export = Sortable;

declare class Sortable {
    public options: Sortable.Options;
    public el: HTMLElement;

    /**
     * Sortable's main constructor.
     * @param element Any variety of HTMLElement.
     * @param options Sortable options object.
     */
    constructor(element: HTMLElement, options: Sortable.Options);

    static active: Sortable | null;
    static utils: Sortable.Utils;

    /**
     * Mounts a plugin to Sortable
     * @param sortablePlugin a sortable plugin.
     *
     * @example
     *
     * Sortable.mount(new MultiDrag(), new AutoScroll())
     */
    static mount(...sortablePlugins: SortablePlugin[]): void;

    /**
     * Creation of new instances.
     * @param element Any variety of HTMLElement.
     * @param options Sortable options object.
     */
    static create(element: HTMLElement, options?: Sortable.Options): Sortable;

    /** The element being dragged. */
    static dragged: HTMLElement | null;

    /** The ghost element.*/
    static ghost: HTMLElement | null;

    /** The clone element. */
    static clone: HTMLElement | null;

    /** Get the Sortable instance on an element. */
    static get(element: HTMLElement): Sortable | undefined;

    /** Get the Sortable version */
    static readonly version: string;

    /**
     * Options getter/setter
     * @param name a Sortable.Options property.
     * @param value a value.
     */
    option<K extends keyof Sortable.Options>(name: K, value: Sortable.Options[K]): void;
    option<K extends keyof Sortable.Options>(name: K): Sortable.Options[K];

    /**
     * For each element in the set, get the first element that matches the selector by testing the element itself and traversing up through its ancestors in the DOM tree.
     * @param element an HTMLElement or selector string.
     * @param selector default: `options.draggable`
     */
    closest(element: HTMLElement, selector?: string): HTMLElement | null;

    /**
     * Sorts the elements according to the array.
     * @param order an array of strings to sort.
     */
    sort(order: ReadonlyArray<string>): void;

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
     */
    toArray(): string[];
}

declare namespace Sortable {
    export interface Options
        extends SortableOptions,
            AutoScrollOptions,
            MultiDragOptions,
            OnSpillOptions,
            SwapOptions {}

    /**
     * A class that all plugins inherit from for the sake of type inference.
     */
    export class Plugin extends SortablePlugin {}
    export class MultiDrag extends MultiDragPlugin {}
    export class AutoScroll extends AutoScrollPlugin {}
    export class Swap extends SwapPlugin {}
    export class OnSpill extends OnSpillPlugin {}

    export interface SortableEvent extends Event {
        clone: HTMLElement;
        /**
         * previous list
         */
        from: HTMLElement;
        /**
         * dragged element
         */
        item: HTMLElement;
        /**
         * new index within parent
         */
        newIndex: number | undefined;
        /**
         * old index within parent
         */
        oldIndex: number | undefined;
        target: HTMLElement;
        /**
         * list, in which moved element.
         */
        to: HTMLElement;
        /**
         * Old index within parent, only counting draggable elements
         */
        oldDraggableIndex: number | undefined;
        /**
         * New index within parent, only counting draggable elements
         */
        newDraggableIndex: number | undefined;
        /**
         * Pull mode if dragging into another sortable
         */
        pullMode: 'clone' | boolean | undefined;
        /**
         * When MultiDrag is used to sort, this holds a HTMLElement and oldIndex for each item selected.
         *
         * `oldIndicies[number]` is directly related to `newIndicies[number]`
         *
         * If MultiDrag is not used to sort, this array will be empty.
         */
        oldIndicies: { multiDragElement: HTMLElement; index: number }[];
        /**
         * When MultiDrag is used to sort, this holds a HTMLElement and newIndex for each item.
         *
         * `oldIndicies[number]` is directly related to `newIndicies[number]`
         *
         * If MultiDrag is not used to sort, this array will be empty.
         */
        newIndicies: { multiDragElement: HTMLElement; index: number }[];
        /** When Swap is used to sort, this will contain the dragging item that was dropped on.*/
        swapItem: HTMLElement | null;
    }

    export interface MoveEvent extends Event {
        dragged: HTMLElement;
        draggedRect: DOMRect;
        from: HTMLElement;
        /**
         * element on which have guided
         */
        related: HTMLElement;
        relatedRect: DOMRect;
        to: HTMLElement;
        willInsertAfter?: boolean;
    }

    type PullResult = ReadonlyArray<string> | boolean | 'clone';
    type PutResult = ReadonlyArray<string> | boolean;
    export interface GroupOptions {
        /**
         * group name
         */
        name: string;
        /**
         * ability to move from the list. clone — copy the item, rather than move.
         */
        pull?: PullResult | ((to: Sortable, from: Sortable, dragEl: HTMLElement, event: SortableEvent) => PullResult);
        /**
         * whether elements can be added from other lists, or an array of group names from which elements can be taken.
         */
        put?: PutResult | ((to: Sortable, from: Sortable, dragEl: HTMLElement, event: SortableEvent) => PutResult);
        /**
         * a canonical version of pull, created by Sortable
         */
        checkPull?: (
            sortable: Sortable,
            activeSortable: Sortable,
            dragEl: HTMLElement,
            event: SortableEvent,
        ) => boolean | string | Array<string>;
        /**
         * a canonical version of put, created by Sortable
         */
        checkPut?: (
            sortable: Sortable,
            activeSortable: Sortable,
            dragEl: HTMLElement,
            event: SortableEvent,
        ) => boolean | string | 'clone' | Array<string>;
        /**
         * revert cloned element to initial position after moving to a another list.
         */
        revertClone?: boolean;
    }
    type Direction = 'vertical' | 'horizontal';
    export interface SortableOptions {
        /**
         * ms, animation speed moving items when sorting, `0` — without animation
         */
        animation?: number;
        /**
         * Class name for the chosen item
         */
        chosenClass?: string;
        dataIdAttr?: string;
        /**
         * time in milliseconds to define when the sorting should start
         */
        delay?: number;
        /**
         * Only delay if user is using touch
         */
        delayOnTouchOnly?: boolean;
        /**
         * Direction of Sortable
         * (will be detected automatically if not given)
         */
        direction?: ((evt: SortableEvent, target: HTMLElement, dragEl: HTMLElement) => Direction) | Direction;
        /**
         * Disables the sortable if set to true.
         */
        disabled?: boolean;
        /**
         * Class name for the dragging item
         */
        dragClass?: string;
        /**
         * Specifies which items inside the element should be draggable
         */
        draggable?: string;
        dragoverBubble?: boolean;
        dropBubble?: boolean;
        /**
         * distance mouse must be from empty sortable
         * to insert drag element into it
         */
        emptyInsertThreshold?: number;

        /**
         * Easing for animation. Defaults to null.
         *
         * See https://easings.net/ for examples.
         *
         * For other possible values, see
         * https://www.w3schools.com/cssref/css3_pr_animation-timing-function.asp
         *
         * @example
         *
         * // CSS functions
         * | 'steps(int, start | end)'
         * | 'cubic-bezier(n, n, n, n)'
         *
         * // CSS values
         * | 'linear'
         * | 'ease'
         * | 'ease-in'
         * | 'ease-out'
         * | 'ease-in-out'
         * | 'step-start'
         * | 'step-end'
         * | 'initial'
         * | 'inherit'
         */
        easing?: string;
        /**
         * Class name for the cloned DOM Element when using forceFallback
         */
        fallbackClass?: string;
        /**
         * Appends the cloned DOM Element into the Document's Body
         */
        fallbackOnBody?: boolean;
        /**
         * Specify in pixels how far the mouse should move before it's considered as a drag.
         */
        fallbackTolerance?: number;
        fallbackOffset?: { x: number; y: number };
        /**
         * Selectors that do not lead to dragging (String or Function)
         */
        filter?:
            | string
            | ((this: Sortable, event: Event | TouchEvent, target: HTMLElement, sortable: Sortable) => boolean);
        /**
         * ignore the HTML5 DnD behaviour and force the fallback to kick in
         */
        forceFallback?: boolean;
        /**
         * Class name for the drop placeholder
         */
        ghostClass?: string;
        /**
         * To drag elements from one list into another, both lists must have the same group value.
         * You can also define whether lists can give away, give and keep a copy (clone), and receive elements.
         */
        group?: string | GroupOptions;
        /**
         * Drag handle selector within list items
         */
        handle?: string;
        ignore?: string;
        /**
         * Will always use inverted swap zone if set to true
         */
        invertSwap?: boolean;
        /**
         * Threshold of the inverted swap zone
         * (will be set to `swapThreshold` value by default)
         */
        invertedSwapThreshold?: number;
        /**
         * Call `event.preventDefault()` when triggered `filter`
         */
        preventOnFilter?: boolean;
        /**
         * Remove the clone element when it is not showing,
         * rather than just hiding it
         */
        removeCloneOnHide?: boolean;
        /**
         * sorting inside list
         */
        sort?: boolean;
        store?: {
            get: (sortable: Sortable) => string[];
            set: (sortable: Sortable) => void;
        };
        /**
         * Threshold of the swap zone.
         * Defaults to `1`
         */
        swapThreshold?: number;
        /**
         * How many *pixels* the point should move before cancelling a delayed drag event
         */
        touchStartThreshold?: number;

        setData?: (dataTransfer: DataTransfer, draggedElement: HTMLElement) => void;
        /**
         * Element dragging started
         */
        onStart?: (event: SortableEvent) => void;
        /**
         * Element dragging ended
         */
        onEnd?: (event: SortableEvent) => void;
        /**
         * Element is dropped into the list from another list
         */
        onAdd?: (event: SortableEvent) => void;
        /**
         * Created a clone of an element
         */
        onClone?: (event: SortableEvent) => void;
        /**
         * Element is chosen
         */
        onChoose?: (event: SortableEvent) => void;
        /**
         * Element is unchosen
         */
        onUnchoose?: (event: SortableEvent) => void;
        /**
         * Changed sorting within list
         */
        onUpdate?: (event: SortableEvent) => void;
        /**
         * Called by any change to the list (add / update / remove)
         */
        onSort?: (event: SortableEvent) => void;
        /**
         * Element is removed from the list into another list
         */
        onRemove?: (event: SortableEvent) => void;
        /**
         * Attempt to drag a filtered element
         */
        onFilter?: (event: SortableEvent) => void;
        /**
         * Event when you move an item in the list or between lists
         */
        onMove?: (evt: MoveEvent, originalEvent: Event) => boolean | -1 | 1;
        /**
         * Called when dragging element changes position
         */
        onChange?: (evt: SortableEvent) => void;
    }

    interface Utils {
        /**
         * Attach an event handler function
         * @param element an HTMLElement.
         * @param event an Event context.
         * @param fn
         */
        on(element: HTMLElement, event: string, fn: EventListenerOrEventListenerObject): void;

        /**
         * Remove an event handler function
         * @param element an HTMLElement.
         * @param event an Event context.
         * @param fn a callback.
         */
        off(element: HTMLElement, event: string, fn: EventListenerOrEventListenerObject): void;

        /**
         * Get the values of all the CSS properties.
         * @param element an HTMLElement.
         */
        css(element: HTMLElement): CSSStyleDeclaration;

        /**
         * Get the value of style properties.
         * @param element an HTMLElement.
         * @param prop a property key.
         */
        css<K extends keyof CSSStyleDeclaration>(element: HTMLElement, prop: K): CSSStyleDeclaration[K];

        /**
         * Set one CSS property.
         * @param element an HTMLElement.
         * @param prop a property key.
         * @param value a property value.
         */
        css<K extends keyof CSSStyleDeclaration>(element: HTMLElement, prop: K, value: CSSStyleDeclaration[K]): void;

        /**
         * Get elements by tag name.
         * @param context an HTMLElement.
         * @param tagName A tag name.
         * @param iterator An iterator.
         */
        find(
            context: HTMLElement,
            tagName: string,
            iterator?: (value: HTMLElement, index: number) => void,
        ): NodeListOf<HTMLElement>;

        /**
         * Check the current matched set of elements against a selector.
         * @param element an HTMLElement.
         * @param selector an element selector.
         */
        is(element: HTMLElement, selector: string): boolean;

        /**
         * For each element in the set, get the first element that matches the selector by testing the element itself and traversing up through its ancestors in the DOM tree.
         * @param element an HTMLElement.
         * @param selector an element seletor.
         * @param context a specific element's context.
         */
        closest(element: HTMLElement, selector: string, context?: HTMLElement): HTMLElement | null;

        /**
         * Add or remove one classes from each element
         * @param element an HTMLElement.
         * @param name a class name.
         * @param state a class's state.
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
