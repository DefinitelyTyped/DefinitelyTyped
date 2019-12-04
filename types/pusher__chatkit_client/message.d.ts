import { PusherUser } from './user';
import { PusherRoom } from './room';

interface InlinePayload {
    type: string,
    content: string,
}

interface UrlPayload {
    type: string,
    url: string,
}

interface AttachmentPayload {
    type: string,
    name: string,
    size: number,
    customData?: any,
    url: () => Promise<string>
    urlExpiry: () => Promise<Date>
}

interface MessagePart {
    partType: 'inline' | 'url' | 'attachment',
    payload: any,
}

interface MessageFromPusher {
    id: string,
    parts: MessagePart[],
    sender: PusherUser,
    createdAt: Date,
}

export interface PusherMessage {
    id: number
    sender: PusherUser
    room: PusherRoom
    parts: MessagePart[]
    createdAt: Date
    updatedAt: Date
}
