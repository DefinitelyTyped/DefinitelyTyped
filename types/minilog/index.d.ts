// Type definitions for minilog 2.0
// Project: https://github.com/mixu/minilog
// Definitions by: Guido <http://guido.io>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

//These type definitions are not complete, although basic usage should be typed.
interface Minilog {
    debug(...msg: any[]): Minilog;
    info(...msg: any[]): Minilog;
    log(...msg: any[]): Minilog;
    warn(...msg: any[]): Minilog;
    error(...msg: any[]): Minilog;
}

declare function Minilog(namespace: string): Minilog;

declare namespace Minilog {
    export function enable(): Minilog;
    export function disable() : Minilog;
    export function pipe(dest: any): Transform;

    export var suggest: Filter;
    export var backends: Minilog.MinilogBackends;

    export var defaultBackend: any;
    export var defaultFormatter: string;


    export class Filter extends Transform{

        /**
        * Adds an entry to the whitelist
        * Returns this filter
        */
        allow(name: any, level?: any): Filter;
        /**
        * Adds an entry to the blacklist
        * Returns this filter
        */
        deny(name: any, level?: any): Filter;
        /**
        * Empties the whitelist and blacklist
        * Returns this filter
        */
        clear(): Filter;

        test(name:any, level:any): boolean;

        /**
        * specifies the behavior when a log line doesn't match either the whitelist or the blacklist.
        The default is true (= "allow by default") - lines that do not match the whitelist or the blacklist are not filtered (e.g. ).
        If you want to flip the default so that lines are filtered unless they are on the whitelist, set this to false (= "deny by default").
        */
        defaultResult: boolean;

        /**
        * controls whether the filter is enabled. Default: true
        */
        enabled: boolean;
    }


    export interface MinilogBackends {
        array: any;
        browser: any;
        console: Console;
        localstorage: any;
        jQuery: any;
    }

    export class Console extends Transform{

        /**
        * List of available formatters
        */
        formatters: string[];

        //Only available on client
        color: Transform;
        minilog: Transform;

        //Only available on backend
        formatClean: Transform;
        formatColor: Transform;
        formatNpm: Transform;
        formatLearnboost: Transform;
        formatMinilog: Transform;
        formatWithStack: Transform;
    }

    export class Transform {
        write(name: any, level: any, args: any): void;
        pipe(dest: any): any;
        unpipe(from: any): Transform;
        mixin(dest: any): void;
    }

}

export = Minilog;
export as namespace Minilog;
