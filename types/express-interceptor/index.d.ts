import { Request, RequestHandler, Response } from "express";

declare namespace interceptor {
    interface Methods {
        /**
         * A predicate function where you define a condition whether or not to intercept a response. Returning `true` buffers the request, and proceeds calling `intercept()` as well as `afterSend()`.
         * Typically, you want to check for this condition in the `res` object in the definition of the middleware.
         */
        isInterceptable: () => boolean;

        /**
         * Parse the body as an encoded string. After processing the body, call `send(newBody)` with the content to be sent back to the client.
         */
        intercept?: ((body: string, send: (body: string) => void) => void) | undefined;

        /**
         * This method will be called after sending the response to the client – after the `done()` callback in the `send()` method is executed. This method would typically be used to cache something,
         * log stats, fire a job, among other things.
         */
        afterSend?: ((oldBody: string, newBody: string) => void) | undefined;
    }
}

/**
 * Express-interceptor allows you to define a previous step before sending a response. This allows you to do anything you want with the response, such as processing, transforming, replacing, or
 * logging it. Express-interceptor allows you to avoid calling `next()` over and over. Further more, you can avoid managing nested scopes. Using a declarative API, it’s simple to use and
 * maintain.
 */
declare function interceptor(fn: (req: Request, res: Response) => interceptor.Methods): RequestHandler;

export = interceptor;
