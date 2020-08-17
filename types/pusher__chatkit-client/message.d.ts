export {};
import { PusherUser } from './user';
import { PusherRoom } from './room';

interface InlinePayload {
    type: string;
    content: string;
}

interface UrlPayload {
    type: string;
    url: string;
}

// This is what a file looks like after it's returned by Chatkit
interface AttachmentPayload {
    type: string;
    name: string;
    size: number;
    customData?: any;
    url: () => Promise<string>;
    urlExpiry: () => Promise<Date>;
}

// This is used when uploading a file.
interface FilePayload {
    type?: string; // Optional if it can be inferred from the file
    name?: string; // Optional if it can be inferred from the file
    file: Blob;
    customData?: any;
}

export type SendMessagePayload = InlinePayload | UrlPayload | FilePayload;
type MessagePayload = InlinePayload | UrlPayload | AttachmentPayload;

export interface MessagePart {
    partType: 'inline' | 'url' | 'attachment';
    payload: MessagePayload;
}

interface MessageFromPusher {
    id: string;
    parts: MessagePart[];
    sender: PusherUser;
    createdAt: Date;
}

export interface PusherMessage {
    id: number;
    sender: PusherUser;
    room: PusherRoom;
    parts: MessagePart[];
    createdAt: Date;
    updatedAt: Date;
}
