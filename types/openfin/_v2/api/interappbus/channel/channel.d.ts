import { Identity } from '../../../identity';
import Transport, { Message } from '../../../transport/transport';
export interface ProviderIdentity extends Identity {
    channelId: string;
    isExternal?: boolean;
    channelName: string;
}
export declare type Action = (() => any) | ((payload: any) => any) | ((payload: any, id: ProviderIdentity) => any);
export declare type Middleware = (() => any) | ((action: string) => any) | ((action: string, payload: any) => any) | ((action: string, payload: any, id: ProviderIdentity) => any);
export interface ChannelMessagePayload extends Identity {
    action: string;
    payload: any;
}
export declare class ChannelBase {
    protected removeChannel: (mapKey: string) => void;
    protected subscriptions: any;
    defaultAction: (action?: string, payload?: any, senderIdentity?: ProviderIdentity) => any;
    private preAction;
    private postAction;
    private errorMiddleware;
    private defaultSet;
    protected send: (to: Identity, action: string, payload: any) => Promise<Message<void>>;
    protected providerIdentity: ProviderIdentity;
    protected sendRaw: Transport['sendAction'];
    constructor(providerIdentity: ProviderIdentity, send: Transport['sendAction']);
    processAction(action: string, payload: any, senderIdentity: ProviderIdentity): Promise<any>;
    beforeAction(func: Action): void;
    onError(func: (action: string, error: any, id: Identity) => any): void;
    afterAction(func: Action): void;
    remove(action: string): void;
    setDefaultAction(func: (action?: string, payload?: any, senderIdentity?: ProviderIdentity) => any): void;
    register(topic: string, listener: Action): boolean;
}
