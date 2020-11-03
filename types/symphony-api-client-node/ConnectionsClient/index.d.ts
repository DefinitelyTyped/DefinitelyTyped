export const PENDING_INCOMING: string;
export const PENDING_OUTGOING: string;
export const ACCEPTED: string;
export const REJECTED: string;
export const ALL: string;

export interface Connection {
    userId: number;
    status: "REJECTED" | "ACCEPTED" | "PENDING_INCOMING" | 'PENDING_OUTGOING';
    firstRequestedAt?: number;
    updatedAt?: number;
    requestCounter?: number;
}

export interface RemoveConnectionReponse {
    format: string;
    message: string;
}

export function acceptConnectionRequest(userId: string, sessionToken: string): Promise<Connection>;
export function getAcceptedConnections(sessionToken: string): Promise<Connection[]>;
export function getAllConnections(sessionToken: string): Promise<Connection[]>;
export function getConnectionRequestStatus(userId: string, sessionToken: string): Promise<Connection>;
export function getConnections(status: string, commaSeparatedUserIds: string, sessionToken: string): Promise<Connection[]>;
export function getInboundPendingConnections(sessionToken: string): Promise<Connection[]>;
export function getPendingConnections(sessionToken: string): Promise<Connection[]>;
export function getRejectedConnections(sessionToken: string): Promise<Connection[]>;
export function rejectConnectionRequest(userId: string, sessionToken: string): Promise<Connection>;
export function removeConnection(userId: string, sessionToken: string): Promise<RemoveConnectionReponse>;
export function sendConnectionRequest(userId: string, sessionToken: string): Promise<Connection>;
