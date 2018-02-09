import * as Boom from "boom";
import * as stream from "stream";
import {Request, ResponseToolkit} from "hapi";

export namespace Lifecycle {

    /**
     * Lifecycle methods are the interface between the framework and the application. Many of the request lifecycle steps:
     * extensions, authentication, handlers, pre-handler methods, and failAction function values are lifecyle methods
     * provided by the developer and executed by the framework.
     * Each lifecycle method is a function with the signature await function(request, h, [err]) where:
     * * request - the request object.
     * * h - the response toolkit the handler must call to set a response and return control back to the framework.
     * * err - an error object availble only when the method is used as a failAction value.
     */
    export interface Method {
        (request: Request, h: ResponseToolkit): ReturnValue;
        (request: Request, h: ResponseToolkit, err: Error): ReturnValue;
    }

    /**
     * Each lifecycle method must return a value or a promise that resolves into a value. If a lifecycle method returns
     * without a value or resolves to an undefined value, an Internal Server Error (500) error response is sent.
     * The return value must be one of:
     * * Plain value: null, string, number, boolean
     * * Buffer object
     * * Error object: plain Error OR a Boom object.
     * * Stream object
     * * any object or array
     * * a toolkit signal:
     * * a toolkit method response:
     * * a promise object that resolve to any of the above values
     * For more info please [See docs](https://github.com/hapijs/hapi/blob/master/API.md#lifecycle-methods)
     */
    export type ReturnValue = ReturnValueTypes | (Promise<ReturnValueTypes>);
    export type ReturnValueTypes =
        (null | string | number | boolean) |
        (Buffer) |
        (Error | Boom.BoomError) |
        (stream.Stream) |
        (object | object[]) |
        Object |
        ResponseToolkit;

    /**
     * Various configuration options allows defining how errors are handled. For example, when invalid payload is received or malformed cookie, instead of returning an error, the framework can be configured to perform another action. When supported the failAction option supports the following values:
     * * 'error' - return the error object as the response.
     * * 'log' - report the error but continue processing the request.
     * * 'ignore' - take no action and continue processing the request.
     * * a lifecycle method with the signature async function(request, h, err) where:
     * * * request - the request object.
     * * * h - the response toolkit.
     * * * err - the error object.
     * [See docs](https://github.com/hapijs/hapi/blob/master/API.md#-failaction-configuration)
     */
    export type FailAction = 'error' | 'log' | 'ignore' | Method;

}

