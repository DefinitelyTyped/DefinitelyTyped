/// <reference path="./common.d.ts" />

declare namespace M {
    class Toast extends ComponentBase<ToastOptions> {
        /**
         * Get Instance
         */
        static getInstance(elem: Element): Toast;

        /**
         * Describes the current pan state of the Toast.
         */
        panning: boolean;

        /**
         * The remaining amount of time in ms that the toast will stay before dismissal.
         */
        timeRemaining: number;

        /**
         * remove a specific toast
         */
        dismiss(): void;

        /**
         * dismiss all toasts
         */
        static dismissAll(): void;
    }

    interface ToastOptions {
        /**
         * The content of the Toast.
         */
        text: string;

        /**
         * HTML content that will be appended to to text.
         * Only use properly sanitized or otherwise trusted data for unsafeHTML.
         */
        unsafeHTML: string;

        /**
         * HTML content that will be appended to text.
         * Only use properly sanitized or otherwise trusted data for html.
         * Will be ignored if unsafeHTML is set.
         * @deprecated Will be removed in a later release.
         */
        html: string;

        /**
         * Length in ms the Toast stays before dismissal.
         * @default 4000
         */
        displayLength: number;

        /**
         * Transition in duration in milliseconds.
         * @default 300
         */
        inDuration: number;

        /**
         * Transition out duration in milliseconds.
         * @default 375
         */
        outDuration: number;

        /**
         * Classes to be added to the toast element.
         */
        classes: string;

        /**
         * Callback function called when toast is dismissed.
         */
        completeCallback: () => void;

        /**
         * The percentage of the toast's width it takes for a drag to dismiss a Toast.
         * @default 0.8
         */
        activationPercent: number;
    }

    /**
     * Create a toast
     */
    function toast(options: Partial<ToastOptions>): Toast;
}
