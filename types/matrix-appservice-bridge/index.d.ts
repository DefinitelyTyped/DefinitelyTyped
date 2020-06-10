// Type definitions for matrix-appservice-bridge 1.11
// Project: https://github.com/matrix-org/matrix-appservice-bridge
// Definitions by: Huan LI (李卓桓) <https://github.com/huan>
//                 Brendan Early <https://github.com/mymindstorm>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 3.1

import {
    EventType,
    MsgType,
    MatrixClient,
    MembershipType,
} from 'matrix-js-sdk';

export interface Controller {
    onEvent: (request: Request, context: BridgeContext) => void;
    onUserQuery?: (matrixUser: MatrixUser) => ProvisionedUser | Promise<ProvisionedUser>;
    onAliasQuery?: (alias: string, aliasLocalpart: string) => ProvisionedRoom | Promise<ProvisionedRoom>;
    onAliasQueried?: (alias: string, aliasLocalpart: string) => void;
    onLog?: (line: string, isError: boolean) => void;
    thirdPartyLookup?: any;
    onRoomUpgrade?: (oldRoomId: string, newRoomId: string, newVersion: string, context: BridgeContext) => void;
}

export namespace AppServiceRegistration {
    function generateToken(): string;
}

export interface AppServiceRegistration {
    sender_localpart: string;
}

export interface BridgeOptions {
    controller: Controller;
    domain: string;
    homeserverUrl: string;
    registration: AppServiceRegistration | string;
    suppressEcho?: boolean;     // True to stop receiving onEvent callbacks for events which were sent by a bridge user. Default: true.
}

export interface BridgeConfig {
    schema: string;
}

export interface CliOptions {
    bridgeConfig?: BridgeConfig;
    enableRegistration?: boolean;
    enableLocalpart?: boolean;
    generateRegistration: (reg: any, callback: (r: any) => void) => void;
    port?: number;
    registrationPath?: string;
    run: (port: number, config: any) => void;
}

export interface RoomMemberDict {
    [id: string]: {
    display_name: string,
    avatar_url: string,
    };
}
export interface RemoteRoomDict {
    [id: string]: RemoteRoom;
}
export interface EntryDict {
    [id: string]: Entry[];
}

export interface RoomInfo {
    id: string;         // The matrix room ID
    state: object[];       // The raw state events for this room
    realJoinedUsers: string[];  //  A list of user IDs of real matrix users that have joined this room.
    remoteJoinedUsers: string[];  //  A list of
}

export interface Entry {
    id: string;             //  The unique ID for this entry.
    matrix_id: string;             // "room_id",
    remote_id: string;             // "remote_room_id",
    matrix: null | MatrixRoom;  // <nullable> The matrix room, if applicable.
    remote: null | RemoteRoom;  // <nullable> The remote room, if applicable.
    data: null | object;      //  <nullable> Information about this mapping, which may be an empty.
}

/* ************* */

export type AppService = any;

export class AppServiceBot {
    constructor(
    client: MatrixClient,
    registration: AppServiceRegistration,
    memberCache: MembershipCache,
    )
    getJoinedMembers(roomId: string): Promise<RoomMemberDict>;
    getJoinedRooms(): Promise<string[]>;
    isRemoteUser(userId: string): boolean;
}

export interface ProvisionedUser {
    name?: string;      // The display name to set for the provisioned user.
    url?: string;      // The avatar URL to set for the provisioned user.
    remote?: RemoteUser;  //
}

export interface ThirdPartyLocationResult {
    alias: string;  // The Matrix room alias to the portal room representing this 3PL
    protocol: string;  // The name of the 3PE protocol
    fields: object;  // The normalised values of the location query field data.
}

export type BridgeGetProtocol = any;
export type BridgeGetLocation = any;
export type BridgeParseLocation = any;
export type BridgeGetUser = any;
export type BridgeParseUser = any;
export type BridgeThirdPartyProtocolResult = any;

export interface BridgeThirdPartyLookup {
    protocols: string[];        // list of recognised protocol names. If present, lookups for unrecognised protocols will be automatically rejected.
    getProtocol: BridgeGetProtocol;    // Function. Called for requests for 3PE query metadata.
    getLocation: BridgeGetLocation;    // Function. Called for requests for 3PLs.
    parseLocation: BridgeParseLocation;  // Function. Called for reverse parse requests on 3PL aliases.
    getUser: BridgeGetUser;        // Function. Called for requests for 3PUs.
    parseUser: BridgeParseUser;      // Function. Called for reverse parse requests on 3PU user IDs.
}

export interface ThirdPartyUserResult {
    userid: string;  // The Matrix user ID for the virtual representing this 3PU
    protocol: string;  // The name of the 3PE protocol
    fields: object;  // The normalised values of the user query field data.
}

export class RequestFactory {
    constructor()

    addDefaultRejectCallback(fn: (request: Request, reject: any) => any): void;
    addDefaultResolveCallback(fn: (request: Request, reject: any) => any): void;
    addDefaultTimeoutCallback(fn: (request: Request) => any, durationMs: number): void;
    newRequest(opts?: object): Request;
}

export class ClientFactory {
    constructor(options: any)

    configure(baseUrl: string, appServiceToken: string, appServiceUserId: string): void;
    getClientAs(userId?: string, request?: Request): MatrixClient;
    setLogFunction(func: (...args: any) => any): void;
}

export interface ProvisionedRoom {
    creationOpts: {
    room_alias_name: string
    name?: string,
    topic?: string
    };
    remote?: RemoteRoom;
}

export class Bridge {
    opts: BridgeOptions;
    constructor(opts: BridgeOptions);
    run(port: number, config: object, appServiceInstance?: AppService): void;
    getIntent(userId?: string, request?: Request): Intent;
    getBot(): AppServiceBot;
    getClientFactory(): ClientFactory;
    getIntentFromLocalpart(localpart: null | string, request?: Request): Intent;
    getPrometheusMetrics(): RequestFactory;
    getRequestFactory(): RequestFactory;
    getRoomStore(): null | RoomBridgeStore;
    getUserStore(): null | UserBridgeStore;
    loadDatabases(): Promise<void>;
    provisionUser(matrixUser: MatrixUser, provisionedUser: ProvisionedUser): Promise<void>;
    registerBridgeGauges(counterFunc: () => any): object;
    getLocation(protocol: string, fields: object): Promise<ThirdPartyLocationResult[]>;
    getProtocol(protocol: string): Promise<BridgeThirdPartyProtocolResult>;
    getUser(protocol: string, fields: object): Promise<ThirdPartyUserResult[]>;
    onAliasQueried(alias: string, roomId: string): void;
    onAliasQuery(alias: string, aliasLocalpart: string): ProvisionedRoom | Promise<ProvisionedRoom>;
    onEvent(request: Request, context: BridgeContext): void;
    onLog(line: string, isError: boolean): void;
    onRoomUpgrade(oldRoomId: string, newRoomId: string, newVersion: string, context: BridgeContext): void;
    onUserQuery(matrixUser: MatrixUser): ProvisionedUser | Promise<ProvisionedUser>;
    parseLocation(alias: string): Promise<ThirdPartyLocationResult[]>;
    parseUser(userid: string): Promise<ThirdPartyUserResult[]>;
}

export class Cli {
    constructor(options: CliOptions)
    run(): void;
    getConfig(): null | object;
    getRegistrationFilePath(): string;
    generateRegistration(reg: AppServiceRegistration, callback: (...args: any[]) => any): void;
    runBridge(port: number, config: null | object, reg: AppServiceRegistration): void;
}

export interface CreateRoomOptions {
    preset?: 'trusted_private_chat';
    is_direct?: boolean;
    room_alias_name?: string;                  // The alias localpart to assign to this room.
    visibility: 'public' | 'private';    // Either 'public' or 'private'.
    invite: string[];                // A list of user IDs to invite to this room.
    name?: string;                  // The name to give this room.
    topic?: string;                  // The topic to give this room.
}

export class Intent {
    constructor(client: MatrixClient, botClient: MatrixClient, opts: object)
    ban(roomId: string, target: string, reason: string): Promise<void>;
    createAlias(alias: string, roomId: string): Promise<void>;
    createRoom(opts: {
    createAsClient: boolean,
    options: CreateRoomOptions,
    }): Promise<{
    room_id: string,
    room_alias?: string,
    }>;
    getClient(): MatrixClient;
    getEvent(roomId: string, eventId: string, useCache?: boolean): Promise<any>;
    getProfileInfo(userId: string, info?: string, useCache?: boolean): Promise<any>;
    getStateEvent(roomId: string, eventType: EventType, stateKey?: string): Promise<any>;
    invite(roomId: string, target: string): Promise<void>;
    join(roomId: string, viaServers?: string[]): Promise<void>;
    kick(roomId: string, target: string, reason: string): Promise<void>;
    leave(roomId: string): Promise<void>;
    onEvent(event: object): void;
    roomState(roomId: string, useCache: boolean): Promise<any>;
    sendEvent(roomId: string, type: EventType, content: object): Promise<void>;
    sendMessage(roomId: string, content: object): Promise<void>;
    sendReadReceipt(): Promise<void>;
    sendStateEvent(roomId: string, type: EventType, skey: string, content: object): Promise<void>;
    sendText(roomId: string, text: string): Promise<void>;
    sendTyping(roomId: string, isTyping: boolean): Promise<void>;
    setAvatarUrl(url: string): Promise<void>;
    setDisplayName(name: string): Promise<void>;
    setPowerLevel(roomId: string, target: string, level: number): Promise<void>;
    setPresence(presence: 'online' | 'offline' | 'unavailable', status_msg: string): Promise<void>;
    setRoomAvatar(roomId: string, avatar: string, info: string): Promise<void>;
    setRoomName(roomId: string, name: string): Promise<void>;
    setRoomTopic(roomId: string, topic: string): Promise<void>;
    unban(roomId: string, target: string): Promise<void>;
}

export class MatrixRoom {
    protected roomId: string;

    constructor(roomId: string)
    deserialize(data: object): void;
    get(key: string): object;
    getId(): string;
    serialize(): object;
    set(key: string, val: any): void;
}

export class MatrixUser {
    readonly localpart: string;
    readonly host: string;

    private userId: string;

    constructor(userId: string, dataopt?: object, escape?: boolean)
    escapeUserId(): void;
    get(key: string): object;
    getDisplayName(): null | string;
    getId(): string;
    serialize(): object;
    set(key: string, val: any): void;
    setDisplayName(name: string): void;
}

export class RemoteRoom {
    constructor(identifier: string, dataopt?: object)
    get(key: string): object;
    getId(): string;
    serialize(): object;
    set(key: string, val: object): void;
}

export class RemoteUser {
    constructor(id: string, data?: object)
    get(key: string): object;
    getId(): string;
    serialize(): object;
    set(key: string, val: object): void;
}

export interface RoomBridgeStoreOptions {
    delimiter: string;
}

export class RoomBridgeStore {
    constructor(db: Datastore, ops?: RoomBridgeStoreOptions)

    batchGetLinkedRemoteRooms(matrixIds: string[]): Promise<RemoteRoomDict>;
    getEntriesByLinkData(data: object): Promise<Entry[]>;
    getEntriesByMatrixId(matrixId: string): Promise<Entry[]>;
    getEntriesByMatrixIds(ids: string[]): Promise<EntryDict>;
    getEntriesByMatrixRoomData(data: object): Promise<Entry[]>;
    getEntriesByRemoteId(remoteId: string): Promise<Entry[]>;
    getEntriesByRemoteRoomData(data: object): Promise<Entry[]>;
    getEntryById(id: string): Promise<null | Entry>;
    getLinkedMatrixRooms(remoteId: string): Promise<MatrixRoom[]>;
    getLinkedRemoteRooms(matrixId: string): Promise<RemoteRoom[]>;
    getMatrixRoom(roomId: string): Promise<null | MatrixRoom>;
    removeEntriesByLinkData(data: object): Promise<void>;
    removeEntriesByMatrixRoomData(data: object): Promise<void>;
    removeEntriesByMatrixRoomId(matrixId: string): Promise<void>;
    removeEntriesByRemoteRoomData(data: object): Promise<void>;
    removeEntriesByRemoteRoomId(remoteId: string): Promise<void>;
    setMatrixRoom(matrixRoom: MatrixRoom): Promise<void>;
    upsertEntry(entry: Entry): Promise<void>;
    linkRooms(
    matrixRoom: MatrixRoom,
    remoteRoom: RemoteRoom,
    data?: object,
    linkId?: string,
    ): Promise<void>;
}

export type Datastore = any;

export class UserBridgeStore {
    constructor(db: Datastore, opts?: object)

    getByMatrixData(dataQuery: object): Promise<MatrixUser[]>;
    getByMatrixLocalpart(localpart: string): Promise<null | MatrixUser>;
    getByRemoteData(dataQuery: object): Promise<RemoteUser[]>;
    getMatrixLinks(remoteId: string): Promise<string[]>;
    getMatrixUser(userId: string): Promise<null | MatrixUser>;
    getMatrixUsersFromRemoteId(remoteId: string): Promise<MatrixUser[]>;
    getRemoteLinks(matrixId: string): Promise<string[]>;
    getRemoteUser(id: string): Promise<null | RemoteUser>;
    getRemoteUsersFromMatrixId(userId: string): Promise<RemoteUser[]>;
    linkUsers(matrixUser: MatrixUser, remoteUser: RemoteUser): Promise<void>;
    setMatrixUser(matrixUser: MatrixUser): Promise<void>;
    setRemoteUser(remoteUser: RemoteUser): Promise<void>;
    unlinkUserIds(matrixUserId: string, remoteUserId: string): Promise<number>;
    unlinkUsers(matrixUser: MatrixUser, remoteUser: RemoteUser): Promise<number>;
}

export class MembershipCache {
    constructor()
    getMemberEntry(roomId: string, userId: string): MembershipType;
    setMemberEntry(roomId: string, userId: string, membership: MembershipType): void;
}

export class Request {
    id: string;
    data: Event;
    startTs: number;

    constructor(opts: {
    id?: string,
    data?: object,
    })

    getData(): Event;
    getDuration(): number;
    getId(): string;
    getPromise(): Promise<void>;
    outcomeFrom(future: Promise<any>): void;
    reject(msg: any): void;
    resolve(msg: any): void;
}

/*
{ age: 80,
    content:
    { avatar_url: null,
        displayname: 'wechaty_xxx',
        is_direct: true,
        membership: 'invite' },
    event_id: '$156164754730XRMfy:aka.cn',
    origin_server_ts: 1561647547234,
    room_id: '!XDxZYEqhdGdPHVmxmP:aka.cn',
    sender: '@huan:aka.cn',
    state_key: '@wechaty_xxx:aka.cn',
    type: 'm.room.member',
    unsigned: { age: 80 },
    user_id: '@huan:aka.cn' }
*/

export interface EventContent {
    avatar_url: null | string;
    body?: string;
    displayname?: string;
    info?: unknown;
    is_direct: boolean;
    membership?: MembershipType;
    msgtype?: MsgType;
    name?: string;
    reason?: string;
    topic?: string;
    url?: string;
    [key: string]: any;
    // m.relates_to? : unknown
}

export interface Event {
    age: number;
    event_id: string;
    origin_server_ts?: number;
    room_id: string;
    redacts?: string;
    replaces_state?: string;
    sender: string;
    state_key: string;
    type: EventType;
    user_id: string;

    content?: EventContent;

    unsigned: {
    age: number
    };
}

export interface BridgeContext {
    senders: {
    matrix: MatrixUser
    remote: null | RemoteUser
    remotes: RemoteUser[]
    };
    targets: {
    matrix: null | MatrixUser
    remote: null | RemoteUser
    remotes: RemoteUser[]
    };
    rooms: {
    matrix: MatrixRoom
    remote: null | RemoteRoom
    remotes: RemoteRoom[]
    };
}
