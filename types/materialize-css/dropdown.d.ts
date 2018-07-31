/// <reference path="./common.d.ts" />

declare namespace M {
    class Dropdown extends Component<DropdownOptions> {
        /**
         * Get Instance
         */
        static getInstance(elem: Element): Dropdown;

        /**
         * Init Dropdown
         */
        static init(els: Element, options?: Partial<DropdownOptions>): Dropdown;

        /**
         * Init Dropdowns
         */
        static init(els: MElements, options?: Partial<DropdownOptions>): Dropdown[];

        /**
         * ID of the dropdown element
         */
        id: string;

        /**
         * The DOM element of the dropdown
         */
        dropdownEl: Element;

        /**
         * If the dropdown is open
         */
        isOpen: boolean;

        /**
         * If the dropdown content is scrollable
         */
        isScrollable: boolean;

        /**
         * The index of the item focused
         */
        focusedIndex: number;

        /**
         * Open dropdown
         */
        open(): void;

        /**
         * Close dropdown
         */
        close(): void;

        /**
         * While dropdown is open, you can recalculate its dimensions if its contents have changed
         */
        recalculateDimensions(): void;
    }

    interface DropdownOptions {
        /**
         * Defines the edge the menu is aligned to
         * @default 'left'
         */
        alignment: 'left' | 'right';

        /**
         * If true, automatically focus dropdown el for keyboard
         * @default true
         */
        autoTrigger: boolean;

        /**
         * If true, constrainWidth to the size of the dropdown activator
         * @default true
         */
        constrainWidth: boolean;

        /**
         * Provide an element that will be the bounding container of the dropdown
         * @default null
         */
        container: Element;

        /**
         * If false, the dropdown will show below the trigger
         * @default true
         */
        coverTrigger: boolean;

        /**
         * If true, close dropdown on item click
         * @default true
         */
        closeOnClick: boolean;

        /**
         * If true, the dropdown will open on hover
         * @default false
         */
        hover: boolean;

        /**
         * The duration of the transition enter in milliseconds
         * @default 150
         */
        inDuration: number;

        /**
         * The duration of the transition out in milliseconds
         * @default 250
         */
        outDuration: number;

        /**
         * Function called when dropdown starts entering
         * @default null
         */
        onOpenStart: (this: Dropdown, el: Element) => void;

        /**
         * Function called when dropdown finishes entering
         * @default null
         */
        onOpenEnd: (this: Dropdown, el: Element) => void;

        /**
         * Function called when dropdown starts exiting
         * @default null
         */
        onCloseStart: (this: Dropdown, el: Element) => void;

        /**
         * Function called when dropdown finishes exiting
         * @default null
         */
        onCloseEnd: (this: Dropdown, el: Element) => void;
    }
}

interface JQuery {
    dropdown(method: keyof Pick<M.Dropdown, "recalculateDimensions" | "open" | "close" | "destroy">): JQuery;
    dropdown(options?: Partial<M.DropdownOptions>): JQuery;
}
