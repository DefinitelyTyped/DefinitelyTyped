import { Component } from "../engine/component";
export declare class Events {
    handlers: {};
    constructor(handlers: {});
}
export interface EventsTypes {
    warn: string | Error;
    error: string | Error;
    componentRegister: Component;
    destroy: undefined;
}
