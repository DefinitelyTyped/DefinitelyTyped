import bodyParser = require("body-parser");
import csurf = require("csurf");
import express = require("express");
import formidable = require("formidable");
import helmet = require("helmet");
import http = require("http");
import session = require("express-session");

import { LogLevel } from "./common";

// Extracted from formidable
export interface DataParserOptions {
    encoding: string;
    uploadDir: string;
    keepExtensions: boolean;
    maxFieldsSize: number;
    maxFields: number;
    hash: string | boolean;
    multiples: boolean;
    type: string;
    bytesReceived: number;
    bytesExpected: number;

    onPart: (part: formidable.Part) => void;

    handlePart(part: formidable.Part): void;
    parse(
        req: http.IncomingMessage,
        callback?: (
            err: any,
            fields: formidable.Fields,
            files: formidable.Files
        ) => any
    ): void;
}

// extracted from csurf
export interface CsurfOptions {
    value?: (req: express.Request) => string;
    cookie?: csurf.CookieOptions | boolean;
    ignoreMethods?: string[];
    sessionKey?: string;
}

export interface Options {
    port?: number;
    secret?: string;
    public?: string;
    views?: string;
    engine?: string;
    env?: string;
    favicon?: string;
    parser?: {
        json?: bodyParser.OptionsJson;
        body?: bodyParser.OptionsUrlencoded;
        text?: bodyParser.OptionsText;
        data?: DataParserOptions;
        cookie?: express.CookieOptions;
    };
    session?: session.SessionOptions;
    security?:
        | false
        | helmet.IHelmetConfiguration & {
              csurf?: false | CsurfOptions;
          };
    log?:
        | LogLevel
        | {
              level: LogLevel;
              report: (content: string, type: LogLevel) => void;
          };
}
