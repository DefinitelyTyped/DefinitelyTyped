// Type definitions for pubnub 7.2
// Project: https://github.com/pubnub/javascript
// Definitions by:  bitbankinc <https://github.com/bitbankinc>,
//                  rollymaduk <https://github.com/rollymaduk>,
//                  vitosamson <https://github.com/vitosamson>,
//                  FlorianDr <https://github.com/FlorianDr>,
//                  danduh <https://github.com/danduh>,
//                  ChristianBoehlke <https://github.com/ChristianBoehlke>,
//                  divyun <https://github.com/divyun>
//                  elviswolcott <https://github.com/elviswolcott>
//                  mohitpubnub <https://github.com/mohitpubnub>
//                  Salet <https://github.com/Salet>
//                  elvis-pn <https://github.com/elvis-pn>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// @see https://www.pubnub.com/docs/web-javascript/api-reference-configuration
// TypeScript Version: 3.5

// SDK callbacks all accept Pubnub.PubnubStatus as the first argument
type Callback<ResponseType> = (status: Pubnub.PubnubStatus, response: ResponseType) => void;
type StatusCallback = (status: Pubnub.PubnubStatus) => void;
interface ObjectsResponse<DataType> {
    status: number;
    data: DataType;
}
interface PagedObjectsResponse<DataType> extends ObjectsResponse<DataType[]> {
    prev?: string | undefined;
    next?: string | undefined;
    totalCount?: number | undefined;
}
// partial but everything can be null (even with strictNullChecks)
type Nullable<T> = {
    [P in keyof T]?: T[P] | null;
};

declare class Pubnub {
    constructor(config: Pubnub.PubnubConfig);

    static CATEGORIES: Pubnub.Categories;

    static OPERATIONS: Pubnub.Operations;

    static generateUUID(): string;

    static notificationPayload(title: string, body: string): Pubnub.NotificationsPayload;

    channelGroups: Pubnub.ChannelGroups;

    push: Pubnub.Push;

    setUUID(uuid: string): void;

    getUUID(): string;

    setAuthKey(authKey: string): void;

    setFilterExpression(filterExpression: string): void;

    getFilterExpression(): string;

    // publish

    publish(params: Pubnub.PublishParameters, callback: Callback<Pubnub.PublishResponse>): void;

    publish(params: Pubnub.PublishParameters): Promise<Pubnub.PublishResponse>;

    fire(params: Pubnub.FireParameters, callback: Callback<Pubnub.PublishResponse>): void;

    fire(params: Pubnub.FireParameters): Promise<Pubnub.PublishResponse>;

    signal(params: Pubnub.SignalParameters, callback: Callback<Pubnub.SignalResponse>): void;

    signal(params: Pubnub.SignalParameters): Promise<Pubnub.SignalResponse>;

    // history

    history(params: Pubnub.HistoryParameters, callback: Callback<Pubnub.HistoryResponse>): void;

    history(params: Pubnub.HistoryParameters): Promise<Pubnub.HistoryResponse>;

    fetchMessages(params: Pubnub.FetchMessagesParameters, callback: Callback<Pubnub.FetchMessagesResponse>): void;

    fetchMessages(params: Pubnub.FetchMessagesParameters): Promise<Pubnub.FetchMessagesResponse>;

    deleteMessages(params: Pubnub.DeleteMessagesParameters, callback: StatusCallback): void;

    deleteMessages(params: Pubnub.DeleteMessagesParameters): Promise<void>;

    messageCounts(params: Pubnub.MessageCountsParameters, callback: Callback<Pubnub.MessageCountsResponse>): void;

    messageCounts(params: Pubnub.MessageCountsParameters): Promise<Pubnub.MessageCountsResponse>;

    // subscriptions

    subscribe(params: Pubnub.SubscribeParameters): void;

    unsubscribe(params: Pubnub.UnsubscribeParameters): void;

    unsubscribeAll(): void;

    stop(): void;

    reconnect(): void;

    addListener(params: Pubnub.ListenerParameters): void;

    removeListener(params: Pubnub.ListenerParameters): void;

    getSubscribedChannels(): string[];

    getSubscribedChannelGroups(): string[];

    // presence

    hereNow(params: Pubnub.HereNowParameters, callback: Callback<Pubnub.HereNowResponse>): void;

    hereNow(params: Pubnub.HereNowParameters): Promise<Pubnub.HereNowResponse>;

    whereNow(params: Pubnub.WhereNowParameters, callback: Callback<Pubnub.WhereNowResponse>): void;

    whereNow(params: Pubnub.WhereNowParameters): Promise<Pubnub.WhereNowResponse>;

    getState(params: Pubnub.GetStateParameters, callback: Callback<Pubnub.GetStateResponse>): void;

    getState(params: Pubnub.GetStateParameters): Promise<Pubnub.GetStateResponse>;

    setState(params: Pubnub.SetStateParameters, callback: Callback<Pubnub.SetStateResponse>): void;

    setState(params: Pubnub.SetStateParameters): Promise<Pubnub.SetStateResponse>;

    // access manager

    grant(params: Pubnub.GrantParameters, callback: StatusCallback): void;

    grant(params: Pubnub.GrantParameters): Promise<void>;

    grantToken(params: Pubnub.GrantTokenParameters, callback: Callback<string>): void;

    grantToken(params: Pubnub.GrantTokenParameters): Promise<string>;

    setToken(params: string): void;

    parseToken(params: string): Pubnub.ParsedGrantToken;

    revokeToken(params: string, callback: Callback<Pubnub.RevokeTokenResponse>): void;

    revokeToken(params: string): Promise<Pubnub.RevokeTokenResponse>;

    // files

    listFiles(params: Pubnub.ListFilesParameters, callback: Callback<Pubnub.ListFilesResponse>): void;

    listFiles(params: Pubnub.ListFilesParameters): Promise<Pubnub.ListFilesResponse>;

    sendFile(params: Pubnub.SendFileParameters, callback: Callback<Pubnub.SendFileResponse>): void;

    sendFile(params: Pubnub.SendFileParameters): Promise<Pubnub.SendFileResponse>;

    downloadFile(params: Pubnub.DownloadFileParameters, callback: Callback<any>): void;

    downloadFile(params: Pubnub.DownloadFileParameters): Promise<any>;

    getFileUrl(params: Pubnub.FileInputParameters): string;

    deleteFile(params: Pubnub.FileInputParameters, callback: StatusCallback): void;

    deleteFile(params: Pubnub.FileInputParameters): Promise<Pubnub.DeleteFileResponse>;

    publishFile(params: Pubnub.PublishFileParameters, callback: Callback<Pubnub.PublishFileResponse>): void;

    publishFile(params: Pubnub.PublishFileParameters): Promise<Pubnub.PublishFileResponse>;

    // objects v2
    objects: {
        // UUID metadata
        setUUIDMetadata<Custom extends Pubnub.ObjectCustom = Pubnub.ObjectCustom>(
            params: Pubnub.SetUUIDMetadataParameters<Custom>,
            callback: Callback<Pubnub.SetUUIDMetadataResponse<Custom>>,
        ): void;
        setUUIDMetadata<Custom extends Pubnub.ObjectCustom = Pubnub.ObjectCustom>(
            params: Pubnub.SetUUIDMetadataParameters<Custom>,
        ): Promise<Pubnub.SetUUIDMetadataResponse<Custom>>;

        removeUUIDMetadata(callback: Callback<Pubnub.RemoveUUIDMetadataResponse>): void;
        removeUUIDMetadata(params?: Pubnub.RemoveUUIDMetadataParameters): Promise<Pubnub.RemoveUUIDMetadataResponse>;
        removeUUIDMetadata(
            params: Pubnub.RemoveUUIDMetadataParameters,
            callback: Callback<Pubnub.RemoveUUIDMetadataResponse>,
        ): void;

        getAllUUIDMetadata<Custom extends Pubnub.ObjectCustom = Pubnub.ObjectCustom>(
            callback: Callback<Pubnub.GetAllUUIDMetadataResponse<Custom>>,
        ): void;
        getAllUUIDMetadata<Custom extends Pubnub.ObjectCustom = Pubnub.ObjectCustom>(
            params?: Pubnub.GetAllMetadataParameters,
        ): Promise<Pubnub.GetAllUUIDMetadataResponse<Custom>>;
        getAllUUIDMetadata<Custom extends Pubnub.ObjectCustom = Pubnub.ObjectCustom>(
            params: Pubnub.GetAllMetadataParameters,
            callback: Callback<Pubnub.GetAllUUIDMetadataResponse<Custom>>,
        ): void;

        getUUIDMetadata<Custom extends Pubnub.ObjectCustom = Pubnub.ObjectCustom>(
            callback: Callback<Pubnub.GetUUIDMetadataResponse<Custom>>,
        ): void;
        getUUIDMetadata<Custom extends Pubnub.ObjectCustom = Pubnub.ObjectCustom>(
            params?: Pubnub.GetUUIDMetadataParameters,
        ): Promise<Pubnub.GetUUIDMetadataResponse<Custom>>;
        getUUIDMetadata<Custom extends Pubnub.ObjectCustom = Pubnub.ObjectCustom>(
            params: Pubnub.GetUUIDMetadataParameters,
            callback: Callback<Pubnub.GetUUIDMetadataResponse<Custom>>,
        ): void;

        // Channel Metadata
        setChannelMetadata<Custom extends Pubnub.ObjectCustom = Pubnub.ObjectCustom>(
            params: Pubnub.SetChannelMetadataParameters<Custom>,
            callback: Callback<Pubnub.SetChannelMetadataResponse<Custom>>,
        ): void;
        setChannelMetadata<Custom extends Pubnub.ObjectCustom = Pubnub.ObjectCustom>(
            params: Pubnub.SetChannelMetadataParameters<Custom>,
        ): Promise<Pubnub.SetChannelMetadataResponse<Custom>>;

        removeChannelMetadata(
            params: Pubnub.RemoveChannelMetadataParameters,
            callback: Callback<Pubnub.RemoveChannelMetadataResponse>,
        ): void;
        removeChannelMetadata(
            params: Pubnub.RemoveChannelMetadataParameters,
        ): Promise<Pubnub.RemoveChannelMetadataResponse>;

        getAllChannelMetadata<Custom extends Pubnub.ObjectCustom = Pubnub.ObjectCustom>(
            callback: Callback<Pubnub.GetAllChannelMetadataResponse<Custom>>,
        ): void;
        getAllChannelMetadata<Custom extends Pubnub.ObjectCustom = Pubnub.ObjectCustom>(
            params?: Pubnub.GetAllMetadataParameters,
        ): Promise<Pubnub.GetAllChannelMetadataResponse<Custom>>;
        getAllChannelMetadata<Custom extends Pubnub.ObjectCustom = Pubnub.ObjectCustom>(
            params: Pubnub.GetAllMetadataParameters,
            callback: Callback<Pubnub.GetAllChannelMetadataResponse<Custom>>,
        ): void;

        getChannelMetadata<Custom extends Pubnub.ObjectCustom = Pubnub.ObjectCustom>(
            params: Pubnub.GetChannelMetadataParameters,
            callback: Callback<Pubnub.GetChannelMetadataResponse<Custom>>,
        ): void;
        getChannelMetadata<Custom extends Pubnub.ObjectCustom = Pubnub.ObjectCustom>(
            params: Pubnub.GetChannelMetadataParameters,
        ): Promise<Pubnub.GetChannelMetadataResponse<Custom>>;

        // Memberships
        getMemberships<MembershipCustom extends Pubnub.ObjectCustom, ChannelCustom extends Pubnub.ObjectCustom>(
            callback: Callback<Pubnub.ManageMembershipsResponse<MembershipCustom, ChannelCustom>>,
        ): void;
        getMemberships<MembershipCustom extends Pubnub.ObjectCustom, ChannelCustom extends Pubnub.ObjectCustom>(
            params?: Pubnub.GetMembershipsParametersv2,
        ): Promise<Pubnub.ManageMembershipsResponse<MembershipCustom, ChannelCustom>>;
        getMemberships<MembershipCustom extends Pubnub.ObjectCustom, ChannelCustom extends Pubnub.ObjectCustom>(
            params: Pubnub.GetMembershipsParametersv2,
            callback: Callback<Pubnub.ManageMembershipsResponse<MembershipCustom, ChannelCustom>>,
        ): void;

        setMemberships<MembershipCustom extends Pubnub.ObjectCustom, ChannelCustom extends Pubnub.ObjectCustom>(
            params: Pubnub.SetMembershipsParameters<ChannelCustom>,
            callback: Callback<Pubnub.ManageMembershipsResponse<MembershipCustom, ChannelCustom>>,
        ): void;
        setMemberships<MembershipCustom extends Pubnub.ObjectCustom, ChannelCustom extends Pubnub.ObjectCustom>(
            params: Pubnub.SetMembershipsParameters<ChannelCustom>,
        ): Promise<Pubnub.ManageMembershipsResponse<MembershipCustom, ChannelCustom>>;

        removeMemberships<MembershipCustom extends Pubnub.ObjectCustom, ChannelCustom extends Pubnub.ObjectCustom>(
            params: Pubnub.RemoveMembershipsParameters,
            callback: Callback<Pubnub.ManageMembershipsResponse<MembershipCustom, ChannelCustom>>,
        ): void;
        removeMemberships<MembershipCustom extends Pubnub.ObjectCustom, ChannelCustom extends Pubnub.ObjectCustom>(
            params: Pubnub.RemoveMembershipsParameters,
        ): Promise<Pubnub.ManageMembershipsResponse<MembershipCustom, ChannelCustom>>;

        getChannelMembers<MembershipCustom extends Pubnub.ObjectCustom, UUIDCustom extends Pubnub.ObjectCustom>(
            params: Pubnub.GetChannelMembersParameters,
            callback: Callback<Pubnub.ManageChannelMembersResponse<MembershipCustom, UUIDCustom>>,
        ): void;
        getChannelMembers<MembershipCustom extends Pubnub.ObjectCustom, UUIDCustom extends Pubnub.ObjectCustom>(
            params: Pubnub.GetChannelMembersParameters,
        ): Promise<Pubnub.ManageChannelMembersResponse<MembershipCustom, UUIDCustom>>;

        setChannelMembers<MembershipCustom extends Pubnub.ObjectCustom, UUIDCustom extends Pubnub.ObjectCustom>(
            params: Pubnub.SetChannelMembersParameters<MembershipCustom>,
            callback: Callback<Pubnub.ManageChannelMembersResponse<MembershipCustom, UUIDCustom>>,
        ): void;
        setChannelMembers<MembershipCustom extends Pubnub.ObjectCustom, UUIDCustom extends Pubnub.ObjectCustom>(
            params: Pubnub.SetChannelMembersParameters<MembershipCustom>,
        ): Promise<Pubnub.ManageChannelMembersResponse<MembershipCustom, UUIDCustom>>;

        removeChannelMembers<MembershipCustom extends Pubnub.ObjectCustom, UUIDCustom extends Pubnub.ObjectCustom>(
            params: Pubnub.RemoveChannelMembersParameters,
            callback: Callback<Pubnub.ManageChannelMembersResponse<MembershipCustom, UUIDCustom>>,
        ): void;
        removeChannelMembers<MembershipCustom extends Pubnub.ObjectCustom, UUIDCustom extends Pubnub.ObjectCustom>(
            params: Pubnub.RemoveChannelMembersParameters,
        ): Promise<Pubnub.ManageChannelMembersResponse<MembershipCustom, UUIDCustom>>;
    };

    // message actions

    addMessageAction(
        params: Pubnub.AddMessageActionParameters,
        callback: Callback<{ data: Pubnub.MessageAction }>,
    ): void;

    addMessageAction(params: Pubnub.AddMessageActionParameters): Promise<{ data: Pubnub.MessageAction }>;

    removeMessageAction(params: Pubnub.RemoveMessageActionParameters, callback: Callback<{ data: {} }>): void;

    removeMessageAction(params: Pubnub.RemoveMessageActionParameters): Promise<{ data: {} }>;

    getMessageActions(
        params: Pubnub.GetMessageActionsParameters,
        callback: Callback<Pubnub.GetMessageActionsResponse>,
    ): void;

    getMessageActions(params: Pubnub.GetMessageActionsParameters): Promise<Pubnub.GetMessageActionsResponse>;

    // utilities

    encrypt(data: string, customCipherKey?: string, options?: Pubnub.CryptoParameters): string;

    decrypt(data: string | object, customCipherKey?: string, options?: Pubnub.CryptoParameters): any;

    time(): Promise<Pubnub.FetchTimeResponse>;

    time(callback: Callback<Pubnub.FetchTimeResponse>): void;
}

interface UUID {
    uuid: string;
}

interface UserId {
    userId: string;
}
type ID = UUID | UserId;

declare namespace Pubnub {
    type PubnubConfig = ID & {
        subscribeKey: string;
        publishKey?: string | undefined;
        cipherKey?: string | undefined;
        authKey?: string | undefined;
        logVerbosity?: boolean | undefined;
        ssl?: boolean | undefined;
        origin?: string | string[] | undefined;
        presenceTimeout?: number | undefined;
        heartbeatInterval?: number | undefined;
        restore?: boolean | undefined;
        keepAlive?: boolean | undefined;
        keepAliveSettings?: {
            keepAliveMsecs?: number | undefined;
            freeSocketKeepAliveTimeout?: number | undefined;
            timeout?: number | undefined;
            maxSockets?: number | undefined;
            maxFreeSockets?: number | undefined;
        } | undefined;
        subscribeRequestTimeout?: number | undefined;
        suppressLeaveEvents?: boolean | undefined;
        secretKey?: string | undefined;
        requestMessageCountThreshold?: number | undefined;
        autoNetworkDetection?: boolean | undefined;
        listenToBrowserNetworkEvents?: boolean | undefined;
        useRandomIVs?: boolean | undefined;
    };

    interface MessageEvent {
        channel: string;
        subscription: string;
        timetoken: string;
        message: any;
        publisher: string;

        /**
         * deprecated:
         */
        actualChannel: string;

        /**
         * deprecated:
         */
        subscribedChannel: string;
    }

    // PubnubData was renamed to MessageEvent, keep old name for backwards compatibility
    type PubnubData = MessageEvent;

    interface StatusEvent {
        category: string; // see Pubnub.Categories
        operation: string; // see Pubnub.Operations
        affectedChannels: string[];
        subscribedChannels: string[];
        affectedChannelGroups: string[];
        lastTimetoken: number | string;
        currentTimetoken: number | string;
    }

    interface PresenceEvent {
        action: 'join' | 'leave' | 'state-change' | 'timeout';
        channel: string;
        occupancy: number;
        state?: any;
        subscription: string;
        timestamp: number;
        timetoken: string;
        uuid: string;

        /**
         * deprecated:
         */
        actualChannel: string;
        /**
         * deprecated:
         */
        subscribedChannel: string;
    }

    interface SignalEvent {
        channel: string;
        subscription: string;
        timetoken: string;
        message: any;
        publisher: string;
    }

    interface MessageActionEvent {
        channel: string;
        publisher: string;
        subscription?: string | undefined;
        timetoken: string;
        event: string;
        data: MessageAction;
    }

    interface FileEvent {
        channel: string;
        subscription: string;
        publisher: string;
        timetoken: string;
        message: any;
        file: {
            id: string;
            name: string;
            url: string;
        };
    }

    interface BaseObjectsEvent {
        channel: string;
        message: {
            event: 'set' | 'delete';
            type: 'uuid' | 'channel' | 'membership';
            data: object;
        };
        subscription: string | null;
        publisher?: string | undefined;
        timetoken: number;
    }

    interface SetUUIDMetadataEvent<UUIDCustom extends ObjectCustom> extends BaseObjectsEvent {
        message: {
            event: 'set';
            type: 'uuid';
            data: UUIDMetadataObject<UUIDCustom>;
        };
    }

    interface RemoveUUIDMetadataEvent extends BaseObjectsEvent {
        message: {
            event: 'delete';
            type: 'uuid';
            data: { id: string };
        };
    }

    interface SetChannelMetadataEvent<ChannelCustom extends ObjectCustom> extends BaseObjectsEvent {
        message: {
            event: 'set';
            type: 'channel';
            data: ChannelMetadataObject<ChannelCustom>;
        };
    }

    interface RemoveChannelMetadataEvent extends BaseObjectsEvent {
        message: {
            event: 'delete',
            type: 'channel',
            data: { id: string };
        };
    }

    interface SetMembershipEvent<MembershipCustom extends ObjectCustom> extends BaseObjectsEvent {
        message: {
            event: 'set';
            type: 'membership';
            data: {
                channel: {
                    id: string;
                };
                uuid: {
                    id: string;
                };
                custom: MembershipCustom | null;
                updated: string;
                eTag: string;
            };
        };
    }

    interface RemoveMembershipEvent extends BaseObjectsEvent {
        message: {
            event: 'delete';
            type: 'membership';
            data: {
                channel: {
                    id: string;
                };
                uuid: {
                    id: string;
                };
            };
        };
    }

    type ObjectsEvent<
        UUIDCustom extends ObjectCustom = ObjectCustom,
        ChannelCustom extends ObjectCustom = ObjectCustom,
        MembershipCustom extends ObjectCustom = ObjectCustom,
        > =
        SetUUIDMetadataEvent<UUIDCustom> |
        RemoveUUIDMetadataEvent |
        SetChannelMetadataEvent<ChannelCustom> |
        RemoveChannelMetadataEvent |
        SetMembershipEvent<MembershipCustom> |
        RemoveMembershipEvent;

    // publish
    interface PublishParameters {
        message: any;
        channel: string;
        storeInHistory?: boolean | undefined;
        sendByPost?: boolean | undefined;
        meta?: any;
        ttl?: number | undefined;
    }

    interface PublishResponse {
        timetoken: number;
    }

    // signal

    interface SignalParameters {
        message: any;
        channel: string;
    }

    interface SignalResponse {
        timetoken: number;
    }

    interface HistoryParameters {
        channel: string;
        count: number;
        stringifiedTimeToken?: boolean | undefined;
        includeTimetoken?: boolean | undefined;
        reverse?: boolean | undefined;
        start?: string | number | undefined; // timetoken
        end?: string | number | undefined; // timetoken
        includeMeta?: boolean | undefined;
    }

    interface HistoryMessage {
        entry: any;
        timetoken?: string | number | undefined;
        meta?: object | undefined;
    }

    interface HistoryResponse {
        endTimeToken?: string | number | undefined;
        startTimeToken?: string | number | undefined;
        messages: HistoryMessage[];
    }

    interface FetchMessagesParameters {
        channels: string[];
        count?: number | undefined;
        stringifiedTimeToken?: boolean | undefined;
        start?: string | number | undefined; // timetoken
        end?: string | number | undefined; // timetoken
        withMessageActions?: boolean | undefined;
        includeMessageType?: boolean | undefined;
        includeUUID?: boolean | undefined;
        includeMeta?: boolean | undefined;
        includeMessageActions?: boolean | undefined;
    }

    interface FetchMessagesResponse {
        channels: {
            [channel: string]: Array<{
                channel: string;
                message: any;
                timetoken: string | number;
                messageType?: string | number | undefined;
                uuid?: string | undefined;
                meta?: {
                    [key: string]: any;
                } | undefined;
                actions: {
                    [type: string]: {
                        [value: string]: Array<{
                            uuid: string;
                            actionTimetoken: string | number; // timetoken
                        }>;
                    };
                };
            }>;
        };
    }

    interface DeleteMessagesParameters {
        channel: string;
        start?: string | number | undefined; // timetoken
        end?: string | number | undefined; // timetoken
    }

    interface MessageCountsParameters {
        channels: string[];
        channelTimetokens: string[] | number[];
    }

    interface MessageCountsResponse {
        channels: {
            [channel: string]: number;
        };
    }

    interface Push {
        addChannels(params: PushChannelParameters, callback: StatusCallback): void;

        addChannels(params: PushChannelParameters): Promise<void>;

        listChannels(params: PushDeviceParameters, callback: Callback<PushListChannelsResponse>): void;

        listChannels(params: PushDeviceParameters): Promise<PushListChannelsResponse>;

        removeChannels(params: PushChannelParameters, callback: StatusCallback): void;

        removeChannels(params: PushChannelParameters): Promise<void>;

        deleteDevice(params: PushDeviceParameters, callback: StatusCallback): void;

        deleteDevice(params: PushDeviceParameters): Promise<void>;
    }

    interface PushChannelParameters {
        channels: string[];
        device: string;
        pushGateway: string;
    }

    interface PushDeviceParameters {
        device: string;
        pushGateway: string;
    }

    interface PushListChannelsResponse {
        channels: string[];
    }

    interface PubnubStatus {
        error: boolean;
        category?: string | undefined; // see Pubnub.Categories
        operation: string; // see Pubnub.Operations
        statusCode: number;
        errorData?: Error | undefined;
    }

    // fire
    interface FireParameters {
        message: any;
        channel: string;
        sendByPost?: boolean | undefined;
        meta?: any;
    }

    // subscribe
    interface SubscribeParameters {
        channels?: string[] | undefined;
        channelGroups?: string[] | undefined;
        withPresence?: boolean | undefined;
        timetoken?: number | undefined;
    }

    // unsubscribe
    interface UnsubscribeParameters {
        channels?: string[] | undefined;
        channelGroups?: string[] | undefined;
    }

    // channelGroups
    interface ChannelGroups {
        addChannels(params: AddChannelParameters, callback: StatusCallback): void;

        addChannels(params: AddChannelParameters): Promise<{}>;

        removeChannels(params: RemoveChannelParameters, callback: StatusCallback): void;

        removeChannels(params: RemoveChannelParameters): Promise<{}>;

        listChannels(params: ListChannelsParameters, callback: Callback<ListChannelsResponse>): void;

        listChannels(params: ListChannelsParameters): Promise<ListChannelsResponse>;

        listGroups(callback: Callback<ListAllGroupsResponse>): void;

        listGroups(): Promise<ListAllGroupsResponse>;

        deleteGroup(params: DeleteGroupParameters, callback: StatusCallback): void;

        deleteGroup(params: DeleteGroupParameters): Promise<{}>;
    }

    interface AddChannelParameters {
        channels: string[];
        channelGroup: string;
    }

    interface RemoveChannelParameters {
        channels: string[];
        channelGroup: string;
    }

    interface ListChannelsParameters {
        channelGroup: string;
    }

    interface DeleteGroupParameters {
        channelGroup: string;
    }

    interface ListAllGroupsResponse {
        groups: string[];
    }

    interface ListChannelsResponse {
        channels: string[];
    }

    // addListener
    interface ListenerParameters {
        status?(statusEvent: StatusEvent): void;

        message?(messageEvent: MessageEvent): void;

        presence?(presenceEvent: PresenceEvent): void;

        signal?(signalEvent: SignalEvent): void;

        messageAction?(messageActionEvent: MessageActionEvent): void;

        file?(fileEvent: FileEvent): void;

        objects?(objectsEvent: ObjectsEvent): void;
    }

    // hereNow
    interface HereNowParameters {
        channels?: string[] | undefined;
        channelGroups?: string[] | undefined;
        includeUUIDs?: boolean | undefined;
        includeState?: boolean | undefined;
    }

    interface HereNowResponse {
        totalChannels: number;
        totalOccupancy: number;
        channels: {
            [channel: string]: {
                name: string;
                occupancy: number;
                occupants: Array<{
                    uuid: string;
                    state?: any;
                }>;
            };
        };
    }

    // whereNow
    interface WhereNowParameters {
        uuid?: string | undefined;
    }

    interface WhereNowResponse {
        channels: string[];
    }

    // setState
    interface SetStateParameters {
        channels?: string[] | undefined;
        channelGroups?: string[] | undefined;
        state?: any;
    }

    interface SetStateResponse {
        state: any;
    }

    // getState
    interface GetStateParameters {
        uuid?: string | undefined;
        channels?: string[] | undefined;
        channelGroups?: string[] | undefined;
    }

    interface GetStateResponse {
        channels: {
            [channel: string]: any;
        };
    }

    // grant
    interface GrantParameters {
        channels?: string[] | undefined;
        channelGroups?: string[] | undefined;
        uuids?: string[] | undefined;
        authKeys?: string[] | undefined;
        ttl?: number | undefined;
        read?: boolean | undefined;
        write?: boolean | undefined;
        manage?: boolean | undefined;
        delete?: boolean | undefined;
        get?: boolean | undefined;
        join?: boolean | undefined;
        update?: boolean | undefined;
    }

    // grantToken

    interface GrantTokenParameters {
        ttl: number;
        authorized_uuid?: string | undefined;
        resources?: {
            channels?: {
                [key: string]: GrantTokenPermissions;
            } | undefined;
            groups?: {
                [key: string]: GrantTokenPermissions;
            } | undefined;
            uuids?: {
                [key: string]: GrantTokenPermissions;
            } | undefined;
        };
        patterns?: {
            channels?: {
                [key: string]: GrantTokenPermissions;
            } | undefined;
            groups?: {
                [key: string]: GrantTokenPermissions;
            } | undefined;
            uuids?: {
                [key: string]: GrantTokenPermissions;
            } | undefined;
        };
        meta?: {
            [key: string]: any;
        } | undefined;
    }

    interface ParsedGrantToken extends GrantTokenParameters {
        version: number;
        timestamp: number;
        signature: any;
    }

    interface GrantTokenPermissions {
        read?: boolean;
        write?: boolean;
        manage?: boolean;
        delete?: boolean;
        get?: boolean;
        join?: boolean;
        update?: boolean;
    }

    interface RevokeTokenResponse {
        status: number;
        data: object;
    }

    // message actions
    interface AddMessageActionParameters {
        channel: string;
        messageTimetoken: string;
        action: {
            type: string;
            value: string;
        };
    }

    interface MessageAction {
        type: string;
        value: string;
        uuid: string;
        actionTimetoken: string;
        messageTimetoken: string;
    }

    interface RemoveMessageActionParameters {
        channel: string;
        messageTimetoken: string;
        actionTimetoken: string;
    }

    interface GetMessageActionsParameters {
        channel: string;
        start?: string | undefined;
        end?: string | undefined;
        limit?: number | undefined;
    }

    interface GetMessageActionsResponse {
        data: MessageAction[];
        start?: string | undefined;
        end?: string | undefined;
    }
    // files
    interface ListFilesParameters {
        channel: string;
        limit?: number | undefined;
        next?: string | undefined;
    }
    interface SendFileParameters {
        channel: string;
        file: StreamFileInput | BufferFileInput | UriFileInput;
        message?: any;
        cipherKey?: string | undefined;
        storeInHistory?: boolean | undefined;
        ttl?: number | undefined;
        meta?: any;
    }

    interface StreamFileInput {
        stream: any;
        name: string;
        mimeType?: string | undefined;
    }

    interface BufferFileInput {
        data: any;
        name: string;
        mimeType?: string | undefined;
    }

    interface UriFileInput {
        uri: string;
        name: string;
        mimeType?: string | undefined;
    }

    interface DownloadFileParameters {
        channel: string;
        id: string;
        name: string;
        cipherKey?: string | undefined;
    }

    interface FileInputParameters {
        channel: string;
        id: string;
        name: string;
    }

    interface PublishFileParameters {
        channel: string;
        message?: any;
        fileId: string;
        fileName: string;
        storeInHistory?: boolean | undefined;
        ttl?: number | undefined;
        meta?: any;
    }

    interface ListFilesResponse {
        status: number;
        data: Array<{
          name: string;
          id: string;
          size: number;
          created: string;
        }>;
        next: string;
        count: number;
      }

    interface SendFileResponse {
        timetoken: string;
        name: string;
        id: string;
      }

    interface DeleteFileResponse {
        status: number;
    }

    interface PublishFileResponse {
        timetoken: string;
    }

    // Objects v2

    // Object
    interface ObjectCustom {
        [key: string]: string | number | boolean;
    }

    interface v2ObjectData<Custom extends ObjectCustom> {
        id: string;
        eTag: string;
        updated: string;
        custom?: Custom | null | undefined;
    }

    interface v2ObjectParam<Custom extends ObjectCustom> {
        custom?: Custom | undefined;
    }

    // UUID metadata
    interface UUIDMetadataFields {
        name: string;
        externalId: string;
        profileUrl: string;
        email: string;
    }

    interface UUIDMetadata<Custom extends ObjectCustom> extends v2ObjectParam<Custom>, Partial<UUIDMetadataFields> { }

    interface UUIDMetadataObject<Custom extends ObjectCustom> extends v2ObjectData<Custom>, Nullable<UUIDMetadataFields> { }

    interface SetUUIDMetadataParameters<Custom extends ObjectCustom> {
        uuid?: string | undefined;
        data: UUIDMetadata<Custom>;
        include?: {
            customFields?: boolean | undefined;
        } | undefined;
    }

    type SetUUIDMetadataResponse<Custom extends ObjectCustom> = ObjectsResponse<UUIDMetadataObject<Custom>>;

    interface RemoveUUIDMetadataParameters {
        uuid?: string | undefined;
    }

    type RemoveUUIDMetadataResponse = ObjectsResponse<{}>;

    interface GetAllMetadataParameters {
        include?: {
            totalCount?: boolean | undefined;
            customFields?: boolean | undefined;
        } | undefined;
        filter?: string | undefined;
        sort?: object | undefined;
        limit?: number | undefined;
        page?: {
            next?: string | undefined;
            prev?: string | undefined;
        } | undefined;
    }

    type GetAllUUIDMetadataResponse<Custom extends ObjectCustom> = PagedObjectsResponse<UUIDMetadataObject<Custom>>;

    interface GetUUIDMetadataParameters {
        uuid?: string | undefined;
        include?: {
            customFields?: boolean | undefined;
        } | undefined;
    }

    type GetUUIDMetadataResponse<Custom extends ObjectCustom> = ObjectsResponse<UUIDMetadataObject<Custom>>;

    // Channel Metadata

    interface ChannelMetadataFields {
        name: string;
        description: string;
    }

    interface ChannelMetadata<Custom extends ObjectCustom> extends v2ObjectParam<Custom>, Partial<ChannelMetadataFields> { }

    interface ChannelMetadataObject<Custom extends ObjectCustom> extends v2ObjectData<Custom>, Nullable<ChannelMetadataFields> { }

    interface SetChannelMetadataParameters<Custom extends ObjectCustom> {
        channel: string;
        data: ChannelMetadata<Custom>;
        include?: {
            customFields?: boolean | undefined;
        } | undefined;
    }

    type SetChannelMetadataResponse<Custom extends ObjectCustom> = ObjectsResponse<ChannelMetadataObject<Custom>>;

    interface RemoveChannelMetadataParameters {
        channel: string;
    }

    type RemoveChannelMetadataResponse = ObjectsResponse<{}>;

    type GetAllChannelMetadataResponse<Custom extends ObjectCustom> = PagedObjectsResponse<
        ChannelMetadataObject<Custom>
    >;

    interface GetChannelMetadataParameters {
        channel: string;
        include?: {
            customFields: boolean;
        } | undefined;
    }

    type GetChannelMetadataResponse<Custom extends ObjectCustom> = ObjectsResponse<ChannelMetadataObject<Custom>>;

    // Memberships

    interface UUIDMembershipObject<MembershipCustom extends ObjectCustom, UUIDCustom extends ObjectCustom> extends Omit<v2ObjectData<MembershipCustom>, "id"> {
        uuid: UUIDMetadataObject<UUIDCustom> | { id: string };
    }

    interface ChannelMembershipObject<MembershipCustom extends ObjectCustom, ChannelCustom extends ObjectCustom> extends Omit<v2ObjectData<MembershipCustom>, "id"> {
        channel: ChannelMetadataObject<ChannelCustom> | { id: string };
    }

    interface UUIDMembersParameters {
        include?: {
            totalCount?: boolean | undefined;
            customFields?: boolean | undefined;
            UUIDFields?: boolean | undefined;
            customUUIDFields?: boolean | undefined;
        } | undefined;
        filter?: string | undefined;
        sort?: object | undefined;
        limit?: number | undefined;
        page?: {
            next?: string | undefined;
            prev?: string | undefined;
        } | undefined;
    }

    interface ChannelMembersParameters {
        include?: {
            totalCount?: boolean | undefined;
            customFields?: boolean | undefined;
            channelFields?: boolean | undefined;
            customChannelFields?: boolean | undefined;
        } | undefined;
        filter?: string | undefined;
        sort?: object | undefined;
        limit?: number | undefined;
        page?: {
            next?: string | undefined;
            prev?: string | undefined;
        } | undefined;
    }

    interface GetChannelMembersParameters extends UUIDMembersParameters {
        channel: string;
    }

    type ManageChannelMembersResponse<
        MembershipCustom extends ObjectCustom,
        UUIDCustom extends ObjectCustom,
        > = PagedObjectsResponse<UUIDMembershipObject<MembershipCustom, UUIDCustom>>;
    type ManageMembershipsResponse<
        MembershipCustom extends ObjectCustom,
        ChannelCustom extends ObjectCustom,
        > = PagedObjectsResponse<ChannelMembershipObject<MembershipCustom, ChannelCustom>>;

    interface GetMembershipsParametersv2 extends ChannelMembersParameters {
        uuid?: string | undefined;
    }

    interface SetCustom<Custom extends ObjectCustom> {
        id: string;
        custom?: Custom | undefined;
    }

    interface SetMembershipsParameters<Custom extends ObjectCustom> extends ChannelMembersParameters {
        uuid?: string | undefined;
        channels?: Array<string | SetCustom<Custom>> | undefined;
    }

    interface RemoveMembershipsParameters extends ChannelMembersParameters {
        uuid?: string | undefined;
        channels: string[];
    }

    interface SetChannelMembersParameters<Custom extends ObjectCustom> extends UUIDMembersParameters {
        channel: string;
        uuids: Array<string | SetCustom<Custom>>;
    }

    interface RemoveChannelMembersParameters extends UUIDMembersParameters {
        channel: string;
        uuids: string[];
    }

    // encrypt & decrypt
    interface CryptoParameters {
        encryptKey?: boolean | undefined;
        keyEncoding?: string | undefined;
        keyLength?: number | undefined;
        mode?: string | undefined;
    }

    // fetch time
    interface FetchTimeResponse {
        timetoken: number;
    }

    // APNS2
    interface APNS2Configuration {
        collapseId?: string | undefined;
        expirationDate?: Date | undefined;
        targets: APNS2Target[];
    }

    interface APNS2Target {
        topic: string;
        environment?: 'development' | 'production' | undefined;
        excludedDevices?: string[] | undefined;
    }
    // NotificationPayloads

    interface BaseNotificationPayload {
        subtitle?: string | undefined;
        payload: object;
        badge?: number | undefined;
        sound?: string | undefined;
        title?: string | undefined;
        body?: string | undefined;
    }

    interface APNSNotificationPayload extends BaseNotificationPayload {
        configurations: APNS2Configuration[];
        apnsPushType?: string | undefined;
        isSilent: boolean;
    }

    interface MPNSNotificationPayload extends BaseNotificationPayload {
        backContent?: string | undefined;
        backTitle?: string | undefined;
        count?: number | undefined;
        type?: string | undefined;
    }

    interface FCMNotificationPayload extends BaseNotificationPayload {
        isSilent: boolean;
        icon?: string | undefined;
        tag?: string | undefined;
    }

    interface NotificationsPayload {
        payload: { apns: object; mpns: object; fcm: object };
        debugging: boolean;
        subtitle?: string | undefined;
        badge?: number | undefined;
        sound?: string | undefined;
        title?: string | undefined;
        body?: string | undefined;
        apns: APNSNotificationPayload;
        mpns: MPNSNotificationPayload;
        fcm: FCMNotificationPayload;

        buildPayload(platforms: string[]): object;
    }

    interface Categories {
        PNNetworkUpCategory: string;
        PNNetworkDownCategory: string;
        PNNetworkIssuesCategory: string;
        PNTimeoutCategory: string;
        PNBadRequestCategory: string;
        PNAccessDeniedCategory: string;
        PNUnknownCategory: string;
        PNReconnectedCategory: string;
        PNConnectedCategory: string;
        PNRequestMessageCountExceedCategory: string;
        PNMalformedResponseCategory: string;
    }

    interface Operations {
        PNTimeOperation: string;
        PNHistoryOperation: string;
        PNDeleteMessagesOperation: string;
        PNFetchMessagesOperation: string;
        PNMessageCountsOperation: string;
        PNSubscribeOperation: string;
        PNUnsubscribeOperation: string;
        PNPublishOperation: string;
        PNPushNotificationEnabledChannelsOperation: string;
        PNRemoveAllPushNotificationsOperation: string;
        PNWhereNowOperation: string;
        PNSetStateOperation: string;
        PNHereNowOperation: string;
        PNGetStateOperation: string;
        PNHeartbeatOperation: string;
        PNChannelGroupsOperation: string;
        PNRemoveGroupOperation: string;
        PNChannelsForGroupOperation: string;
        PNAddChannelsToGroupOperation: string;
        PNRemoveChannelsFromGroupOperation: string;
        PNAccessManagerGrant: string;
        PNAccessManagerAudit: string;
        PNCreateUserOperation: string;
        PNUpdateUserOperation: string;
        PNDeleteUserOperation: string;
        PNGetUsersOperation: string;
        PNCreateSpaceOperation: string;
        PNUpdateSpaceOperation: string;
        PNDeleteSpaceOperation: string;
        PNGetSpacesOperation: string;
        PNGetMembershipsOperation: string;
        PNGetMembersOperation: string;
        PNUpdateMembershipsOperation: string;
        PNAddMessageActionOperation: string;
        PNRemoveMessageActionOperation: string;
        PNGetMessageActionsOperation: string;
    }
}

export = Pubnub;
