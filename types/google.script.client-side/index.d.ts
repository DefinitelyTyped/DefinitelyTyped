// Type definitions for non-npm package Google Apps Script Client-side API 0.1
// Project: https://developers.google.com/apps-script/guides/html/reference/host
// Definitions by: clomie <https://github.com/clomie>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 2.2

declare namespace google.script {
    interface UrlLocation {
        /**
         * The string value of URL fragment after the # character, or an emptry string if no URL fragment is present
         */
        hash: string;

        /**
         * An object of key/value pairs that correspond to the URL request parameters.
         * Only the first value will be returned for parameters that have multiple values.
         * If no parameters are present, this will be an empty object.
         */
        parameter: { [key: string]: string };

        /**
         * An object similar to location.parameter, but with an array of values for each key.
         * If no parameters are present, this will be an empty object.
         */
        parameters: { [key: string]: ReadonlyArray<string> };
    }

    namespace url {
        /**
         * Gets a URL location object and passes it to the specified callback function (as the only argument).
         * @param callback a client-side callback function to run, using the location object as the only argument.
         */
        function getLocation(callback: (location: UrlLocation) => void): void;
    }

    namespace history {
        type State = object | null;
        interface Query {
            [key: string]: string | ReadonlyArray<string>;
        }

        /**
         * Pushes the provided state object, URL parameters and URL fragment onto the browser history stack.
         * @param stateObject An developer-defined object to be associated with a browser history event, and which resurfaces when the state is popped.
         * Typically used to store application state information (such as page data) for future retrieval.
         * @param params An object containing URL parameters to associate with this state.
         * For example, {foo: “bar”, fiz: “baz”} equates to "?foo=bar&fiz=baz".
         * Alternatively, arrays can be used: {foo: [“bar”, “cat”], fiz: “baz”} equates to "?foo=bar&foo=cat&fiz=baz".
         * If null or undefined, the current URL parameters are not changed. If empty, the URL parameters are cleared.
         * @param hash The string URL fragment appearing after the '#' character.
         * If null or undefined, the current URL fragment is not changed. If empty, the URL fragment is cleared.
         */
        function push(stateObject: State, params?: Query, hash?: string): void;

        /**
         * Replaces the top event on the browser history stack with the provided (developer-defined) state object, URL parameters and URL fragment.
         * @param stateObject An developer-defined object to be associated with a browser history event, and which resurfaces when the state is popped.
         * Typically used to store application state information (such as page data) for future retrieval.
         * @param params An object containing URL parameters to associate with this state.
         * For example, {foo: “bar”, fiz: “baz”} equates to "?foo=bar&fiz=baz".
         * Alternatively, arrays can be used: {foo: [“bar”, “cat”], fiz: “baz”} equates to "?foo=bar&foo=cat&fiz=baz".
         * If null or undefined, the current URL parameters are not changed. If empty, the URL parameters are cleared.
         * @param hash The string URL fragment appearing after the '#' character.
         * If null or undefined, the current URL fragment is not changed. If empty, the URL fragment is cleared.
         */
        function replace(stateObject: State, params?: Query, hash?: string): void;

        interface HistoryChangeEvent {
            /**
             * The state object associated with the popped event.
             * This object is identical to the state object that used in the corresponding push() or replace() method that added the popped state to the history stack.
             */
            state: State;

            /**
             * A location object associated with the popped event
             */
            location: UrlLocation;
        }

        /**
         * Sets a callback function to respond to changes in the browser history.
         * @param callback a client-side callback function to run upon a history change event, using the event object as the only argument.
         */
        function setChangeHandler(handler: (event: HistoryChangeEvent) => void): void;
    }

    namespace host {
        /**
         * Provides the host domain, so scripts can set their origin correctly.
         */
        const origin: string;

        /**
         * Closes the current dialog or sidebar.
         */
        function close(): void;

        namespace editor {
            /**
             * Switches browser focus from the dialog or sidebar to the Google Docs, Sheets, or Forms editor.
             */
            function focus(): void;
        }

        /**
         * Sets the height of the current dialog.
         * @param height the new height, in pixels
         */
        function setHeight(height: number): void;

        /**
         * Sets the width of the current dialog.
         * @param width the new width, in pixels
         */
        function setWidth(width: number): void;
    }

    const run: Runner;

    type Parameter = number | boolean | string | { [index: number]: Parameter } | { [key: string]: Parameter } | null | undefined;

    type Runner = {
        /**
         * Executes the server-side Apps Script function with the corresponding name.
         */
        [functionName: string]: (first?: Parameter | HTMLFormElement, ...rest: Parameter[]) => void;
    } & {
        /**
         * Sets a callback function to run if the server-side function throws an exception.
         * Without a failure handler, failures are logged to the JavaScript console.
         * To override this, call withFailureHandler(null) or supply a failure handler that does nothing.
         * @param handler a client-side callback function to run if the server-side function throws an exception;
         * the Error object is passed to the function as the first argument, and the user object (if any) is passed as a second argument
         */
        withFailureHandler(handler: (error: Error, object?: any) => void): Runner;

        /**
         * Sets a callback function to run if the server-side function returns successfully.
         * @param handler a client-side callback function to run if the server-side function returns successfully;
         * the server's return value is passed to the function as the first argument, and the user object (if any) is passed as a second argument
         */
        withSuccessHandler(handler: (value?: any, object?: any) => void): Runner;

        /**
         * Sets an object to pass as a second parameter to the success and failure handlers.
         * @param object an object to pass as a second parameter to the success and failure handlers;
         * because user objects are not sent to the server, they are not subject to the restrictions on parameters and return values for server calls.
         * User objects cannot, however, be objects constructed with the new operator
         */
        withUserObject(object: any): Runner;
    };
}
