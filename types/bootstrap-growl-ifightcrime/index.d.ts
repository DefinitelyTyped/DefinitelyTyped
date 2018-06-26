// Type definitions for Bootstrap Growl Ifightcrime 1.1
// Project: https://github.com/ifightcrime/bootstrap-growl
// Definitions by: Anderson Friaça <https://github.com/AndersonFriaca>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 2.3

/// <reference types="jquery" />

declare namespace BootstrapGrowlIfightcrime {
    type OffsetPositionType = 'top' | 'bottom';

    type AlertType = 'info' | 'danger' | 'success' | 'warning' | string | null;

    type AlignType = 'left' | 'center' | 'right';

    interface OffsetOption {
        /**
         * Position: top or bottom
         */
         from?: OffsetPositionType;

        /**
         * Offset amount
         */
         amount?: number;
     }

     interface Options {
        /**
         * Which element to append to
         */
         ele?: string;

        /**
         * Values of (null, 'info', 'danger', 'success', 'warning') or another value
         */
         type?: AlertType;

        /**
         * Offset Options
         */
         offset?: OffsetOption;

        /**
         * 'left', 'right', or 'center'
         */
         align?: AlignType;

        /**
         * Integer
         */
         width?: number;

        /**
         * Time while the message will be displayed. It's not equivalent to the *demo* timeOut!
         */
         delay?: number;

        /**
         *  If true then will display a cross to close the popup.
         */
         allow_dismiss?: boolean;

        /**
         * Spacing between consecutively stacked growls.
         */
         stackup_spacing?: number;
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
