import { StreamType } from "../StreamsClient";

export interface AdminStreamAttributes {
    roomName?: string | undefined;
    roomDescription?: string | undefined;
    createdByUserId: number;
    createdDate: number;
    lastModifiedDate: number;
    originCompany: string;
    originCompanyId: number;
    membersCount: number;
    lastMessageDate: number;
    members?: number[] | undefined;
}

export interface AdminStreamInfo {
    id: string;
    isExternal: boolean;
    isActive: boolean;
    isPublic: boolean;
    type: string;
    attributes: AdminStreamAttributes;
}

export interface AdminStreamListResponse {
    count: number;
    skip: number;
    limit: number;
    filter: { streamTypes: StreamType[] };
    streams: AdminStreamInfo[];
}

export interface StreamUser {
    userId: number;
    email?: string | undefined;
    firstName?: string | undefined;
    lastName?: string | undefined;
    displayName?: string | undefined;
    company?: string | undefined;
    companyId?: number | undefined;
    isExternal: boolean;
}

export interface StreamMember {
    user: StreamUser;
    isOwner?: boolean | undefined;
    isCreator: boolean;
    joinDate: number;
}

export interface StreamMembers {
    count: number;
    skip: number;
    limit: number;
    members: StreamMember[];
}

export interface ImportMessage {
    message: string;
    data?: any;
    intendedMessageTimestamp: number;
    intendedMessageFromUserId: number;
    originatingSystemId: string;
    originalMessageId?: string | undefined;
    streamId: string;
}

export interface ImportMessageResult {
    messageId?: string | undefined;
    originatingSystemId: string;
    originalMessageId?: string | undefined;
    diagnostic?: string | undefined;
}

export interface SuppressedMessage {
    messageId: string;
    suppressed: boolean;
    suppressionDate: number;
}

export function adminListEnterpriseStreamsV2(
    streamTypes: StreamType[],
    scope: string,
    origin: string,
    privacy: string,
    status: string,
    startDate: number,
    endDate: number,
    skip: number,
    limit: number,
): Promise<AdminStreamListResponse>;

export function streamMembers(id: string, skip: number, limit: number): Promise<StreamMembers>;

export function importMessages(messageList: ImportMessage[]): Promise<ImportMessageResult[]>;

export function suppressMessage(id: string): Promise<SuppressedMessage>;
