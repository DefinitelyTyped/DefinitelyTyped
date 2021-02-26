// Type definitions for @hapipal/toys 3.0
// Project: https://github.com/hapipal/toys#readme
// Definitions by: Tim Costa <https://github.com/timcosta>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

import {
    Lifecycle,
    Plugin,
    Request,
    ResponseObject,
    ResponseObjectHeaderOptions,
    ResponseToolkit,
    RouteExtObject,
    RouteOptionsPreArray,
    Server,
    ServerAuthScheme,
    ServerExtEventsObject,
    ServerExtOptions,
    ServerRealm,
    ServerRoute,
} from '@hapi/hapi';
import { Boom } from '@hapi/boom';
import { EventEmitter } from 'events';
import { Stream, FinishedOptions } from 'stream';
import { AsyncLocalStorage } from 'async_hooks';

export function ext(method: Lifecycle.Method, options?: ServerExtOptions): RouteExtObject;
export function onRequest(method: Lifecycle.Method, options?: ServerExtOptions): ServerExtEventsObject;
export function onPreAuth(method: Lifecycle.Method, options?: ServerExtOptions): ServerExtEventsObject;
export function onCredentials(method: Lifecycle.Method, options?: ServerExtOptions): ServerExtEventsObject;
export function onPostAuth(method: Lifecycle.Method, options?: ServerExtOptions): ServerExtEventsObject;
export function onPreHandler(method: Lifecycle.Method, options?: ServerExtOptions): ServerExtEventsObject;
export function onPostHandler(method: Lifecycle.Method, options?: ServerExtOptions): ServerExtEventsObject;
export function onPreResponse(method: Lifecycle.Method, options?: ServerExtOptions): ServerExtEventsObject;
export function onPostResponse(method: Lifecycle.Method, options?: ServerExtOptions): ServerExtEventsObject;

export type AssignRouteDefaults = (routes: Partial<ServerRoute> | Array<Partial<ServerRoute>>) => ServerRoute | ServerRoute[];
export function withRouteDefaults(defaults: Partial<ServerRoute>): AssignRouteDefaults;

export interface ToysPreShorthand {
    [assignKey: string]: Lifecycle.Method;
}
export type ToysPreArg = (ToysPreShorthand | Lifecycle.Method);
export function pre(options: ToysPreArg | ToysPreArg[]): RouteOptionsPreArray;

export interface ReacherOptions {
    separator?: string;
    default?: any;
    strict?: boolean;
    functions?: boolean;
    iterables?: boolean;
}
export type PerformReach = (input?: object) => any;
export function reacher(chain: string | Array<(string | number)>, options?: ReacherOptions): PerformReach;

export type PerformTransform = (input: object) => object;
export interface Transformer {
    [fromPath: string]: string;
}
export function transformer(transform: Transformer, options?: ReacherOptions): PerformTransform;

export const noop: Plugin<any>;

export function header(response: ResponseObject | Boom, name: string, value: string, options?: ResponseObjectHeaderOptions): void;
export function getHeaders(response: ResponseObject | Boom): { [header: string]: string };

export function code(response: ResponseObject | Boom, code: number): void;
export function getCode(response: ResponseObject | Boom): number;

export namespace auth {
    type ServerAuthSchemeAuthenticate = (request: Request, h: ResponseToolkit) => Lifecycle.ReturnValue;
    function strategy(server: Server, name: string, authenticate: ServerAuthSchemeAuthenticate): ServerAuthScheme;
}

export interface EventOptions {
    multiple?: boolean;
    error?: boolean;
}
// has to resolve an `any` because return type is dependent on the event that is emitted
export function event(emitter: EventEmitter, eventName: string, options?: EventOptions): Promise<any>;

export interface StreamOptions {
    cleanup?: boolean;
}
export function stream(stream: Stream, options?: StreamOptions & FinishedOptions): Promise<void>;

export type TypesWithRealmsAndOptions = (Server | Request | ResponseToolkit | ServerRealm | ServerRoute);
export function options(obj: TypesWithRealmsAndOptions): object;
export function realm(obj: TypesWithRealmsAndOptions): object;

export function rootRealm(realm: ServerRealm): ServerRealm;

export function state(realm: ServerRealm, pluginName: string): object;
export function rootState(realm: ServerRealm, pluginName: string): object;

export type AncestorRealmIterator = (realm: ServerRealm) => void;
export function forEachAncestorRealm(realm: ServerRealm, fn: AncestorRealmIterator): void;

export function asyncStorage(identifier: string): any;
export function withAsyncStorage<T>(identifier: string, value: T, fn: () => void): Promise<T>;

export function asyncStorageInternals(): Map<string, typeof AsyncLocalStorage>;
