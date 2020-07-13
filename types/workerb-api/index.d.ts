// Type definitions for workerb-api 1.0
// Project: https://workerb.io/
// Definitions by: workerB <https://github.com/workerb-io>
//                Saurabh Garg <https://github.com/s-garg>
//                Praveen Kumar Saini <https://github.com/praveen-me>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

declare type clickQueryMethods = 'by_text' | 'by_regex' | 'by_id' | 'by_xpath' | 'by_query_selector';

declare type getAttributeQueryMethods =
    | 'by_text'
    | 'by_regex'
    | 'by_id'
    | 'by_xpath'
    | 'by_query_selector'
    | 'by_query_selector_all';

declare type typeQueryMethods =
    | 'by_text'
    | 'by_regex'
    | 'by_id'
    | 'by_xpath'
    | 'by_query_selector'
    | 'by_label'
    | 'by_placeholder';

declare interface QueryOptions {
    /**
     *  A number which specifies after how many milliseconds the runtime will try to find the target element. The default value is 200.
     */
    retryDuration?: number;
    /**
     *  A number number which specifies how many times the script runner will try to find the target element. The default value is 10.
     */
    numberOfTries?: number;
}

declare interface ClickQueryOptions extends QueryOptions {
    /**
     * Allows to select an element with different methods:
     *
     * * by_text - finds the target element by text value.
     * * by_regex - finds the target element by regex.
     * * by_id - finds the target element by id
     * * by_xpath - finds the target element by an [xpath](https://developer.mozilla.org/en-US/docs/Web/XPath) query
     * * by_query_selector - finds the target element using a query selector
     *
     */
    method?: clickQueryMethods;

    /**
     *  A boolean to indicate if script runner should expect the page to reload.
     *  If set to true, the script execution will pause after executing the click. It will resume after the page reloads. The default value is false.
     */
    expectReload?: boolean;
}

declare interface GetAttributeQueryOptions extends QueryOptions {
    /**
     * Allows to select an element with different methods:
     *
     * * by_text - finds the target element by text value.
     * * by_regex - finds the target element by regex.
     * * by_id - finds the target element by id
     * * by_xpath - finds the target element by an [xpath](https://developer.mozilla.org/en-US/docs/Web/XPath) query
     * * by_query_selector - finds the target element using a query selector
     * * by_query_selector_all - finds all the elements using a query selector
     */
    method?: getAttributeQueryMethods;
}

declare interface SelectQueryOptions extends QueryOptions {
    /**
     * Allows to select an element with different methods:
     *
     * * by_text - finds the target element by text value.
     * * by_regex - finds the target element by regex.
     * * by_id - finds the target element by id
     * * by_xpath - finds the target element by an [xpath](https://developer.mozilla.org/en-US/docs/Web/XPath) query
     * * by_query_selector finds - the target element using a query selector
     */
    method?: clickQueryMethods;

    /**
     * Specify if the provided value is a label or value of the option needs to be selected. The default value is label.
     */
    selectBy: string;
}

declare interface TypeQueryInterface extends QueryOptions {
    /**
     * Allows to select an element with different methods:
     *
     * * by_text - finds the target element by text value.
     * * by_regex - finds the target element by regex.
     * * by_id - finds the target element by id
     * * by_xpath - finds the target element by an [xpath](https://developer.mozilla.org/en-US/docs/Web/XPath) query
     * * by_query_selector - finds the target element using a query selector
     * * by_label - finds the target input using a label.
     * * by_placeholder - finds the target input using a placeholder.
     */
    method?: typeQueryMethods;
}

declare interface APIResponse {
    /**
     * A string that has the response returned by the remote server.
     */
    response: string;
    /**
     * A number that is the Status Code returned by the remote server.
     */
    status: number;
}

declare interface EventConfig {
    /**
     * A string value used to the specify the type of the event.
     */
    eventType:
        | 'keydown'
        | 'keyup'
        | 'mousedown'
        | 'mouseenter'
        | 'mouseleave'
        | 'mousemove'
        | 'mouseout'
        | 'mouseover'
        | 'mouseup';
    /**
     * An object used to specify the event properties. For key related event types, KeyboardEvent is supported. For mouse related event types, MouseEvent is supported.
     */
    eventProps?: object;
}

// global variables
declare let args: string[];
declare let options: any;

/**
 * The open function opens a link in the same browser window.
 *
 * @param url  A string that specifies the link to open
 *
 * @returns undefined
 */
declare function open(url: string): undefined;

/**
 * The click function performs a mouse click on a target element. The element can be specified using different query methods.
 *
 * @param query A string used to identify the target element in the DOM.
 * @param options An optional object used to control what the click function does.
 *
 * @returns undefined
 */
declare function click(query: string, options?: ClickQueryOptions): undefined;

/**
 * The notify function can be used to display a message to the user.
 *
 * @param message A string used to specify the text to be displayed.
 * @param type A string used to specify the type of the notification. Either error or success.
 * @param timeout A number used to specify the duration for which the notification will be displayed.
 *
 * @returns undefined
 */
declare function notify(message: string, type: 'error' | 'success', timeout: number): undefined;

/**
 * The type function writes a given string to a target input field. The input field can be specified using different query methods.
 *
 * @param text A string that should be written to a target input field.
 * @param query A string used to identify the target element in the DOM.
 * @param options An optional object used to control what the click function does.
 *
 * @returns undefined
 */
declare function type(text: string, query: string, options?: TypeQueryInterface): undefined;

/**
 * The download can be used to download data as part of the script
 *
 * @param filename A string that specifies the name of the file.
 * @param content A string that specifies the contents of the file. For non-text formats, the content can be passed as base-64 encoded string.
 * @param contentType A string that specifies the contentType of the file.
 * It can be either 'text' for text files or any valid mime type e.g 'text/plain;charset=utf-8'
 *
 * @returns undefined
 */
declare function download(filename: string, content: string, contentType: string): undefined;

/**
 * The event function generates an event on a target element.
 *
 * @param query A string value used to identify the target element in the DOM.
 * @param eventConfig An object used to specify the event.
 * @param options An optional object used to control what the event function does.
 *
 * @returns undefined
 */
declare function event(query: string, eventConfig: EventConfig, options?: ClickQueryOptions): undefined;

/**
 * The prompt function opens a prompt to query user for input.
 *
 * @param label A string that specifies the message to show on the prompt
 *
 * @returns A string that has the user input.
 */
declare function prompt(label: string): string;

/**
 * The log function can be used to print messages to the browser console.
 *
 * @param value Any value needed to be logged.
 * @param color An optional string used to specify the color of the text.
 *
 * @returns undefined
 */
declare function log(value: any, color?: string): undefined;

/**
 * The read function returns a text from a target element.
 *
 * @param query A string used to identify the target element in the DOM.
 * @param options An optional object used to control what the read function does
 *
 * @returns A string which is either the text inside an element or in case of input the value of the input.
 */
declare function read(query: string, options?: ClickQueryOptions): string;

/**
 * The readAll function returns texts of all target elements which match the query.
 *
 * @param query  A string used to identify the target elements in the DOM. The query is run using a query selector. All elements satisfying the query are returned.
 * @param options  An optional object used to control what the read function does.
 *
 * @returns The array of values read.
 */
declare function readAll(query: string, options?: QueryOptions): any[];

/**
 * The readTable function returns the content of a target table.
 *
 * @param query A string used to identify the target element in the DOM.
 * @param options An optional object used to control what the click function does.
 *
 * @returns An object
 *
 * * header: An array of strings which contains the heading for columns
 *
 * * rows: An array of objects where each key corresponds to a header from the 'header' array. If column header is not identified, the key will be 'column{index}'.
 */
declare function readTable(
    query: string,
    options?: ClickQueryOptions,
): {
    header: string[];
    rows: object[];
};

/**
 * The readURL function returns the URL of the webpage in the active tab.
 *
 * @returns A string which is the URL of the webpage in the active tab.
 */
declare function readUrl(): string;

/**
 * The runInTab function runs the specified function in a new tab and returns the result to the current tab.
 *
 * @param task A Function which specifies the code that should be run in the new tab.
 * @param keepOpen  A boolean Keep the tab open after executing the function.
 *
 * @returns A string which is stringified version of the value returned by the passed function.
 */
declare function runInTab(task: () => any, keepOpen: boolean): string;

/**
 * Select value on a particular a DOM element.
 *
 * @param value The string value that you want to select.
 * @param query A string used to identify the target element in the DOM.
 * @param options An optional object used to control what the click function does
 *
 * @returns undefined
 */
declare function select(value: string, query: string, options?: SelectQueryOptions): undefined;

/**
 * The submit function generates an the 'enter' keypress event on a target form element. This can result in the submission of the parent form.
 *
 * @param query A string used to identify the target element in the DOM.
 * @param options An optional object used to control what the click function does
 *
 * @returns undefined
 */
declare function submit(query: string, options?: ClickQueryOptions): undefined;

/**
 * The tab function opens a link in a new tab in the browser.
 *
 * @param url  A string that specifies the link to open
 *
 * @returns undefined
 */
declare function tab(url: string): undefined;

/**
 * The getAttribute function can be used to get an attribute value of a target element.
 *
 * @param attributes  A string or an array of Strings used to specify the attribute(s) for which the value should be returned.
 * @param query A string value used to identify the target element in the DOM.
 * @param options An optional object used to control what the click function does.
 *
 * @returns An array of objects. Each object corresponds to each element in the DOM that satisfied the query and it has the attribute name & values as properties for that element.
 */
declare function getAttribute(
    attributes: string | string[],
    query: string,
    options?: GetAttributeQueryOptions,
): object[];

/**
 * The logging function is used to enable and disable debug messages logging.
 *
 * @param state A string with either 'on' or 'off' as a value to either enable or disable logging.
 *
 * @returns undefined
 */
declare function logging(state: 'on' | 'off'): undefined;

/**
 * The httpGet function can be used to make http get requests.
 *
 * @param url A string used to specify the URL where delete request is made.
 * @param headers An optional object used to specify the headers for the request.
 *
 * @returns An object
 *
 * * response: A string that has the response returned by the remote server.
 *
 * * status: A number that is the Status Code returned by the remote server.
 */
declare function httpGet(url: string, headers?: object): APIResponse;

/**
 * The httpDelete function can be used to make http delete requests.
 *
 * @param url A string used to specify the URL where delete request is made.
 * @param data A string used to specify the payload for the request.
 * @param headers An optional object used to specify the headers for the request.
 *
 * @returns An object
 *
 * * response: A string that has the response returned by the remote server.
 *
 * * status: A number that is the Status Code returned by the remote server.
 */
declare function httpDelete(url: string, data?: any, headers?: object): APIResponse;

/**
 * The httpPost function can be used to make http post requests.
 *
 * @param url A string used to specify the URL where delete request is made.
 * @param data A string used to specify the payload for the request.
 * @param headers An optional object used to specify the headers for the request.
 *
 * @returns An object
 *
 * * response: A string that has the response returned by the remote server.
 *
 * * status: A number that is the Status Code returned by the remote server.
 */
declare function httpPost(url: string, data?: any, headers?: object): APIResponse;

/**
 * The httpPut function can be used to make http put requests.
 *
 * @param url A string used to specify the URL where delete request is made.
 * @param data A string used to specify the payload for the request.
 * @param headers An optional object used to specify the headers for the request.
 *
 * @returns An object
 *
 * * response: A string that has the response returned by the remote server.
 *
 * * status: A number that is the Status Code returned by the remote server.
 */
declare function httpPut(url: string, data?: any, headers?: object): APIResponse;
