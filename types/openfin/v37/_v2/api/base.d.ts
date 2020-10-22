/// <reference types="node" />
import Transport from '../transport/transport';
import { Identity } from '../identity';
import { EventEmitter } from 'events';
import { EmitterAccessor } from './events/emitterMap';
import { BaseEventMap } from './events/base';
interface SubOptions {
    timestamp?: number;
}
export declare class Base {
    wire: Transport;
    constructor(wire: Transport);
    private _topic;
    protected topic: string;
    readonly me: Identity;
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
    protected registerEventListener: (eventType: string | symbol | Extract<keyof EventTypes, string>, options?: SubOptions) => Promise<EventEmitter>;
    protected deregisterEventListener: (eventType: string | symbol | Extract<keyof EventTypes, string>, options?: SubOptions) => Promise<void | EventEmitter>;
    on<E extends Extract<keyof EventTypes, string> | string | symbol>(eventType: E, listener: (payload: E extends keyof EventTypes ? EventTypes[E] : any, ...args: any[]) => void, options?: SubOptions): Promise<this>;
    addListener: <E extends string | symbol | Extract<keyof EventTypes, string>>(eventType: E, listener: (payload: E extends keyof EventTypes ? EventTypes[E] : any, ...args: any[]) => void, options?: SubOptions) => Promise<this>;
    once<E extends Extract<keyof EventTypes, string> | string | symbol>(eventType: E, listener: (payload: E extends keyof EventTypes ? EventTypes[E] : any, ...args: any[]) => void, options?: SubOptions): Promise<this>;
    prependListener<E extends Extract<keyof EventTypes, string> | string | symbol>(eventType: E, listener: (payload: E extends keyof EventTypes ? EventTypes[E] : any, ...args: any[]) => void, options?: SubOptions): Promise<this>;
    prependOnceListener<E extends Extract<keyof EventTypes, string> | string | symbol>(eventType: E, listener: (payload: E extends keyof EventTypes ? EventTypes[E] : any, ...args: any[]) => void, options?: SubOptions): Promise<this>;
    removeListener<E extends Extract<keyof EventTypes, string> | string | symbol>(eventType: E, listener: (payload: E extends keyof EventTypes ? EventTypes[E] : any, ...args: any[]) => void, options?: SubOptions): Promise<this>;
    protected deregisterAllListeners: (eventType: string | symbol | Extract<keyof EventTypes, string>) => Promise<void | EventEmitter>;
    removeAllListeners(eventType?: Extract<keyof EventTypes, string> | string | symbol): Promise<this>;
}
export declare class Reply<TOPIC extends string, TYPE extends string | void> implements Identity {
    topic: TOPIC;
    type: TYPE;
    uuid: string;
    name?: string;
}
export {};
