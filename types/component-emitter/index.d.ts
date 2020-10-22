// Type definitions for component-emitter v1.2.1
// Project: https://www.npmjs.com/package/component-emitter
// Definitions by: Peter Snider <https://github.com/psnider>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

// TypeScript Version: 2.2

interface Emitter<Event = string> {
    on(event: Event, listener: Function): Emitter;
    once(event: Event, listener: Function): Emitter;
    off(event?: Event, listener?: Function): Emitter;
    emit(event: Event, ...args: any[]): Emitter;
    listeners(event: Event): Function[];
    hasListeners(event: Event): boolean;
}

declare const Emitter: {
    (obj?: object): Emitter;
    new (obj?: object): Emitter;
};

export = Emitter;
