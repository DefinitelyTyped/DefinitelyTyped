/// <reference path="./common.d.ts" />

declare namespace M {
    class Collapsible extends Component<CollapsibleOptions> {
        /**
         * Get Instance
         */
        static getInstance(elem: Element): Collapsible;

        /**
         * Init Collapsible
         */
        static init(els: Element, options?: Partial<CollapsibleOptions>): Collapsible;

        /**
         * Init Collapsibles
         */
        static init(els: MElements, options?: Partial<CollapsibleOptions>): Collapsible[];

        /**
         * Open collapsible section
         * @param n Nth section to open
         */
        open(n: number): void;

        /**
         * Close collapsible section
         * @param n Nth section to close
         */
        close(n: number): void;
    }

    interface CollapsibleOptions {
        /**
         * If accordion versus collapsible
         * @default true
         */
        accordion: boolean;

        /**
         * Transition in duration in milliseconds.
         * @default 300
         */
        inDuration: number;

        /**
         * Transition out duration in milliseconds.
         * @default 300
         */
        outDuration: number;

        /**
         * Callback function called before modal is opened
         * @default null
         */
        onOpenStart: (this: Collapsible, el: Element) => void;

        /**
         * Callback function called after modal is opened
         * @default null
         */
        onOpenEnd: (this: Collapsible, el: Element) => void;

        /**
         * Callback function called before modal is closed
         * @default null
         */
        onCloseStart: (this: Collapsible, el: Element) => void;

        /**
         * Callback function called after modal is closed
         * @default null
         */
        onCloseEnd: (this: Collapsible, el: Element) => void;
    }
}

interface JQuery {
    collapsible(method: keyof Pick<M.Collapsible, "destroy">): JQuery;
    collapsible(method: keyof Pick<M.Collapsible, "open"> | keyof Pick<M.Collapsible, "close">, n: number): JQuery;
    collapsible(options?: Partial<M.CollapsibleOptions>): JQuery;
}
