// Type definitions for express-mung 0.5.1
// Project: https://github.com/richardschneider/express-mung
// Definitions by: Cyril Schumacher <https://github.com/cyrilschumacher>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 2.3

/// <reference types="express"/>
/// <reference types="node"/>

declare module "express-mung" {
    import { Request, Response, RequestHandler } from "express";

    type Transform = (body: {}, request: Request, response: Response) => any;
    type TransformAsync = (body: {}, request: Request, response: Response) => PromiseLike<any>;
    type TransformHeader = (request: Request, response: Response) => any;
    type TransformHeaderAsync = (request: Request, response: Response) => PromiseLike<any>;
    type TransformChunk = (chunk: string | Buffer, encoding: string | null, request: Request, response: Response) => string | Buffer;
    type Options = { mungError: boolean };

    /**
     * Transform the JSON body of the response.
     * @param {Transform} fn A transformation function.
     * @param {Options} [options] json options.
     * @return {RequestHandler} Middleware to transform the body
     */
    export function json(fn: Transform, options?: Options): RequestHandler;

    /**
     * Asynchronously transform the JSON body of the response.
     * @param {TransformAsync} fn A transformation function.
     * @param {Options} [options] jsonAsync options.
     * @return {RequestHandler} Middleware to transform the body
     */
    export function jsonAsync(fn: TransformAsync, options?: Options): RequestHandler;

    /**
     * Transform the HTTP headers of the response.
     * @param {TransformHeader} fn A transformation function.
     * @return {RequestHandler} Middleware to transform the headers
     */
    export function headers(fn: TransformHeader): RequestHandler;

    /**
     * Asynchronously transform the HTTP headers of the response.
     * @param {TransformHeaderAsync} fn A transformation function.
     * @return {RequestHandler} Middleware to transform the headers
     */
    export function headersAsync(fn: TransformHeaderAsync): RequestHandler;

    /**
     * Transform chunks as they are written to the response
     * @param {TransformChunk} fn A transformation function.
     * @param {Options} [options] Write options.
     * @return {RequestHandler} Middleware to transform chunks.
     */
    export function write(fn: TransformChunk, options?: Options): RequestHandler;
}
