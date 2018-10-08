// Type definitions for Custom Functions 1.4
// Project: https://github.com/OfficeDev/office-js-docs-reference
// Definitions by: OfficeDev <https://github.com/OfficeDev>, Michael Zlatkovsky <https://github.com/Zlatkovsky>, Michelle Scharlock <https://github.com/mscharlock>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 2.4

/*
office-js
Copyright (c) Microsoft Corporation
*/

/**
 * Specific to Excel Custom Functions. Enables you to set key-value pairs (a function's JSON id : JavaScript name).
 */
declare let CustomFunctionMappings: { [key: string]: Function };
/**
 * CustomFunctions namespace, used by Excel Custom Functions
 */
declare namespace CustomFunctions {
    /**
     * StreamingHandler interface
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
