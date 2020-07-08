// Type definitions for workerb x.x
// Project: https://github.com/baz/foo (Does not have to be to GitHub, but prefer linking to a source code repository rather than to a project website.)
// Definitions by: praveen-me <https://github.com/me>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

/*~ If this module is a UMD module that exposes a global variable 'myLib' when
 *~ loaded outside a module loader environment, declare that global here.
 *~ Otherwise, delete this declaration.
 */
export as namespace myLib;

/*~ If this module has methods, declare them as functions like so.
 */
export function myMethod(a: string): string;
export function myOtherMethod(a: number): number;

/*~ You can declare types that are available via importing the module */
export interface someType {
    name: string;
    length: number;
    extras?: string[];
}

/*~ You can declare properties of the module using const, let, or var */
export const myField: number;

/*~ If there are types, properties, or methods inside dotted names
 *~ of the module, declare them inside a 'namespace'.
 */
export namespace subProp {
    /*~ For example, given this definition, someone could write:
     *~   import { subProp } from 'yourModule';
     *~   subProp.foo();
     *~ or
     *~   import * as yourMod from 'yourModule';
     *~   yourMod.subProp.foo();
     */
    function foo(): void;
}

export interface QueryOptions {
    /**
     * Allows to select an element with different methods:
     *
     * * by_text - finds the target element by text value.
     * * by_regex - finds the target element by regex.
     * * by_id - finds the target element by id
     * * by_xpath - finds the target element by an [xpath](https://developer.mozilla.org/en-US/docs/Web/XPath) query
     *
     */
    method?: 'by_text' | 'by_regex' | 'by_id' | 'by_xpath' | 'by_query_selector';
    /**
     *  A number which specifies after how many milliseconds the runtime will try to find the target element. The default value is 200.
     */
    retryDuration?: number;
    /**
     *  A number number which specifies how many times the script runner will try to find the target element. The default value is 10.
     */
    numberOfTries?: number;
}

export interface ClickQueryOptions extends QueryOptions {
    expectReload?: boolean;
}

export interface APIResponse {
    response: string;
    status: number;
}

export interface EventConfig {
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
    eventProps?: MouseEvent | KeyboardEvent;
}

// global variables
export declare let args: string[];
export declare let options: any;

// methods
export declare function open(url: string): undefined;

export declare function click(query: string, options?: ClickQueryOptions): undefined;

export declare function notify(message: string, type: 'error' | 'success', timeout: number): undefined;

export declare function type(text: string, query: string, options?: QueryOptions): undefined;

export declare function download(filename: string, content: string, contentType: string): undefined;

export declare function event(query: string, eventConfig: EventConfig, options: QueryOptions): undefined;

export declare function prompt(text: string): string | null;
export declare function log(text: any, color: string): undefined;
export declare function read(query: string, options?: QueryOptions): string;
export declare function readAll(query: string, options?: QueryOptions): Array<any>;

export declare function readTable(
    query: string,
    options?: QueryOptions,
): {
    header: Array<string>;
    rows: Array<object>;
};

export declare function readUrl(): string;

export declare function runInTab(task: () => any, keepOpen: boolean): string;

export declare function submit(query: string, options?: ClickQueryOptions): undefined;

export declare function tab(url: string): undefined;

export declare function getAttribute(
    attributes: string | Array<string>,
    query: string,
    options: QueryOptions,
): Array<object>;

export declare function logging(state: 'on' | 'off'): undefined;

// api methods
export declare function httpGet(url: string, headers?: object): APIResponse;

export declare function httpDelete(url: string, data?: any, headers?: object): APIResponse;

export declare function httpPost(url: string, data?: any, headers?: object): APIResponse;

export declare function httpPut(url: string, data?: any, headers?: object): APIResponse;
