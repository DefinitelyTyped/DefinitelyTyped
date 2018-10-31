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
 * Specific to Excel Custom Functions.
 * Enables you to set key-value pairs which map
 * a function's id in the JSON metadata to the JS function name.
 * @beta
 */
declare let CustomFunctionMappings: { [key: string]: Function };
/**
 * CustomFunctions namespace, used by Excel Custom Functions
 * @beta
 */
declare namespace CustomFunctions {
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
