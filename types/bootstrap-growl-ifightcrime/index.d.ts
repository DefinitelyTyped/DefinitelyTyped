// Type definitions for Bootstrap Growl Ifightcrime v1.1.0
// Project: https://github.com/ifightcrime/bootstrap-growl
// Definitions by: Anderson Friaça <https://github.com/AndersonFriaca>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 2.3

/// <reference types="jquery" />

declare namespace BootstrapGrowlIfightcrime {

    interface OffsetOption{
        
        /**
         * Position: top or bottom
         */
        from?: string;

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
         * Values of (null, 'info', 'danger', 'success')
         */
        type?: string;

        
        /**
         * Offset Options
         */
        offset?: OffsetOption;

        /**
         * 'left', 'right', or 'center'
         */
        align?: string;

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
    bootstrapGrowl: {
        (): JQuery;
        (message: string, options?: BootstrapGrowlIfightcrime.Options): JQuery;
    }
}