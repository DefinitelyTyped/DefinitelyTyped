declare namespace OO.ui {
    /**
     * Errors contain a required message (either a string or jQuery selection) that is used to
     * describe what went wrong in a {@link OO.ui.Process process}. The error's
     * {@link Error.ConfigOptions.recoverable recoverable} and {@link Error.ConfigOptions.warning warning}
     * configurations are used to customize the appearance and functionality of the error interface.
     *
     * The basic error interface contains a formatted error message as well as two buttons: 'Dismiss'
     * and 'Try again' (i.e., the error is 'recoverable' by default). If the error is not recoverable,
     * the 'Try again' button will not be rendered and the widget that initiated the failed process
     * will be disabled.
     *
     * If the error is a warning, the error interface will include a 'Dismiss' and a 'Continue' button,
     * which will try the process again.
     *
     * For an example of error interfaces, please see the [OOUI documentation on MediaWiki](https://www.mediawiki.org/wiki/OOUI/Windows/Process_Dialogs#Processes_and_errors).
     *
     * ResourceLoader module: `oojs-ui-windows`
     *
     * @see https://doc.wikimedia.org/oojs-ui/master/js/#!/api/OO.ui.Error
     */
    interface Error {
        /**
         * Check if the error is recoverable.
         *
         * If the error is recoverable, users are able to try the process again.
         *
         * @return Error is recoverable
         */
        isRecoverable(): boolean;

        /**
         * Check if the error is a warning.
         *
         * If the error is a warning, the error interface will include a 'Dismiss' and a 'Continue'
         * button.
         *
         * @return Error is warning
         */
        isWarning(): boolean;

        /**
         * Get error message as DOM nodes.
         *
         * @return Error message in DOM nodes
         */
        getMessage(): JQuery;

        /**
         * Get the error message text.
         *
         * @return Error message
         */
        getMessageText(): string;
    }

    namespace Error {
        interface ConfigOptions {
            /**
             * Error is recoverable.
             * By default, errors are recoverable, and users can try the process again.
             */
            recoverable?: boolean;

            /**
             * Error is a warning.
             * If the error is a warning, the error interface will include a
             * 'Dismiss' and a 'Continue' button. It is the responsibility of the developer to ensure
             * that the warning is not triggered a second time if the user chooses to continue.
             */
            warning?: boolean;
        }

        interface Constructor {
            /**
             * @param message Description of error
             * @param config Configuration options
             */
            new(message: string | JQuery, config?: ConfigOptions): Error;
            prototype: Error;
            static: {};
        }
    }

    const Error: Error.Constructor;
}
