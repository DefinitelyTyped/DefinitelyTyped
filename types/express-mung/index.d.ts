// Type definitions for express-mung 0.4.2
// Project: https://github.com/richardschneider/express-mung
// Definitions by: Cyril Schumacher <https://github.com/cyrilschumacher>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

/// <reference types="express"/>
/// <reference types="node"/>

declare module "express-mung" {
    import { Request, Response } from "express";
    import * as http from "http";

    type Transform = (body: {}, request: Request, response: Response) => any;
    type TransformHeader = (body: http.IncomingMessage, request: Request, response: Response) => any;

    /**
     * Transform the JSON body of the response.
     * @param {Transform} fn A transformation function.
     * @return {any} The body.
     */
    export function json(fn: Transform): any;

    /**
     * Transform the JSON body of the response.
     * @param {Transform} fn A transformation function.
     * @return {any} The body.
     */
    export function jsonAsync(fn: Transform): PromiseLike<any>;

    /**
     * Transform the HTTP headers of the response.
     * @param {Transform} fn A transformation function.
     * @return {any} The body.
     */
    export function headers(fn: TransformHeader): any;

    /**
     * Transform the HTTP headers of the response.
     * @param {Transform} fn A transformation function.
     * @return {any} The body.
     */
    export function headersAsync(fn: TransformHeader): PromiseLike<any>;
}
