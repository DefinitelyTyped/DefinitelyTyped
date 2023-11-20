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
     *
     * @remarks
     * [Api set: CustomFunctionsRuntime 1.2]
     */
    class Error {
        constructor(code: ErrorCode, message?: string);
         /**
          * The error code returned by your custom function.
          *
          * @remarks
          * [Api set: CustomFunctionsRuntime 1.2]
          */
        code: ErrorCode;
         /**
          * Your custom error message, such as "This stock price is unavailable". Custom messages are only available with certain error codes.
          *
          * @remarks
          * [Api set: CustomFunctionsRuntime 1.2]
          */
        message?: string;
    }

    /**
     * Provides information about the invocation of a custom function.
     */
    interface Invocation {
        /**
         * The name of this function.
         *
         * @remarks
         * [Api set: CustomFunctionsRuntime 1.1]
         */
        functionName?: string;
        /**
         * The cell address where the function is being called, if requested, otherwise undefined.
         *
         * To request the address for the function, in the metadata JSON file, the function options should specify:
         * `{ "requiresAddress": true }`
         *
         * If the metadata JSON file is being generated from JSDoc comments, include the tag `@requiresAddress`.
         *
         * @remarks
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
         *
         * @remarks
         * [Api set: CustomFunctionsRuntime 1.3]
         */
        parameterAddresses?: string[];
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
         *
         * @remarks
         * [Api set: CustomFunctionsRuntime 1.1]
         *
         * @eventproperty
         */
        onCanceled?: () => void;
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
         *
         * @remarks
         * [Api set: CustomFunctionsRuntime 1.1]
         */
        setResult: (value: ResultType | Error) => void;
    }

    /**
     * Error codes for custom functions. The error codes will appear in the cell that invoked the function.
     *
     * Custom error messages appear in addition to these error codes. Custom messages display in the error
     * indicator menu, which is accessed by hovering over the error flag on each cell with an error.
     */
    enum ErrorCode {
        /**
         *
         * This error code indicates that a value in the function is of the wrong data type.
         * A custom error message can be used in addition to the error code, if desired.
         *
         * @remarks
         * [Api set: CustomFunctionsRuntime 1.3]
         */
        invalidValue = "#VALUE!",
        /**
         *
         * This error code indicates that the function or service isn't available.
         * A custom error message can be used in addition to the error code, if desired.
         *
         * @remarks
         * [Api set: CustomFunctionsRuntime 1.3]
         */
        notAvailable = "#N/A",
        /**
         *
         * This error code indicates that the function used is dividing by zero or empty cells.
         * A custom error message can't be used.
         *
         * @remarks
         * [Api set: CustomFunctionsRuntime 1.3]
         */
        divisionByZero = "#DIV/0!",
        /**
         *
         * This error code indicates that there is a problem with a number in the function.
         * A custom error message can't be used.
         *
         * @remarks
         * [Api set: CustomFunctionsRuntime 1.3]
         */
        invalidNumber = "#NUM!",
        /**
         *
         * This error code indicates that the ranges in the function don't intersect.
         * A custom error message can't be used.
         *
         * @remarks
         * [Api set: CustomFunctionsRuntime 1.3]
         */
        nullReference = "#NULL!",
        /**
         *
         * This error code indicates that there is a typo in the function name.
         * Note that this error code is supported as a custom function input error, but not as a custom function output error.
         * A custom error message can't be used.
         *
         * @remarks
         * [Api set: CustomFunctionsRuntime 1.3]
         */
        invalidName = "#NAME?",
        /**
         *
         * This error code indicates that the function refers to an invalid cell.
         * Note that this error code is supported as a custom function input error, but not as a custom function output error.
         * A custom error message can't be used.
         *
         * @remarks
         * [Api set: CustomFunctionsRuntime 1.3]
         */
        invalidReference = "#REF!"
    }
}
