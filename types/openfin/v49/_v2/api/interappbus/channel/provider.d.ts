import { ChannelBase, ProviderIdentity } from './channel';
import Transport from '../../../transport/transport';
import { Identity } from '../../../main';
export declare type ConnectionListener = (identity: Identity, connectionMessage?: any) => any;
export declare type DisconnectionListener = (identity: Identity) => any;
export declare class ChannelProvider extends ChannelBase {
    private connectListener;
    private disconnectListener;
    connections: Identity[];
    constructor(providerIdentity: ProviderIdentity, send: Transport['sendAction']);
    dispatch(to: Identity, action: string, payload: any): Promise<any>;
    processAction(action: string, payload: any, senderIdentity: ProviderIdentity): Promise<any>;
    processConnection(senderId: Identity, payload: any): Promise<any>;
    publish(action: string, payload: any): Promise<any>[];
    onConnection(listener: ConnectionListener): void;
    onDisconnection(listener: DisconnectionListener): void;
    destroy(): Promise<void>;
}
