import express = require("express");
import formidable = require("formidable");

import { Options } from "./options";
import { Reply } from "../reply";

export type BasicType = string | any[] | object | number;

export type LogLevel =
    | "emergency"
    | "alert"
    | "critical"
    | "error"
    | "warning"
    | "notice"
    | "info"
    | "debug";

export interface Context {
    options: Options;
    data: any;
    params: { [key: string]: string };
    query: { [key: string]: string | string[] };
    session: object;
    headers: { [key: string]: string };
    cookie: { [key: string]: string };
    files: formidable.Files;
    ip: string;
    ips?: string[];
    url: string;
    method: string;
    path: string;
    secure: boolean;
    xhr: boolean;
    error: Error;
    req: express.Request;
    res: express.Response;
}

export type Middleware = (ctx: Context) => Reply | BasicType | void;
export type Middlewares = Array<Middleware | Middleware[]>;
