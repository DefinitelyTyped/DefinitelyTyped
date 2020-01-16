/**
 * @hidden
 */
/**
 * File contains types and helpers used to communicate between client and provider.
 *
 * These exports are a part of the client, but are not required by applications wishing to interact with the service.
 * This file is excluded from the public-facing TypeScript documentation.
 */
import { ChannelId, DisplayMetadata } from './contextChannels';
import { FDC3Error } from './errors';
export interface ChannelTransport {
    id: ChannelId;
    type: string;
}
export interface SystemChannelTransport extends ChannelTransport {
    type: 'system';
    visualIdentity: DisplayMetadata;
}
export interface AppChannelTransport extends ChannelTransport {
    type: 'app';
    name: string;
}
