/// <reference types="node" />
import { Wire, WireConstructor, READY_STATE, ExistingConnectConfig, ConnectConfig, InternalConnectConfig } from './wire';
import { Identity } from '../identity';
import { EventEmitter } from 'events';
import { Environment } from '../environment/environment';
import { RuntimeEvent } from '../api/events/base';
import { EventAggregator } from '../api/events/eventAggregator';
import { View } from '../api/view/view';
import { Frame, Window } from '../main';
import { EntityTypeHelpers } from '../util/entity-type';
export declare type MessageHandler = (data: any) => boolean;
declare class Transport extends EventEmitter {
    protected wireListeners: Map<number, {
        resolve: Function;
        reject: Function;
    }>;
    protected uncorrelatedListener: Function;
    me: (View | Window | Frame | {}) & Identity & EntityTypeHelpers;
    environment: Environment;
    topicRefMap: Map<string, number>;
    sendRaw: Wire['send'];
    eventAggregator: EventAggregator;
    protected messageHandlers: MessageHandler[];
    constructor(wireType: WireConstructor, environment: Environment);
    connectSync: (config: ConnectConfig) => void;
    getPort: () => string;
    shutdown(): Promise<void>;
    connect(config: InternalConnectConfig): Promise<string>;
    connectByPort(config: ExistingConnectConfig): Promise<string>;
    READY_STATE: typeof READY_STATE;
    ferryAction(data: any): Promise<Message<any>>;
    registerMessageHandler(handler: MessageHandler): void;
    protected addWireListener(id: number, resolve: Function, reject: Function, uncorrelated: boolean): void;
    protected onmessage(data: Message<Payload>): void;
    protected handleMessage(data: Message<Payload>): boolean;
}
export default Transport;
interface Transport {
    sendAction(action: 'request-external-authorization', payload: {}, uncorrelated: true): Promise<Message<AuthorizationPayload>>;
    sendAction(action: string, payload: {}, uncorrelated: boolean): Promise<Message<Payload>>;
    topicRefMap: Map<string, number>;
}
export declare class Message<T> {
    action: string;
    payload: T;
    correlationId?: number;
}
export declare class EventMessage implements Message<RuntimeEvent> {
    action: 'process-desktop-event';
    payload: RuntimeEvent;
}
export declare class NotificationEventMessage implements Message<NotificationEvent> {
    action: 'process-notification-event';
    payload: NotificationEvent;
}
export interface NotificationEvent {
    payload: {
        notificationId: string;
    };
    type: string | symbol;
}
export declare class Payload {
    success: boolean;
    data: any;
}
export declare class AuthorizationPayload {
    token: string;
    file: string;
}
