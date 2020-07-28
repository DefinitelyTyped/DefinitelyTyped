import { ChannelBase } from './channel';
import Transport from '../../../transport/transport';
import { ProviderIdentity } from '../../../shapes/Identity';
declare type DisconnectionListener = (providerIdentity: ProviderIdentity) => any;
interface RoutingInfo extends ProviderIdentity {
    endpointId: string;
}
export declare class ChannelClient extends ChannelBase {
    private disconnectListener;
    private endpointId;
    private clientMap;
    constructor(routingInfo: RoutingInfo, send: Transport['sendAction'], clientMap: Map<string, ChannelClient>);
    get providerIdentity(): ProviderIdentity;
    dispatch(action: string, payload?: any): Promise<any>;
    onDisconnection(listener: DisconnectionListener): void;
    disconnect(): Promise<void>;
}
export {};
