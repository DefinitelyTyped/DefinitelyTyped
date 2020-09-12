// Type definitions for non-npm package custom-functions-runtime 1.5
// Project: https://github.com/OfficeDev/office-js
// Definitions by: OfficeDev <https://github.com/OfficeDev>,
//                 Adam Krantz <https://github.com/akrantz>,
//                 Michelle Scharlock <https://github.com/mscharlock>,
//                 David Chesnut <https://github.com/davidchesnut>,
//                 Alison McKay <https://github.com/alison-mk>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 2.4

/*
custom-functions-runtime
Copyright (c) Microsoft Corporation
*/

/**
 * CustomFunctions namespace, used by Excel Custom Functions
 */
declare namespace CustomFunctions {
    /**
     * Associates the JavaScript function to the name given by the "id" property in the metadata JSON file.
     */
    function associate(id: string, functionObject: Function): void;
    /**
     * Associates the JavaScript functions to the names given by the "id" properties in the metadata JSON file.
     */
    function associate(mappings: { [key: string]: Function }): void;

    /**
     * Use this class to handle errors and write custom error messages.
     * [Api set: CustomFunctionsRuntime 1.2]
     */
    class Error {
        constructor(errorCode: ErrorCode, errorMessage?: string);
         /**
          * The error code returned by your custom function.
          * [Api set: CustomFunctionsRuntime 1.2]
          */
        errorCode: ErrorCode;
         /**
          * Your custom error message, such as "This stock price is unavailable". Custom messages are only available with certain error codes.
          * [Api set: CustomFunctionsRuntime 1.2]
          */
        errorMessage?: string;
    }

    /**
     * Provides information about the invocation of a custom function.
     */
    interface Invocation {
        /**
         * The cell address where the function is being called, if requested, otherwise undefined.
         *
         * To request the address for the function, in the metadata JSON file, the function options should specify:
         * `{ "requiresAddress": true }`
         *
         * If the metadata JSON file is being generated from JSDoc comments, include the tag `@requiresAddress`.
         * [Api set: CustomFunctionsRuntime 1.1]
         */
        address?: string;
        /**
         * The range addresses where the function parameters are located, if requested, otherwise undefined.
         *
         * To request the parameter addresses for the function, in the metadata JSON file, the function options should specify:
         * `{ "requiresParameterAddresses": true }`
         *
         * If the metadata JSON file is being generated from JSDoc comments, include the tag `@requiresParameterAddresses`.
         * [Api set: CustomFunctionsRuntime 1.1]
         */
        parameterAddresses?: string;
    }

    /**
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
         * Event handler called when the custom function is canceled.
         * [Api set: CustomFunctionsRuntime 1.1]
         */
        onCanceled: () => void;
    }

    /**
     * Provides information about the invocation of a streaming custom function.
     * A streaming custom function can provide results which can change over time.
     *
     * Call `setResult()` one or more times to provide the result instead of returning
     * a result from the function.
     */
    interface StreamingInvocation<ResultType> extends CancelableInvocation {
        /**
         * Set the result for the custom function. May be called more than once.
         * [Api set: CustomFunctionsRuntime 1.1]
         */
        setResult: (value: ResultType | Error) => void;
    }

    /**
     * Error codes for custom functions. These errors will appear in the cell that invoked the function.
     */
    enum ErrorCode {
        /**
         *
         * This error code indicates that a value used in the function is of the wrong data type.
         * A custom error message can also be used in place of the error code, if desired.
         * [Api set: CustomFunctionsRuntime 1.3]
         */
        invalidValue = "#VALUE!",
        /**
         *
         * This error code indicates that the function or service isn't available.
         * A custom error message can also be used in place of the error code, if desired.
         * [Api set: CustomFunctionsRuntime 1.3]
         */
        notAvailable = "#N/A",
        /**
         *
         * This error code indicates that the function used is dividing by zero or empty cells.
         * A custom error message can't be used.
         * [Api set: CustomFunctionsRuntime 1.3]
         */
        divisionByZero = "#DIV/0!",
        /**
         *
         * There is a problem with a number used in the function.
         * A custom error message can't be used.
         * [Api set: CustomFunctionsRuntime 1.3]
         */
        invalidNumber = "#NUM!",
        /**
         *
         * The ranges in the function don't intersect.
         * A custom error message can't be used.
         * [Api set: CustomFunctionsRuntime 1.3]
         */
        nullReference = "#NULL!",
        /**
         *
         * There is a typo in the function name.
         * A custom error message can't be used.
         * [Api set: CustomFunctionsRuntime 1.3]
         */
        invalidName = "#NAME?",
        /**
         *
         * The function refers to an invalid cell.
         * A custom error message can't be used.
         * [Api set: CustomFunctionsRuntime 1.3]
         */
        invalidReference = "#REF!"
    }
}
