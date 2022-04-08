import { User } from "../UsersClient";
import { StreamType } from "../StreamsClient";

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
    userAgent?: string;
    sharedMessage?: Message;
}

export interface Stream {
    streamId: string;
    streamType: StreamType;
}

export function sendMessage(conversationId: string, message: string, data: any, format: string, sessionToken: string): Promise<Message>;

export function sendMessageWithAttachment(
    conversationId: string,
    message: string,
    data: any,
    fileName: string,
    fileType: string,
    fileContent: any,
    format: string,
): Promise<Message>;

export function getMessage(messageId: string): Promise<Message>;

export function getMessages(streamId: string, since: number, skip: number, limit: number): Promise<Message[]>;

export function forwardMessage(conversationId: string, message: string, data: any): Promise<Message>;

export function getAttachment(streamId: string, attachmentId: string, messageId: string): Promise<string>;
