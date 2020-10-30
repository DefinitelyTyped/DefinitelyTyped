import { EventEmitter } from 'events';
import Transport from '../transport/transport';
import { Identity } from '../identity';
import { EmitterAccessor } from './events/emitterMap';
import { BaseEventMap } from './events/base';
export interface SubOptions {
    timestamp?: number;
}
export declare class Base {
    wire: Transport;
    constructor(wire: Transport);
    private _topic;
    protected get topic(): string;
    protected set topic(t: string);
    get me(): Identity;
    protected isNodeEnvironment: () => boolean;
    protected isOpenFinEnvironment: () => boolean;
}
export declare class EmitterBase<EventTypes extends BaseEventMap> extends Base {
    private emitterAccessor;
    protected identity: Identity;
    constructor(wire: Transport, emitterAccessor: EmitterAccessor);
    eventNames: () => (string | symbol)[];
    emit: <E extends string | symbol | Extract<keyof EventTypes, string>>(eventName: E, payload: E extends Extract<keyof EventTypes, string> ? EventTypes[E] : any, ...args: any[]) => boolean;
    private hasEmitter;
    private getEmitter;
    listeners: (type: string | symbol) => Function[];
    listenerCount: (type: string | symbol) => number;
    protected registerEventListener: (eventType: Extract<keyof EventTypes, string> | string | symbol, options?: SubOptions) => Promise<EventEmitter>;
    protected deregisterEventListener: (eventType: Extract<keyof EventTypes, string> | string | symbol, options?: SubOptions) => Promise<void | EventEmitter>;
    on: <E extends string | symbol | Extract<keyof EventTypes, string>>(eventType: E, listener: (payload: E extends keyof EventTypes ? EventTypes[E] : any, ...args: any[]) => void, options?: SubOptions) => Promise<this>;
    addListener: <E extends string | symbol | Extract<keyof EventTypes, string>>(eventType: E, listener: (payload: E extends keyof EventTypes ? EventTypes[E] : any, ...args: any[]) => void, options?: SubOptions) => Promise<this>;
    once: <E extends string | symbol | Extract<keyof EventTypes, string>>(eventType: E, listener: (payload: E extends keyof EventTypes ? EventTypes[E] : any, ...args: any[]) => void, options?: SubOptions) => Promise<this>;
    prependListener: <E extends string | symbol | Extract<keyof EventTypes, string>>(eventType: E, listener: (payload: E extends keyof EventTypes ? EventTypes[E] : any, ...args: any[]) => void, options?: SubOptions) => Promise<this>;
    prependOnceListener: <E extends string | symbol | Extract<keyof EventTypes, string>>(eventType: E, listener: (payload: E extends keyof EventTypes ? EventTypes[E] : any, ...args: any[]) => void, options?: SubOptions) => Promise<this>;
    removeListener: <E extends string | symbol | Extract<keyof EventTypes, string>>(eventType: E, listener: (payload: E extends keyof EventTypes ? EventTypes[E] : any, ...args: any[]) => void, options?: SubOptions) => Promise<this>;
    protected deregisterAllListeners: (eventType: Extract<keyof EventTypes, string> | string | symbol) => Promise<EventEmitter | void>;
    removeAllListeners: (eventType?: Extract<keyof EventTypes, string> | string | symbol) => Promise<this>;
    private deleteEmitterIfNothingRegistered;
}
export declare class Reply<TOPIC extends string, TYPE extends string | void> implements Identity {
    topic: TOPIC;
    type: TYPE;
    uuid: string;
    name?: string;
}
