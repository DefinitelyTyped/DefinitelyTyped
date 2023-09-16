declare module 'node:domain' {
    import EventEmitter = require('node:events');

    global {
        namespace NodeJS {
            interface Domain extends EventEmitter {
                run<T>(fn: (...args: any[]) => T, ...args: any[]): T;
                add(emitter: EventEmitter | Timer): void;
                remove(emitter: EventEmitter | Timer): void;
                bind<T extends Function>(cb: T): T;
                intercept<T extends Function>(cb: T): T;
            }
        }
    }

    interface Domain extends NodeJS.Domain {}
    class Domain extends EventEmitter {
        members: Array<EventEmitter | NodeJS.Timer>;
        enter(): void;
        exit(): void;
    }

    function create(): Domain;
}
declare module 'domain' {
    export * from 'node:domain';
}
