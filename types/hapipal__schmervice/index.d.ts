// Type definitions for @hapipal/schmervice 2.0
// Project: https://github.com/hapipal/schmervice#readme
// Definitions by: Tim Costa <https://github.com/timcosta>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// Minimum TypeScript Version: 3.6

import { Plugin, Server, ServerOptionsCache, ServerMethodOptions } from '@hapi/hapi';

export const name: unique symbol;
export const sandbox: unique symbol;

export interface ServiceCachingOptions {
    [methodNameToCache: string]: ServerOptionsCache | Exclude<ServerMethodOptions, 'bind'>;
}

export type ServiceSandbox = boolean | 'plugin' | 'server';

export interface ServiceRegistrationObject {
    caching?: ServiceCachingOptions;
    name?: string;
    [name]?: string;
    [sandbox]?: ServiceSandbox;
    // any is necessary here as implementation is left to the developers
    // without this member the tests fail as the Schmervice.withName factory
    // has no members in common with this interface
    [serviceMethod: string]: any;
}

export function ServiceFactory(server: Server, options: object): ServiceRegistrationObject;

// options is any because it's left to the implementer to define based on usage
export type ServiceOptions = any;

export class Service {
    static caching: ServiceCachingOptions;
    static [name]: string;
    static [sandbox]: ServiceSandbox;
    server: Server;
    options: ServiceOptions;
    constructor(server: Server, options: ServiceOptions);
    // object matches https://github.com/DefinitelyTyped/DefinitelyTyped/blob/master/types/hapi__hapi/index.d.ts#L3104
    // null matches else case in schmervice
    get context(): object | null;
    caching(options: ServiceCachingOptions): void;
    bind(): this;
    initialize?(): void;
    teardown?(): void;
}

export type RegisterServiceConfiguration = (typeof ServiceFactory | Service | Service[] | ServiceRegistrationObject);

export const plugin: Plugin<{}>;

export interface WithNameOptions {
    sandbox?: ServiceSandbox;
}

// TS takes issue with this function signature (name, [options], serviceFactory) due to a required param
// following an optional param. The best solution short of changing the library appears to be to just
// make options a required parameter that people can set to {}
export function withName(name: string, options: WithNameOptions, serviceFactory: RegisterServiceConfiguration): RegisterServiceConfiguration;

// allows service definitions to optionally "register" themselves as types that will be returned
// by using typescript declaration merging with interfaces
export interface RegisteredServices {
    [key: string]: Service;
}

// sets up types for the functions added via hapi decorations
declare module '@hapi/hapi' {
    interface Server {
        registerService: (config: RegisterServiceConfiguration) => void;
        services: (all?: boolean) => RegisteredServices;
    }

    interface Request {
        services: (all?: boolean) => RegisteredServices;
    }

    interface ResponseToolkit {
        services: (all?: boolean) => RegisteredServices;
    }
}
