// Type definitions for Custom Functions 1.4
// Project: http://dev.office.com
// Definitions by: OfficeDev <https://github.com/OfficeDev>, Michael Zlatkovsky <https://github.com/Zlatkovsky>, Michelle Scharlock <https://github.com/mscharlock>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 2.4

/*
office-js
Copyright (c) Microsoft Corporation
*/

////////////////////////////////////////////////////////////////
//////////////////// Begin custom-functions-runtime ////////////
////////////////////////////////////////////////////////////////

/**
 * Enables you to map your own name that uses lowercase letters to a function.
 */

declare namespace CustomFunctions {
    function Associate(key:string, functionName: Function): void
    /**
     * @beta
     * Ties together the function's JavaScript name with the JSON id property
     */

    interface StreamingHandler<T> extends CancelableHandler {
        /**
         * Sets the returned result for a streaming custom function.
         * @beta
         */
        setResult: (value: T | Error) => void;
    }

    interface CancelableHandler {
        /**
         * Handles what should occur when a custom function is canceled.
         * @beta
         */
        onCanceled: () => void;
    }
}

////////////////////////////////////////////////////////////////
//////////////////// End custom-functions-runtime ////////////
////////////////////////////////////////////////////////////////
