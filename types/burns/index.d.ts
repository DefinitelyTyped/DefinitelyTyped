// Type definitions for burns 2.0
// Project: https://github.com/shalvah/burns#readme
// Definitions by: Timothy Onyiuke <https://github.com/timolinn>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 2.1

declare const _Burns: Burns;

export interface Config {
    defaultHandler?: any;
    broadcaster?: any;
    pusher?: any;
}

declare class Burns {
    configure(config?: Config): this;

    registerEvents(newEvents: Record<string, any>): this;

    dispatch(eventName: string, eventData?: Record<string, any>, exclude?: { exclude?: any }): this;
}

export default _Burns;
