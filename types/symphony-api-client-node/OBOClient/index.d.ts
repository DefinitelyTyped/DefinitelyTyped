import { UserId, StreamType } from '../StreamsClient';
import { Connection } from "../ConnectionsClient";
import { User } from '../UsersClient';
export const MESSAGEML_FORMAT: string;
export const PRESENTATIONML_FORMAT: string;

export interface OboUser {
    userId: string;
    email: string;
    firstName: string;
    lastName: string;
    displayName: string;
    username: string;
}

export interface Image {
    id: string;
    dimension: string;
}

export interface Attachment {
    id: string;
    name: string;
    size: number;
    images: Image[];
}

export interface Message {
    messageId: string;
    timestamp: number;
    message: string;
    user: User;
    stream: Stream;
    originalFormat: string;
    sid: string;
    attachments?: Attachment[];
    data?: string;
}

export interface Stream {
    streamId: string;
    streamType: StreamType;
}

export function oboGetAllConnections(status: string): Promise<Connection[]>;
export function oboGetConnection(userId: string): Promise<Connection>;
export function oboGetUserIMStreamId(userToken: string, userIds: number[]): Promise<UserId>;
export function oboSendMessage(userToken: string, conversationId: string, message: string, data: any, format: string): Promise<Message>;
