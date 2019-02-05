declare module "domain" {
    import * as events from "events";

    class Domain extends events.EventEmitter implements NodeJS.Domain {
        run(fn: Function): void;
        add(emitter: events.EventEmitter): void;
        remove(emitter: events.EventEmitter): void;
        bind(cb: (err: Error, data: any) => any): any;
        intercept(cb: (data: any) => any): any;
        members: any[];
        enter(): void;
        exit(): void;
    }

    function create(): Domain;
}
