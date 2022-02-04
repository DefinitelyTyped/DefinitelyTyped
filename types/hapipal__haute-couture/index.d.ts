// Type definitions for @hapipal/haute-couture 4.2.0
// Project: https://github.com/hapipal/haute-couture#readme
// Definitions by: Danilo Alonso <https://github.com/damusix>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

import {
    Plugin as HapiPlugin,
    Server,
    ServerEvents,
    ServerMethod,
    ServerMethods,
    ServerCache,
    ServerOptionsCache,
    ServerAuth,
    ServerAuthScheme,
    Dependencies,
    DecorationMethod,
    HandlerDecorationMethod,
    ServerMethodOptions,
    CachePolicyOptions,
    RouteOptions,
    ServerStateCookieOptions,
    ServerExtType,
    ServerRequestExtType,
    ServerExtOptions,
    ServerExtPointFunction,
    Lifecycle
} from '@hapi/hapi';

import { ServerViewsConfiguration } from '@hapi/vision';
import { ServerSubscriptionOptions } from '@hapi/nes';

import { Service, ServiceFactory } from '@hapipal/schmervice';
import { Root as Joi } from 'joi'

import { EventEmitter } from 'events';
import { Stream, FinishedOptions } from 'stream';
import { AsyncLocalStorage } from 'async_hooks';

type OneOrArrayOf<T> = T | T[];

export namespace HcAmendmentTypes {


    type Decoration<T> = {
        type?: 'handler' | 'request' | 'toolkit' | 'server',
        property?: string,
        method: DecorationMethod<T> | HandlerDecorationMethod
        options?: {
            apply?: boolean,
            extend?: boolean
        }
    }

    type Expose = {
        key: string,
        value: any
    }

    type AuthScheme = {
        name: string,
        scheme: ServerAuthScheme
    };

    type AuthStrategy = {
        name: string,
        scheme: string,
        options: object
    }

    type Dependency = {
        dependencies: Dependencies,
        after?: ((server: Server) => Promise<void>)
    }

    type Method = ServerMethod | {
        name?: string,
        method: ServerMethod,
        options: ServerMethodOptions
    }

    type Extensions = {
        type: ServerExtType | ServerRequestExtType,
        method: Lifecycle.Method | ServerExtPointFunction | ServerExtPointFunction[],
        options: ServerExtOptions
    }

    type Cookies = {
        name: string,
        options: ServerStateCookieOptions
    }

    type Models = {}

    type Subscription = {
        path: string,
        options: ServerSubscriptionOptions
    }
}

// Make a list of all the methods we can bind to
// using the exiting typings. Server methods should
// augment when you install respective plugin typings,
// such as Nes or Schwifty, and become available in
// this list
type AllAmendmentMethods = (
    keyof Server |
    `events.${keyof ServerEvents}`|
    `methods.${keyof ServerMethods}` |
    `cache.${keyof ServerCache}` |
    `auth.${keyof ServerAuth}`
);

// Turn the union of those strings into a type
type AmendmentMethodFilter = {
    [key in AllAmendmentMethods]: never
}

// Omit any methods or properties that cannot
// be leveraged by Haute Couture
type UsefulAmendmentMethods = Omit<
    AmendmentMethodFilter,

    // Readonly properties
    'auth' | 'decorations' | 'info' |
    'load' | 'methods' | 'realm' |
    'registrations' | 'settings' |
    'states' | 'type' | 'version' |

    // Not useful
    'inject' | 'log' | 'lookup' |
    'match' | 'table' | 'cache' |
    'start' | 'stop' | 'initialize' |
    'events' | 'events.hasListeners' |
    'events.removeListener' | 'events.removeAllListeners'
>

// Known methods will be the keys of resulting type
export type KnownAmendmentMethods = keyof UsefulAmendmentMethods;

// This is the type used to check amendment methods.
// Can be overridden to include custom decorations
// that you might have on the server object.
export type AmendmentMethods = KnownAmendmentMethods

// Enumerate the types that example can be so that
// IDE can pick it up when it is an object
type AmendmentExampleType = (
    AmendmentExample  |
    string | number | boolean |
    any[] | undefined
);

interface AmendmentExample {
    $literal?: string,
    $comment?: string,
    $value?: any
    [key: string]: AmendmentExampleType;
}

export type AmendmentConfig<
    T = {}
> = {
    method?: AmendmentMethods,
    signature?: (keyof T | `[${string & keyof T}]`)[] | string[],
    list?: boolean,
    after?: string[],
    useFilename?: <U = T>(value: U | U[], path: string, filename: string) => U | U[],
    example?: AmendmentExampleType
}

type InternalAmemdments = {
    path: AmendmentConfig<string>
    bind: AmendmentConfig
    caches: AmendmentConfig<CachePolicyOptions<any>>
    plugins: AmendmentConfig<HapiPlugin<any>>
    dependencies: AmendmentConfig<HcAmendmentTypes.Dependency>
    methods: AmendmentConfig<HcAmendmentTypes.Method>
    decorations: AmendmentConfig<HcAmendmentTypes.Decoration<Server>>
    extensions: AmendmentConfig<HcAmendmentTypes.Extensions>
    expose: AmendmentConfig<HcAmendmentTypes.Expose>
    cookies: AmendmentConfig<HcAmendmentTypes.Cookies>
    models: AmendmentConfig<HcAmendmentTypes.Models>
    services: AmendmentConfig<typeof ServiceFactory | Service>
    subscriptions: AmendmentConfig<HcAmendmentTypes.Subscription>
    validator: AmendmentConfig<Joi>
    routes: AmendmentConfig<RouteOptions>
    'view-manager': AmendmentConfig<ServerViewsConfiguration>
    'auth/schemes': AmendmentConfig
    'auth/strategies': AmendmentConfig
    'auth/default': AmendmentConfig
}

export function amendment <P extends keyof InternalAmemdments>(
    place: P,
    override?: AmendmentConfig
): InternalAmemdments[P]

export function amendments <O extends Record<keyof InternalAmemdments, AmendmentConfig>> (overrides: O): O

export interface HcComposeFunction<ReturnType, Options = {}> {

    (server: Server, options: Options): ReturnType
}

type ComposeOptions = {
    dirname?: string,
    amendments?: {
        [key: string]: AmendmentConfig
    }
}

export function compose <Options = {}> (server: Server, options: Options, composeOptions?: ComposeOptions): Promise<void>

export function composeWith <Options = {}> (composeOptions: ComposeOptions): HcComposeFunction<Promise<void>, Options>
