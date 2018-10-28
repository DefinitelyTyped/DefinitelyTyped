// Type definitions for set-cookie-parser
// Project: https://github.com/nfriedly/set-cookie-parser
// Definitions by: Nick Paddock <https://github.com/nickp10>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

/// <reference types="node" />

declare module "set-cookie-parser" {
    import http = require("http");

    function SetCookieParser(input: string | ReadonlyArray<string> | http.IncomingMessage): SetCookieParser.Cookie[];

    namespace SetCookieParser {
        function parse(input: string | ReadonlyArray<string> | http.IncomingMessage): Cookie[];

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
        }
    }

    export = SetCookieParser;
}
