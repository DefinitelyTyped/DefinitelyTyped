// Type definitions for materialize-css 1.0
// Project: http://materializecss.com/
// Definitions by:  胡玮文 <https://github.com/huww98>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 2.4

/// <reference types="jquery" />

export = M;

declare global {
    namespace M {
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
        sidenav(method: keyof Pick<M.Sidenav, "open" | "close" | "destroy">): JQuery;
        sidenav(options?: Partial<M.SidenavOptions>): JQuery;

        tabs(method: keyof Pick<M.Tabs, "destroy">): JQuery;
        tabs(method: keyof Pick<M.Tabs, "select">, tabId: string): JQuery;
        tabs(options?: Partial<M.TabsOptions>): JQuery;

        modal(method: keyof Pick<M.Modal, "open" | "close" | "destroy">): JQuery;
        modal(options?: Partial<M.ModalOptions>): JQuery;
    }
}
