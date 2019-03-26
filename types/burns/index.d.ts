// Type definitions for burns 2.0
// Project: https://github.com/shalvah/burns#readme
// Definitions by: Timothy Onyiuke <https://github.com/timolinn>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

declare const _Burns: Burns;

export interface ObjectLiteral {
    [key: string]: any;
}

export interface Config {
    defaultHandler?: any;
    broadcaster?: any;
    pusher?: any;
}

declare class Burns {
    configure(config?: Config): this;

    registerEvents(newEvents: ObjectLiteral): this;

    dispatch(eventName: string, eventData?: ObjectLiteral, exclude?: { exclude?: any }): this;
}

export default _Burns;
