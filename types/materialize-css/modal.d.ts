/// <reference path="./common.d.ts" />

declare namespace M {
    class Modal extends Component<ModalOptions> implements Openable {
        /**
         * Get Instance
         */
        static getInstance(elem: Element): Modal;

        /**
         * Init Modal
         */
        static init(els: Element, options?: Partial<ModalOptions>): Modal;

        /**
         * Init Modals
         */
        static init(els: MElements, options?: Partial<ModalOptions>): Modal[];

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
         * Prevent page from scrolling while modal is open
         * @default true
         */
        preventScrolling: boolean;

        /**
         * Callback function called before modal is opened
         * @default null
         */
        onOpenStart: (this: Modal, el: Element) => void;

        /**
         * Callback function called after modal is opened
         * @default null
         */
        onOpenEnd: (this: Modal, el: Element) => void;

        /**
         * Callback function called before modal is closed
         * @default null
         */
        onCloseStart: (this: Modal, el: Element) => void;

        /**
         * Callback function called after modal is closed
         * @default null
         */
        onCloseEnd: (this: Modal, el: Element) => void;

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
}

interface JQuery {
    modal(method: keyof Pick<M.Modal, "open" | "close" | "destroy">): JQuery;
    modal(options?: Partial<M.ModalOptions>): JQuery;
}
