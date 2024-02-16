import express = require("express");

type JsonPrimitive = string | number | boolean | null;
type JsonArray = Array<Json>;
type JsonObject = { [key: string]: Json };

type Json = JsonPrimitive | JsonArray | JsonObject;

// Extended Types for TypeScript Context
type JsonWithDate = Json | Date; // Including Date as it's commonly serialized into a string
type JsonWithBigInt = Json | bigint; // BigInt for large integers, serialized as strings

// Utility Types for Complex Structures (Non-standard JSON but used in TypeScript)
type JsonFunction = (...args: any[]) => any; // Function type, not serializable but used in JS/TS structures
type JsonError = Error; // Error object, commonly used but needs custom serialization

// Combined Extended JSON Type
type ExtendedJson = JsonWithDate | JsonWithBigInt | JsonFunction | JsonError;

declare function json2xls(json: ExtendedJson, options?: json2xls.Config): Buffer;

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