import { ChannelBase, ProviderIdentity } from './channel';
import Transport from '../../../transport/transport';
declare type DisconnectionListener = (providerIdentity: ProviderIdentity) => any;
export declare class ChannelClient extends ChannelBase {
    private disconnectListener;
    constructor(providerIdentity: ProviderIdentity, send: Transport['sendAction']);
    dispatch(action: string, payload?: any): Promise<any>;
    onDisconnection(listener: DisconnectionListener): void;
    disconnect(): Promise<void>;
}
export {};
