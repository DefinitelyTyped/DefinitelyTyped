// Type definitions for harmony-proxy 1.0.0
// Project: https://www.npmjs.com/package/harmony-proxy
// Definitions by: Remo Jansen <https://github.com/remojansen/>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

declare namespace harmonyProxy {
    type PropertyKey = string | number | symbol;

    interface ProxyHandler<T> {
        getPrototypeOf? (target: T): any;
        setPrototypeOf? (target: T, v: any): boolean;
        isExtensible? (target: T): boolean;
        preventExtensions? (target: T): boolean;
        getOwnPropertyDescriptor? (target: T, p: PropertyKey): PropertyDescriptor;
        has? (target: T, p: PropertyKey): boolean;
        get? (target: T, p: PropertyKey, receiver: any): any;
        set? (target: T, p: PropertyKey, value: any, receiver: any): boolean;
        deleteProperty? (target: T, p: PropertyKey): boolean;
        defineProperty? (target: T, p: PropertyKey, attributes: PropertyDescriptor): boolean;
        enumerate? (target: T): PropertyKey[];
        ownKeys? (target: T): PropertyKey[];
        apply? (target: T, thisArg: any, argArray?: any): any;
        construct? (target: T, thisArg: any, argArray?: any): any;
    }

    interface ProxyConstructor {
        revocable<T>(target: T, handler: ProxyHandler<T>): { proxy: T; revoke: () => void; };
        new <T>(target: T, handler: ProxyHandler<T>): T
    }
}

declare module "harmony-proxy" {
    let _Proxy: harmonyProxy.ProxyConstructor;
    export = _Proxy;
}
