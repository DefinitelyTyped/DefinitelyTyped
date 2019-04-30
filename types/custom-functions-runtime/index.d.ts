// Type definitions for non-npm package Custom Functions 1.4
// Project: https://github.com/OfficeDev/office-js
// Definitions by: OfficeDev <https://github.com/OfficeDev>,
//                 Adam Krantz <https://github.com/akrantz>,
//                 Michael Zlatkovsky <https://github.com/Zlatkovsky>,
//                 Michelle Scharlock <https://github.com/mscharlock>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 2.4

/*
office-js
Copyright (c) Microsoft Corporation
*/

/**
 * @beta
 * CustomFunctions namespace, used by Excel Custom Functions
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
     * @beta
     * Provides information about the invocation of a custom function.
     */
    interface Invocation {
        /**
         * @beta
         * The cell address where the function is being called, if requested, otherwise undefined.
         *
         * To request the address for the function, in the metadata JSON file, the function options should specify:
         * `{ "requiresAddress": true }`
         *
         * If the metadata JSON file is being generated from JSDoc comments, include the tag `@requiresAddress`.
         */
        address?: string;
    }

    /**
     * @beta
     * Provides information about the invocation of a cancelable custom function.
     * A cancelable custom function can provide a handler for the onCanceled event.
     *
     * To indicate that a function is cancelable, in the metadata JSON file, the function options should specify:
     * `{ "cancelable": true }`
     *
     * If the metadata JSON file is being generated from JSDoc comments, include the tag `@cancelable`.
     */
    interface CancelableInvocation extends Invocation {
        /**
         * @beta
         * Event handler called when the custom function is canceled.
         */
        onCanceled: () => void;
    }

    /**
     * @beta
     * @deprecated Use `CancelableInvocation` instead.
     */
    interface CancelableHandler extends CancelableInvocation {
    }

    /**
     * @beta
     * Provides information about the invocation of a streaming custom function.
     * A streaming custom function can provide results which can change over time.
     *
     * Call `setResult()` one or more times to provide the result instead of returning
     * a result from the function.
     */
    interface StreamingInvocation<ResultType> extends CancelableInvocation {
        /**
         * @beta
         * Set the result for the custom function. May be called more than once.
         */
        setResult: (value: ResultType | Error) => void;
    }

    /**
     * @beta
     * @deprecated Use `StreamingInvocation<ResultType>` instead.
     */
    interface StreamingHandler<ResultType> extends StreamingInvocation<ResultType> {
    }
}
