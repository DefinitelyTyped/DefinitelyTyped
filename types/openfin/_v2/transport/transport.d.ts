/// <reference types="node" />
import { EventEmitter } from 'events';
import { Wire, WireConstructor, READY_STATE, ExistingConnectConfig, ConnectConfig, InternalConnectConfig } from './wire';
import { Identity } from '../identity';
import { Environment } from '../environment/environment';
import { RuntimeEvent } from '../api/events/base';
import { EventAggregator } from '../api/events/eventAggregator';
import { EntityTypeHelpers } from '../util/entity-type';
export declare type MessageHandler = (data: any) => boolean;
declare class Transport extends EventEmitter {
    protected wireListeners: Map<number, {
        resolve: Function;
        reject: Function;
    }>;
    protected uncorrelatedListener: Function;
    me: Identity & EntityTypeHelpers;
    environment: Environment;
    topicRefMap: Map<string, number>;
    sendRaw: Wire['send'];
    eventAggregator: EventAggregator;
    protected messageHandlers: MessageHandler[];
    constructor(WireType: WireConstructor, environment: Environment);
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
export interface Message<T> {
    action: string;
    payload: T;
    correlationId?: number | undefined;
}
export interface EventMessage extends Message<RuntimeEvent> {
    action: 'process-desktop-event';
    payload: RuntimeEvent;
}
export interface NotificationEventMessage extends Message<NotificationEvent> {
    action: 'process-notification-event';
    payload: NotificationEvent;
}
export interface NotificationEvent {
    payload: {
        notificationId: string;
    };
    type: string | symbol;
}
export interface Payload {
    success: boolean;
    data: any;
}
export interface AuthorizationPayload {
    token: string;
    file: string;
}
