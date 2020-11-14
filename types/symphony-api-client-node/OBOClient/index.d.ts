import { Message } from '../MessagesClient';
import { UserId } from '../StreamsClient';
import { Connection } from "../ConnectionsClient";

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

export function oboGetAllConnections(status: string): Promise<Connection[]>;
export function oboGetConnection(userId: string): Promise<Connection>;
export function oboGetUserIMStreamId(userToken: string, userIds: number[]): Promise<UserId>;
export function oboSendMessage(userToken: string, conversationId: string, message: string, data: any, format: string): Promise<Message>;
