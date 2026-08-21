/// <reference path="./common.d.ts" />

declare namespace M {
    class FloatingActionButton extends Component<FloatingActionButtonOptions> implements Openable {
        /**
         * Get Instance
         */
        static getInstance(elem: Element): FloatingActionButton;

        /**
         * Init FloatingActionButton
         */
        static init(els: Element, options?: Partial<FloatingActionButtonOptions>): FloatingActionButton;

        /**
         * Init FloatingActionButtons
         */
        static init(els: MElements, options?: Partial<FloatingActionButtonOptions>): FloatingActionButton[];

        /**
         * Open FAB
         */
        open(): void;

        /**
         * Close FAB
         */
        close(): void;

        /**
         * Describes open/close state of FAB.
         */
        isOpen: boolean;
    }

    interface FloatingActionButtonOptions {
        /**
         * Direction FAB menu opens
         * @default "top"
         */
        direction: "top" | "right" | "buttom" | "left";

        /**
         * true: FAB menu appears on hover, false: FAB menu appears on click
         * @default true
         */
        hoverEnabled: boolean;

        /**
         * Enable transit the FAB into a toolbar on click
         * @default false
         */
        toolbarEnabled: boolean;
    }
}

interface JQuery {
    floatingActionButton(method: keyof Pick<M.FloatingActionButton, "open" | "close" | "destroy">): JQuery;
    floatingActionButton(options?: Partial<M.FloatingActionButtonOptions>): JQuery;
}
