declare namespace SpinnerPlugin {
    interface SpinnerPluginStatic {
        /**
         * Blocks user input using an indeterminate spinner.
         *
         * An optional label can be shown below the spinner.
         *
         * @param labelText The optional value to show in a label.
         * @param successCallback The success callback for this asynchronous function.
         * @param failureCallback The failure callback for this asynchronous function; receives an error string.
         */
        activityStart(
            labelText?: string,
            successCallback?: () => void,
            failureCallback?: (error: string) => void,
        ): void;

        /**
         * Allows user input by hiding the indeterminate spinner.
         *
         * @param successCallback The success callback for this asynchronous function.
         * @param failureCallback The failure callback for this asynchronous function; receives an error string.
         */
        activityStop(successCallback?: () => void, failureCallback?: (error: string) => void): void;
    }
}

declare var SpinnerPlugin: SpinnerPlugin.SpinnerPluginStatic;
