import { ChannelClient } from './client';
import { Identity } from '../../../identity';
import { ChannelProvider } from './provider';
import { EmitterBase } from '../../base';
import Transport, { Message, Payload } from '../../../transport/transport';
import { ChannelEvents } from '../../events/channel';
import { ProviderIdentity } from '../../../shapes/Identity';
export interface ConnectOptions {
    wait?: boolean | undefined;
    payload?: any;
}
export interface ChannelPayload {
    payload: Payload;
}
export interface ChannelMessage extends Message<any> {
    senderIdentity: Identity;
    ackToSender: any;
    providerIdentity: ProviderIdentity;
    connectAction: boolean;
}
export declare class Channel extends EmitterBase<ChannelEvents> {
    private providerMap;
    private clientMap;
    private endpointIdMap;
    constructor(wire: Transport);
    getAllChannels(): Promise<ProviderIdentity[]>;
    onChannelConnect(listener: (...args: any[]) => void): Promise<void>;
    onChannelDisconnect(listener: (...args: any[]) => void): Promise<void>;
    connect(channelName: string, options?: ConnectOptions): Promise<ChannelClient>;
    create(channelName: string): Promise<ChannelProvider>;
    protected addChannelToClientMaps(channel: ChannelClient, channelId: string, endpointId: string): void;
    protected removeChannelFromClientMaps(channelId: string, endpointId: string): void;
    protected removeChannelFromProviderMap(channelId: string): void;
    protected checkForPreviousClientConnection(channelId: string): void;
    onmessage: (msg: ChannelMessage) => boolean;
    private processChannelMessage;
    private processChannelConnection;
}
