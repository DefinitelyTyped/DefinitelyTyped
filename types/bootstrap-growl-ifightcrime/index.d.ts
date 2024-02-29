/// <reference types="jquery" />

declare namespace BootstrapGrowlIfightcrime {
    type OffsetPositionType = "top" | "bottom";

    type AlertType = "info" | "danger" | "success" | "warning" | string | null;

    type AlignType = "left" | "center" | "right";

    interface OffsetOption {
        /**
         * Position: top or bottom
         */
        from?: OffsetPositionType | undefined;

        /**
         * Offset amount
         */
        amount?: number | undefined;
    }

    interface Options {
        /**
         * Which element to append to
         */
        ele?: string | undefined;

        /**
         * Values of (null, 'info', 'danger', 'success', 'warning') or another value
         */
        type?: AlertType | undefined;

        /**
         * Offset Options
         */
        offset?: OffsetOption | undefined;

        /**
         * 'left', 'right', or 'center'
         */
        align?: AlignType | undefined;

        /**
         * Integer or 'auto'
         */
        width?: number | "auto" | undefined;

        /**
         * Time while the message will be displayed. It's not equivalent to the *demo* timeOut!
         */
        delay?: number | undefined;

        /**
         *  If true then will display a cross to close the popup.
         */
        allow_dismiss?: boolean | undefined;

        /**
         * Spacing between consecutively stacked growls.
         */
        stackup_spacing?: number | undefined;
    }
}
interface JQueryStatic {
    /**
     * Show standard Bootstrap alerts into hovering "Growl-like" notifications
     * @param message to show.
     * @param options should be an options object.
     * @returns The element.
     */
    bootstrapGrowl: (message: string, options?: BootstrapGrowlIfightcrime.Options) => JQuery;
}
