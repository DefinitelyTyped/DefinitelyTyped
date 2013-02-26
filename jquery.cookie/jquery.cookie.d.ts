// Type definitions for jQuery Cookie Plugin 1.3
// Project: https://github.com/carhartl/jquery-cookie
// Definitions by: Roy Goode <https://github.com/RoyGoode/>
// Definitions: https://github.com/borisyankov/DefinitelyTyped

///<reference path="../jquery/jquery.d.ts" />


interface JQueryCookieOptions {
    expires?: any;
    path?: string;
    domain?: string;
    secure?: bool;
}

interface JQueryCookieStatic {
    raw?: bool;
    json?: bool;

    (name: string): any;
    (name: string, value: string): void;
    (name: string, value: string, options: JQueryCookieOptions): void;
    (name: string, value: any): void;
    (name: string, value: any, options: JQueryCookieOptions): void;
}

interface JQueryStatic {   
    cookie?: JQueryCookieStatic;

    removeCookie(name: string): bool;
    removeCookie(name: string, options: JQueryCookieOptions): bool;
}