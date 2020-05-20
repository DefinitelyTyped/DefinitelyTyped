// Type definitions for jQuery.Address 1.5
// Project: https://github.com/asual/jquery-address
// Definitions by: Martin Duparc <https://github.com/martinduparc>, Tim Klingeleers <https://github.com/mardaneus86>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped/
// TypeScript Version: 2.3

/// <reference types="jquery" />

interface JQueryAddressStatic {
    (): any;
    /**
     * Binds any supported event type to a function with support for an optional map of data.
     */
    bind(type: any, data: any, callback: Function): JQueryAddressStatic;
    /**
     * Binds a function to be executed whenever the address is changed. 
     * The function receives a single event object parameter that contains the following properties: 
     * value, path, pathNames, parameterNames, parameters and queryString.
     */
    change(callback: Function): JQueryAddressStatic;
    /**
     * Binds a function to be executed once when the address is initiated. 
     * The function receives a single event object parameter that contains the following properties: 
     * value, path, pathNames, parameterNames, parameters and queryString.
     */
    init(callback: Function): JQueryAddressStatic;
    /**
     * Binds a function to be executed when the address is changed from inside the page that uses the plugin. 
     * The function receives a single event object parameter that contains the following properties: 
     * value, path, pathNames, parameterNames, parameters and queryString.
     */
    internalChange(eventhandler: Function): JQueryAddressStatic;
    /**
     * Binds a function to be executed when the address is changed from the browser usually when entering the page or using the back and forward buttons. 
     * The function receives a single event object parameter that contains the following properties: 
     * value, path, pathNames, parameterNames, parameters and queryString.
     */
    externalChange(eventhandler: Function): JQueryAddressStatic;
    /**
     * Provides the base address of the document.
     */
    baseURL(): string;
    /**
     * Provides the state of the auto update mode. Enabled by default.
     */
    autoUpdate(): boolean;
    /**
     * Enables or disables the auto update mode which can be turned off when multiple parameters values have to be changed at once.
     */
    autoUpdate(value: boolean): JQueryAddressStatic;
    /**
     * Provides the state of the crawling mode. Disables by default.
     */
    crawlable(): boolean;
    /**
     * Enables or disables the crawling mode which will automatically convert the values into a Google Ajax Crawling friendly format.
     */
    crawlable(value: boolean): JQueryAddressStatic;
    /**
     * Provides the hash fragment part of the deep linking value.
     */
    hash(): string;
    /**
     * Sets the hash fragment part of the deep linking value.
     */
    hash(value: string): JQueryAddressStatic;
    /**
     * Provides the state of the history mode setting. Enabled by default.
     */
    history(): boolean;
    /**
     * Enables or disables the history mode which generated entries in the browser history.
     */
    history(value: boolean): void;
    /**
     * Provides the value of a specific query parameter.
     */
    parameter(name: string): string;
    /**
     * Sets a query parameter value. Appending is disabled by default but can be enabled for array values.
     */
    parameter(name: string, value: string, append: boolean): JQueryAddressStatic;
    /**
     * Provides a list of all the query parameter names.
     */
    parameterNames(): Array<string>;
    /**
     * Provides the deep linking value without the query string and the hash fragment.
     */
    path(): string;
    /**
     * Sets the deep linking value without the query string and the hash fragment.
     */
    path(value: string): JQueryAddressStatic;
    /**
     * Provides a list of all the folders in the deep linking path.
     */
    pathNames(): Array<string>;
    /**
     * Provides the query string part of the deep linking value.
     */
    queryString(): string;
    /**
     * Sets the query string part of the deep linking value.
     */
    queryString(value: string): JQueryAddressStatic;
    /**
     * Provides the value used as a base path for the HTML5 state management.
     */
    state(): string;
    /**
     * Sets the base path of the website that is utilized in HTML5 state management.
     */
    state(value: string): JQueryAddressStatic;
    /**
     * Provides the state of the strict mode setting. Enabled by default.
     */
    strict(): boolean;
    /**
     * Enables or disables the strict mode which automatically appends a slash in the beginning of the deep linking value.
     */
    strict(value: boolean): JQueryAddressStatic;
    /**
     * Provides the title of the HTML document.
     */
    title(): string;
    /**
     * Sets the title of the HTML document.
     */
    title(value: string): JQueryAddressStatic;
    /**
     * Provides the currently set page view tracking function.
     */
    tracker(): any;
    /**
     * Sets a function for page view tracking. Google Analytics tracking is automatically invoked if it exists in the page.
     */
    tracker(value: Function): JQueryAddressStatic;
    /**
     * Provides the current deep linking value.
     */
    value(): string;
    /**
     * Sets the current deep linking value.
     */
    value(url: string): JQueryAddressStatic;
    /**
     * Updates the value when auto updating is disabled.
     */
    update(): JQueryAddressStatic;
    /**
     * Provides the state of the wrap mode. Disabled by default.
     */
    wrap(): boolean;
    /**
     * Enables or disables the wrap mode which generates a DIV wrapper around the page content and fixes any scroll issues caused by the use of hash fragments.
     */
    wrap(value: boolean): JQueryAddressStatic;
}

interface JQueryAddress {
    /**
     * Adds the plugin functionality to a DOM element and disables the default behavior. Designed primarily to support links and forms. 
     * Accepts an optional function parameter that allows custom processing of the deep link value.
     */
    (): JQuery;
    /**
     * Adds the plugin functionality to a DOM element and disables the default behavior. Designed primarily to support links and forms. 
     * Accepts an optional function parameter that allows custom processing of the deep link value.
     */
    (fn: Function): JQuery;
}

interface JQueryStatic {
    address: JQueryAddressStatic;
}

interface JQuery {
    address: JQueryAddress;
}
