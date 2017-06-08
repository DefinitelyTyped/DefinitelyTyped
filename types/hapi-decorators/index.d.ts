// Type definitions for hapi-decorators v0.4.3
// Project: https://github.com/knownasilya/hapi-decorators
// Definitions by: Ken Howard <http://github.com/kenhowardpdx>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 2.3

import * as hapi from 'hapi';
import * as Joi from 'joi';
interface ControllerStatic {
    new (...args: any[]): Controller;
}
export interface Controller {
    baseUrl: string;
    routes: () => hapi.RouteConfiguration[];
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
export function config(config: hapi.RouteAdditionalConfigurationOptions): (target: any, key: any, descriptor: any) => any;

export function validate(config: hapi.RouteValidationConfigurationObject): (target: any, key: any, descriptor: any) => any;
interface ICacheConfig {
    privacy?: string;
    expiresIn?: number;
    expiresAt?: number;
}
export function cache(cacheConfig: ICacheConfig): (target: any, key: any, descriptor: any) => any;
export function pre(pre: {
    [key: string]: any;
}): (target: any, key: any, descriptor: any) => any;
