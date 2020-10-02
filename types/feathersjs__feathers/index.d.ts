// Type definitions for @feathersjs/feathers 3.1
// Project: http://feathersjs.com/
// Definitions by:  Jan Lohage <https://github.com/j2L4e>
//                  Abraao Alves <https://github.com/AbraaoAlves>
//                  Tim Mensch <https://github.com/TimMensch>
//                  Jordan Tucker <https://github.com/jordanbtucker>
//                  Desmond Koh <https://github.com/deskoh>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

// TypeScript Version: 2.8

/// <reference types="node" />

import { EventEmitter } from 'events';

declare const feathers: Feathers;
export = feathers;

interface Feathers {
    // tslint:disable-next-line no-unnecessary-generics
    <T = any>(): feathers.Application<T>;
    version: string;
    SKIP: feathers.SkipSymbol;
    default: Feathers;
}

declare namespace feathers {
    type Id = number | string;
    type NullableId = Id | null;

    interface Query {
        [key: string]: any;
    }

    interface PaginationOptions {
        default: number;
        max: number;
    }

    type ClientSideParams = Pick<Params, 'query' | 'paginate'>;
    type ServerSideParams = Params;

    interface Params {
        query?: Query;
        paginate?: false | Pick<PaginationOptions, 'max'>;

        [key: string]: any; // (JL) not sure if we want this
    }

    interface Paginated<T> {
        total: number;
        limit: number;
        skip: number;
        data: T[];
    }

    // tslint:disable-next-line void-return
    type Hook = (hook: HookContext) => (Promise<HookContext | SkipSymbol | void> | HookContext | SkipSymbol | void);

    type SkipSymbol = symbol | '__feathersSkipHooks';

    interface HookContext<T = any> {
        /**
         * A read only property that contains the Feathers application object. This can be used to
         * retrieve other services (via context.app.service('name')) or configuration values.
         */
        readonly app: Application;
        /**
         * A writeable property containing the data of a create, update and patch service
         * method call.
         */
        data?: T;
        /**
         * A writeable property with the error object that was thrown in a failed method call.
         * It is only available in error hooks.
         */
        error?: any;
        /**
         * A writeable property and the id for a get, remove, update and patch service
         * method call. For remove, update and patch context.id can also be null when
         * modifying multiple entries. In all other cases it will be undefined.
         */
        id?: string | number;
        /**
         * A read only property with the name of the service method (one of find, get,
         * create, update, patch, remove).
         */
        readonly method: string;
        /**
         * A writeable property that contains the service method parameters (including
         * params.query).
         */
        params: Params;
        /**
         * A read only property and contains the service name (or path) without leading or
         * trailing slashes.
         */
        readonly path: string;
        /**
         * A writeable property containing the result of the successful service method call.
         * It is only available in after hooks.
         *
         * `context.result` can also be set in
         *
         *  - A before hook to skip the actual service method (database) call
         *  - An error hook to swallow the error and return a result instead
         */
        result?: T;
        /**
         * A read only property and contains the service this hook currently runs on.
         */
        readonly service: Service<T>;
        /**
         * A writeable, optional property and contains a "safe" version of the data that
         * should be sent to any client. If context.dispatch has not been set context.result
         * will be sent to the client instead.
         */
        dispatch?: T;
        /**
         * A writeable, optional property that allows to override the standard HTTP status
         * code that should be returned.
         */
        statusCode?: number;
        /**
         * A read only property with the hook type (one of before, after or error).
         */
        readonly type: "before" | "after" | "error";
    }

    interface HookMap {
        all: Hook | Hook[];
        find: Hook | Hook[];
        get: Hook | Hook[];
        create: Hook | Hook[];
        update: Hook | Hook[];
        patch: Hook | Hook[];
        remove: Hook | Hook[];
    }

    interface HooksObject {
        before: Partial<HookMap> | Hook | Hook[];
        after: Partial<HookMap> | Hook | Hook[];
        error: Partial<HookMap> | Hook | Hook[];
        finally?: Partial<HookMap> | Hook | Hook[];
    }

    // todo: figure out what to do: These methods don't actually need to be implemented, so they can be undefined at runtime. Yet making them optional gets cumbersome in strict mode.
    interface ServiceMethods<T> {
        find(params?: Params): Promise<T | T[] | Paginated<T>>;

        get(id: Id, params?: Params): Promise<T>;

        create(data: Partial<T> | Array<Partial<T>>, params?: Params): Promise<T | T[]>;

        update(id: NullableId, data: T, params?: Params): Promise<T>;

        patch(id: NullableId, data: Partial<T>, params?: Params): Promise<T>;

        remove(id: NullableId, params?: Params): Promise<T>;
    }

    interface SetupMethod {
        setup(app: Application<any>, path: string): void;
    }

    interface ServiceOverloads<T> {
        create(data: Array<Partial<T>>, params?: Params): Promise<T[]>;

        create(data: Partial<T>, params?: Params): Promise<T>;

        patch(id: NullableId, data: Pick<T, keyof T>, params?: Params): Promise<T>;
    }

    interface ServiceAddons<T> extends EventEmitter {
        hooks(hooks: Partial<HooksObject>): this;
    }

    type Service<T> = ServiceOverloads<T> & ServiceAddons<T> & ServiceMethods<T>;

    interface Application<ServiceTypes = {}> extends EventEmitter {
        get(name: string): any;

        set(name: string, value: any): this;

        disable(name: string): this;

        disabled(name: string): boolean;

        enable(name: string): this;

        enabled(name: string): boolean;

        configure(callback: (this: this, app: this) => void): this;

        hooks(hooks: Partial<HooksObject>): this;

        setup(server?: any): this;

        service<L extends keyof ServiceTypes>(location: L): Service<ServiceTypes[L]>;

        service(location: string): keyof ServiceTypes extends never ? Service<any> : never;

        use(path: string, service: Partial<ServiceMethods<any> & SetupMethod> | Application<any>, options?: any): this;

        version: string;
    }
}
