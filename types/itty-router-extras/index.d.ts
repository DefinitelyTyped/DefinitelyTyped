import { Request as IttyRequest, Router } from "itty-router";
export { Router as ThrowableRouter };

/**
 * Throw to respond with provided status code and message.
 */
export class StatusError extends Error {
    constructor(status: number, message: string);
}

/**
 * Middleware to safely parse and embed content request bodies (eg.text/json) as `request.content`.
 */
export function withContent(request: IttyRequest): void;

/**
 * Middleware to embed cookies into request as `request.cookies` (object).
 */
export function withCookies(request: IttyRequest): void;

/**
 * Middleware to embed route params directly into request as a convenience.
 *
 * NOTE: withParams cannot be applied globally upstream, as it will have seen no route params at this stage (to spread into the request).
 */
export function withParams(request: IttyRequest): void;

export interface ErrorBody {
    error: string;
    status: number;
}

/**
 * Create JSON-formatted {@link Response}, with {@link ErrorBody} or custom payload as body.
 *
 * @param status Response status code
 * @param payload Error message or custom payload
 */
export function error(status: number, payload?: string | object): Response;

/**
 * Create JSON-formatted {@link Response Response}.
 *
 * @param content Payload
 * @param options Response options
 */
export function json(content: object, options?: ResponseInit): Response;

/**
 * Create JSON-formatted {@link Response}, with status code 404, and message as {@link ErrorBody} or custom payload.
 *
 * @param payload Error message or custom payload
 */
export function missing(payload?: string | object): Response;

export interface StatusBody {
    message: string;
    status: number;
}

/**
 * Create JSON-formatted {@link Response}, with provided status code and message as {@link StatusBody body} or custom payload.
 *
 * @param status Response status code
 * @param message Message or custom payload
 */
export function status(status: number, payload?: string | object): Response;

/**
 * Create plaintext-formatted {@link Response} with provided options.
 *
 * @param content Response text
 * @param options Response options
 */
export function text(content: string, options?: ResponseInit): Response;
