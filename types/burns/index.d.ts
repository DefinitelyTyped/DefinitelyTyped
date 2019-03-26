// Type definitions for burns version 2.0.1
// Project: https://github.com/shalvah/burns
// Definitions by: Timothy Onyiuke <https://github.com/timolinn>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

declare const _Burns: Burns;

export interface Config {
    defaultHandler?: any;
    broadcaster?: any;
    pusher?: any;
}

export interface ObjectLiteral {
    [key: string]: any
}

declare class Burns {
    configure(config?: Config): this;

    registerEvents(newEvents: ObjectLiteral): this;

    dispatch(eventName: string, eventData?: ObjectLiteral, exclude?: { exclude?: any }): this;
}

export default _Burns;