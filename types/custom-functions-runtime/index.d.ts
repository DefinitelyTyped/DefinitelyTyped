// Type definitions for Custom Functions 1.4
// Project: https://github.com/OfficeDev/office-js
// Definitions by: OfficeDev <https://github.com/OfficeDev>, Michael Zlatkovsky <https://github.com/Zlatkovsky>, Michelle Scharlock <https://github.com/mscharlock>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 2.4

/*
office-js
Copyright (c) Microsoft Corporation
*/

/**
 * CustomFunctions namespace, used by Excel Custom Functions
 * @beta
 */
declare namespace CustomFunctions {
    /**
     * @beta
     * Associates the JavaScript function to the name given by the "id" property in the metadata JSON file.
     */
    function associate(id: string, functionObject: Function): void;
    /**
     * @beta
     * Associates the JavaScript functions to the names given by the "id" properties in the metadata JSON file.
     */
    function associate(mappings: { [key: string]: Function }): void;

    /**
     * A handler passed automatically as the last parameter
     * to a streaming function. With this parameter, a
     * function can use handler.setResult to set a cell value
     * or hook into the handler.onCanceled event to
     * to handle what happens when the function stops streaming.
     * @beta
     */
    interface StreamingHandler<T> extends CancelableHandler {
        /**
         * Sets the returned result for a streaming custom function.
         * @beta
         */
        setResult: (value: T | Error) => void;
    }

    /**
     * @beta
     * CancelableHandler interface
     */
    interface CancelableHandler {
        /**
         * Handles what should occur when a custom function is canceled.
         * @beta
         */
        onCanceled: () => void;
    }
}
