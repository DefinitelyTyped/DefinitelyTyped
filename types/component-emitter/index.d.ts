// Type definitions for component-emitter v1.2.1
// Project: https://www.npmjs.com/package/component-emitter
// Definitions by: Peter Snider <https://github.com/psnider>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped/emitter-component

// TypeScript Version: 2.2

interface Emitter {
    on(event: string, listener: Function): Emitter;
    once(event: string, listener: Function): Emitter;
    off(event?: string, listener?: Function): Emitter;
    emit(event: string, ...args: any[]): Emitter;
    listeners(event: string): Function[];
    hasListeners(event: string): boolean;
}

declare const Emitter: {
    (obj?: object): Emitter;
    new (obj?: object): Emitter;
};

export = Emitter;
