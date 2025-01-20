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
            files: formidable.Files,
        ) => any,
    ): void;
}

// extracted from csurf
export interface CsurfOptions {
    value?: ((req: express.Request) => string) | undefined;
    cookie?: csurf.CookieOptions | boolean | undefined;
    ignoreMethods?: string[] | undefined;
    sessionKey?: string | undefined;
}

export {}; // This prevents EngineArgs being automatically exported
type EngineArgs = Parameters<express.Application["engine"]>;

export interface Options {
    port?: number | undefined;
    secret?: string | undefined;
    public?: string | undefined;
    views?: string | undefined;
    engine?: string | undefined | Record<EngineArgs[0], EngineArgs[1]>;
    env?: string | undefined;
    favicon?: string | undefined;
    parser?: {
        json?: bodyParser.OptionsJson | undefined;
        body?: bodyParser.OptionsUrlencoded | undefined;
        text?: bodyParser.OptionsText | undefined;
        data?: DataParserOptions | undefined;
        cookie?: express.CookieOptions | undefined;
    } | undefined;
    session?: session.SessionOptions | undefined;
    security?:
        | false
        | helmet.IHelmetConfiguration & {
            csrf?: false | CsurfOptions | undefined;
        }
        | undefined;
    log?:
        | LogLevel
        | {
            level: LogLevel;
            report: (content: string, type: LogLevel) => void;
        }
        | undefined;
}
