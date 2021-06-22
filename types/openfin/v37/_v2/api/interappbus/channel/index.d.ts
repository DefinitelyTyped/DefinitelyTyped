import { ChannelClient } from './client';
import { Identity } from '../../../identity';
import { ChannelProvider } from './provider';
import { EmitterBase } from '../../base';
import Transport, { Message, Payload } from '../../../transport/transport';
import { ProviderIdentity } from './channel';
import { ChannelEvents } from '../../events/channel';
export interface ConnectOptions {
    wait?: boolean;
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
    private channelMap;
    constructor(wire: Transport);
    getAllChannels(): Promise<ProviderIdentity[]>;
    onChannelConnect(listener: (...args: any[]) => void): Promise<void>;
    onChannelDisconnect(listener: (...args: any[]) => void): Promise<void>;
    connect(channelName: string, options?: ConnectOptions): Promise<ChannelClient>;
    create(channelName: string): Promise<ChannelProvider>;
    onmessage: (msg: ChannelMessage) => boolean;
    private processChannelMessage;
    private processChannelConnection;
}
