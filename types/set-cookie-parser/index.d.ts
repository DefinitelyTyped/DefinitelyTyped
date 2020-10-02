// Type definitions for set-cookie-parser
// Project: https://github.com/nfriedly/set-cookie-parser
// Definitions by: Nick Paddock <https://github.com/nickp10>
//                 Ilya Zaytsev <https://github.com/ilyaztsv>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

/// <reference types="node" />

declare module "set-cookie-parser" {
    import http = require("http");

    function SetCookieParser(input: string | ReadonlyArray<string> | http.IncomingMessage, options: SetCookieParser.Options & { map: true }): SetCookieParser.CookieMap;
    function SetCookieParser(input: string | ReadonlyArray<string> | http.IncomingMessage, options?: SetCookieParser.Options & { map?: false }): SetCookieParser.Cookie[];
    function SetCookieParser(input: string | ReadonlyArray<string> | http.IncomingMessage, options?: SetCookieParser.Options): SetCookieParser.Cookie[] | SetCookieParser.CookieMap;

    namespace SetCookieParser {
        function parse(input: string | ReadonlyArray<string> | http.IncomingMessage, options: Options & { map: true }): CookieMap;
        function parse(input: string | ReadonlyArray<string> | http.IncomingMessage, options?: Options & { map?: false }): Cookie[];
        function parse(input: string | ReadonlyArray<string> | http.IncomingMessage, options?: Options): Cookie[] | CookieMap;

        function splitCookiesString(input: string | ReadonlyArray<string> | void): string[];

        interface Cookie {
            name: string;
            value: string;
            path?: string;
            expires?: Date;
            maxAge?: number;
            domain?: string;
            secure?: boolean;
            httpOnly?: boolean;
            sameSite?: string;
        }

        interface CookieMap {
          [name: string]: Cookie;
        }

        type Options = {
            decodeValues?: boolean;
            map?: boolean;
        }
    }

    export = SetCookieParser;
}
