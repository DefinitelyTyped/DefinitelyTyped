import { BaseEventMap, ApplicationEvent } from './base';
export interface ChannelEvent<Type> extends ApplicationEvent<'channel', Type> {
    channelName: string;
    channelId: string;
    name?: string | undefined;
}
export interface ChannelEvents extends BaseEventMap {
    connected: ChannelEvent<'connected'>;
    disconnected: ChannelEvent<'disconnected'>;
}
