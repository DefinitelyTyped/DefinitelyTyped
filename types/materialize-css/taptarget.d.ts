/// <reference path="./common.d.ts" />

declare namespace M {
    class TapTarget extends Component<TapTargetOptions> {
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
