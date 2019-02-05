// Type definitions for set-cookie-parser
// Project: https://github.com/nfriedly/set-cookie-parser
// Definitions by: Nick Paddock <https://github.com/nickp10>
//                 Ilya Zaytsev <https://github.com/ilyaztsv>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

/// <reference types="node" />

declare module "set-cookie-parser" {
    import http = require("http");

    function SetCookieParser(input: string | ReadonlyArray<string> | http.IncomingMessage, options?: SetCookieParser.Options): SetCookieParser.Cookie[];

    namespace SetCookieParser {
        function parse(input: string | ReadonlyArray<string> | http.IncomingMessage, options?: Options): Cookie[];

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

        type Options = {
            decodeValues?: boolean;
            map?: boolean;
        }
    }

    export = SetCookieParser;
}
