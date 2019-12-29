import { ChannelClient } from './client';
import { Identity } from '../../../identity';
import { ChannelProvider } from './provider';
import { EmitterBase } from '../../base';
import Transport, { Message, Payload } from '../../../transport/transport';
import { ProviderIdentity } from './channel';
export interface Options {
    wait?: boolean;
    uuid: string;
    name?: string;
    payload?: any;
}
export interface ChannelPayload {
    payload: Payload;
}
export interface ChannelMessage {
    senderIdentity: Identity;
    ackToSender: any;
    providerIdentity: Identity;
    connectAction: boolean;
}
export declare class Channel extends EmitterBase {
    private channelMap;
    constructor(wire: Transport);
    getAllChannels(): Promise<ProviderIdentity[]>;
    onChannelConnect(listener: Function): Promise<void>;
    onChannelDisconnect(listener: Function): Promise<void>;
    connect(options: Options): Promise<ChannelClient>;
    create(channelName?: string): Promise<ChannelProvider>;
    onmessage: (msg: Message<ChannelMessage>) => boolean;
    private processChannelMessage;
    private processChannelConnection;
}
