/// <reference path="./common.d.ts" />

declare namespace M {
    class TapTarget extends Component<TapTargetOptions> {
        /**
         * Get Instance
         */
        static getInstance(elem: Element): TapTarget;

        /**
         * Init TapTarget
         */
        static init(els: Element, options?: Partial<TapTargetOptions>): TapTarget;

        /**
         * Init TapTargets
         */
        static init(els: MElements, options?: Partial<TapTargetOptions>): TapTarget[];

        /**
         * If the tap target is open
         */
        isOpen: boolean;

        /**
         * Open Tap Target
         */
        open(): void;

        /**
         * Close Tap Target
         */
        close(): void;
    }

    interface TapTargetOptions {
        /**
         * Callback function called when Tap Target is opened
         * @default null
         */
        onOpen: (this: TapTarget, origin: Element) => void;

        /**
         * Callback function called when Tap Target is closed
         * @default null
         */
        onClose: (this: TapTarget, origin: Element) => void;
    }
}

interface JQuery {
    tapTarget(method: keyof Pick<M.TapTarget, "open" | "close" | "destroy">): JQuery;
    tapTarget(options?: Partial<M.TapTargetOptions>): JQuery;
}
