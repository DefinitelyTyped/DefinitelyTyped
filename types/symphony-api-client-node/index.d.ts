// Type definitions for symphony-api-client-node 1.1
// Project: https://github.com/SymphonyPlatformSolutions/symphony-api-client-node
// Definitions by: Mike Martinsky <https://github.com/mmartinsky>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 2.2

export interface AuthInfo {
    sessionAuthToken: string;
    kmAuthToken: string;
}

export const MESSAGEML_FORMAT: string;

export const PRESENTATIONML_FORMAT: string;

export const sessionToken: string;

export function acceptConnectionRequest(userId: any, sessionToken: string): void;

export function activateRoom(streamId: any): void;

export function addMemberToRoom(streamId: any, userId: any): any;

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

export function authenticateBot(SymConfig: any): any;

export function authenticateExtApp(): any;

export function authenticateOboApp(): any;

export function createRoom(
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

export function createSignal(name: any, query: any, visibleOnProfile: any, companyWide: any, sessionToken: string): any;

export function deactivateRoom(streamId: any): void;

export function deleteSignal(id: any, sessionToken: string): void;

export function demoteUserFromOwner(streamId: any, userId: any): any;

export function formBuilder(formId: any): any;

export function forwardMessage(conversationId: any, message: any, data: any): any;

export function getAcceptedConnections(sessionToken: string): void;

export function getAllConnections(sessionToken: string): void;

export function getAttachment(streamId: any, attachmentId: any, messageId: any): any;

export function getBotUser(): void;

export function getCashtags(message: any): any;

export function getConnectionRequestStatus(userId: any, sessionToken: string): void;

export function getConnections(status: any, userIds: any, sessionToken: string): void;

export function getDatafeedEventsService(options: any): any;

export function getFirehoseEventsService(subscriberCallback: any): void;

export function getHashtags(message: any): any;

export function getInboundPendingConnections(sessionToken: string): void;

export function getMentions(message: any): any;

export function getMessage(messageId: any): void;

export function getMessages(streamId: any, since: any, skip: any, limit: any): void;

export function getPendingConnections(sessionToken: string): void;

export function getRejectedConnections(sessionToken: string): void;

export function getRoomInfo(streamId: any): void;

export function getRoomMembers(streamId: any): void;

export function getSignal(id: any, sessionToken: string): void;

export function getSignalSubscribers(id: any, skip: any, limit: any, sessionToken: string): void;

export function getUser(id: any): void;

export function getUserFromEmail(email: any, local: any): void;

export function getUserFromUsername(username: any): void;

export function getUserIMStreamId(userIDs: any): void;

export function getUserPresence(userId: any, local: any): void;

export function getUserStreams(skip: any, limit: any, streamTypes: any, includeInactiveStreams: any): any;

export function getUsersFromEmailList(email: any, local: any): void;

export function getUsersFromIdList(id: any, local: any): void;

export function importMessages(messageList: any): any;

export function initBot(pathToConfigFile: string, pathToLoadBalancerConfigFile?: string): Promise<AuthInfo>;

export function listSignals(skip: any, limit: any, sessionToken: string): void;

export function listUsers(skip: any, limit: any): void;

export function oboAuthenticateByUserId(userId: any): any;

export function oboGetAllConnections(status: any): void;

export function oboGetConnection(userId: any): void;

export function oboGetUserIMStreamId(userToken: any, userIds: any): void;

export function oboSendMessage(userToken: any, conversationId: any, message: any, data: any, format: any): any;

export function promoteUserToOwner(streamId: any, userId: any): any;

export function registerInterestExtUser(): void;

export function rejectConnectionRequest(userId: any, sessionToken: string): void;

export function removeConnection(userId: any, sessionToken: string): void;

export function removeMemberFromRoom(streamId: any, userId: any): any;

export function searchRooms(
    skip?: any,
    limit?: any,
    query?: any,
    labels?: any,
    active?: any,
    includePrivateRooms?: any,
    creator?: any,
    owner?: any,
    member?: any,
    sortOrder?: any,
): any;

export function searchUsers(query: any, local?: any, skip?: any, limit?: any, filter?: any): any;

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

export function setDebugMode(mode: any): void;

export function setPresence(status: any): any;

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

export function verifyJwt(jwt: any): any;
