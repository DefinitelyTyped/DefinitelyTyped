// Type definitions for Custom Functions 1.4
// Project: http://dev.office.com
// Definitions by: OfficeDev <https://github.com/OfficeDev>, Michael Zlatkovsky <https://github.com/Zlatkovsky>, Michelle Scharlock <https://github.com/mscharlock>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 2.4

/*
office-js
Copyright (c) Microsoft Corporation
*/

/**
 * Specific to Excel Custom Functions. Enables you to set key-value pairs where the key is the uppercase id of a function in the custom function's JSON metadata file and the value is the name of the function as defined in the function's JavaScript file.
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