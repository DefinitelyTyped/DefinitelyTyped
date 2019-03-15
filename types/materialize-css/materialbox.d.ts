/// <reference path="./common.d.ts" />

declare namespace M {
    class Materialbox extends Component<MaterialboxOptions> {
        /**
         * Get Instance
         */
        static getInstance(elem: Element): Materialbox;

        /**
         * Init Materialbox
         */
        static init(els: Element, options?: Partial<MaterialboxOptions>): Materialbox;

        /**
         * Init Materialboxes
         */
        static init(els: MElements, options?: Partial<MaterialboxOptions>): Materialbox[];

        /**
         * If the materialbox overlay is showing
         */
        overlayActive: boolean;

        /**
         * If the materialbox is no longer being animated
         */
        doneAnimating: boolean;

        /**
         * Caption if specified
         */
        caption: string;

        /**
         * Original width of image
         */
        originalWidth: number;

        /**
         * Original height of image
         */
        originalHeight: number;

        /**
         * Open materialbox
         */
        open(): void;

        /**
         * Close materialbox
         */
        close(): void;
    }

    interface MaterialboxOptions {
        /**
         * Transition in duration in milliseconds
         * @default 275
         */
        inDuration: number;

        /**
         * Transition out duration in milliseconds
         * @default 200
         */
        outDuration: number;

        /**
         * Callback function called before materialbox is opened
         * @default null
         */
        onOpenStart: (this: Materialbox, el: Element) => void;

        /**
         * Callback function called after materialbox is opened
         * @default null
         */
        onOpenEnd: (this: Materialbox, el: Element) => void;

        /**
         * Callback function called before materialbox is closed
         * @default null
         */
        onCloseStart: (this: Materialbox, el: Element) => void;

        /**
         * Callback function called after materialbox is closed
         * @default null
         */
        onCloseEnd: (this: Materialbox, el: Element) => void;
    }
}

interface JQuery {
    materialbox(method: keyof Pick<M.Materialbox, "destroy" | "open" | "close">): JQuery;
    materialbox(options?: Partial<M.MaterialboxOptions>): JQuery;
}
