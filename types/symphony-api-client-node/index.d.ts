// Type definitions for symphony-api-client-node 1.1
// Project: https://github.com/SymphonyPlatformSolutions/symphony-api-client-node
// Definitions by: Mike Martinsky <https://github.com/mmartinsky>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 2.2

export * from "./PresenceClient";
export * from "./SymMessageParser";
export * from "./StreamsClient";
export * from "./UsersClient";

export interface AuthInfo {
    sessionAuthToken: string;
    kmAuthToken: string;
}

export interface AppInfo {
    appId: string;
    appToken: string;
}

export interface SymphonyConfiguration {
    sessionAuthHost?: string;
    sessionAuthPort?: number;
    sessionAuthContextPath?: string;
    keyAuthHost?: string;
    keyAuthPort?: number;
    keyAuthContextPath?: string;
    podHost?: string;
    podPort?: number;
    podContextPath?: string;
    agentHost?: string;
    agentPort?: number;
    agentContextPath?: string;
    botUsername?: string;
    botEmailAddress?: string;
    botPrivateKeyPath?: string;
    botPrivateKeyName?: string;
    botCertPath?: string;
    botCertName?: string;
    botCertPassword?: string;
    appId?: string;
    appPrivateKeyPath?: string;
    appPrivateKeyName?: string;
    appCertPath?: string;
    appCertName?: string;
    appCertPassword?: string;
    podProxyURL?: string;
    podProxyUsername?: string;
    podProxyPassword?: string;
    proxyURL?: string;
    proxyUsername?: string;
    proxyPassword?: string;
    keyManagerProxyURL?: string;
    keyManagerProxyUsername?: string;
    keyManagerProxyPassword?: string;
    nodeTlsRejectUnauthorized?: number;
    maxRetries?: number;
    maxWaitInterval?: number;
}

export const MESSAGEML_FORMAT: string;

export const PRESENTATIONML_FORMAT: string;

export const sessionToken: string;

export function acceptConnectionRequest(userId: any, sessionToken: string): void;

export function adminListEnterpriseStreamsV2(
    streamTypes: any,
    scope: any,
    origin: any,
    privacy: any,
    status: any,
    startDate: any,
    endDate: any,
    skip: any,
    limit: any,
): any;

export function authenticateBot(SymConfig: SymphonyConfiguration): Promise<AuthInfo>;

export function authenticateExtApp(): Promise<AppInfo>;

export function authenticateOboApp(): any;

export function createSignal(name: any, query: any, visibleOnProfile: any, companyWide: any, sessionToken: string): any;

export function deleteSignal(id: any, sessionToken: string): void;

export function formBuilder(formId: any): any;

export function forwardMessage(conversationId: any, message: any, data: any): any;

export function getAcceptedConnections(sessionToken: string): void;

export function getAllConnections(sessionToken: string): void;

export function getAttachment(streamId: any, attachmentId: any, messageId: any): any;

export function getBotUser(): void;

export function getConnectionRequestStatus(userId: any, sessionToken: string): void;

export function getConnections(status: any, userIds: any, sessionToken: string): void;

export function getDatafeedEventsService(options: any): any;

export function getFirehoseEventsService(subscriberCallback: any): void;

export function getInboundPendingConnections(sessionToken: string): void;

export function getMessage(messageId: any): void;

export function getMessages(streamId: any, since: any, skip: any, limit: any): void;

export function getPendingConnections(sessionToken: string): void;

export function getRejectedConnections(sessionToken: string): void;

export function getSignal(id: any, sessionToken: string): void;

export function getSignalSubscribers(id: any, skip: any, limit: any, sessionToken: string): void;

export function getUser(id: string): void;

export function importMessages(messageList: any): any;

export function initBot(pathToConfigFile: string, pathToLoadBalancerConfigFile?: string): Promise<AuthInfo>;

export function listSignals(skip: any, limit: any, sessionToken: string): void;

export function listUsers(skip: any, limit: any): void;

export function oboAuthenticateByUserId(userId: any): any;

export function oboGetAllConnections(status: any): void;

export function oboGetConnection(userId: any): void;

export function oboGetUserIMStreamId(userToken: any, userIds: any): void;

export function oboSendMessage(userToken: any, conversationId: any, message: any, data: any, format: any): any;

export function rejectConnectionRequest(userId: any, sessionToken: string): void;

export function removeConnection(userId: any, sessionToken: string): void;

export function sendConnectionRequest(userId: any, sessionToken: string): void;

export function sendMessage(conversationId: any, message: any, data: any, format: any, sessionToken: string): any;

export function sendMessageWithAttachment(
    conversationId: any,
    message: any,
    data: any,
    fileName: any,
    fileType: any,
    fileContent: any,
    format: any,
): any;

export function setDebugMode(mode: string): void;

export function stopDatafeedEventsService(): void;

export function stopFirehoseEventsService(): void;

export function streamMembers(id: any, skip: any, limit: any): void;

export function subscribeSignal(id: any, userIds: any, userCanUnsubscribe: any, sessionToken: string): void;

export function suppressMessage(id: any): void;

export function unsubscribeSignal(id: any, userIds: any, sessionToken: string): void;

export function updateRoom(
    streamId: any,
    room: any,
    description?: any,
    keywords?: any,
    membersCanInvite?: any,
    discoverable?: any,
    anyoneCanJoin?: any,
    readOnly?: any,
    copyProtected?: any,
    crossPod?: any,
    viewHistory?: any,
): any;

export function updateSignal(
    id: any,
    name?: any,
    query?: any,
    visibleOnProfile?: any,
    companyWide?: any,
    sessionToken?: any,
): any;

export function verifyJwt(jwt: string): string;
