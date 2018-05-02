/// <reference path="./common.d.ts" />

declare namespace M {
    class Materialbox extends Component<MaterialboxOptions> {
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
