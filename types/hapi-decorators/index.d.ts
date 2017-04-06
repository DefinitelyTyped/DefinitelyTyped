// Type definitions for hapi-decorators v0.4.3
// Project: https://github.com/knownasilya/hapi-decorators
// Definitions by: Ken Howard <http://github.com/kenhowardpdx>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

import * as hapi from 'hapi';
interface ControllerStatic {
    new (...args: any[]): Controller;
}
export interface Controller {
    baseUrl: string;
    routes: () => hapi.IRouteConfiguration[];
}
export function controller(baseUrl: string): (target: ControllerStatic) => void;
interface IRouteSetup {
    (target: any, key: any, descriptor: any): any;
}
interface IRouteDecorator {
    (method: string, path: string): IRouteSetup;
}
interface IRouteConfig {
    (path: string): IRouteSetup;
}
export const route: IRouteDecorator;
export const get: IRouteConfig;
export const post: IRouteConfig;
export const put: IRouteConfig;
// export const delete: IRouteConfig;
export const patch: IRouteConfig;
export const all: IRouteConfig;
export function config(config: hapi.IRouteAdditionalConfigurationOptions): (target: any, key: any, descriptor: any) => any;
interface IValidateConfig {
    /** validation rules for incoming request headers.Values allowed:
     * trueany headers allowed (no validation performed).This is the default.
     falseno headers allowed (this will cause all valid HTTP requests to fail).
        a Joi validation object.
        a validation function using the signature function(value, options, next) where:
        valuethe object containing the request headers.
        optionsthe server validation options.
        next(err, value)the callback function called when validation is completed.
        */
    headers?: boolean | hapi.IJoi | hapi.IValidationFunction;
    /** validation rules for incoming request path parameters, after matching the path against the route and extracting any parameters then stored in request.params.Values allowed:
     trueany path parameters allowed (no validation performed).This is the default.
        falseno path variables allowed.
        a Joi validation object.
        a validation function using the signature function(value, options, next) where:
        valuethe object containing the path parameters.
        optionsthe server validation options.
        next(err, value)the callback function called when validation is completed. */
    params?: boolean | hapi.IJoi | hapi.IValidationFunction;
    /** validation rules for an incoming request URI query component (the key- value part of the URI between '?' and '#').The query is parsed into its individual key- value pairs (using the qs module) and stored in request.query prior to validation.Values allowed:
     trueany query parameters allowed (no validation performed).This is the default.
        falseno query parameters allowed.
        a Joi validation object.
        a validation function using the signature function(value, options, next) where:
        valuethe object containing the query parameters.
        optionsthe server validation options.
        next(err, value)the callback function called when validation is completed. */
    query?: boolean | hapi.IJoi | hapi.IValidationFunction;
    /**  validation rules for an incoming request payload (request body).Values allowed:
     trueany payload allowed (no validation performed).This is the default.
        falseno payload allowed.
        a Joi validation object.
        a validation function using the signature function(value, options, next) where:
        valuethe object containing the payload object.
        optionsthe server validation options.
        next(err, value)the callback function called when validation is completed.  */
    payload?: boolean | hapi.IJoi | hapi.IValidationFunction;
    /** an optional object with error fields copied into every validation error response. */
    errorFields?: any;
    /** determines how to handle invalid requests.Allowed values are:
     'error'return a Bad Request (400) error response.This is the default value.
        'log'log the error but continue processing the request.
        'ignore'take no action.
        OR a custom error handler function with the signature 'function(request, reply, source, error)` where:
        requestthe request object.
        replythe continuation reply interface.
        sourcethe source of the invalid field (e.g. 'path', 'query', 'payload').
        errorthe error object prepared for the client response (including the validation function error under error.data). */
    failAction?: string | hapi.IRouteFailFunction;
    /** options to pass to Joi.Useful to set global options such as stripUnknown or abortEarly (the complete list is available here: https://github.com/hapijs/joi#validatevalue-schema-options-callback ).Defaults to no options. */
    options?: any;
}
export function validate(config: IValidateConfig): (target: any, key: any, descriptor: any) => any;
interface ICacheConfig {
    privacy?: string;
    expiresIn?: number;
    expiresAt?: number;
}
export function cache(cacheConfig: ICacheConfig): (target: any, key: any, descriptor: any) => any;
export function pre(pre: {
    [key: string]: any;
}): (target: any, key: any, descriptor: any) => any;
