declare namespace Context {
    interface Properties {
        [key: string]: any;
    }
}

declare class Context {
    constructor(properties: Context.Properties);
    properties: Context.Properties;
    merge(other: Context.Properties): Context;
}

export = Context;
