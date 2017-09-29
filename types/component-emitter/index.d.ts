// Type definitions for component-emitter v1.2.1
// Project: https://www.npmjs.com/package/component-emitter
// Definitions by: Peter Snider <https://github.com/psnider>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped/emitter-component


interface Emitter {
    on(event: string, listener: Function): Emitter;
    once(event: string, listener: Function): Emitter;
    off(event?: string, listener?: Function): Emitter;
    emit(event: string, ...args: any[]): boolean;
    listeners(event: string): Function[];
    hasListeners(event: string): boolean;
}

declare const constructor: {
    (obj?: any): Emitter;
    new (obj?: any): Emitter;
};

export = constructor;
