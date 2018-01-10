// Type definitions for @feathersjs/feathers 3.0
// Project: http://feathersjs.com/
// Definitions by: Jan Lohage <https://github.com/j2L4e>, Abraao Alves <https://github.com/AbraaoAlves>
// Definitions: https://github.com/feathersjs-ecosystem/feathers-typescript

// TypeScript Version: 2.1

/// <reference types="node" />

import { EventEmitter } from 'events';

export default function feathers(): Application<{}>;

export const version: string;

export namespace _utils {
    // Mainly taken from here https://github.com/Microsoft/TypeScript/issues/12215#issuecomment-319495340

    type StringDiff<T extends string, U extends string> = ({[K in T]: K} &
        {[K in U]: never} & { [K: string]: never })[T];
    type ObjectOmit<T, K extends keyof T> = Pick<T, StringDiff<keyof T, K>>;

    type Optionalize<T, U> = ObjectOmit<T, U & keyof T> &
        {[K in (U & keyof T)]?: T[K]};
}

export type OptionalIDs<T> = _utils.Optionalize<T, 'id' | '_id'>;

export type Id = number | string;
export type NullableId = Id | null;

export interface Query {
    [key: string]: any;
}

export interface PaginationOptions {
    default: number;
    max: number;
}

export type ClientSideParams = Pick<Params, 'query' | 'paginate'>;
export type ServerSideParams = Params;

export interface Params {
    query?: Query;
    paginate: false | Pick<PaginationOptions, 'max'>;

    [key: string]: any; // (JL) not sure if we want this
}

export interface Paginated<T> {
    total: number;
    limit: number;
    skip: number;
    data: T[];
}

export type Hook = <T>(hook: HookContext<T>) => (Promise<HookContext<T>> | undefined);

export interface HookContext<T> {
    app?: Application<any>;
    data?: T;
    error?: any;
    id?: string | number;
    method?: string;
    params?: Params;
    path?: string;
    result?: T;
    service: Service<T>;
    type: 'before' | 'after' | 'error';
}

export interface HookMap {
    all: Hook | Hook[];
    find: Hook | Hook[];
    get: Hook | Hook[];
    create: Hook | Hook[];
    update: Hook | Hook[];
    patch: Hook | Hook[];
    remove: Hook | Hook[];
}

export interface HooksObject {
    before: Partial<HookMap>;
    after: Partial<HookMap>;
    error: Partial<HookMap>;
}

// todo: figure out what to do: These methods don't actually need to be implemented, so they can be undefined at runtime. Yet making them optional gets cumbersome in strict mode.
export interface ServiceMethods<T> {
    find(params?: Params): Promise<T[] | Paginated<T>>;

    get(id: Id, params?: Params): Promise<T>;

    create(data: OptionalIDs<T> | Array<OptionalIDs<T>>, params?: Params): Promise<T | T[]>;

    update(id: NullableId, data: T, params?: Params): Promise<T>;

    patch(id: NullableId, data: Partial<T>, params?: Params): Promise<T>;

    remove(id: NullableId, params?: Params): Promise<T>;
}

export interface SetupMethod {
    setup(app: Application<any>, path: string): void;
}

export interface ServiceOverloads<T> {
    create(data: Array<OptionalIDs<T>>, params?: Params): Promise<T[]>;

    create(data: OptionalIDs<T>, params?: Params): Promise<T>;

    patch(id: NullableId, data: Pick<T, keyof T>, params?: Params): Promise<T>;
}

export interface ServiceAddons<T> extends EventEmitter {
    hooks(hooks: Partial<HooksObject>): this;
}

export type Service<T> = ServiceOverloads<T> & ServiceAddons<T> & ServiceMethods<T>;

export interface Application<ServiceTypes> extends EventEmitter {
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

    service(location: string): Service<any>;

    use(path: string, service: Partial<ServiceMethods<any> & SetupMethod> | Application<any>, options?: any): this;

    version: string;
}
