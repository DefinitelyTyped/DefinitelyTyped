import { ChannelBase, ProviderIdentity } from './channel';
import Transport from '../../../transport/transport';
export declare type ConnectionListener = (adapterIdentity: ProviderIdentity, connectionMessage?: any) => any;
export declare class ChannelProvider extends ChannelBase {
    private connectListener;
    private disconnectListener;
    connections: ProviderIdentity[];
    constructor(providerIdentity: ProviderIdentity, send: Transport['sendAction']);
    dispatch(to: ProviderIdentity, action: string, payload: any): Promise<any>;
    processConnection(senderId: ProviderIdentity, payload: any): Promise<any>;
    publish(action: string, payload: any): Promise<any>[];
    onConnection(listener: ConnectionListener): void;
}
