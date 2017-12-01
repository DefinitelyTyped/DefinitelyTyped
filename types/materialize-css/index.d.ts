// Type definitions for materialize-css 1.0
// Project: http://materializecss.com/
// Definitions by:  胡玮文 <https://github.com/huww98>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 2.4

/// <reference types="jquery" />

export = M;

declare global {
    namespace M {
        class Autocomplete extends Component<AutocompleteOptions> {
            /**
             * Get Instance
             */
            static getInstance(elem: Element): Autocomplete;

            /**
             * Select a specific autocomplete options.
             * @param el Element of the autocomplete option.
             */
            selectOption(el: Element): void;

            /**
             * Update autocomplete options data.
             * @param data Autocomplete options data object.
             */
            updateData(data: AutocompleteData): void;

            /**
             * If the autocomplete is open.
             */
            isOpen: boolean;

            /**
             * Number of matching autocomplete options.
             */
            count: number;

            /**
             * Index of the current selected option.
             */
            activeIndex: number;
        }

        interface AutocompleteData {
            [key: string]: string | null;
        }

        interface AutocompleteOptions {
            /**
             * Data object defining autocomplete options with optional icon strings.
             */
            data: AutocompleteData;

            /**
             * Limit of results the autocomplete shows.
             * @default infinity
             */
            limit: number;

            /**
             * Callback for when autocompleted.
             */
            onAutocomplete: (this: Autocomplete, text: string) => void;

            /**
             * Minimum number of characters before autocomplete starts.
             * @default 1
             */
            minLength: number;

            /**
             * Sort function that defines the order of the list of autocomplete options.
             */
            sortFunction: (a: string, b: string, inputText: string) => number;
        }

        class Sidenav extends Component<SidenavOptions> {
            /**
             * Get Instance
             */
            static getInstance(elem: Element): Sidenav;

            /**
             * Opens Sidenav
             */
            open(): void;

            /**
             * Closes Sidenav
             */
            close(): void;

            /**
             * Describes open/close state of Sidenav
             */
            isOpen: boolean;

            /**
             * Describes if sidenav is fixed
             */
            isFixed: boolean;

            /**
             * Describes if Sidenav is being dragged
             */
            isDragged: boolean;
        }

        /**
         * Options for the Sidenav
         */
        interface SidenavOptions {
            /**
             * Side of screen on which Sidenav appears
             * @default 'left'
             */
            edge: 'left' | 'right';

            /**
             * Allow swipe gestures to open/close Sidenav
             * @default true
             */
            draggable: boolean;

            /**
             * Length in ms of enter transition
             * @default 250
             */
            inDuration: number;

            /**
             * Length in ms of exit transition
             * @default 200
             */
            outDuration: number;

            /**
             * Function called when sidenav starts entering
             */
            onOpenStart: (this: Sidenav, elem: Element) => void;

            /**
             * Function called when sidenav finishes entering
             */
            onOpenEnd: (this: Sidenav, elem: Element) => void;

            /**
             * Function called when sidenav starts exiting
             */
            onCloseStart: (this: Sidenav, elem: Element) => void;

            /**
             * Function called when sidenav finishes exiting
             */
            onCloseEnd: (this: Sidenav, elem: Element) => void;
        }

        class Tabs extends Component<TabsOptions> {
            /**
             * Get Instance
             */
            static getInstance(elem: Element): Tabs;

            /**
             * Show tab content that corresponds to the tab with the id
             * @param tabId The id of the tab that you want to switch to
             */
            select(tabId: string): void;

            /**
             * The index of tab that is currently shown
             */
            index: number;
        }

        /**
         * Options for the Tabs
         */
        interface TabsOptions {
            /**
             * Transition duration in milliseconds.
             * @default 300
             */
            duration: number;

            /**
             * Callback for when a new tab content is shown
             */
            onShow: (this: Tabs, newContent: Element) => void;

            /**
             * Set to true to enable swipeable tabs. This also uses the responsiveThreshold option
             * @default false
             */
            swipeable: boolean;

            /**
             * The maximum width of the screen, in pixels, where the swipeable functionality initializes.
             * @default infinity
             */
            responsiveThreshold: number;
        }

        class Modal extends Component<ModalOptions> {
            /**
             * Get Instance
             */
            static getInstance(elem: Element): Modal;

            /**
             * Open modal
             */
            open(): void;

            /**
             * Close modal
             */
            close(): void;

            /**
             * If the modal is open.
             */
            isOpen: boolean;

            /**
             * ID of the modal element
             */
            id: string;
        }

        /**
         * Options for the Modal
         */
        interface ModalOptions {
            /**
             * Opacity of the modal overlay.
             * @default 0.5
             */
            opacity: number;

            /**
             * Transition in duration in milliseconds.
             * @default 250
             */
            inDuration: number;

            /**
             * Transition out duration in milliseconds.
             * @default 250
             */
            outDuration: number;

            /**
             * Callback function called when modal is finished entering.
             */
            ready: (this: Modal, elem: Element, openingTrigger: Element) => void;

            /**
             * Callback function called when modal is finished exiting.
             */
            complete: (this: Modal, elem: Element) => void;

            /**
             * Allow modal to be dismissed by keyboard or overlay click.
             * @default true
             */
            dismissible: boolean;

            /**
             * Starting top offset
             * @default '4%'
             */
            startingTop: string;

            /**
             * Ending top offset
             * @default '10%'
             */
            endingTop: string;
        }

        class Tooltip extends Component<TooltipOptions> {
            /**
             * Get Instance
             */
            static getInstance(elem: Element): Tooltip;

            /**
             * Show tooltip.
             */
            open(): void;

            /**
             * Hide tooltip.
             */
            close(): void;

            /**
             * If tooltip is open.
             */
            isOpen: boolean;

            /**
             * If tooltip is hovered.
             */
            isHovered: boolean;
        }

        interface TooltipOptions {
            /**
             * Delay time before tooltip disappears.
             * @default 0
             */
            exitDelay: number;

            /**
             * Delay time before tooltip appears.
             * @default 200
             */
            enterDelay: number;

            /**
             * Can take regular text or HTML strings.
             * @default null
             */
            html: string | null;

            /**
             * Set distance tooltip appears away from its activator excluding transitionMovement.
             * @default 5
             */
            margin: number;

            /**
             * Enter transition duration.
             * @default 300
             */
            inDuration: number;

            /**
             * Exit transition duration.
             * @default 250
             */
            outDuration: number;

            /**
             * Set the direction of the tooltip.
             * @default 'bottom'
             */
            position: 'top' | 'right' | 'bottom' | 'left';

            /**
             * Amount in px that the tooltip moves during its transition.
             * @default 10
             */
            transitionMovement: number;
        }

        function updateTextFields(): void;

        class CharacterCounter extends Component<undefined> {
            /**
             * Get Instance
             */
            static getInstance(elem: Element): CharacterCounter;
        }

        abstract class Component<TOptions> {
            /**
             * Construct component instance and set everything up
             */
            constructor(elem: Element, options?: Partial<TOptions>);

            /**
             * Destroy plugin instance and teardown
             */
            destroy(): void;

            /**
             * The DOM element the plugin was initialized with
             */
            el: Element;

            /**
             * The options the instance was initialized with
             */
            options: TOptions;
        }
    }

    interface JQuery {
        // Pick<T,K> to check methods exist.
        autocomplete(method: keyof Pick<M.Autocomplete, "destroy">): JQuery;
        autocomplete(method: keyof Pick<M.Autocomplete, "selectOption">, el: Element): JQuery;
        autocomplete(method: keyof Pick<M.Autocomplete, "updateData">, data: M.AutocompleteData): JQuery;
        autocomplete(options?: Partial<M.AutocompleteOptions>): JQuery;

        sidenav(method: keyof Pick<M.Sidenav, "open" | "close" | "destroy">): JQuery;
        sidenav(options?: Partial<M.SidenavOptions>): JQuery;

        tabs(method: keyof Pick<M.Tabs, "destroy">): JQuery;
        tabs(method: keyof Pick<M.Tabs, "select">, tabId: string): JQuery;
        tabs(options?: Partial<M.TabsOptions>): JQuery;

        tooltip(method: keyof Pick<M.Tooltip, "open" | "close" | "destroy">): JQuery;
        tooltip(options?: Partial<M.TooltipOptions>): JQuery;

        modal(method: keyof Pick<M.Modal, "open" | "close" | "destroy">): JQuery;
        modal(options?: Partial<M.ModalOptions>): JQuery;

        // tslint:disable-next-line unified-signatures
        characterCounter(method: keyof Pick<M.CharacterCounter, "destroy">): JQuery;
        characterCounter(): JQuery;
    }
}
