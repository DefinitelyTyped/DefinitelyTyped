/// <reference types="node" />

import { EventEmitter } from "events";

declare class Base extends EventEmitter {
    constructor(cache?: object, options?: Base.Options);

    options: Base.Options;
    cache: { [key: string]: any };
    registered: { [key: string]: boolean };

    /**
     * Set the instance `type` and create an `is*` property.
     */
    is(type: string): this;

    /**
     * Returns true if a plugin has already been registered on an instance.
     */
    isRegistered(name: string, register?: boolean): boolean;

    /**
     * Define a plugin function to be called immediately upon init.
     */
    use(plugin: Base.Plugin): this;
    use(plugins: Base.Plugin[]): this;

    /**
     * Add a non-enumerable property on the Base instance.
     */
    define(key: string, val: any): this;
    define(obj: object): this;

    /**
     * Get the ancestor instance from the parent chain.
     */
    readonly base: Base;

    // Inherited from cache-base
    set(key: string, val: any): this;
    set(obj: object): this;
    get(key: string): any;
    prime(key: string, val: any): this;
    default(key: string, val: any): this;
    union(key: string, val: any): this;
    has(key: string): boolean;
    hasOwn(key: string): boolean;
    del(key: string | string[]): this;
    clear(): this;
    visit(method: string, val: any): this;

    readonly keys: string[];
    readonly size: number;
}

declare namespace Base {
    interface Options {
        [key: string]: any;
    }

    type Plugin = (app: Base, base: Base, env: object) => void;

    /**
     * Static method for registering plugins that will be applied
     * to all instances.
     */
    function use(plugin: Plugin): typeof Base;

    /**
     * Create a custom namespace for the Base instance.
     */
    function namespace(name: string): typeof Base;
}

export = Base;
