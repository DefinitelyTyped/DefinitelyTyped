// Type definitions for jQuery Cookie Plugin 1.4.1
// Project: https://github.com/carhartl/jquery-cookie
// Definitions by: Roy Goode <https://github.com/RoyGoode>, Ben Lorantfy <https://github.com/BenLorantfy>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 2.3

///<reference types="jquery" />


interface JQueryCookieOptions {
    /**
     * Define lifetime of the cookie. Value can be a Number which will be interpreted as days from time of creation or a Date object. If omitted, the cookie becomes a session cookie.
     */
    expires?: any;
    /**
     * Define the path where the cookie is valid. By default the path of the cookie is the path of the page where the cookie was created (standard browser behavior). If you want to make it available for instance across the entire domain use path: '/'. Default: path of page where the cookie was created.
     */
    path?: string;
    /**
     * Define the domain where the cookie is valid. Default: domain of page where the cookie was created.
     */
    domain?: string;
    /**
     * If true, the cookie transmission requires a secure protocol (https). Default: false.
     */
    secure?: boolean;
}
//
// The following jsdoc comments are used to add intellisense to editors that support it. Uses snippets
// of documentation from the Github repo when possible.
// 
// The ordering here matters. For example, the read function with the converter parameter is purposefully after
// the set function. This is because the intellisense that shows up after you press comma should be the set first,
// since that is more common, then the conversion function if user starts typing a parameter with a function type
interface JQueryCookieStatic {
    /**
     * By default the cookie value is encoded/decoded when writing/reading, using encodeURIComponent/decodeURIComponent. Bypass this by setting raw to true:
     */
    raw?: boolean;
    /**
     * Turn on automatic storage of JSON objects passed as the cookie value. Assumes JSON.stringify and JSON.parse
     */
    json?: boolean;
    /**
     * Cookie attributes can be set globally by setting properties of the $.cookie.defaults object or individually for each call to $.cookie() by passing a plain object to the options argument. Per-call options override the default options.
     */
    defaults?: JQueryCookieOptions;
    /**
     * Gets an object of cookies as key-value pairs
     */
    (): {[key:string]:string};
    /**
     * Gets a cookie by name
     * @param name The name of the cookie to get
     */
    (name: string): any;
    /**
     * Sets a cookie
     * @param name The name of the cookie to set
     * @param value The value to set the cookie to
     */
    (name: string, value: string): void;
    /**
     * Gets a cookie by name after applying a conversion function to the value
     * @param name The name of the cookie to get
     * @param converter A conversion function to change the cookie's value to a different representation on the fly
     */
    (name: string, converter: (value: string) => any): any;
    /**
     * Sets a cookie with some options
     * @param name The name of the cookie to set
     * @param value The value to set the cookie to
     * @param options An object of options that change how the cookie is set
     */
    (name: string, value: string, options: JQueryCookieOptions): void;
    /**
     * Sets a cookie using .toString(), or if $.cookie.json is set to true using JSON.stringify()
     * @param name The name of the cookie to set
     * @param value The value to set the cookie to
     */
    (name: string, value: any): void;
    /**
     * Sets a cookie using .toString(), or if $.cookie.json is set to true using JSON.stringify()
     * @param name The name of the cookie to set
     * @param value The value to set the cookie to
     * @param options An object of options that change how the cookie is set
     */
    (name: string, value: any, options: JQueryCookieOptions): void;
}

interface JQueryStatic {   
    /**
     * A simple, lightweight jQuery plugin for reading, writing and deleting cookies.
     */
    cookie: JQueryCookieStatic;
    /**
     * Deletes a cookie
     * @param name Name of cookie to delete
     */
    removeCookie(name: string): boolean;
    /**
     * Deletes a cookie
     * @param name Name of cookie to delete
     * @param options The same attributes (path, domain) as what the cookie was written with
     */
    removeCookie(name: string, options: JQueryCookieOptions): boolean;
}
