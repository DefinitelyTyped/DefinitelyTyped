/**
 * @deprecated
 */
 declare module 'domain' {
    export * from 'node:domain';
}

/**
 * @deprecated
 */
declare module 'node:domain' {
    import EventEmitter = require('node:events');
    class Domain extends EventEmitter {
        members: Array<EventEmitter | NodeJS.Timer>;
        enter(): void;
        exit(): void;
        run<T>(fn: (...args: any[]) => T, ...args: any[]): T;
        add(emitter: EventEmitter | NodeJS.Timer): void;
        remove(emitter: EventEmitter | NodeJS.Timer): void;
        bind<T extends Function>(cb: T): T;
        intercept<T extends Function>(cb: T): T;
    }

    function create(): Domain;
}
