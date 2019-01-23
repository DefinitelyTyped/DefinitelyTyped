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
     * Associates the JavaScript function to the name given by the "id" property in the metadata JSON file.
     * @beta
     */
    function associate(id: string, functionObject: Function): void;
    /**
     * Associates the JavaScript functions to the names given by the "id" properties in the metadata JSON file.
     * @beta
     */
    function associate(mappings: { [key: string]: Function }): void;

    /**
     * Provides information about the invocation of a custom function.
     * @beta
     */
    interface Invocation {
        /**
         * The cell address where the function is being called, if requested, otherwise undefined.
         * 
         * To request the address for the function, in the metadata JSON file, the function options should specify:
         * 
         * {
         *     "requiresAddress": "true"
         * }
         * 
         * If the metadata JSON file is being generated from JSDoc comments, include the tag "@requiresAddress".
         */
        address?: string;
    }

    /**
     * Provides information about the invocation of a cancelable custom function,
     * and allows providing a function to be called when the function is canceled.
     * @beta
     */
    interface CancelableInvocation extends Invocation {
        /**
         * Event handler called when the custom function is canceled.
         * @beta
         */
        onCanceled: () => void;
    }

    /**
     * Provides information and events for the invocation of a cancelable custom function.
     * @beta
     * @deprecated Use CancelableInvocation instead.
     */
    interface CancelableHandler extends CancelableInvocation {        
    }

    /**
     * Provides information and events for the invocation of a streaming custom function whose result
     * can change over time. Call setResult() one or more times to provide the result 
     * rather than returning a value from the function.
     * @beta
     */
    interface StreamingInvocation<ResultType> extends CancelableInvocation {
        /**
         * Sets the result for the custom function. May be called more than once.
         * @beta
         */
        setResult: (value: ResultType | Error) => void;
    }

    /**
     * Provides information and events for the invocation of a streaming custom function whose result
     * can change over time. Call setResult() one or more times to provide the result 
     * rather than returning a value from the function.
     * @beta
     * @deprecated Use StreamingInvocation<ResultType> instead.
     */
    interface StreamingHandler<ResultType> extends StreamingInvocation<ResultType> {
    }
}
