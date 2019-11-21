declare module "domain" {
    import * as events from "events";

    class Domain extends events.EventEmitter implements NodeJS.Domain {
        run<T>(fn: (...args: any[]) => T, ...args: any[]): T;
        add(emitter: events.EventEmitter | NodeJS.Timer): void;
        remove(emitter: events.EventEmitter | NodeJS.Timer): void;
        bind<T extends Function>(cb: T): T;
        intercept<T extends Function>(cb: T): T;
        members: Array<events.EventEmitter | NodeJS.Timer>;
        enter(): void;
        exit(): void;
    }

    function create(): Domain;
}
