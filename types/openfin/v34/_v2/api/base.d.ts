/// <reference types="node" />
import Transport, { Message } from '../transport/transport';
import { Identity } from '../identity';
import { EventEmitter } from 'events';
export interface RuntimeEvent extends Identity {
    topic: string;
    type: string | symbol;
}
export declare class Base {
    wire: Transport;
    constructor(wire: Transport);
    private _topic;
    protected topic: string;
    readonly me: Identity;
    protected isNodeEnvironment: () => boolean;
    protected isOpenFinEnvironment: () => boolean;
    protected runtimeEventComparator: (listener: RuntimeEvent) => boolean;
}
export declare class EmitterBase extends Base {
    protected identity: Identity;
    protected emitter: EventEmitter;
    listeners: (event: string | symbol) => Function[];
    listenerCount: (type: string | symbol) => number;
    constructor(wire: Transport);
    emit: (eventName: string | symbol, ...args: any[]) => void;
    protected onmessage: (message: Message<any>) => boolean;
    protected registerEventListener: (listener: RuntimeEvent) => Promise<void | Message<void>>;
    protected deregisterEventListener: (listener: RuntimeEvent) => Promise<void | Message<void>>;
    on(eventType: string, listener: (...args: any[]) => void): Promise<void>;
    addListener: (eventType: string, listener: (...args: any[]) => void) => Promise<void>;
    once(eventType: string, listener: (...args: any[]) => void): Promise<void>;
    prependListener(eventType: string, listener: (...args: any[]) => void): Promise<void>;
    prependOnceListener(eventType: string, listener: (...args: any[]) => void): Promise<void>;
    removeListener(eventType: string, listener: (...args: any[]) => void): Promise<void>;
    protected deregisterAllListeners: (eventType: string | symbol) => Promise<void | Message<void>>;
    removeAllListeners(eventType?: string): Promise<void>;
}
export declare class Reply<TOPIC extends string, TYPE extends string | void> implements Identity {
    topic: TOPIC;
    type: TYPE;
    uuid: string;
    name?: string;
}
