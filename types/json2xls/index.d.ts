import express = require("express");

type JsonPrimitive = string | number | boolean | null;
type JsonArray = Array<Json>;
type JsonObject = { [key: string]: Json };
type Json = JsonPrimitive | JsonArray | JsonObject;

// Extended Types for TypeScript Context
type JsonWithDate = Json | Date;
type JsonWithBigInt = Json | BigInt;
type JsonFunction = (...args: any[]) => any;
type JsonError = Error;

// Combined Extended JSON Type
type ExtendedJson = JsonWithDate | JsonWithBigInt | JsonFunction | JsonError;

// Combined Type
type CombinedJson = Json | ExtendedJson;

declare function json2xls(json: CombinedJson, options?: json2xls.Config): Buffer;

declare namespace json2xls {
    interface Config {
        fields?: Record<string, string> | string[] | undefined;
        style?: string | undefined;
    }

    function middleware(
        req: express.Request,
        res: express.Response,
        next: express.NextFunction,
    ): void;
}

export = json2xls;
