// Type definitions for jQuery Cookie Plugin 1.3
// Project: https://github.com/carhartl/jquery-cookie
// Definitions by: Roy Goode <https://github.com/RoyGoode/>
// Definitions: https://github.com/borisyankov/DefinitelyTyped

///<reference path="../jquery/jquery.d.ts" />


interface JQueryCookieOptions {
    expires?: any;
    path?: string;
    domain?: string;
    secure?: boolean;
}

interface JQueryCookieStatic {
    raw?: boolean;
    json?: boolean;

    (): {[key:string]:string};
    (name: string): any;
    (name: string, converter: (value: string) => any): any;
    (name: string, value: string): void;
    (name: string, value: string, options: JQueryCookieOptions): void;
    (name: string, value: any): void;
    (name: string, value: any, options: JQueryCookieOptions): void;
}

interface JQueryStatic {   
    cookie?: JQueryCookieStatic;

    removeCookie(name: string): boolean;
    removeCookie(name: string, options: JQueryCookieOptions): boolean;
}
